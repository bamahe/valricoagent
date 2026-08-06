import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'what-does-400000-buy-in-valrico-fl-by-neighborhood-2026';

const META = {
  title: 'What Does $400,000 Buy in Valrico FL? A Neighborhood-by-Neighborhood Breakdown',
  excerpt: 'At $400,000 in Valrico FL, what you get depends entirely on the ZIP code and neighborhood. 33594 Bloomingdale gives you 1,900-2,200 sq ft; 33596 Buckhorn buys Newsome zone access with less space. Full 2026 breakdown by neighborhood including Brandon and Riverview comparisons.',
  pillar: 'buyer',
  tags: ['Buyer Guide', 'Valrico FL', 'Neighborhoods', 'Price Per Square Foot', '33594', '33596', 'Bloomingdale', 'Buckhorn', '2026'],
  meta_title: 'What Does $400K Buy in Valrico FL? 2026 Neighborhood Guide | ValricoAgent.com',
  meta_description: 'What $400,000 buys in Valrico FL in 2026 by neighborhood: Bloomingdale 1,900-2,200 sq ft, Buckhorn Newsome zone access, River Hills not enough. Full comparison with Brandon and Riverview.',
  focus_keyword: 'what does 400000 buy in Valrico FL 2026',
  secondary_keywords: [
    'Valrico FL homes under 400k',
    'Valrico FL price per square foot 2026',
    'Valrico neighborhood home values',
    'Bloomingdale vs Buckhorn home prices',
  ],
  schema_type: 'FAQPage',
  faq_data: [
    {
      question: 'What can $400,000 buy in Valrico FL in 2026?',
      answer: 'At $400,000 in Valrico FL, you can typically purchase a 3 to 4 bedroom home with 1,900 to 2,200 square feet in the 33594 ZIP code (Bloomingdale, Twin Lakes area), or a smaller 3-bedroom home with approximately 1,700 to 2,000 square feet in the 33596 ZIP code (Buckhorn area). The 33596 option is priced higher per square foot because it includes access to the Newsome High School zone.',
    },
    {
      question: 'What is the price per square foot in Valrico FL in 2026?',
      answer: 'The price per square foot in Valrico FL varies by ZIP code in 2026. In the 33594 ZIP code (Bloomingdale High zone), homes are selling at $188 to $200 per square foot. In the 33596 ZIP code (Newsome High zone), prices run $210 to $230 per square foot. The school zone premium accounts for most of this difference.',
    },
    {
      question: 'Is the Newsome High School zone worth the premium in Valrico?',
      answer: 'The Newsome High School zone adds approximately $70,000 to $90,000 to a comparable home in 33596 versus 33594. For families with school-age children, this can pencil out because private school alternatives cost $12,000 to $18,000 per year. For buyers without children or those with flexibility, the premium may not be worth the additional monthly mortgage cost of approximately $450.',
    },
    {
      question: 'How does $400,000 in Valrico compare to Brandon or Riverview?',
      answer: 'At $400,000, Brandon 33511 typically offers more square footage (2,100 to 2,500 sq ft) at $168 to $190 per sq ft versus Valrico 33594\'s $188 to $200 per sq ft. Riverview offers the most space at $155 to $185 per sq ft but usually carries CDD fees of $1,500 to $3,500 per year that raise the effective monthly cost. Valrico\'s constrained land supply provides a better long-term value floor.',
    },
    {
      question: 'Do Valrico homes have CDD fees?',
      answer: 'Most established Valrico neighborhoods do not have CDD fees. Bloomingdale, Twin Lakes, Copper Ridge, and most of Buckhorn have no CDD. River Hills has its own HOA structure with golf community fees. This is a meaningful advantage over Riverview and FishHawk Ranch, where CDDs of $1,500 to $3,500 per year are common and add significantly to effective housing cost.',
    },
  ],
  publish_date: '2026-08-04T10:00:00.000Z',
  cta_type: 'buyer',
  featured_image: '/images/bloomingdale-brick-home-palm-landscaping-valrico.jpg',
  featured_image_alt: 'Bloomingdale Valrico FL brick home with palm tree landscaping representing what $400000 buys in Valrico neighborhoods in 2026',
  related_slugs: [
    'valrico-fl-real-estate-market-update-august-2026',
    'valrico-real-estate-mid-year-2026-review',
    'best-neighborhoods-in-valrico-for-buyers-in-2026',
  ],
};

export async function GET(request: NextRequest) {
  const token = new URL(request.url).searchParams.get('token');
  if (token !== 'seed-400k-0806') {
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
