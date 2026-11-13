import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'hillsborough-county-fl-real-estate-year-end-2026';

const META = {
  title: 'Hillsborough County FL Real Estate Market: 2026 Year-End Report for Buyers and Sellers',
  excerpt:
    'Hillsborough County FL median sold price ~$399,900, 4 months supply, balanced market. Full 2026 year-end breakdown by submarket, insurance cost impact, Amendment 3 property tax changes, and Q4 buyer strategy for Brandon, Valrico, Riverview, Plant City, and Tampa.',
  pillar: 'market',
  tags: [
    'Hillsborough County FL',
    'Year-End 2026',
    'Market Report',
    'Tampa Bay Real Estate',
    'Brandon',
    'Valrico',
    'Riverview',
    'Plant City',
    'FishHawk Ranch',
    'Wesley Chapel',
    'Amendment 3',
    'Homeowners Insurance',
    'Buyer Strategy',
  ],
  meta_title: 'Hillsborough County FL Real Estate 2026 Year-End Report | ValricoAgent.com',
  meta_description:
    'Hillsborough County FL 2026 year-end market report: median $399,900, 4 months supply, 26-30% of listings with price cuts. Submarket breakdown for Brandon, Valrico, Riverview, Plant City. Amendment 3 impact, insurance costs, and Q4 buyer strategy.',
  focus_keyword: 'Hillsborough County FL real estate market 2026',
  secondary_keywords: [
    'Hillsborough County home prices 2026',
    'Tampa Bay real estate year-end 2026',
    'Hillsborough County housing market report',
    'buy a home Hillsborough County 2026',
    'Hillsborough County real estate forecast 2027',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Is it a good time to buy a home in Hillsborough County in late 2026?',
      answer:
        'For buyers with stable income and a plan to stay at least 3 to 5 years, yes. Prices are flat to slightly down from peak, seller concessions are common, and Amendment 3 locks in a favorable assessed value baseline going into 2027. The main risk is buying overpriced relative to current comps, which is preventable with solid agent representation and current market data.',
    },
    {
      question: 'What is the median home price in Hillsborough County in 2026?',
      answer:
        'MLS closed sale data puts the countywide median at approximately $399,900 as of October 2026, up 0.6 percent year over year. This blends everything from $280,000 condos in Sun City Center to $600,000-plus homes in FishHawk Ranch and New Tampa. Specific area medians vary significantly, with Brandon at $335K-$365K and Valrico at approximately $413,000.',
    },
    {
      question: 'Which Hillsborough County neighborhoods are holding value best in 2026?',
      answer:
        'Valrico 33596 (Newsome HS zone), FishHawk Ranch in Lithia (33547), and select parts of New Tampa (33647) have shown the strongest price retention in 2026. These areas combine strong school zones with desirable community character and limited new construction competition nearby.',
    },
    {
      question: 'How much is homeowners insurance in Hillsborough County in 2026?',
      answer:
        'Averages run approximately $3,815 per year for a typical single-family home, but premiums vary significantly by roof age, construction type, proximity to water, and carrier. Homes with roofs under 10 years old with hip-roof construction can often find rates meaningfully below average. Homes with aging roofs or in higher-risk flood zones can pay significantly more.',
    },
    {
      question: 'What does Florida Amendment 3 mean for Hillsborough County homebuyers in 2027?',
      answer:
        'Amendment 3, passed in November 2026, expands the homestead exemption and increases Save Our Homes portability benefits. For buyers purchasing in late 2026, this locks in a favorable assessed value baseline with slower growth going forward, reducing future property tax increases. It also makes it easier for existing homeowners to downsize or upsize within the county by increasing the portability cap on their accumulated Save Our Homes benefit.',
    },
  ],
  publish_date: '2026-11-13T14:00:00.000Z',
  cta_type: 'market-report' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Hillsborough County FL 2026 year-end real estate market report - buyer reviewing market data for Brandon, Valrico, Riverview, Plant City and Tampa Bay suburbs' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-november-2026',
    'brandon-fl-real-estate-market-q4-2026-year-end-update',
    'florida-amendment-3-passed-november-2026-valrico-tax-savings',
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
