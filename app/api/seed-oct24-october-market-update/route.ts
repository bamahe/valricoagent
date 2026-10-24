import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-real-estate-market-update-october-2026';

const META = {
  title: 'Valrico FL Real Estate Market Update: October 2026',
  excerpt:
    'Valrico FL real estate market in October 2026: 33594 median $375K-$380K, 33596 median $468K-$472K, inventory down from summer peak, 34-38% of listings with price reductions. Complete October market snapshot with rate analysis, Amendment 3 ballot impact, and Q4 outlook for buyers and sellers.',
  pillar: 'market',
  tags: [
    'Valrico FL',
    'Market Report',
    'October 2026',
    'Home Prices',
    'Days on Market',
    '33594',
    '33596',
    'Q4 2026',
    'Hillsborough County',
  ],
  meta_title: 'Valrico FL Real Estate Market Update October 2026 | ValricoAgent.com',
  meta_description:
    'Valrico FL real estate October 2026: 33594 median $375K-$380K, 33596 median $468K-$472K, 155-175 active listings, 34-38% with price reductions. Complete market snapshot with Q4 outlook and Amendment 3 impact.',
  focus_keyword: 'Valrico FL real estate market update October 2026',
  secondary_keywords: [
    'Valrico FL home prices October 2026',
    'Valrico real estate market report Q4 2026',
    '33594 33596 home prices',
    'Valrico FL days on market 2026',
    'Hillsborough County real estate October 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the median home price in Valrico FL in October 2026?',
      answer:
        'Valrico has two distinct sub-markets in October 2026. The 33594 ZIP (Bloomingdale, Twin Lakes, Copper Ridge) has a median sale price of approximately $375,000 to $380,000, essentially flat year over year. The 33596 ZIP (Buckhorn, River Hills, Diamond Hill, Buckhorn Preserve) holds a median of approximately $468,000 to $472,000, driven by persistent Newsome High School zone demand. The blended median across both ZIPs is approximately $413,000 to $416,000.',
    },
    {
      question: 'How long are homes taking to sell in Valrico FL right now?',
      answer:
        'Days on market in Valrico varies significantly by price tier and condition. Well-priced, move-in-ready homes in the Newsome zone (33596) are going under contract in 18 to 32 days. Homes in 33594 priced between $350,000 and $420,000 are averaging 42 to 58 days. Overpriced or condition-challenged listings are carrying 90 to 130 days on market. The Hillsborough County average across all areas is approximately 45 to 55 days in October 2026.',
    },
    {
      question: 'Is October a good time to buy or sell in Valrico FL?',
      answer:
        'October is an underrated window for both buyers and sellers in Valrico. Buyers benefit from 30 to 40% less competition than April or May, motivated sellers who have been carrying homes since spring, and full restoration of inspection contingencies and negotiating leverage. Sellers who price to October comps rather than spring expectations can still close before the holidays. The window from now through mid-November is the best fall opportunity, after which activity drops sharply through the holiday period.',
    },
    {
      question: 'What is the impact of Florida Amendment 3 on Valrico real estate?',
      answer:
        'Florida Amendment 3 on the November 3, 2026 ballot proposes to expand the non-school homestead exemption to $150,000 in 2027 and $250,000 in 2028. For a Valrico homeowner with a $413,000 assessed value, this translates to approximately $850 to $950 in annual tax savings beginning in 2027. Buyers who close before December 31, 2026 and file homestead by March 1, 2027 would capture this benefit in their first full tax year if the amendment passes with 60% approval.',
    },
    {
      question: 'What are current mortgage rates for Valrico buyers in October 2026?',
      answer:
        'Mortgage rates for a 30-year conventional fixed loan are running approximately 6.50% to 6.75% for qualified borrowers with 20% down and credit above 740 in October 2026. For a Valrico buyer at the $413,000 median with 10% down, the loan amount is approximately $372,000 and the monthly principal and interest payment at 6.65% is approximately $2,393. Including taxes, insurance, and HOA where applicable, total monthly housing costs range from $3,100 to $3,400.',
    },
  ],
  publish_date: '2026-10-23T14:00:00.000Z',
  cta_type: 'consultation',
  featured_image: null as string | null,
  featured_image_alt: null as string | null,
  related_slugs: [
    'valrico-fl-november-december-2026-market-year-end-guide',
    'valrico-fl-q4-2026-high-dollar-home-sales-october-report',
    'valrico-fl-home-price-forecast-2027',
    'hillsborough-county-2026-property-tax-bills-valrico-early-payment-guide',
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
