import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'brandon-fl-real-estate-market-q4-2026-year-end-update';

const META = {
  title: 'Brandon FL Real Estate Market Q4 2026: Year-End Prices, Inventory, and What to Expect in 2027',
  excerpt:
    'Brandon FL real estate entered Q4 2026 with stabilizing inventory, faster days on market for correctly priced homes, and a year-end window that favors motivated buyers. Full data for 33510, 33511, and the 33596 border zone, with comparisons to summer 2026 and what 2027 looks like from here.',
  pillar: 'market',
  tags: [
    'Market Update',
    'Brandon FL',
    '33510',
    '33511',
    '33596',
    'Q4 2026',
    'Year-End',
    'Hillsborough County',
    'East Hillsborough',
    'Investment Property',
  ],
  meta_title: 'Brandon FL Real Estate Market Q4 2026: Year-End Update & 2027 Outlook | ValricoAgent.com',
  meta_description:
    'Brandon FL Q4 2026 real estate market update: median prices by ZIP, days on market, inventory levels, year-end buyer opportunities, and what to expect in 2027. Data for 33510, 33511, and 33596.',
  focus_keyword: 'Brandon FL real estate market Q4 2026',
  secondary_keywords: [
    'Brandon FL home prices year-end 2026',
    'Brandon 33510 33511 real estate update',
    'east Hillsborough housing market Q4 2026',
    'Brandon FL vs Valrico 2027',
    'buy home Brandon FL year-end 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the current median home price in Brandon FL in Q4 2026?',
      answer:
        'Brandon FL median home prices vary by ZIP code in Q4 2026. Brandon 33510 (northern Brandon) tracks in the $325,000 to $360,000 range. Brandon 33511 (central and southern Brandon) tracks in the $365,000 to $395,000 range. The 33596 ZIP on the Brandon-Valrico border runs $460,000 to $480,000, driven by Newsome and Bloomingdale High School zone demand. These figures reflect October and early November 2026 closed sale data from MLS and third-party data providers.',
    },
    {
      question: 'How many days on market are homes sitting in Brandon FL right now?',
      answer:
        'As of early November 2026, correctly priced homes in Brandon 33510 are selling in approximately 27 days. Homes in 33511 are averaging about 31 days. These figures are faster than summer 2026 levels, which ran 38 to 55 days across Brandon, because the listings active now are primarily the ones priced in line with current comparables. Overpriced listings are still sitting at 60 to 90-plus days.',
    },
    {
      question: 'Is it a good time to buy a home in Brandon FL in November 2026?',
      answer:
        'Yes, for buyers who are ready to act. November and December offer Brandon buyers the most leverage since 2019. Sellers listed since summer are motivated to close before year-end. Closing cost concessions of 2% to 3% are routine. And buyers who close by December 31, 2026 capture the first year of Amendment 3 property tax savings, worth approximately $950 to $1,200 per year on a typical Brandon home at current assessed values.',
    },
    {
      question: 'What is the difference between Brandon FL and Valrico FL home prices in 2026?',
      answer:
        'The price difference is primarily driven by school zoning. Brandon 33510 and 33511 average $325,000 to $395,000, while Valrico 33594 averages $370,000 to $385,000. The 33596 ZIP, which covers the Brandon-Valrico border and includes the Newsome High School zone, prices in the $460,000 to $480,000 range for both communities. Buyers who need the Newsome zone pay the same premium whether the address reads Brandon or Valrico.',
    },
    {
      question: 'What is the Brandon FL housing market forecast for 2027?',
      answer:
        'The 2027 outlook for Brandon is cautiously positive. If mortgage rates decline to the 6.25 to 6.5 percent range as forecasters project, pent-up demand from buyers on the sidelines since 2023 and 2024 is likely to re-enter. Combined with Amendment 3 tax savings starting in 2027, the base case is 3 to 5 percent appreciation in 33510 and 33511 and 4 to 6 percent in the premium 33596 corridor.',
    },
  ],
  publish_date: '2026-11-07T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/brandon-fl-real-estate-market-2026.jpg' as string | null,
  featured_image_alt:
    'Brandon FL residential neighborhood representing the Q4 2026 real estate market update for 33510 and 33511 ZIP codes' as string | null,
  related_slugs: [
    'brandon-fl-real-estate-market-2026',
    'valrico-vs-brandon-vs-lithia-where-to-buy-in-east-hillsborough-2026',
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-fl-year-end-buyer-action-plan-close-before-december-31-2026',
  ],
};

export async function GET() {
  const sb = getServiceClient();

  const { data: existing } = await sb
    .from('blog_posts')
    .select('id')
    .eq('slug', SLUG)
    .single();

  if (existing) {
    return NextResponse.json({ status: 'already_exists', slug: SLUG });
  }

  const contentPath = path.join(process.cwd(), 'scripts', 'content', `${SLUG}.md`);
  const content = fs.readFileSync(contentPath, 'utf-8');
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  const { error } = await sb.from('blog_posts').insert({
    slug: SLUG,
    title: META.title,
    excerpt: META.excerpt,
    content,
    pillar: META.pillar,
    tags: META.tags,
    meta_title: META.meta_title,
    meta_description: META.meta_description,
    focus_keyword: META.focus_keyword,
    secondary_keywords: META.secondary_keywords,
    schema_type: META.schema_type,
    faq_data: META.faq_data,
    featured_image: META.featured_image,
    featured_image_alt: META.featured_image_alt,
    status: 'published',
    publish_date: META.publish_date,
    related_slugs: META.related_slugs,
    cta_type: META.cta_type,
    word_count: wordCount,
    reading_time: readingTime,
  });

  if (error) {
    return NextResponse.json({ status: 'error', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ status: 'seeded', slug: SLUG, word_count: wordCount });
}
