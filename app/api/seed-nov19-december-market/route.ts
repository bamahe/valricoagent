import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-december-2026-real-estate-market-update';

const META = {
  title: 'Valrico FL December 2026 Real Estate Market Update: What Buyers and Sellers Need to Know at 7.4% Rates',
  excerpt:
    'Mortgage rates climbed to 7.40% in October 2026 and Valrico entered December with elevated financing costs, 50-68 average days on market, and 37% of active listings showing price reductions. This December 2026 market update covers current data for both 33594 and 33596 ZIP codes, what the rate lock effect is doing to inventory, and the buyer and seller strategies that are actually closing deals this month.',
  pillar: 'market',
  tags: [
    'Valrico FL Real Estate',
    'December 2026',
    'Market Update',
    'Mortgage Rates',
    '33594',
    '33596',
    'Buyer Strategy',
    'Seller Strategy',
    'Hillsborough County',
    'East Hillsborough',
    'Days on Market',
    'Inventory',
    'Price Reductions',
    'Rate Lock Effect',
    '2026',
  ],
  meta_title: 'Valrico FL December 2026 Real Estate Market Update | 33594 and 33596 ZIP Code Data | ValricoAgent.com',
  meta_description:
    'Valrico FL real estate market data for December 2026: median prices $370K-$472K by ZIP, 50-68 days on market, 37% price reductions in 33594, mortgage rates at 7.10-7.25%. Complete buyer and seller strategy guide for year-end closings.',
  focus_keyword: 'Valrico FL December 2026 real estate market update',
  secondary_keywords: [
    'Valrico FL home prices December 2026',
    'Valrico FL 33594 median home price 2026',
    'Valrico FL 33596 median home price 2026',
    'Hillsborough County real estate market December 2026',
    'east Hillsborough County housing market 2026',
    'Valrico FL buyer strategy December 2026',
    'Valrico FL seller strategy rate buydown December 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the current median home price in Valrico FL in December 2026?',
      answer:
        'The 33594 ZIP code (Bloomingdale area) is tracking a median sale price of approximately $370,000 to $382,000 entering December 2026. The 33596 ZIP code (Buckhorn, River Hills, Diamond Hill) is tracking approximately $462,000 to $472,000. Both reflect essentially flat year-over-year values, with 33596 holding slightly firmer due to the Newsome High School zone premium.',
    },
    {
      question: 'Are home prices dropping in Valrico FL in December 2026?',
      answer:
        'Valrico prices have softened modestly from the Q1-Q2 2026 peak but are not in freefall. The 33594 median is down approximately $10,000 to $15,000 from the spring 2026 peak. The 33596 median is down approximately $5,000 to $10,000. The stabilizing factor is constrained inventory: many potential sellers are locked into sub-4% mortgages and are choosing not to sell. This limits supply even as demand is dampened by 7.40% rates.',
    },
    {
      question: 'What mortgage rate can buyers expect in Valrico FL in December 2026?',
      answer:
        'The 30-year conventional mortgage rate is in the 7.10% to 7.25% range as of mid-November 2026, down slightly from the mid-October peak of 7.40%. Buyers with strong credit scores (740+) and 20% down can target the lower end of that range. Many Valrico sellers are offering closing cost credits of $8,000 to $12,000 to help buy down the rate.',
    },
    {
      question: 'How long does it take to sell a home in Valrico FL right now?',
      answer:
        'Average days on market across both ZIP codes runs 50 to 68 days entering December. Move-in-ready, correctly priced homes in 33594 below $400,000 are still moving in 25 to 40 days. The 33596 Newsome zone in the $430,000 to $480,000 range is moving in 30 to 50 days for well-presented listings. Homes priced above current comparable sales data or with significant deferred maintenance are sitting 90 to 120 days before sellers make meaningful concessions.',
    },
    {
      question: 'Is December a good time to buy a home in Valrico FL?',
      answer:
        'December is an underrated buying window in Valrico. Buyer competition drops 30 to 40% from the September-October peak while seller motivation remains high for listings that have been on market since late summer. Add the year-end homestead exemption deadline -- close before December 31 to file for the new Amendment 3 expanded exemption for the 2027 tax year -- and the December window offers buyers meaningful leverage that the spring market will not.',
    },
  ],
  publish_date: '2026-11-18T10:00:00.000Z',
  cta_type: 'market-report' as const,
  featured_image: '/images/bloomingdale-stone-brick-estate-palm-trees-valrico.jpg' as string | null,
  featured_image_alt:
    'Stone and brick estate home with palm trees in Bloomingdale Valrico FL representing the December 2026 real estate market in east Hillsborough County' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-fl-2026-real-estate-year-in-review',
    'valrico-fl-seller-rate-buydown-strategy-december-2026',
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
