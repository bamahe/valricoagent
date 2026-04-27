-- ============================================================
-- VALRICOAGENT.COM - Supabase Schema Migration
-- Run this in your Supabase SQL Editor (new project)
-- ============================================================

-- 1. Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Content
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT, -- meta description / preview text (155 chars target)
  content TEXT NOT NULL, -- full post body in Markdown
  
  -- Taxonomy
  pillar TEXT NOT NULL CHECK (pillar IN (
    'buyer', 'agent', 'market', 'seller', 'relocation', 'comparison'
  )),
  tags TEXT[] DEFAULT '{}', -- e.g. {'no-hoa', 'pool-homes', 'newsome-high'}
  
  -- SEO
  meta_title TEXT, -- custom title tag (falls back to title if null)
  meta_description TEXT, -- falls back to excerpt if null
  canonical_url TEXT, -- only if cross-posted
  focus_keyword TEXT, -- primary keyword target
  secondary_keywords TEXT[] DEFAULT '{}',
  
  -- Schema.org
  schema_type TEXT DEFAULT 'BlogPosting' CHECK (schema_type IN (
    'BlogPosting', 'Article', 'FAQPage', 'HowTo'
  )),
  faq_data JSONB, -- structured FAQ Q&A pairs for FAQPage schema
  
  -- Media
  featured_image TEXT, -- URL to hero image
  featured_image_alt TEXT,
  og_image TEXT, -- Open Graph image (falls back to featured_image)
  
  -- Publishing
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN (
    'draft', 'scheduled', 'published', 'archived'
  )),
  publish_date TIMESTAMPTZ, -- when to auto-publish
  
  -- Internal linking
  related_slugs TEXT[] DEFAULT '{}', -- slugs of related posts for "Read Next"
  cta_type TEXT DEFAULT 'buyer' CHECK (cta_type IN (
    'buyer', 'seller', 'valuation', 'consultation', 'relocation', 'market-report'
  )),
  
  -- Tracking
  word_count INTEGER DEFAULT 0,
  reading_time INTEGER DEFAULT 0, -- minutes
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Indexes for performance
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_publish_date ON blog_posts(publish_date);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_pillar ON blog_posts(pillar);
CREATE INDEX idx_blog_posts_status_date ON blog_posts(status, publish_date);

-- 3. Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- 4. Auto-calculate word_count and reading_time on insert/update
CREATE OR REPLACE FUNCTION calculate_reading_stats()
RETURNS TRIGGER AS $$
BEGIN
  NEW.word_count = array_length(regexp_split_to_array(trim(NEW.content), '\s+'), 1);
  NEW.reading_time = GREATEST(1, CEIL(NEW.word_count::DECIMAL / 250));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_reading_stats
  BEFORE INSERT OR UPDATE OF content ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION calculate_reading_stats();

-- 5. View: Published posts (auto-publish logic)
-- Posts show up when status = 'published' OR (status = 'scheduled' AND publish_date <= now)
CREATE OR REPLACE VIEW published_posts AS
SELECT *
FROM blog_posts
WHERE 
  status = 'published'
  OR (status = 'scheduled' AND publish_date <= NOW())
ORDER BY publish_date DESC;

-- 6. Auto-promote scheduled posts to published
-- This function runs and updates status. Call it via Supabase cron or pg_cron.
CREATE OR REPLACE FUNCTION promote_scheduled_posts()
RETURNS INTEGER AS $$
DECLARE
  promoted INTEGER;
BEGIN
  UPDATE blog_posts
  SET status = 'published'
  WHERE status = 'scheduled'
    AND publish_date <= NOW();
  GET DIAGNOSTICS promoted = ROW_COUNT;
  RETURN promoted;
END;
$$ LANGUAGE plpgsql;

-- 7. Row Level Security (public read, authenticated write)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Public can read published posts"
  ON blog_posts FOR SELECT
  USING (
    status = 'published' 
    OR (status = 'scheduled' AND publish_date <= NOW())
  );

-- Authenticated users (you) can do everything
CREATE POLICY "Authenticated users full access"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Service role bypasses RLS (for seed scripts and cron)
-- (Supabase service_role key already bypasses RLS by default)

-- 8. Enable pg_cron to auto-promote posts every hour
-- NOTE: Run this ONLY if pg_cron is enabled in your Supabase project
-- Dashboard > Database > Extensions > Enable pg_cron
-- Then run:
-- SELECT cron.schedule(
--   'promote-scheduled-posts',
--   '0 * * * *',  -- every hour on the hour
--   $$SELECT promote_scheduled_posts()$$
-- );

-- 9. Sitemap helper function
CREATE OR REPLACE FUNCTION get_sitemap_entries()
RETURNS TABLE(slug TEXT, updated_at TIMESTAMPTZ) AS $$
BEGIN
  RETURN QUERY
  SELECT bp.slug, bp.updated_at
  FROM blog_posts bp
  WHERE bp.status = 'published'
    OR (bp.status = 'scheduled' AND bp.publish_date <= NOW())
  ORDER BY bp.publish_date DESC;
END;
$$ LANGUAGE plpgsql;

-- 10. Categories/Pillars reference (for UI filters)
CREATE TABLE IF NOT EXISTS pillars (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0
);

INSERT INTO pillars (id, label, description, sort_order) VALUES
  ('buyer', 'Buyer Guide', 'Homes for sale, neighborhoods, buying tips', 1),
  ('agent', 'Your Valrico Agent', 'Why hire local, credentials, process', 2),
  ('market', 'Market Reports', 'Home values, market updates, pricing trends', 3),
  ('seller', 'Seller Guide', 'Selling tips, staging, pricing strategy', 4),
  ('relocation', 'Living in Valrico', 'Relocation, lifestyle, schools, commutes', 5),
  ('comparison', 'Area Comparisons', 'Valrico vs Brandon, FishHawk, Riverview', 6)
ON CONFLICT (id) DO NOTHING;

ALTER TABLE pillars ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read pillars"
  ON pillars FOR SELECT
  USING (true);
