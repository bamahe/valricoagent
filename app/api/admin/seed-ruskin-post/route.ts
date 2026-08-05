import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'ruskin-fl-real-estate-guide-2026';

const META = {
  title: 'Ruskin FL Real Estate Market 2026: Affordable SouthShore Living on Tampa Bay',
  excerpt: 'Ruskin FL (33570) median sale price $319,990 in 2026, down 3-6% year over year, 76-78 day DOM, and genuine buyer leverage. How Ruskin compares to Apollo Beach, Wimauma, and Valrico for buyers, investors, and retirees.',
  pillar: 'comparison',
  tags: ['Ruskin FL', 'Neighboring Communities', '33570', 'Market Report', '2026', 'SouthShore', 'Hillsborough County', 'Waterfront'],
  meta_title: 'Ruskin FL Real Estate Market 2026: Prices & Buyer Guide | ValricoAgent.com',
  meta_description: 'Ruskin FL real estate market 2026: median $319,990, down 3-6% YOY, 76-78 day DOM. Little Harbor, Mira Lago, flood zones, and how 33570 compares to Apollo Beach and Valrico.',
  focus_keyword: 'Ruskin FL real estate market 2026',
  secondary_keywords: ['Ruskin FL homes for sale 2026', 'Ruskin vs Apollo Beach real estate', '33570 housing market 2026', 'Little Harbor Ruskin FL', 'Ruskin FL home prices'],
  schema_type: 'FAQPage',
  faq_data: [
    {
      question: 'What is the median home price in Ruskin FL in 2026?',
      answer: 'The median sale price in Ruskin FL (33570) is approximately $319,990 as of July 2026, with a typical home value (Zillow ZHVI) of $314,866. Median list prices run approximately $351,000, reflecting a significant gap between seller expectations and what buyers are actually paying. Prices are down 3% to 6% year over year depending on the metric.',
    },
    {
      question: 'Is Ruskin FL a buyer\'s or seller\'s market in 2026?',
      answer: 'Ruskin is firmly a buyer\'s market in 2026. Days on market average 76 to 78 days, the median sale price is approximately 9% below median list price, and sellers regularly accept offers below list with closing cost contributions. The Momentum Market Score rates 33570 at 69 out of 100, solidly in buyer value territory.',
    },
    {
      question: 'How does Ruskin FL compare to Apollo Beach for real estate?',
      answer: 'Apollo Beach (33572) commands median prices of $430,000 to $475,000 versus Ruskin\'s $319,990 -- a difference of $110,000 to $155,000 for comparable homes in similar geographic positions near Tampa Bay. Apollo Beach has a more developed commercial corridor and stronger name recognition. Ruskin offers nearly identical bay access at a significant discount.',
    },
    {
      question: 'What are the best neighborhoods in Ruskin FL?',
      answer: 'Little Harbor is a marina village on Tampa Bay with waterfront homes from $400,000 to $800,000 and resort-style amenities. Mira Lago is a gated community about one mile from Ruskin Beach with homes in the $350,000 to $500,000 range. The SouthShore corridor neighborhoods offer newer construction in the $300,000 to $400,000 range. East Lake Ruskin is the most affordable area with larger lots under $290,000.',
    },
    {
      question: 'Does Ruskin FL have flood zone risk?',
      answer: 'Yes, flood zone risk varies significantly within 33570. Waterfront and low-lying areas near Tampa Bay often fall in FEMA flood zones AE or VE, requiring flood insurance at $1,800 to $5,000 or more per year. Most inland residential neighborhoods are Zone X (minimal risk) and do not require flood insurance. Always verify the specific flood zone at msc.fema.gov before making an offer.',
    },
    {
      question: 'Is Ruskin FL a good place for real estate investment in 2026?',
      answer: 'Ruskin offers the strongest gross yield math in Hillsborough County. At a $320,000 purchase price with $2,000 per month rent, the gross yield is approximately 7.5%. Third-party data cites an 8.28% cap rate for 33570. The combination of lower acquisition costs, stable rental demand near Tampa Bay industrial and port employment, and the retiree market makes Ruskin compelling for buy-and-hold investors.',
    },
  ],
  publish_date: '2026-08-05T12:00:00.000Z',
  cta_type: 'buyer',
  featured_image: '/images/ruskin-fl-real-estate-guide-2026.jpg',
  featured_image_alt: 'Ruskin FL homes for sale 2026 in the SouthShore area of Hillsborough County near Tampa Bay and Little Harbor',
  related_slugs: ['wimauma-fl-real-estate-market-2026', 'seffner-fl-real-estate-market-2026', 'valrico-real-estate-mid-year-2026-review'],
};

export async function GET(request: NextRequest) {
  const token = new URL(request.url).searchParams.get('token');
  if (token !== 'seed-ruskin-0805') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'] || '';
  const supabaseKey = process.env['SUPABASE_SERVICE_ROLE_KEY'] || '';

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      error: 'Missing Supabase credentials',
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseKey,
    }, { status: 500 });
  }

  const sb = createClient(supabaseUrl, supabaseKey);

  const { data: existing } = await sb
    .from('blog_posts')
    .select('slug')
    .eq('slug', SLUG)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ message: `Post already exists: ${SLUG}` });
  }

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
