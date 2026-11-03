import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-real-estate-market-update-november-2026';

const META = {
  title: 'Valrico FL Real Estate Market Update: November 2026',
  excerpt:
    'Valrico FL real estate in November 2026: 33594 median $372K-$382K, 33596 median $462K-$472K, 240-260 active listings, 35-42% with price reductions, 5.8-6.4 months of supply. Full buyer and seller strategy guide for Q4 2026 with mortgage rate analysis and year-end market outlook.',
  pillar: 'market',
  tags: [
    'Valrico FL',
    'Market Report',
    'November 2026',
    'Home Prices',
    'Days on Market',
    '33594',
    '33596',
    'Q4 2026',
    'Hillsborough County',
    'Buyer Market',
  ],
  meta_title: 'Valrico FL Real Estate Market Update November 2026 | ValricoAgent.com',
  meta_description:
    'Valrico FL real estate November 2026: 33594 median $372K-$382K, 33596 median $462K-$472K, 240-260 active listings, 35-42% with price reductions. Full Q4 market snapshot with buyer and seller strategy, mortgage rate analysis, and year-end outlook.',
  focus_keyword: 'Valrico FL real estate market update November 2026',
  secondary_keywords: [
    'Valrico FL home prices November 2026',
    'Valrico real estate market report Q4 2026',
    '33594 33596 home prices November 2026',
    'Valrico FL days on market 2026',
    'Hillsborough County real estate November 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the median home price in Valrico FL in November 2026?',
      answer:
        'Valrico has two distinct price levels in November 2026. The 33594 ZIP (Bloomingdale, Twin Lakes, Copper Ridge) has a median sale price of approximately $372,000 to $382,000, flat to down 1 to 2 percent year over year. The 33596 ZIP (Buckhorn, River Hills, Diamond Hill, Newsome zone) holds a median of approximately $462,000 to $472,000, supported by persistent Newsome High School zone demand. The blended median across both ZIPs is approximately $413,000 to $422,000.',
    },
    {
      question: 'Is it a buyer\'s or seller\'s market in Valrico FL in November 2026?',
      answer:
        'Valrico is a buyer\'s market in November 2026. Active inventory has grown to approximately 240 to 260 homes, representing roughly 5.8 to 6.4 months of supply. More than 35 percent of active listings have taken price reductions. The sale-to-list ratio is approximately 96.5 to 97.5 percent, meaning buyers are regularly purchasing below asking price. Sellers who price to current comparable sales rather than spring 2026 peak expectations are still closing, but overpriced listings are sitting 90 to 120 days.',
    },
    {
      question: 'How long are homes taking to sell in Valrico FL in November 2026?',
      answer:
        'Days on market in Valrico in November 2026 varies by ZIP and price tier. In 33596, well-priced Newsome-zone homes go under contract in 21 to 35 days. In 33594, the $360,000 to $450,000 tier averages 50 to 68 days. Homes priced above $550,000 in 33596 average 55 to 85 days. Listings that have been on the market 60 days or more represent motivated seller situations where buyers should negotiate assertively.',
    },
    {
      question: 'What are mortgage rates for Valrico buyers in November 2026?',
      answer:
        'Mortgage rates for a 30-year conventional fixed loan are running approximately 6.80 to 7.40 percent for well-qualified borrowers with 20 percent down and credit above 740 in November 2026. For a Valrico buyer at the $418,000 blended median with 10 percent down, the loan amount is approximately $376,200 and the monthly principal and interest at 7.10 percent is approximately $2,526. Including taxes, insurance, and HOA, total monthly costs range from $3,200 to $3,500. Sellers in the current market are often willing to contribute toward a rate buydown to help qualified buyers manage the rate impact.',
    },
    {
      question: 'Is November a good time to buy a home in Valrico FL?',
      answer:
        'November is one of the best buyer windows in Valrico. Buyer competition is 30 to 40 percent lower than spring peak season. Sellers who have been listed since August or September have absorbed market feedback and are more willing to negotiate. Standard contingencies including inspection, financing, and appraisal are being accepted. Buyers who need to close before year-end for tax purposes face a November 10 to 20 contract deadline, creating motivated seller urgency. The window closes materially in mid-December when the holiday market freeze begins.',
    },
  ],
  publish_date: '2026-11-02T14:00:00.000Z',
  cta_type: 'consultation',
  featured_image: '/images/bloomingdale-ranch-estate-circular-drive-oaks-valrico.jpg' as string | null,
  featured_image_alt: 'Bloomingdale estate home with circular drive and oak canopy in Valrico FL, November 2026 market update' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-october-2026',
    'valrico-fl-november-december-2026-market-year-end-guide',
    'valrico-fl-buyer-negotiation-guide-q4-2026-price-reductions',
    'valrico-fl-buyer-closing-costs-guide-2026',
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
