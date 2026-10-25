import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'st-petersburg-fl-real-estate-market-2026';

const META = {
  title: 'St. Petersburg FL Real Estate Market 2026',
  excerpt:
    'St. Petersburg FL real estate market 2026: Zillow ZHVI ~$355,759 (down 3.9% YoY), Q3 median $400K-$408K for single-family homes. ZIP code breakdown for 33702, 33703, 33704, 33712, condo market dynamics, insurance costs, school choice comparison, and how St. Pete compares to Valrico for buyers.',
  pillar: 'market',
  tags: [
    'St. Petersburg FL',
    'Pinellas County',
    'Market Report',
    '2026',
    'Home Prices',
    'Tampa Bay',
    'Condo Market',
    'Insurance Costs',
    'School Choice',
  ],
  meta_title: 'St. Petersburg FL Real Estate Market 2026 | ValricoAgent.com',
  meta_description:
    'St. Petersburg FL real estate 2026: Zillow ZHVI ~$355,759 down 3.9%, Q3 median $400K-$408K single-family. ZIP breakdown for 33702 ($319K buyer-favorable) through 33704 ($758K seller-leaning). Condo market, insurance, schools, and Valrico comparison.',
  focus_keyword: 'St. Petersburg FL real estate market 2026',
  secondary_keywords: [
    'St Pete home prices 2026',
    'St Petersburg FL ZIP code real estate',
    'Pinellas County real estate market 2026',
    'St Pete condo market 2026',
    'St Petersburg vs Valrico real estate',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the median home price in St. Petersburg FL in 2026?',
      answer:
        "St. Petersburg's Zillow Home Value Index sits at approximately $355,759 as of mid-2026, down 3.9% year over year. For single-family homes specifically, Q3 2026 median sale prices run $400,000 to $408,000 citywide. Prices vary significantly by ZIP: 33702 in northeast St. Pete has a median around $319,000, while 33704 covering Old Northeast and Venetian Isles runs approximately $758,000.",
    },
    {
      question: 'Is the St. Pete condo market in trouble in 2026?',
      answer:
        "St. Pete's condo segment is under pressure from Florida's Senate Bill 4-D structural reserve funding mandate for buildings three stories or taller built before 2001. Condo inventory city-wide is at approximately 6.7 months of supply with 52 average days on market, firmly a buyer's market. Buyers must verify milestone inspection status, reserve fund adequacy, and any pending special assessments on any older mid-rise or high-rise condo before making an offer.",
    },
    {
      question: 'How do homeowners insurance costs in St. Petersburg compare to Valrico?',
      answer:
        'A non-waterfront St. Pete single-family home runs approximately $3,500 to $5,500 per year for a standard HO-3 policy in 2026. Valrico homeowners in inland Hillsborough County typically pay $2,800 to $4,200 per year. The $700 to $1,300 annual gap compounds meaningfully over a 10-year hold. Waterfront or AE flood zone properties in St. Pete add significant flood insurance costs on top of the base HO-3.',
    },
    {
      question: 'Does St. Petersburg use school zones or school choice?',
      answer:
        "Pinellas County uses a school choice system, not address-based zone assignment like Hillsborough County. Families submit ranked applications and the district assigns based on availability and sibling priority. This means there is no automatic school-zone premium built into St. Pete property values the way Valrico's Newsome High School zone commands a consistent pricing premium in the 33596 ZIP.",
    },
    {
      question: 'Which St. Petersburg ZIP code is most favorable for buyers in 2026?',
      answer:
        "The 33702 ZIP in northeast St. Pete is the most buyer-favorable in 2026, with a median around $319,000, approximately 55 days on market, and 5.5 months of supply. The 33704 ZIP covering Old Northeast and Venetian Isles is the tightest with only 1.9 months of supply, making it seller-leaning even in the current cooling market.",
    },
  ],
  publish_date: '2026-10-24T14:00:00.000Z',
  cta_type: 'consultation',
  featured_image: '/images/st-petersburg-fl-real-estate-guide.jpg' as string | null,
  featured_image_alt: 'St. Petersburg FL waterfront neighborhood aerial view' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-october-2026',
    'clearwater-fl-real-estate-market-2026',
    'apollo-beach-fl-real-estate-market-2026',
    'largo-fl-real-estate-market-2026',
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
