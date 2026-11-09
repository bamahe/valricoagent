import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'va-loan-home-buying-valrico-fl-macdill-afb-guide';

const META = {
  title: 'VA Loan Home Buying in Valrico FL: A Guide for Military Families at MacDill AFB',
  excerpt:
    'Everything MacDill AFB service members need to know about buying a home in Valrico FL with a VA loan: 2026 loan limits, BAH rates by pay grade, Newsome High School zone, commute times, the VA appraisal process, and how the fall 2026 market favors VA buyers.',
  pillar: 'buyer',
  tags: [
    'Buyer Guide',
    'VA Loan',
    'Military Families',
    'MacDill AFB',
    'Valrico FL',
    'Hillsborough County',
    '33594',
    '33596',
    '2026',
    'PCS',
  ],
  meta_title: 'VA Loan Home Buying in Valrico FL: MacDill AFB Military Guide 2026 | ValricoAgent.com',
  meta_description:
    'MacDill AFB VA loan homebuying guide for Valrico FL 2026: no down payment, 2026 loan limits, E-5 and O-3 BAH rates, Newsome school zone, flood zones, and how to close before year-end. Expert guidance from a local REMAX Broker Associate.',
  focus_keyword: 'VA loan home buying Valrico FL MacDill AFB',
  secondary_keywords: [
    'VA loan Hillsborough County 2026',
    'MacDill AFB housing Valrico FL',
    'military home buying Valrico FL',
    'VA loan PCS Tampa Bay 2026',
    'MacDill AFB BAH rates 2026 home purchase',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the VA loan limit for Hillsborough County Florida in 2026?',
      answer:
        'For VA borrowers with full entitlement, there is no VA loan limit in Hillsborough County in 2026. Full entitlement means you have never used your VA loan benefit, or you have paid off a prior VA loan and had your entitlement restored. For borrowers with partial entitlement, the calculation uses the FHFA conforming loan limit of $832,750 as the baseline for Hillsborough County. Most first-time VA buyers at MacDill have full entitlement and face no VA-imposed purchase ceiling.',
    },
    {
      question: 'What are the MacDill AFB BAH rates for 2026?',
      answer:
        'MacDill AFB 2026 BAH rates for the Tampa Military Housing Area are approximately $2,709 per month for E-5 with dependents and $3,081 per month for O-3 with dependents. VA lenders can gross BAH up to 125 percent when calculating qualifying income, improving purchasing power. Confirm your specific rate on the official DoD BAH rate lookup tool since rates vary by pay grade, dependency status, and military housing area.',
    },
    {
      question: 'Is Valrico FL a good place to live for MacDill AFB families?',
      answer:
        'Valrico is a consistently popular choice for MacDill families who prioritize school zone, home size, and neighborhood quality. Valrico 33596 is zoned for Newsome High School, ranked among the top five public high schools in Hillsborough County. Homes in Valrico offer 2,500 to 4,500 square feet in established communities at prices lower than comparable homes in South Tampa or Wesley Chapel. The commute to MacDill runs 35 to 55 minutes depending on departure time and routing.',
    },
    {
      question: 'Will Valrico sellers accept a VA loan offer?',
      answer:
        "Yes. In the fall 2026 Valrico market, with extended days on market and sellers actively competing for qualified buyers, VA offers are accepted routinely. The 2021 to 2022 seller's market conditions that made some sellers hesitant about VA loans no longer apply. A VA buyer with a pre-approval letter, a motivated agent, and flexibility on possession date has no meaningful competitive disadvantage versus conventional buyers in the current market.",
    },
    {
      question: 'Is Valrico in a FEMA flood zone?',
      answer:
        'The majority of Valrico, including most residential neighborhoods in 33594 and 33596, is classified FEMA Zone X, which carries no mandatory flood insurance requirement. This is a meaningful advantage over South Tampa and waterfront properties along Tampa Bay, which carry Zone AE or VE classifications with mandatory flood insurance adding $2,000 to $5,000 or more annually. Verify the specific property address on the FEMA Flood Map Service Center before making an offer.',
    },
  ],
  publish_date: '2026-11-08T12:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/macdill-afb-military-housing-guide-tampa-2026.png' as string | null,
  featured_image_alt:
    'MacDill Air Force Base Tampa FL military housing guide for VA loan homebuyers in Valrico and east Hillsborough County 2026' as string | null,
  related_slugs: [
    'macdill-afb-housing-guide-tampa-bay-2026',
    'buying-a-home-in-valrico-fl-in-2026-prices-competition-and-strategy',
    'brandon-fl-real-estate-market-2026',
    'commute-times-from-valrico-to-tampa',
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
