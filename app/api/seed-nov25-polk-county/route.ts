import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'polk-county-fl-real-estate-market-2026';

const META = {
  title: 'Polk County FL Real Estate Market 2026: Lakeland, Winter Haven, Haines City, and Beyond',
  excerpt:
    'Polk County FL real estate in 2026: county-wide median around $305,000-$315,000, down 1.1-2.3% year over year, with 4.7 months of supply and a 93.9% sale-to-list ratio. Complete breakdown of Lakeland, Winter Haven, Auburndale, Haines City, Davenport, and Bartow, with direct comparison to Valrico and east Hillsborough for buyers evaluating both markets.',
  pillar: 'comparison',
  tags: [
    'Polk County FL',
    'Lakeland FL',
    'Winter Haven FL',
    'Neighboring Communities',
    'Market Report',
    '2026',
    'Tampa Bay',
    'Home Prices',
    'Haines City',
    'Davenport FL',
    'East Hillsborough',
    'Auburndale FL',
  ],
  meta_title: 'Polk County FL Real Estate Market 2026: Complete City Breakdown | ValricoAgent.com',
  meta_description:
    'Polk County FL real estate market 2026: median $305K-$315K, 4.7 months supply, 93.9% sale-to-list ratio. Lakeland, Winter Haven, Haines City, Davenport, Auburndale, and Bartow breakdown with Valrico comparison. Expert guide from Barrett Henry, REMAX Collective.',
  focus_keyword: 'Polk County FL real estate market 2026',
  secondary_keywords: [
    'Polk County FL home prices 2026',
    'Lakeland FL real estate market 2026',
    'Winter Haven FL housing market 2026',
    'Haines City FL real estate 2026',
    'Polk County vs Hillsborough County real estate',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the median home price in Polk County FL in 2026?',
      answer:
        'Polk County recorded a county-wide median sale price of approximately $305,000 to $315,000 for single-family homes through mid-2026, based on Redfin county data and Florida Realtors reports. This represents a year-over-year decline of approximately 1.1% to 2.3% from 2025 figures, reflecting rate-driven demand softening. The county had approximately 5,600 to 5,800 active residential listings and roughly 4.7 months of supply in mid-2026, consistent with buyer-favorable conditions. Prices vary significantly by city: Lakeland tracks at $295,000 to $320,000, while Winter Haven runs approximately $265,000 to $302,000 and Davenport new construction starts at $280,000 to $400,000 depending on the community.',
    },
    {
      question: 'How does Polk County compare to Valrico FL for homebuyers?',
      answer:
        'Polk County offers purchase prices 20% to 30% below the Valrico median, making it attractive for buyers who prioritize price over proximity to Tampa. The core tradeoff is commute time: central Lakeland is 35 to 40 miles from Tampa on I-4, adding 40 to 60 minutes of daily commute versus Valrico\'s 20 to 35 minutes. Polk County schools generally perform below Hillsborough County averages, while Valrico\'s Bloomingdale High and Newsome High schools are strong performers. Buyers who work remotely, are retired, or prioritize lakefront living often find Polk County significantly more compelling than Valrico. Daily Tampa commuters typically prefer to pay the Hillsborough premium.',
    },
    {
      question: 'Is Lakeland FL a good place to buy in 2026?',
      answer:
        'Lakeland is a solid buy for the right buyer profile in 2026. The city offers genuine urban amenities -- downtown restaurants, an arts scene, healthcare employment at Lakeland Regional Health, and Florida Polytechnic University -- at prices 20% below comparable Hillsborough County communities. The I-4 commute to Tampa is the primary deterrent. Buyers who work locally in Polk County, remote workers, retirees, and investors find Lakeland compelling. The market is currently buyer-favorable with a 93.9% sale-to-list ratio countywide and meaningful closing cost concessions available. First-time buyers with a $275,000 to $310,000 budget who cannot afford Valrico should evaluate Lakeland seriously.',
    },
    {
      question: 'What is the real estate market like in Haines City and Davenport FL in 2026?',
      answer:
        'Haines City and Davenport in southern Polk County are among Florida\'s most active real estate corridors, driven by proximity to Walt Disney World approximately 20 to 25 miles away and aggressive new construction from national builders. Single-family homes range from $280,000 to $400,000 with the new construction pipeline setting the price ceiling on resale. The corridor has a significant short-term rental investor market; communities permitted for vacation rentals trade at a premium. Buyers should verify CDD fees, which frequently add $1,000 to $2,500 per year, and confirm short-term rental permissibility before purchase. Days on market for resale homes average 55 to 70 days with meaningful negotiating room.',
    },
    {
      question: 'Are there sinkhole risks when buying in Polk County FL?',
      answer:
        'Yes, central Florida and Polk County specifically have elevated sinkhole activity compared to coastal and north Florida markets. Polk County\'s geology includes karst limestone formations that can produce sinkholes. Buyers should request a sinkhole inspection on homes older than 10 years, particularly in central Polk County communities like Lakeland, Winter Haven, and Auburndale. Homeowners insurance in Polk County requires a sinkhole endorsement or coverage as an add-on, which adds $200 to $600 annually to insurance premiums depending on the carrier and property location. This cost should be factored into the total monthly payment analysis before writing an offer.',
    },
  ],
  publish_date: '2026-11-24T16:00:00.000Z',
  cta_type: 'valuation' as const,
  featured_image: '/images/lakeland-fl-real-estate-guide.jpg' as string | null,
  featured_image_alt:
    'Lakeland FL real estate market overview showing residential homes representing Polk County housing market conditions in 2026' as string | null,
  related_slugs: [
    'lakeland-fl-real-estate-market-2026',
    'valrico-fl-vs-plant-city-fl-where-to-buy-2026',
    'plant-city-fl-real-estate-market-2026',
    'valrico-fl-home-price-forecast-2027',
    'valrico-fl-real-estate-market-update-november-2026',
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
