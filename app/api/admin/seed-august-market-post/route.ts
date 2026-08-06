import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-real-estate-market-update-august-2026';

const META = {
  title: 'Valrico FL Real Estate Market Update: August 2026',
  excerpt: 'Valrico FL market update for August 2026: 33594 median $378,907, 33596 median $468,996, 57-73 days on market, 30.4% of Hillsborough listings with price cuts, and mortgage rates at 6.61-6.75%. What buyers and sellers need to know right now.',
  pillar: 'market',
  tags: ['Market Report', 'August 2026', 'Valrico FL', '33594', '33596', 'Buyer Guide', 'Seller Guide', 'Mortgage Rates'],
  meta_title: 'Valrico FL Real Estate Market Update August 2026 | ValricoAgent.com',
  meta_description: 'Valrico FL August 2026 market update: 33594 median $378,907, 33596 median $468,996, 57-73 days on market, 6.65% mortgage rates. Current data for buyers and sellers.',
  focus_keyword: 'Valrico FL real estate market update August 2026',
  secondary_keywords: [
    'Valrico home prices August 2026',
    'Valrico FL housing market 2026',
    'Valrico days on market 2026',
    'Hillsborough County buyer market 2026',
  ],
  schema_type: 'FAQPage',
  faq_data: [
    {
      question: 'What is the median home price in Valrico FL in August 2026?',
      answer: 'The median sale price in Valrico FL is approximately $378,907 in the 33594 ZIP code and $468,996 in the 33596 ZIP code as of mid-2026. The combined Valrico median is approximately $413,000 to $415,000. Valrico has outperformed the broader Hillsborough County market, which is tracking down roughly 3.9% year-over-year.',
    },
    {
      question: 'How long are homes sitting on the market in Valrico FL in 2026?',
      answer: 'Homes in Valrico are averaging 57 to 73 days on market in summer 2026, up from the spring peak of 28 days in April and May. Well-priced homes in the $340,000 to $400,000 range in 33594 still move in 30 to 45 days. Higher-priced listings in 33596 are taking 65 to 90 days.',
    },
    {
      question: 'Is Valrico FL a buyer\'s or seller\'s market in August 2026?',
      answer: 'Valrico is a balanced market with a tilt toward buyers in August 2026. Approximately 30.4% of Hillsborough County listings have taken price reductions, seller concessions of $5,000 to $10,000 are common on homes above $425,000, and buyers are regularly negotiating inspection credits. The Newsome zone in 33596 has tighter supply and slightly less buyer leverage than 33594.',
    },
    {
      question: 'What are current mortgage rates in the Tampa Bay area in August 2026?',
      answer: 'Mortgage rates for a 30-year fixed loan in the Tampa Bay area are running 6.61% to 6.75% as of early August 2026, per Bankrate and NerdWallet. At 6.65%, the monthly principal and interest on a $400,000 mortgage is approximately $2,580. Most forecasts point to modest rate declines toward 6.3% to 6.5% by year-end if inflation continues to moderate.',
    },
    {
      question: 'Will Valrico FL home prices drop further in the second half of 2026?',
      answer: 'Valrico home prices are expected to remain roughly flat through the remainder of 2026, not appreciating meaningfully but also not correcting significantly. The school zone premium from Newsome High School in 33596 and constrained land supply across both ZIP codes provide a pricing floor that broader Hillsborough County submarkets do not share. A housing crash is not predicted for the Tampa Bay area.',
    },
  ],
  publish_date: '2026-08-05T10:00:00.000Z',
  cta_type: 'market-report',
  featured_image: '/images/bloomingdale-modern-white-ranch-estate-valrico.jpg',
  featured_image_alt: 'Bloomingdale Valrico FL modern white ranch estate home representing the August 2026 real estate market',
  related_slugs: [
    'valrico-real-estate-mid-year-2026-review',
    'valrico-fl-foreclosure-activity-recession-indicators-2026',
    'what-does-400000-buy-in-valrico-fl-by-neighborhood-2026',
  ],
};

export async function GET(request: NextRequest) {
  const token = new URL(request.url).searchParams.get('token');
  if (token !== 'seed-august-market-0806') {
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

  const { error } = await sb.from('blog_posts').upsert({
    ...META,
    slug: SLUG,
    content,
    status: 'published',
    word_count: wordCount,
    reading_time: readingTime,
    og_image: null,
  }, { onConflict: 'slug' });

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
