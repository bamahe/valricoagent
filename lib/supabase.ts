import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase URL and key, may be empty during build if env vars aren't set yet
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Public client (for reading published posts on the frontend)
// Returns a dummy client if env vars are missing (build-time safety)
export const supabase: SupabaseClient = supabaseUrl
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder');

// Server client (for seed scripts, cron, admin - uses service role)
export function getServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// ============================================================
// Query helpers
// ============================================================

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  pillar: string;
  tags: string[];
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  secondary_keywords: string[];
  schema_type: string;
  faq_data: { question: string; answer: string }[] | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  og_image: string | null;
  status: string;
  publish_date: string | null;
  related_slugs: string[];
  cta_type: string;
  word_count: number;
  reading_time: number;
  created_at: string;
  updated_at: string;
};

// Get all published posts (respects auto-publish schedule)
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`)
    .order('publish_date', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  return data || [];
}

// Get posts by pillar
export async function getPostsByPillar(pillar: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('pillar', pillar)
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`)
    .order('publish_date', { ascending: false });

  if (error) {
    console.error('Error fetching posts by pillar:', error);
    return [];
  }
  return data || [];
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }
  return data;
}

// Get related posts (partial fields for card display)
export type RelatedPost = Pick<BlogPost, 'id' | 'title' | 'slug' | 'excerpt' | 'pillar' | 'publish_date' | 'featured_image' | 'reading_time'>;

export async function getRelatedPosts(slugs: string[]): Promise<RelatedPost[]> {
  if (!slugs.length) return [];
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, pillar, publish_date, featured_image, reading_time')
    .in('slug', slugs)
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`);

  if (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
  return data || [];
}

// Get all slugs (for static generation / sitemap)
export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`);

  if (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
  return (data || []).map((d) => d.slug);
}

// Get all pillars
export async function getPillars() {
  const { data, error } = await supabase
    .from('pillars')
    .select('*')
    .order('sort_order');

  if (error) {
    console.error('Error fetching pillars:', error);
    return [];
  }
  return data || [];
}
