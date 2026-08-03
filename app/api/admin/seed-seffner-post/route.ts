import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'seffner-fl-real-estate-market-2026';

const META = {
  title: 'Seffner FL Real Estate Market 2026: Prices, Trends, and How It Compares to Valrico',
  excerpt: 'Seffner FL (33584) median sale price $362,650 in 2026, 49-51 days on market, and list prices up 9% year-over-year. How Seffner stacks up against Valrico 33594 and 33596 for buyers, school zones, and investors.',
  pillar: 'comparison',
  tags: ['Seffner FL', 'Neighboring Communities', '33584', 'Market Report', '2026', 'Hillsborough County', 'Buyer Guide'],
  meta_title: 'Seffner FL Real Estate Market 2026: Prices & Comparison to Valrico | ValricoAgent.com',
  meta_description: 'Seffner FL real estate market 2026: median $362,650, 49-51 days on market, list prices up 9% YoY. How 33584 compares to Valrico 33594 and 33596 for buyers.',
  focus_keyword: 'Seffner FL real estate market 2026',
  secondary_keywords: ['Seffner FL homes for sale 2026', 'Seffner vs Valrico real estate', '33584 housing market', 'Seffner FL home prices'],
  schema_type: 'FAQPage',
  faq_data: [
    { question: 'What is the median home price in Seffner FL in 2026?', answer: 'The median sale price in Seffner FL (33584) is approximately $362,650 over the trailing 12 months as of mid-2026, with an average sale price of $402,308. Median list prices run $412,000 to $414,000, up approximately 9% year-over-year.' },
    { question: 'How does Seffner FL compare to Valrico FL for home prices?', answer: 'Seffner median sale prices ($362,650) run about $16,000 below Valrico 33594 ($378,907 median) and about $106,000 below Valrico 33596 ($468,996 median). The large gap with 33596 is driven primarily by the Newsome High School zone premium in Valrico.' },
    { question: 'What high school zone is Seffner FL in?', answer: 'Most of Seffner (33584) feeds to Strawberry Crest High School in Dover. Strawberry Crest carries a Niche A grade, a 94.7% graduation rate, and offers International Baccalaureate and Cambridge International magnet programs. It ranks 151st in Florida.' },
    { question: 'How long are homes taking to sell in Seffner FL in 2026?', answer: 'Homes in Seffner are averaging 49 to 51 days on market as of mid-2026. That is meaningfully faster than the Hillsborough County average of approximately 130 days and also faster than the Valrico average of 57 days during the summer slowdown.' },
    { question: 'Is Seffner FL a good place to invest in real estate in 2026?', answer: 'Seffner offers lower acquisition costs than surrounding submarkets, with single-family homes in the $340,000 to $420,000 range renting for $2,100 to $2,500 per month. That produces gross yields of roughly 6.5% to 8.0% before expenses -- meaningfully above what the Valrico 33596 market offers at higher purchase prices.' },
  ],
  publish_date: '2026-08-02T10:00:00.000Z',
  cta_type: 'buyer',
  featured_image: '/images/seffner-fl-market-trends.jpg',
  featured_image_alt: 'Seffner FL homes for sale 2026 in 33584 east Hillsborough County real estate market',
};

export async function GET(request: NextRequest) {
  const token = new URL(request.url).searchParams.get('token');
  if (token !== 'seed-0803') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Use bracket notation to bypass Next.js build-time DefinePlugin replacement
  // so we read the actual runtime env var value rather than the build-time inlined value.
  const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'] || '';
  const supabaseKey = process.env['SUPABASE_SERVICE_ROLE_KEY'] || '';

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      error: 'Missing Supabase credentials',
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseKey,
      availableSupabaseKeys: Object.keys(process.env).filter(k => k.toLowerCase().includes('supabase')),
    }, { status: 500 });
  }

  const sb = createClient(supabaseUrl, supabaseKey);

  // Check for duplicate
  const { data: existing } = await sb
    .from('blog_posts')
    .select('slug')
    .eq('slug', SLUG)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ message: `Post already exists: ${SLUG}` });
  }

  // Read content from the scripts/content file
  const contentPath = path.join(process.cwd(), 'scripts', 'content', `${SLUG}.md`);
  const content = fs.readFileSync(contentPath, 'utf-8');

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200);

  const { error } = await sb.from('blog_posts').insert({
    ...META,
    slug: SLUG,
    content,
    status: 'published',
    word_count: wordCount,
    reading_time: readingTime,
    related_slugs: [],
    og_image: null,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    slug: SLUG,
    wordCount,
    readingTime,
  });
}
