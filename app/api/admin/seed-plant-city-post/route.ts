import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'plant-city-fl-real-estate-market-2026';

const META = {
  title: 'Plant City FL Real Estate Market 2026: Prices, Trends, and Buyer Opportunities',
  excerpt: 'Plant City FL median home price $336,549 to $389,000 in 2026 depending on ZIP, 85-day average days on market, and genuine buyer leverage. How the "Strawberry Capital" compares to Brandon, Seffner, and Valrico for buyers and investors.',
  pillar: 'comparison',
  tags: ['Plant City FL', 'Neighboring Communities', '33563', '33566', 'Market Report', '2026', 'Hillsborough County', 'Buyer Guide'],
  meta_title: 'Plant City FL Real Estate Market 2026: Prices & Trends | ValricoAgent.com',
  meta_description: 'Plant City FL real estate market 2026: median $336K-$389K, 85-day DOM, buyer\'s market with 28-34% price cuts. How 33563 and 33566 compare to Brandon, Seffner, and Valrico.',
  focus_keyword: 'Plant City FL real estate market 2026',
  secondary_keywords: ['Plant City FL homes for sale 2026', 'Plant City vs Brandon real estate', '33563 33566 housing market', 'Plant City FL home prices'],
  schema_type: 'FAQPage',
  faq_data: [
    {
      question: 'What is the median home price in Plant City FL in 2026?',
      answer: 'The median closed sale price in Plant City as of May 2026 is approximately $336,549, down about 4.7% year over year. Zillow\'s estimated average home value is $343,765. The 33566 ZIP code runs higher with a $389,000 median sale price based on 317 closed transactions over the past 12 months.',
    },
    {
      question: 'Is Plant City FL a buyer\'s or seller\'s market in 2026?',
      answer: 'Plant City is firmly a buyer\'s market in 2026. Homes are averaging 85 to 86 days on market, approximately 28% to 34% of listings have cut their asking price, and sellers are regularly contributing to closing costs or accepting below-list offers. Buyers with pre-approval and local data are in a strong negotiating position.',
    },
    {
      question: 'How does Plant City compare to Brandon FL for real estate?',
      answer: 'Plant City\'s median closed price ($336,549) runs about $43,000 below Brandon\'s ($380,000 approximately). Days on market in Plant City (85 days) are roughly twice as long as Brandon (38 to 48 days). Brandon offers more retail density, shorter Tampa commutes, and a more liquid resale market. Plant City offers more land, bigger lots, and meaningfully lower acquisition costs.',
    },
    {
      question: 'What are the best neighborhoods in Plant City FL?',
      answer: 'The best residential areas in Plant City are generally in the 33566 ZIP code along Thonotosassa Road and the Durant High School feeder area. Homes in good condition on larger lots in the Durant zone hold value better than the city average. The historic district near downtown Plant City has seen growing buyer interest.',
    },
    {
      question: 'Is Plant City FL a good place to invest in real estate?',
      answer: 'Plant City offers gross rental yields of approximately 6.1% to 7.7% on typical investment acquisitions in the $340,000 to $375,000 range -- stronger than most western Hillsborough County suburban markets. The main cautions are slow days on market and flat-to-negative recent appreciation. Best suited for buy-and-hold investors targeting cash flow.',
    },
    {
      question: 'What school zones are in Plant City FL?',
      answer: 'Plant City is served by three Hillsborough County high schools: Durant High School (A- Niche grade, 92% graduation rate, the highest-performing option), Strawberry Crest High School (newer school, solid programs, serves Dover and eastern Plant City), and Plant City High School (the city\'s original school, lower academic rankings).',
    },
  ],
  publish_date: '2026-08-04T10:00:00.000Z',
  cta_type: 'buyer',
  featured_image: '/images/plant-city-fl-market-trends.jpg',
  featured_image_alt: 'Plant City FL homes for sale 2026 in east Hillsborough County near the Strawberry Capital community',
  related_slugs: ['seffner-fl-real-estate-market-2026', 'wimauma-fl-real-estate-market-2026', 'valrico-real-estate-mid-year-2026-review'],
};

export async function GET(request: NextRequest) {
  const token = new URL(request.url).searchParams.get('token');
  if (token !== 'seed-pc-0804') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

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
