/**
 * Insert a single new blog post from scripts/content/<slug>.md
 * Usage: npx tsx scripts/insert-new-post.ts <slug>
 * Example: npx tsx scripts/insert-new-post.ts valrico-fl-foreclosure-activity-recession-indicators-2026
 *
 * Requires .env.local with NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Post metadata by slug — add entries here for new posts
const META: Record<string, {
  title: string;
  excerpt: string;
  pillar: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  focus_keyword: string;
  secondary_keywords: string[];
  schema_type: string;
  faq_data: { question: string; answer: string }[];
  publish_date: string;
  cta_type: string;
}> = {
  'valrico-fl-foreclosure-activity-recession-indicators-2026': {
    title: 'Foreclosure Activity and Recession Indicators in Valrico FL: What the 2026 Data Shows',
    excerpt: 'A data-backed look at foreclosure filings, price cuts, and inventory trends in Valrico FL 33594 and 33596 as of mid-2026. Not 2008, but not 2021 either.',
    pillar: 'market',
    tags: ['Market Trends', 'Foreclosure', 'Valrico FL', '33594', '33596', 'Hillsborough County'],
    meta_title: 'Valrico FL Foreclosure Activity & Recession Indicators 2026',
    meta_description: 'Is Valrico FL headed for a downturn? A data-backed look at foreclosure filings, price cuts, and inventory trends in 33594 & 33596 as of mid-2026.',
    focus_keyword: 'valrico fl foreclosure activity 2026',
    secondary_keywords: ['valrico real estate market 2026', 'hillsborough county foreclosures', 'valrico housing market trends', 'recession indicators valrico'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'Is Valrico FL in a foreclosure crisis?', answer: "No. Hillsborough County has 183 active foreclosure filings as of mid-2026, representing a tiny fraction of the county's 550,000 housing units. Activity is rising from a low post-pandemic base, but it is not a local crisis." },
      { question: 'Are home prices dropping in Valrico FL?', answer: "Valrico's median sale price is around $413,000, down roughly 6% year-over-year. Price per square foot is around $188, down about 6.9% from a year ago." },
      { question: 'How long are homes sitting on the market in Valrico?', answer: 'Listings in Valrico are averaging in the mid-70s for days on market as of mid-2026, compared to 47-54 days for the broader Tampa Bay region a year or two ago.' },
      { question: 'Should I buy a home in Valrico in 2026?', answer: 'Buyers have more leverage than at any point since 2020: more inventory, longer marketing times, and sellers willing to negotiate. Mortgage rate environment still has the biggest impact on your monthly payment.' },
      { question: 'How much inventory is there in Valrico FL?', answer: 'Roughly 172 homes are listed across Valrico, with 33596 sitting at about 2.0 months of supply - tilted toward sellers but well off the sub-one-month supply of 2021-2022.' },
    ],
    publish_date: '2026-07-25T10:00:00.000Z',
    cta_type: 'market-report',
  },
};

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Usage: npx tsx scripts/insert-new-post.ts <slug>');
    process.exit(1);
  }

  const meta = META[slug];
  if (!meta) {
    console.error(`No metadata found for slug: ${slug}`);
    console.error('Add it to the META object in this script first.');
    process.exit(1);
  }

  const contentFile = path.join(__dirname, 'content', `${slug}.md`);
  if (!fs.existsSync(contentFile)) {
    console.error(`Content file not found: ${contentFile}`);
    process.exit(1);
  }

  const content = fs.readFileSync(contentFile, 'utf-8');

  // Check for duplicate
  const { data: existing } = await sb.from('blog_posts').select('slug').eq('slug', slug).maybeSingle();
  if (existing) {
    console.log(`Post already exists: ${slug}`);
    process.exit(0);
  }

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200);

  const { error } = await sb.from('blog_posts').insert({
    ...meta,
    slug,
    content,
    status: 'published',
    word_count: wordCount,
    reading_time: readingTime,
    related_slugs: [],
    featured_image: null,
    featured_image_alt: null,
    og_image: null,
  });

  if (error) {
    console.error('Insert failed:', error.message);
    process.exit(1);
  }

  console.log(`Inserted: ${slug} (${wordCount} words, ${readingTime} min read)`);
}

main().catch(console.error);
