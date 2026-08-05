import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'brandon-fl-real-estate-market-2026';

const META = {
  title: 'Brandon FL Real Estate Market 2026: Prices, Trends, and Buyer Opportunities',
  excerpt: 'Brandon FL real estate market 2026: ZIP 33510 median $341K, 33511 median $368K, 38-55 day DOM, and flat-to-modest appreciation. How the east Hillsborough hub compares to Valrico for buyers, sellers, and investors.',
  pillar: 'comparison',
  tags: ['Brandon FL', 'Neighboring Communities', '33510', '33511', 'Market Report', '2026', 'Hillsborough County', 'Buyer Guide'],
  meta_title: 'Brandon FL Real Estate Market 2026: Prices & Trends | ValricoAgent.com',
  meta_description: 'Brandon FL real estate market 2026: 33510 median $341K, 33511 median $368K, 38-55 day DOM. How Brandon compares to Valrico for buyers, sellers, and investors in east Hillsborough.',
  focus_keyword: 'Brandon FL real estate market 2026',
  secondary_keywords: ['Brandon FL homes for sale 2026', 'Brandon vs Valrico real estate', '33510 33511 housing market', 'Brandon FL home prices 2026'],
  schema_type: 'FAQPage',
  faq_data: [
    {
      question: 'What is the median home price in Brandon FL in 2026?',
      answer: 'Median home prices in Brandon FL vary by ZIP code in 2026. The 33510 ZIP averages approximately $341,000, the 33511 ZIP averages approximately $368,000, and the 33596 ZIP (Bloomingdale area bordering Valrico) averages approximately $470,000. The overall Brandon market median falls in the $350,000 to $380,000 range depending on the source and time period.',
    },
    {
      question: 'Is Brandon FL a buyer\'s or seller\'s market in 2026?',
      answer: 'Brandon is a balanced market in 2026, with slight buyer leverage. Days on market run 38 to 55 days, approximately 28 to 30% of listings have taken price reductions, and seller-paid closing cost contributions have become routine in negotiations. Buyers have more negotiating power than at any point since 2019, though Brandon moves faster than Ruskin or Plant City.',
    },
    {
      question: 'How does Brandon FL compare to Valrico FL for home prices?',
      answer: 'Brandon 33511 runs approximately $20,000 to $60,000 below comparable Valrico 33594 homes, and $100,000 or more below Valrico 33596. The premium Valrico commands comes from larger lots, Newsome High School zone access, and a quieter residential character. Brandon offers more convenience, lower prices, and faster access to Tampa via the Selmon Expressway.',
    },
    {
      question: 'What are the best neighborhoods in Brandon FL?',
      answer: 'Providence Lakes is an underrated golf course community in southern 33511 with homes from $345,000 to $410,000. Heather Lakes near the Valrico border offers established 1980s to 1990s homes in the $350,000 to $425,000 range. Lake Parsons Green in 33510 is the most affordable entry point. Buckhorn on the Brandon/Valrico border offers larger lots in the $340,000 to $440,000 range.',
    },
    {
      question: 'Is Brandon FL a good place to invest in real estate in 2026?',
      answer: 'Brandon attracts significant investor activity due to lower acquisition costs versus Valrico. Single-family homes in 33511 rent for $2,100 to $2,300 per month on a $355,000 to $370,000 purchase, producing gross yields of approximately 6.8% to 7.2%. After expenses, net cap rates run 4.5% to 5.5%. Rental demand is strong given Brandon\'s retail employment and Selmon Expressway access.',
    },
    {
      question: 'What school zones are in Brandon FL?',
      answer: 'Brandon FL is primarily served by Brandon High School (33510 and parts of 33511) and Bloomingdale High School (southern 33511 and 33596). Bloomingdale High carries a stronger academic reputation and modest school zone premium. Neither competes with Newsome High School in Valrico for home value premium, which is a primary reason Brandon prices run below Valrico.',
    },
  ],
  publish_date: '2026-08-05T10:00:00.000Z',
  cta_type: 'buyer',
  featured_image: '/images/brandon-fl-real-estate-market-2026.jpg',
  featured_image_alt: 'Brandon FL homes for sale 2026 in east Hillsborough County neighborhoods including 33510 and 33511 ZIP codes',
  related_slugs: ['seffner-fl-real-estate-market-2026', 'valrico-real-estate-mid-year-2026-review', 'plant-city-fl-real-estate-market-2026'],
};

export async function GET(request: NextRequest) {
  const token = new URL(request.url).searchParams.get('token');
  if (token !== 'seed-brandon-0805') {
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
