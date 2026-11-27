import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'what-500000-buys-valrico-fl-neighborhoods-q4-2026';

const META = {
  title: 'What $500,000 Buys in Valrico FL by Neighborhood in Q4 2026',
  excerpt:
    'At $500,000 in Valrico FL Q4 2026, buyers are above the median in both ZIP codes and shopping the upper half of the east Hillsborough market. River Hills mid-tier, Diamond Hill entry-to-mid, upper Buckhorn and Buckhorn Preserve in 33596, and top-of-market Bloomingdale in 33594: a neighborhood-by-neighborhood breakdown of square footage, price per sqft, school zones, and what sellers are actually accepting.',
  pillar: 'buyer',
  tags: [
    'Valrico FL',
    'Buyer Guide',
    '$500000',
    'What You Can Buy',
    'Q4 2026',
    '33594',
    '33596',
    'River Hills',
    'Diamond Hill',
    'Buckhorn',
    'Buckhorn Preserve',
    'Bloomingdale',
    'Newsome High School',
    'Durant High School',
    'Hillsborough County',
    'Price Per Square Foot',
    '2026',
  ],
  meta_title:
    'What $500,000 Buys in Valrico FL by Neighborhood Q4 2026 | ValricoAgent.com',
  meta_description:
    'What does $500,000 buy in Valrico FL in Q4 2026? River Hills mid-tier (2,200-2,800 sqft, Durant HS), Diamond Hill entry (2,200-2,800 sqft, Newsome zone), upper Buckhorn and Buckhorn Preserve (2,300-2,900 sqft), and top-tier Bloomingdale 33594 (2,800-3,500 sqft). Price per sqft, school zones, and total monthly cost breakdown.',
  focus_keyword: 'what 500000 buys Valrico FL 2026',
  secondary_keywords: [
    'what does 500000 buy in Valrico FL',
    'Valrico FL homes for 500000 2026',
    'Valrico 33596 $500K neighborhoods',
    'River Hills Valrico FL 500000',
    'Diamond Hill Valrico FL 500000',
    'Valrico FL buyer guide Q4 2026 500K',
    'Buckhorn Preserve Valrico 500K',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What neighborhoods can a $500,000 budget access in Valrico FL?',
      answer:
        'At $500,000 in Q4 2026, buyers in Valrico 33596 can access the mid-tier of River Hills Country Club (gated golf community, Durant HS zone), entry-to-mid Diamond Hill (gated, Newsome HS zone), and the upper tier of Buckhorn and Buckhorn Preserve (Newsome HS zone). In Valrico 33594, $500,000 is at the luxury end of Bloomingdale with 2,800 to 3,500 square feet on larger lots. This budget clears the median in both ZIP codes: 33594 median is approximately $370,000 to $382,000 and 33596 median is approximately $462,000 to $472,000.',
    },
    {
      question: 'Does $500,000 get you into the Newsome High School zone in Valrico?',
      answer:
        'Yes. At $500,000, buyers have solid access to the Newsome High School zone in Valrico through Diamond Hill (gated, $185 to $220/sqft, 2,200 to 2,800 sqft), upper-tier Buckhorn (non-gated, $185 to $215/sqft, 2,300 to 2,800 sqft), and Buckhorn Preserve (conservation-backed lots, $180 to $205/sqft, 2,400 to 2,900 sqft). River Hills at $500,000 is in the Durant High School zone, not Newsome. Always verify the specific street address in the Hillsborough County Schools boundary locator before making an offer.',
    },
    {
      question: 'What is the difference between River Hills and Diamond Hill at $500,000 in Valrico?',
      answer:
        'River Hills at $500,000 offers a mid-tier position in a gated golf course community with 2,200 to 2,800 sqft, full amenity access, and Durant High School zone. Diamond Hill at $500,000 offers entry-to-mid in a gated community with 2,200 to 2,800 sqft, Newsome High School zone, and newer construction concentrated in the 2004 to 2015 build range. The core trade-off is school zone (Newsome vs. Durant) versus community character (golf course vs. newer gated neighborhood). Families prioritizing Newsome HS should consider Diamond Hill. Buyers who prioritize country club lifestyle and do not have a Newsome HS requirement should evaluate River Hills.',
    },
    {
      question: 'What is the total monthly cost of a $500,000 home in Valrico FL in Q4 2026?',
      answer:
        'At $500,000 with 10 percent down at approximately 7.10 to 7.25 percent (November 2026 rates), the principal and interest payment is about $3,026 to $3,071 per month. Add property taxes of approximately $565 to $620 per month, homeowners insurance of $310 to $360 per month, and HOA fees of $0 to $175 depending on the community. Total monthly housing cost typically runs $3,916 to $4,226 before PMI. Buyers closing before December 31, 2026 and filing homestead exemption can save approximately $88 to $100 per month in taxes starting in the 2027 tax year under Amendment 3.',
    },
    {
      question: 'Is $500,000 a good negotiating position in Valrico in Q4 2026?',
      answer:
        'Yes. With 50 to 68 average days on market across Valrico and 37 percent of active listings showing price reductions in Q4 2026, buyers at $500,000 have real leverage in River Hills, Diamond Hill, and Buckhorn. Many listings in the $520,000 to $540,000 range that opened in spring 2026 have followed the market down and are negotiable to $495,000 to $505,000 after 60 or more days on market. Sellers in this range are also offering concessions including seller-paid rate buydowns of $9,000 to $12,000 (2 discount points) that reduce the monthly payment more effectively than an equivalent price cut.',
    },
  ],
  publish_date: '2026-11-26T12:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/valrico-fl-luxury-estates.jpg' as string | null,
  featured_image_alt:
    'Luxury estate homes in Valrico FL representing what $500,000 buys in Valrico neighborhoods including River Hills, Diamond Hill, Buckhorn, and Bloomingdale in Q4 2026' as string | null,
  related_slugs: [
    'what-450000-buys-valrico-fl-neighborhoods-q4-2026',
    'what-600000-buys-valrico-fl-east-hillsborough-q4-2026',
    'what-350000-buys-valrico-fl-neighborhoods-q4-2026',
    'valrico-fl-home-prices-by-neighborhood-q4-2026',
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
