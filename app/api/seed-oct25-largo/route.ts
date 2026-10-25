import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'largo-fl-real-estate-market-2026';

const META = {
  title: 'Largo FL Real Estate Market 2026',
  excerpt:
    'Largo FL real estate market 2026: citywide median $319,950-$325,528 (down 4.9% YoY), 3.5 months supply. ZIP breakdown for 33771, 33773, 33774, 33778 with days on market data, insurance costs, Pinellas school choice system, and how Largo compares to Valrico for buyers and investors.',
  pillar: 'market',
  tags: [
    'Largo FL',
    'Pinellas County',
    'Market Report',
    '2026',
    'Home Prices',
    'Tampa Bay',
    'Condo Market',
    'Insurance Costs',
    'School Choice',
  ],
  meta_title: 'Largo FL Real Estate Market 2026 | ValricoAgent.com',
  meta_description:
    'Largo FL real estate 2026: median $319,950 down 4.9%, 3.5 months supply. ZIP breakdown from 33771 ($270K-$290K) to 33774 ($375K-$400K beach-adjacent). Insurance, flood zones, school choice, and Largo vs Valrico comparison.',
  focus_keyword: 'Largo FL real estate market 2026',
  secondary_keywords: [
    'Largo FL home prices 2026',
    'Largo Florida ZIP code real estate',
    'Pinellas County real estate market Largo',
    'Largo FL condo market 2026',
    'Largo vs Valrico real estate',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the median home price in Largo FL in 2026?',
      answer:
        "Largo's citywide median sale price is approximately $319,950 to $325,528 in Q3 2026, down about 4.9% year over year per Redfin data. Prices vary significantly by ZIP: 33773 in central Largo has a median around $295,000, while the southwest 33774 ZIP near Indian Rocks Beach runs $375,000 to $400,000 for single-family homes. The 33778 ZIP shows a lower blended median due to mobile and manufactured home volume.",
    },
    {
      question: 'How long are homes taking to sell in Largo FL in 2026?',
      answer:
        'Days on market in Largo ranges from approximately 45 to 70 days city-wide depending on ZIP code and price tier. The 33773 central Largo ZIP averages around 53 days. The 33774 southwest ZIP near the beaches averages 60 to 70 days, reflecting more deliberate buyer behavior at higher price points. Well-priced, move-in-ready homes across all ZIPs are typically under contract faster than the averages suggest.',
    },
    {
      question: 'What are homeowners insurance costs in Largo FL?',
      answer:
        'A non-waterfront single-family home in central Largo (33771, 33773) runs approximately $3,200 to $5,000 per year for a standard HO-3 policy in 2026. Properties closer to Indian Rocks Beach and the Gulf in 33774 can run higher. AE flood zone properties near water bodies add $1,200 to $3,500 per year for flood insurance under NFIP Risk Rating 2.0. Inland Valrico homeowners typically pay $2,800 to $4,200 per year with no mandatory flood insurance in most of the market.',
    },
    {
      question: 'Does Largo use school zones or school choice for schools?',
      answer:
        "Largo is served by Pinellas County Schools, which uses a school choice system rather than address-based zone assignment. Families submit ranked applications and the district assigns based on availability. The Largo area is primarily served by Largo High School, which has a career and technical education choice program. Unlike Valrico's Hillsborough County zone system, there is no automatic school-zone premium built into Largo property values.",
    },
    {
      question: 'How far is Largo from Tampa and the Gulf beaches?',
      answer:
        'Largo to downtown Tampa runs approximately 25 to 45 minutes via the Courtney Campbell Causeway or SR-60 depending on traffic. Indian Rocks Beach is approximately 10 to 20 minutes west of most Largo neighborhoods. Clearwater Beach is approximately 15 to 25 minutes north. The beach proximity is one of the primary lifestyle advantages Largo has over inland east Hillsborough County markets like Valrico.',
    },
  ],
  publish_date: '2026-10-25T14:00:00.000Z',
  cta_type: 'consultation',
  featured_image: '/images/largo-fl-remax-collective-office.jpg' as string | null,
  featured_image_alt:
    'REMAX Collective Largo office on Seminole Boulevard in Largo, Florida' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-october-2026',
    'st-petersburg-fl-real-estate-market-2026',
    'clearwater-fl-real-estate-market-2026',
    'apollo-beach-fl-real-estate-market-2026',
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
