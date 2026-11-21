import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-thanksgiving-holiday-buyer-strategy-2026';

const META = {
  title: "Valrico FL Holiday Buyer's Window: Why Thanksgiving to December 2026 Is the Best Time to Buy",
  excerpt:
    "Most buyers in Valrico FL sit out the November-December window. That is a mistake. With buyer competition 30 to 40 percent lower than September, sellers motivated to close before year-end, and the December 31 homestead exemption deadline on the line, the holiday market delivers negotiating leverage that the spring market will not. Here is how to use it.",
  pillar: 'buyer',
  tags: [
    'Buyer Guide',
    'Valrico FL',
    'Holiday Season',
    'November 2026',
    'December 2026',
    'Buyer Strategy',
    'Homestead Exemption',
    'East Hillsborough County',
    '33594',
    '33596',
    'Seller Concessions',
    'Rate Buydown',
    'Year-End Buying',
    'Hillsborough County',
    '2026',
  ],
  meta_title: "Valrico FL Holiday Buyer's Window 2026: Why Thanksgiving to December Is the Best Time to Buy | ValricoAgent.com",
  meta_description:
    "Valrico FL buyers: the Thanksgiving-to-December 2026 window offers 30-40% less competition, motivated sellers, and the homestead exemption deadline. How to maximize negotiating leverage and close before year-end in east Hillsborough County.",
  focus_keyword: "Valrico FL holiday buyer's window 2026",
  secondary_keywords: [
    'best time to buy a home Valrico FL 2026',
    'buy a home Valrico FL December 2026',
    'Valrico FL year-end homestead exemption deadline 2026',
    'Valrico FL buyer strategy Thanksgiving 2026',
    'east Hillsborough County home buying fall 2026',
    'Valrico FL seller concessions holiday season 2026',
    'Valrico FL 33594 33596 buyer tips November December 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Is it a good time to buy a home in Valrico FL in November or December 2026?',
      answer:
        'Yes. November and December 2026 represent one of the strongest buyer windows in Valrico in several years. Active inventory is elevated at approximately 246 homes across both ZIP codes, months of supply exceeds 5.8 months, and buyer competition has dropped 30 to 40 percent from the September peak. Sellers who have been listed since summer are carrying costs and are motivated to close. The year-end homestead exemption deadline -- close by December 31 to file for the Amendment 3 expanded exemption for the 2027 tax year -- adds further urgency on the seller side.',
    },
    {
      question: 'What is the homestead exemption deadline for Valrico FL buyers in 2026?',
      answer:
        'To qualify for Florida homestead exemption on your 2027 property tax bill -- including the expanded Amendment 3 exemption -- you must own and occupy the home as your primary residence as of January 1, 2027. That means you need to close on or before December 31, 2026. For a home assessed at $418,000, the standard $50,000 homestead exemption saves approximately $900 to $1,100 in annual property taxes. The expanded Amendment 3 exemption can increase that savings further for qualifying properties.',
    },
    {
      question: 'How much can I negotiate off the price of a Valrico FL home in November or December 2026?',
      answer:
        'On a home listed 45 days or longer at the wrong price, buyers in the current Valrico market are achieving 3 to 5 percent below original list price. On top of that, sellers are routinely offering closing cost credits of $8,000 to $12,000, which can be structured as a rate buydown to reduce your effective interest rate for the first one to two years. On correctly priced, move-in-ready homes under 30 days on market, negotiating room is tighter -- expect 1 to 2 percent below list. The holiday window favors buyers who do their homework on comparable sales and lead with data, not emotion.',
    },
  ],
  publish_date: '2026-11-21T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/bloomingdale-brick-home-columned-entry-valrico.jpg' as string | null,
  featured_image_alt:
    'Columned entry brick home in Bloomingdale Valrico FL representing the holiday buying season and year-end buyer opportunity in east Hillsborough County 2026' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-fl-december-2026-real-estate-market-update',
    'buyer-closing-costs-valrico-fl-2026',
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
