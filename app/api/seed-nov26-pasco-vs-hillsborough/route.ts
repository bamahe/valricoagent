import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'pasco-county-vs-east-hillsborough-real-estate-2027';

const META = {
  title: 'Pasco County vs East Hillsborough County Real Estate 2027: Where Should Tampa Bay Buyers Buy?',
  excerpt:
    'Wesley Chapel and Land O Lakes (Pasco County, median ~$368K-$450K) versus Valrico, Brandon, and Riverview (Hillsborough County, median ~$370K-$475K). A data-driven comparison of prices, school zones, CDD fees, commute times, and new construction for Tampa Bay buyers deciding in 2027.',
  pillar: 'comparison',
  tags: [
    'Pasco County',
    'Hillsborough County',
    'Wesley Chapel FL',
    'Land O Lakes FL',
    'Valrico FL',
    'Brandon FL',
    'Riverview FL',
    'Market Comparison',
    '2027',
    'Buyer Guide',
    'Tampa Bay Real Estate',
    'New Construction',
    'CDD Fees',
    'School Zones',
  ],
  meta_title:
    'Pasco County vs East Hillsborough County Real Estate 2027 | ValricoAgent.com',
  meta_description:
    'Should Tampa Bay buyers choose Pasco County (Wesley Chapel, Land O Lakes) or East Hillsborough (Valrico, Brandon, Riverview) in 2027? Data on prices, CDDs, school zones, commutes, and builder incentives compared.',
  focus_keyword: 'Pasco County vs east Hillsborough County real estate 2027',
  secondary_keywords: [
    'Wesley Chapel vs Valrico FL where to buy 2027',
    'Pasco County vs Hillsborough County home prices',
    'east Hillsborough county real estate 2027',
    'Wesley Chapel vs Valrico schools',
    'Pasco County CDD fees new construction 2027',
    'Tampa Bay buyer market comparison 2027',
    'Land O Lakes vs Valrico FL real estate',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Is it better to buy in Pasco County or Hillsborough County near Tampa in 2027?',
      answer:
        "The answer depends on your priorities. East Hillsborough County (Valrico, Brandon, Riverview) is better for buyers who work in Tampa or MacDill AFB, have school-age children targeting the Newsome High School zone, or want to minimize recurring HOA and CDD fees. Pasco County (Wesley Chapel, Land O Lakes) is better for buyers who want new construction with builder incentives, prefer community amenities like Crystal Lagoons, or work locally in Pasco County's growing employment corridor. Both markets have buyer leverage in late 2026 and early 2027.",
    },
    {
      question:
        'What is the price difference between Pasco County and east Hillsborough County?',
      answer:
        "Pasco County's 12-month median sold price runs approximately $368,000, while Hillsborough County's runs approximately $400,000. The gap narrows in specific submarkets: Wesley Chapel's higher-end communities can hit $420,000 to $450,000, while Valrico 33594 runs $370,000 to $385,000. Valrico 33596 (Newsome HS zone) commands $460,000 to $475,000. The raw price difference may be offset by Pasco County's CDD fees, which add $1,500 to $3,500 per year to the total cost of ownership.",
    },
    {
      question: 'How much do CDD fees add to monthly housing costs in Wesley Chapel?',
      answer:
        'Most Wesley Chapel master-planned communities carry Community Development District (CDD) fees of $1,500 to $3,500 per year added to your annual property tax bill. That equals $125 to $290 per month in additional cost on top of your mortgage, property taxes, and HOA. A Wesley Chapel home at $420,000 with $250 per month in CDDs has the same effective carrying cost as a Valrico home at approximately $450,000 with no CDD. Always calculate the total monthly cost, not just the purchase price.',
    },
    {
      question: 'Which Tampa Bay suburbs have the best school zones in 2027?',
      answer:
        'Valrico 33596 feeds to Newsome High School, consistently ranked in the top five in Hillsborough County and top tier statewide, making it the strongest identifiable school zone premium in east Hillsborough County. Wiregrass Ranch High School in Wesley Chapel and FishHawk Ranch (which also feeds Newsome in some sections) are strong Pasco and Hillsborough options respectively. Sumner High School in Riverview 33579 is improving but has not yet reached Newsome\'s tier. Buyers with school-age children get the clearest value signal targeting Valrico 33596.',
    },
    {
      question:
        'Is the commute from Wesley Chapel to Tampa significantly longer than from Valrico?',
      answer:
        'Yes. The commute from Wesley Chapel to downtown Tampa averages 40 to 55 minutes during peak hours via I-75, compared to 25 to 35 minutes from Valrico. The difference of 15 to 20 minutes each way adds up to 125 to 165 hours per year in additional drive time for a five-day commuter. Buyers who work in Pasco County (SR-54, US-41, BayCare/AdventHealth campus) or in north Tampa can largely negate this disadvantage. Buyers who work in South Tampa, MacDill AFB, or along the Selmon Expressway should weight the Valrico commute advantage significantly.',
    },
  ],
  publish_date: '2026-11-25T12:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/northwood-estates-valrico-westbay.jpg' as string | null,
  featured_image_alt:
    'Northwood Estates new construction community in Valrico FL 33596 by Homes by WestBay representing east Hillsborough County real estate for buyers comparing Pasco County alternatives in 2027' as string | null,
  related_slugs: [
    'valrico-fl-vs-wesley-chapel-fl-where-to-buy-2026',
    'valrico-fl-vs-new-tampa-fl-where-to-buy-2026',
    'valrico-fl-vs-lutz-fl-where-to-buy-2026',
    'valrico-fl-new-construction-vs-resale-homes-q4-2026',
    'valrico-homes-for-sale-without-cdd',
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
