import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-home-prices-by-neighborhood-q4-2026';

const META = {
  title: 'Valrico FL Home Prices by Neighborhood: Q4 2026 Breakdown for Bloomingdale, Buckhorn, River Hills, and Diamond Hill',
  excerpt:
    'Valrico is not one market. Q4 2026 breakdown by neighborhood: Bloomingdale ($382K to $395K median, 38 to 62 DOM), Buckhorn ($428K to $445K, 28 to 48 DOM), River Hills ($530K to $575K, 42 to 180 DOM), Diamond Hill ($495K to $525K, 35 to 65 DOM). Price-per-square-foot table, school zone premiums, and which buyer budget fits which community.',
  pillar: 'market',
  tags: [
    'Valrico FL',
    'Neighborhood Guide',
    'Q4 2026',
    'Bloomingdale FL',
    'Buckhorn FL',
    'River Hills FL',
    'Diamond Hill Valrico',
    'Hillsborough County',
    '33594',
    '33596',
    'Home Prices',
    'Newsome High School',
    'Market Report',
    'Buyer Guide',
  ],
  meta_title: 'Valrico FL Home Prices by Neighborhood Q4 2026: Bloomingdale, Buckhorn, River Hills | ValricoAgent.com',
  meta_description:
    'Valrico FL neighborhood pricing Q4 2026: Bloomingdale $382K to $395K median, Buckhorn $428K to $445K, River Hills $530K to $575K, Diamond Hill $495K to $525K. Price-per-square-foot table, days on market, school zone premiums, and buyer budget guide.',
  focus_keyword: 'Valrico FL home prices by neighborhood Q4 2026',
  secondary_keywords: [
    'Bloomingdale FL home prices 2026',
    'Buckhorn Valrico FL real estate Q4 2026',
    'River Hills Valrico home prices 2026',
    'Diamond Hill Valrico home prices 2026',
    'Valrico FL 33594 33596 neighborhood price comparison',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the median home price in Bloomingdale Valrico FL in Q4 2026?',
      answer:
        'Bloomingdale in Valrico\'s 33594 ZIP code is tracking a median sale price of approximately $382,000 to $395,000 in Q4 2026. Price per square foot runs $182 to $210 depending on condition, lot size, and updates. The price range spans $325,000 to $535,000 from entry-level 3-bedroom homes to updated estate homes on larger lots. Days on market average 38 to 62 days. Bloomingdale carries the Bloomingdale High School zone designation.',
    },
    {
      question: 'What is the difference in price between Valrico 33594 and 33596?',
      answer:
        'As of Q4 2026, Valrico\'s 33594 ZIP code (Bloomingdale, Copper Ridge, Wellington, Twin Lakes) has a blended median of approximately $370,000 to $395,000, while 33596 (Buckhorn, River Hills, Diamond Hill, Buckhorn Preserve) is tracking $460,000 to $478,000 blended median. The gap reflects the Newsome High School zone premium in 33596. For comparable-size homes in similar condition, buyers pay approximately $20 to $35 more per square foot in the Newsome zone.',
    },
    {
      question: 'What do homes in Buckhorn Valrico cost in Q4 2026?',
      answer:
        'Buckhorn, the largest community in Valrico\'s 33596 ZIP code, is tracking a median sale price of $428,000 to $445,000 in Q4 2026 at a price per square foot of $200 to $230. Days on market average 28 to 48 days, one of the strongest absorption rates in Valrico. Well-priced, move-in-ready homes in the $410,000 to $455,000 range are going under contract in 18 to 32 days. Most Buckhorn sections are in the Newsome High School zone, with northern sections in the Bloomingdale zone trading at a $20,000 to $35,000 discount.',
    },
    {
      question: 'How much does a home in River Hills Valrico cost?',
      answer:
        'River Hills Country Club in Valrico\'s 33596 ZIP code has a median sale price of approximately $530,000 to $575,000 in Q4 2026. Standard interior homes (not on the golf course) trade from $455,000 to $550,000 with days on market of 42 to 90 days. Golf course and estate homes range from $600,000 to over $1,200,000 and are taking 90 to 180 days in Q4. River Hills is a gated, golf course community in the Newsome High School zone with mandatory HOA fees of approximately $700 to $1,200 per year plus optional country club membership.',
    },
    {
      question: 'Which Valrico neighborhood has the best value for buyers in Q4 2026?',
      answer:
        'The best value depends on the buyer\'s priorities. Buyers who want maximum square footage per dollar should focus on Copper Ridge, Wellington, and entry Bloomingdale in 33594, where prices run $170 to $195 per square foot. Buyers who want the Newsome High School zone without paying River Hills or Diamond Hill prices should target Buckhorn, which offers $200 to $230 per square foot with established infrastructure and low HOA. Diamond Hill offers gated access with more lot size at a 10 to 15 percent discount to comparable River Hills non-golf homes.',
    },
  ],
  publish_date: '2026-11-14T12:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/bloomingdale-brick-home-valrico.jpg' as string | null,
  featured_image_alt:
    'Brick home in Bloomingdale neighborhood of Valrico FL with mature palm landscaping, representing Q4 2026 neighborhood home prices in east Hillsborough County' as string | null,
  related_slugs: [
    'best-neighborhoods-in-valrico-fl-for-buyers-in-2026',
    'valrico-fl-33594-vs-33596-zip-code-market-comparison-october-2026',
    'how-newsome-high-school-zone-impacts-valrico-home-values',
  ],
};

export async function GET() {
  try {
    const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'];
    const supabaseKey = process.env['SUPABASE_SERVICE_ROLE_KEY'];
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ status: 'error', message: 'Missing env vars' }, { status: 500 });
    }
    const sb = createClient(supabaseUrl, supabaseKey);

    const { data: existing } = await sb
      .from('blog_posts')
      .select('slug')
      .eq('slug', SLUG)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ status: 'already_exists', slug: SLUG });
    }

    const contentPath = path.join(process.cwd(), 'scripts', 'content', `${SLUG}.md`);
    const content = fs.readFileSync(contentPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    const { error } = await sb.from('blog_posts').insert({
      slug: SLUG,
      ...META,
      content,
      status: 'published',
      word_count: wordCount,
      reading_time: readingTime,
      og_image: null,
    });

    if (error) {
      return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
    }

    return NextResponse.json({ status: 'inserted', slug: SLUG, wordCount, readingTime });
  } catch (err) {
    return NextResponse.json({ status: 'error', message: String(err) }, { status: 500 });
  }
}
