import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-new-construction-vs-resale-homes-q4-2026';

const META = {
  title: 'New Construction vs Resale Homes in Valrico FL Q4 2026: Total Cost Comparison for Buyers',
  excerpt:
    'Valrico buyers in Q4 2026 face a real choice between Pulte Valri Forest from $416,990 and WestBay Northwood Estates from $531,990 versus resale homes closing at $367K to $452K. Builder rate buydowns, CDD fees, tariff-driven construction premiums, and resale negotiating leverage change the total cost picture significantly. Full side-by-side breakdown.',
  pillar: 'buyer',
  tags: [
    'Buyer Guide',
    'New Construction',
    'Valrico FL',
    '33594',
    '33596',
    'Pulte Homes',
    'Homes by WestBay',
    'Q4 2026',
    'Home Prices',
    'CDD Fees',
    'Builder Incentives',
    'Hillsborough County',
  ],
  meta_title: 'New Construction vs Resale Homes Valrico FL Q4 2026: Total Cost Comparison | ValricoAgent.com',
  meta_description:
    'Compare new construction vs resale in Valrico FL Q4 2026: Pulte Valri Forest from $416,990 vs 33594 resale median $367K, WestBay Northwood Estates from $531,990 vs 33596 median $452K. Builder incentives, CDD fees, tariff cost premium, and negotiating leverage analyzed side by side.',
  focus_keyword: 'new construction vs resale homes Valrico FL Q4 2026',
  secondary_keywords: [
    'Valrico FL new construction homes 2026',
    'Pulte Valri Forest vs resale Valrico',
    'WestBay Northwood Estates Valrico 2026',
    'Valrico FL home buyer guide Q4 2026',
    'CDD fees Valrico new construction 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Is new construction cheaper than resale in Valrico FL right now?',
      answer:
        'No. Resale homes in Valrico are closing below new construction list prices in Q4 2026. The 33594 resale median is approximately $367,000 to $382,000, while Pulte Valri Forest starts at $416,990. The 33596 resale median is approximately $441,000 to $452,000, while WestBay Northwood Estates starts at $531,990. However, builder incentives including rate buydowns to 5.25 to 5.50 percent and closing cost credits up to $25,000 narrow the effective cost gap for buyers who qualify through the builder\'s preferred lender.',
    },
    {
      question: 'What are the CDD fees at Valri Forest in Valrico?',
      answer:
        'Valri Forest carries a Community Development District fee of approximately $1,800 to $2,400 per year on most lots, added to the annual property tax bill. This fee funds the infrastructure the developer installed, including roads and stormwater systems, and runs in perpetuity until the bonds retire in 15 to 30 years. At $2,100 per year that is $175 per month added to ownership cost with no mortgage balance offset. Many resale homes in Bloomingdale, Buckhorn, and other established Valrico subdivisions carry no CDD fee.',
    },
    {
      question: 'How much have tariffs added to new home prices in Valrico in 2026?',
      answer:
        'The National Association of Home Builders estimates tariffs on imported building materials have added approximately $9,200 to the cost of a typical new home nationally. Iron and steel prices are up 14 to 17.9 percent year-over-year as of mid-2026, and softwood lumber is up 6 to 10 percent. For buyers comparing new construction in Valrico to a resale home of similar age and size, some portion of the new construction premium above resale reflects tariff-driven cost escalation rather than a superior product.',
    },
    {
      question: 'What builder incentives are available on new homes in Valrico Q4 2026?',
      answer:
        'Pulte Homes at Valri Forest offers buyers who use Pulte Mortgage access to rate buydowns typically reducing the 30-year fixed to approximately 5.25 to 5.50 percent against a prevailing market rate near 6.5 percent, plus closing cost credits up to approximately $25,000 depending on the floor plan and move-in timeline. These incentives require use of the builder\'s affiliated lender. Homes by WestBay at Northwood Estates also uses a preferred lender structure for incentives. Buyers who bring outside financing typically lose most or all of the incentive package.',
    },
    {
      question: 'What is the main advantage of buying resale over new construction in Valrico right now?',
      answer:
        'Resale buyers in Valrico in Q4 2026 benefit from immediate availability (closing in 30 to 60 days), no rate lock expiration risk on extended timelines, existing seller negotiating leverage (more than 35 percent of listings have taken price reductions and sellers are offering closing credits), no design center upgrade costs on top of base price, and no CDD fees in most established neighborhoods. Resale also avoids the tariff-driven construction cost premium baked into new home pricing in late 2026.',
    },
  ],
  publish_date: '2026-11-09T10:00:00.000Z',
  cta_type: 'consultation' as const,
  featured_image: '/images/bloomingdale-brick-home-palm-landscaping-valrico.jpg' as string | null,
  featured_image_alt:
    'Bloomingdale area brick home in Valrico FL with palm tree landscaping, representing the resale market buyers compare against new construction at Valri Forest and Northwood Estates in Q4 2026' as string | null,
  related_slugs: [
    'valrico-fl-new-construction-homes-2026',
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
