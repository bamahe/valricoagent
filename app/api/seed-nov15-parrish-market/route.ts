import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'parrish-fl-real-estate-market-2026';

const META = {
  title: 'Parrish FL Real Estate Market 2026: Data, Communities, and How It Compares to Valrico',
  excerpt:
    'A data-driven look at the Parrish FL real estate market in 2026: median prices, days on market, North River Ranch builder activity, school zone changes, Manatee County taxes, and an honest side-by-side comparison with Valrico 33594 and 33596.',
  pillar: 'comparison',
  tags: [
    'Market Data',
    'Parrish FL',
    '34219',
    'North River Ranch',
    'New Construction',
    'Manatee County',
    'Valrico Comparison',
    '2026',
    'School Zones',
  ],
  meta_title:
    'Parrish FL Real Estate Market 2026: Data, Builders, Schools, and Valrico Comparison | ValricoAgent.com',
  meta_description:
    'Complete 2026 Parrish FL real estate market guide: $375K median price, 53-day DOM, North River Ranch builders, Parrish Community High School, Manatee County taxes, and a direct comparison with Valrico 33594 and 33596.',
  focus_keyword: 'Parrish FL real estate market 2026',
  secondary_keywords: [
    'Parrish FL 34219 home prices 2026',
    'North River Ranch real estate 2026',
    'Parrish vs Valrico FL 2026',
    'Parrish FL new construction 2026',
    'Manatee County real estate 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the median home price in Parrish FL in 2026?',
      answer:
        'The median sale price in Parrish FL (34219) is approximately $375,000 based on trailing 12-month closed sales data from Momentum Research, representing a 6.0 percent decline year over year. The Zillow Home Value Index for the 34219 ZIP code is $413,854, down 3.1 percent year over year. The gap between the two figures reflects methodology differences: Momentum tracks actual closed sales while Zillow uses a broader valuation model. Both confirm modest price softening after the 2020 to 2022 appreciation cycle.',
    },
    {
      question: 'Is North River Ranch a good place to buy in 2026?',
      answer:
        'North River Ranch offers excellent amenities, brand-new construction from multiple builders, and a master-planned community feel that is rare in this price range. The average home value is approximately $522,326. The main caution for buyers is resale competition: when you go to sell, you will compete with active builder inventory, model homes, and builder incentive packages that resale sellers cannot match. For buyers who plan to hold long-term and value new construction quality and community amenities, it is a strong choice. For buyers with a shorter holding horizon, the builder competition risk is worth weighing carefully.',
    },
    {
      question: 'How do Parrish schools compare to Valrico schools in 2026?',
      answer:
        'This is the most important differentiator between the two markets. Parrish is served by Parrish Community High School, which opened in 2021 and is still building its academic profile and extracurricular programs. Valrico 33596 is zoned for Newsome High School, which carries decades of track record as one of the top five public high schools in Hillsborough County. For families where school zone ranking is a primary buying driver, Valrico 33596 and the Newsome High zone are difficult to replicate in the Tampa Bay market. Parrish schools are accredited and improving, but they do not yet carry the established premium of Newsome or Bloomingdale High School zones.',
    },
    {
      question: 'Are there CDD fees in Parrish FL communities?',
      answer:
        'Yes. North River Ranch, Seaire, and several other newer Parrish communities carry Community Development District fees that add to the annual carrying cost. CDD assessments in North River Ranch typically run $1,500 to $3,000 per year on top of property taxes and HOA dues. These fees finance the infrastructure and amenities built into the development. Buyers should request the current CDD schedule during due diligence. Harrison Ranch and Bella Terra, being older communities, have different fee structures. CDD fees also narrow your resale buyer pool, since some buyers specifically exclude CDD communities from their search.',
    },
    {
      question: 'Is the commute from Parrish to Tampa reasonable?',
      answer:
        'The commute from Parrish to downtown Tampa runs 40 to 55 minutes in normal traffic via US-301 north to I-275. For MacDill AFB, the commute extends to 50 to 65 minutes, which is the most significant disadvantage for military families considering Parrish over Valrico. For employees in Bradenton or Sarasota, Parrish has a clear commute advantage over Hillsborough County communities. The I-75 and Moccasin Wallow Road interchange provides direct interstate access and improves commute predictability.',
    },
  ],
  publish_date: '2026-11-15T10:00:00.000Z',
  cta_type: 'consultation' as const,
  featured_image: '/images/parrish-fl-real-estate-market-2026.jpg' as string | null,
  featured_image_alt:
    'Residential home in Parrish FL representing the 2026 real estate market in the 34219 ZIP code and North River Ranch community' as string | null,
  related_slugs: [
    'riverview-fl-real-estate-market-2026',
    'how-newsome-high-school-zone-impacts-valrico-home-values',
    'valrico-fl-33596-vs-33594-zip-code-comparison',
    'buying-a-home-in-valrico-fl-in-2026-prices-competition-and-strategy',
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
