import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-vs-apollo-beach-fl-where-to-buy-2026';

const META = {
  title: 'Valrico FL vs Apollo Beach FL: Where to Buy in 2026',
  excerpt:
    'Valrico and Apollo Beach are both Hillsborough County suburbs near Tampa, but the two markets differ meaningfully in price, schools, insurance costs, commute patterns, and lifestyle. This Q4 2026 comparison breaks down what you actually get for your money in each community so you can make a data-driven decision.',
  pillar: 'comparison',
  tags: [
    'Valrico FL',
    'Apollo Beach FL',
    'Where to Buy',
    'Comparison',
    '2026',
    'Hillsborough County',
    'SouthShore',
    'East Hillsborough',
    'School Zones',
    'Newsome High School',
    'Waterset',
    'Buyer Guide',
    'Market Comparison',
  ],
  meta_title: 'Valrico FL vs Apollo Beach FL: Where to Buy in 2026 | ValricoAgent.com',
  meta_description:
    'Valrico vs Apollo Beach in Q4 2026: price comparison ($370K-$472K vs $439K-$504K), school zones (Newsome HS vs East Bay HS), commute, flood insurance costs, HOA and CDD fees, and which buyer fits each market. Data-driven guide from a local expert.',
  focus_keyword: 'Valrico FL vs Apollo Beach FL where to buy 2026',
  secondary_keywords: [
    'Valrico vs Apollo Beach real estate 2026',
    'Apollo Beach FL real estate market 2026',
    'Valrico FL vs Apollo Beach homes comparison',
    'Apollo Beach Waterset vs Valrico Buckhorn',
    'SouthShore vs east Hillsborough real estate 2026',
    'Newsome High School zone vs East Bay High School zone',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Which is more expensive: Valrico FL or Apollo Beach FL?',
      answer:
        'The two markets are closely matched for non-waterfront homes. Valrico 33594 (Bloomingdale area) has a median sold price of $370,000 to $382,000 in Q4 2026. Valrico 33596 (Buckhorn, River Hills, Diamond Hill) has a median of $462,000 to $472,000. Apollo Beach 33572 tracks a typical home value of approximately $439,000 to $504,000. Non-waterfront Apollo Beach homes compete directly with Valrico on price. Waterfront canal and Tampa Bay access homes in Apollo Beach carry a $100,000 to $300,000 premium over comparable inland homes.',
    },
    {
      question: 'Which market has better schools: Valrico or Apollo Beach?',
      answer:
        'Valrico 33596 feeds to Newsome High School, one of the top-rated high schools in Hillsborough County with a consistent A rating from the Florida DOE. Newsome zone access adds $20,000 to $35,000 to comparable home prices in 33596 and creates durable resale demand from families. Apollo Beach (33572) feeds to East Bay High School (B-rated) and offers the Waterset Charter School (K-8) on-site. For families prioritizing high school quality and resale value tied to school zone, Valrico 33596 wins. For younger families who prefer a charter option within their community, Apollo Beach has an advantage.',
    },
    {
      question: 'How much does flood insurance cost in Apollo Beach vs Valrico?',
      answer:
        'Most established residential neighborhoods in Valrico are in FEMA Flood Zone X, which carries minimal flood risk and does not require mandatory flood insurance. Homeowners insurance in Valrico runs approximately $2,800 to $4,200 annually for a $400,000 to $470,000 home. Apollo Beach waterfront properties in Flood Zone AE or VE require mandatory flood insurance, adding $1,500 to $4,500 or more annually. Total insurance for a waterfront Apollo Beach home runs $4,500 to $8,000 per year versus $2,800 to $4,200 for a comparable Valrico home, a difference of $150 to $300 per month.',
    },
    {
      question: 'What are the HOA and CDD fees in Waterset Apollo Beach vs Valrico neighborhoods?',
      answer:
        'Waterset in Apollo Beach carries both HOA fees and CDD assessments. CDDs at Waterset run approximately $1,200 to $2,000 annually and appear as a line item on your property tax bill. Combined monthly carrying cost from HOA plus CDD adds $200 to $350 per month versus many Valrico neighborhoods. Most established Valrico subdivisions carry no CDD. Where HOAs exist in Valrico, fees typically run $50 to $150 per month. River Hills Country Club carries $700 to $1,200 per year in mandatory HOA but no CDD.',
    },
    {
      question: 'Which community has a better commute to Tampa?',
      answer:
        'Apollo Beach is approximately 16 miles from downtown Tampa via US-41 and I-75, with a typical commute of 25 to 40 minutes in normal traffic. Central Valrico is approximately 20 to 25 miles from downtown Tampa via SR-60 or Causeway Boulevard to I-75. For the downtown Tampa commute, Apollo Beach has a slight raw mileage advantage. However, Valrico buyers closer to SR-60 can access the Selmon Expressway for a faster route to Ybor City, South Tampa, and downtown compared to I-75. For the SouthShore employment corridor on US-301, Apollo Beach is the stronger choice.',
    },
  ],
  publish_date: '2026-11-22T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/apollo-beach-fl-market-2026.png' as string | null,
  featured_image_alt:
    'Apollo Beach FL waterfront community aerial view representing the comparison between Valrico FL and Apollo Beach FL real estate markets in 2026' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-vs-fishhawk-where-to-buy',
    'apollo-beach-fl-real-estate-market-2026',
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
