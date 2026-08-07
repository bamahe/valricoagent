/**
 * One-time seed route to insert two new blog posts.
 * DELETE THIS FILE after successful seed.
 * GET /api/seed-aug7?token=aug7seed2026
 */
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

function getServiceClient() {
  const { createClient } = require('@supabase/supabase-js');
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

const POSTS: Array<{
  slug: string;
  title: string;
  excerpt: string;
  pillar: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  focus_keyword: string;
  secondary_keywords: string[];
  schema_type: string;
  faq_data: { question: string; answer: string }[];
  publish_date: string;
  cta_type: string;
  featured_image?: string;
  featured_image_alt?: string;
}> = [
  {
    slug: 'apollo-beach-fl-real-estate-market-2026',
    title: 'Apollo Beach FL Real Estate Market 2026: Waterfront Living, Insurance Costs, and Buyer Opportunities',
    excerpt: 'Apollo Beach FL (33572) median sale price $479,000-$538,000 in 2026, 95-105 days on market, and 8.5 months of supply. A data-backed look at waterfront homes, flood zone insurance costs, and how Apollo Beach compares to Valrico for buyers.',
    pillar: 'comparison',
    tags: ['Apollo Beach FL', 'Neighboring Communities', '33572', 'Market Report', '2026', 'Waterfront', 'SouthShore', 'Hillsborough County'],
    meta_title: 'Apollo Beach FL Real Estate Market 2026: Prices & Buyer Guide | ValricoAgent.com',
    meta_description: 'Apollo Beach FL real estate market 2026: median $479K-$538K, 95-105 day DOM, 8.5 months supply. Waterfront flood zone costs, Covington Park, SouthShore Falls, and how 33572 compares to Valrico.',
    focus_keyword: 'Apollo Beach FL real estate market 2026',
    secondary_keywords: ['Apollo Beach FL homes for sale 2026', 'Apollo Beach waterfront homes', '33572 housing market 2026', 'Apollo Beach vs Valrico real estate', 'Apollo Beach flood zone insurance'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Apollo Beach FL in 2026?', answer: 'The median sale price in Apollo Beach FL (33572) ranges from $479,000 to $538,000 as of mid-2026, depending on the source and trailing time period. Non-waterfront homes in Covington Park run $410,000 to $475,000, while canal-front properties typically start at $500,000 and go considerably higher.' },
      { question: 'How much does flood insurance cost in Apollo Beach FL?', answer: "Flood insurance on canal-front Apollo Beach properties typically costs $2,500 to $6,000 per year under FEMA's Risk Rating 2.0 methodology, depending on the property's specific flood zone designation and elevation. Combined with homeowners insurance of $4,000 to $8,000 per year, total insurance costs on a waterfront property can exceed $10,000 to $14,000 annually." },
      { question: "Is Apollo Beach FL a buyer's or seller's market in 2026?", answer: "Apollo Beach is firmly in buyer's market territory in 2026, with 8.5 months of supply and 95 to 105 days on market. Sellers are accepting price reductions and closing cost contributions. The extended inventory reflects both post-hurricane listing activity and the insurance cost reality that has made waterfront buyers more deliberate." },
      { question: 'How does Apollo Beach FL compare to Valrico FL for real estate?', answer: 'Apollo Beach offers waterfront and canal access that Valrico does not have, but carries significantly higher insurance costs ($700 to $1,200/month on waterfront vs. $175 to $300/month in Valrico), slower market times (95-105 days vs. 57 days), and lower school zone rankings (Lennard HS vs. Newsome HS and Bloomingdale HS in Valrico). Apollo Beach is the right choice for buyers who need boat access; Valrico is better for families prioritizing schools.' },
      { question: 'What are the best neighborhoods in Apollo Beach FL?', answer: 'The primary neighborhoods in Apollo Beach are: canal-front homes along Apollo Beach Boulevard for boat access (prices $475,000 to $1.2M); Covington Park for non-waterfront new construction (prices $375,000 to $475,000); SouthShore Falls for 55-plus buyers (prices $350,000 to $550,000); and the Leisey Road corridor for newer subdivision homes ($380,000 to $470,000).' },
    ],
    publish_date: '2026-08-06T10:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/apollo-beach-fl-market-2026.png',
    featured_image_alt: 'Apollo Beach FL waterfront homes and canal docks in 33572 SouthShore Hillsborough County real estate market 2026',
  },
  {
    slug: 'lithia-fl-fishhawk-ranch-real-estate-market-2026',
    title: 'Lithia FL FishHawk Ranch Real Estate Market 2026: Prices, Schools, and Buyer Opportunities',
    excerpt: 'FishHawk Ranch Lithia FL average home value $492,517, median sale price $505,000-$550,000, and 69-71 days on market in 2026. A complete guide to the 33547 market, neighborhood tiers, school zones, and how FishHawk compares to Valrico for buyers.',
    pillar: 'comparison',
    tags: ['Lithia FL', 'FishHawk Ranch', 'Neighboring Communities', '33547', 'Market Report', '2026', 'Hillsborough County', 'New Construction'],
    meta_title: 'Lithia FL FishHawk Ranch Real Estate Market 2026 | ValricoAgent.com',
    meta_description: 'Lithia FL FishHawk Ranch real estate 2026: average home value $492,517, median $505K-$550K, 69-71 day DOM. Schools, neighborhood guide, and how 33547 compares to Valrico for buyers.',
    focus_keyword: 'Lithia FL FishHawk Ranch real estate market 2026',
    secondary_keywords: ['FishHawk Ranch homes for sale 2026', 'Lithia FL real estate 2026', '33547 housing market', 'FishHawk Ranch vs Valrico', 'Lithia FL home prices 2026'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Lithia FL FishHawk Ranch in 2026?', answer: 'The average home value in FishHawk Ranch Lithia FL is $492,517, down 2.2% year over year as of mid-2026. The median sale price for the broader 33547 ZIP code runs $505,000 to $550,000. Price per square foot in the community is approximately $224, reflecting the quality of housing stock and persistent lifestyle demand.' },
      { question: 'What schools serve FishHawk Ranch in Lithia FL?', answer: "FishHawk Ranch is served by some of the top-rated schools in Hillsborough County. High school feeds include Newsome High School for portions of the community. Barrington Middle School is located within the community. Elementary schools include Fishhawk Creek Elementary and Bevis Elementary, both highly rated. This school zone profile is a primary driver of the community's sustained price premium." },
      { question: 'How long are homes taking to sell in FishHawk Ranch Lithia FL in 2026?', answer: 'Homes in FishHawk Ranch and the broader 33547 ZIP are averaging 69 to 71 days on market as of mid-2026. That is slightly longer than the Valrico average of 57 days but well below the softness seen in Apollo Beach (95-105 days) or Ruskin (76-78 days).' },
      { question: "Is FishHawk Ranch Lithia FL a buyer's or seller's market in 2026?", answer: 'FishHawk Ranch is in a balanced to slightly buyer-favorable market in 2026, with prices down 2.2% to 4.8% year over year and days on market in the 69 to 71 day range. Buyers have negotiating leverage not seen since 2019, and sellers are accepting closing cost credits and price reductions on homes that have been listed for 60 or more days.' },
      { question: 'How does FishHawk Ranch in Lithia compare to Valrico FL for families?', answer: 'Both communities offer A-rated schools and established neighborhoods, but FishHawk Ranch offers a significantly larger amenity package including 25+ miles of trails, multiple pools, and Park Square. Valrico typically offers lower price points (especially 33594 at $378,907 median vs. $492,517 average in FishHawk) and lower HOA and CDD carrying costs. Families who want the full resort lifestyle pay the FishHawk premium; families who want value in a school-zone neighborhood choose Valrico.' },
    ],
    publish_date: '2026-08-06T12:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/fishhawk-ranch-luxury-estates.jpg',
    featured_image_alt: 'FishHawk Ranch luxury homes in Lithia FL 33547 real estate market 2026 master-planned community',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (token !== 'aug7seed2026') {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const sb = getServiceClient();
  const results: { slug: string; status: string; error?: string }[] = [];

  for (const post of POSTS) {
    // Check for duplicate
    const { data: existing } = await sb
      .from('blog_posts')
      .select('slug')
      .eq('slug', post.slug)
      .maybeSingle();

    if (existing) {
      results.push({ slug: post.slug, status: 'already_exists' });
      continue;
    }

    // Read content file
    const contentPath = path.join(process.cwd(), 'scripts', 'content', `${post.slug}.md`);
    let content: string;
    try {
      content = fs.readFileSync(contentPath, 'utf-8');
    } catch {
      results.push({ slug: post.slug, status: 'error', error: `Content file not found: ${contentPath}` });
      continue;
    }

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    const { error } = await sb.from('blog_posts').insert({
      ...post,
      content,
      status: 'published',
      word_count: wordCount,
      reading_time: readingTime,
      related_slugs: [],
      og_image: null,
    });

    if (error) {
      results.push({ slug: post.slug, status: 'error', error: error.message });
    } else {
      results.push({ slug: post.slug, status: `inserted (${wordCount} words, ${readingTime} min)` });
    }
  }

  return NextResponse.json({ results });
}
