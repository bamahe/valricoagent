/**
 * One-time seed route to upsert Riverview FL market post and insert Sun City Center FL post.
 * DELETE THIS FILE after successful seed.
 * GET /api/seed-aug9?token=aug9seed2026
 */
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';

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
  related_slugs: string[];
}> = [
  {
    slug: 'riverview-fl-real-estate-market-2026',
    title: 'Riverview FL Real Estate Market 2026: Prices, Neighborhoods, and How It Compares to Valrico',
    excerpt: 'Riverview FL real estate market 2026: 33569 median $399K, 33578 median $335K, 33579 median $398K, 70-day DOM, and 742 active listings. A ZIP-by-ZIP breakdown of Panther Trace, Triple Creek, South Fork, and how Riverview compares to Valrico for buyers, investors, and families.',
    pillar: 'comparison',
    tags: ['Riverview FL', 'Neighboring Communities', '33569', '33578', '33579', 'Market Report', '2026', 'Hillsborough County', 'New Construction'],
    meta_title: 'Riverview FL Real Estate Market 2026: Prices & Buyer Guide | ValricoAgent.com',
    meta_description: 'Riverview FL real estate market 2026: 33569 median $399K, 33578 median $335K, 33579 median $398K, 70-day DOM. Panther Trace, Triple Creek, South Fork, schools, and how Riverview compares to Valrico.',
    focus_keyword: 'Riverview FL real estate market 2026',
    secondary_keywords: ['Riverview FL homes for sale 2026', 'Riverview vs Valrico real estate', '33579 housing market 2026', 'Triple Creek Riverview FL', 'Panther Trace Riverview FL', 'Riverview FL home prices 2026'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Riverview FL in 2026?', answer: 'The median home price in Riverview FL varies by ZIP code in 2026. The 33569 ZIP (Panther Trace, Boyette Farms) has a median around $399,000. The 33578 ZIP has a median around $334,890, making it the most affordable entry point. The 33579 ZIP (Triple Creek, South Fork, Sumner HS zone) has a median around $398,175. Overall, Riverview median sale prices in mid-2026 are running $375,000 to $400,000 depending on the trailing period.' },
      { question: 'How long are homes taking to sell in Riverview FL in 2026?', answer: 'Homes in Riverview FL are averaging approximately 70 days on market as of June 2026, up from 59 days a year earlier. That represents a significant slowdown from the under-15-day averages seen in 2022. Well-priced homes in strong school zones still move in 25 to 40 days, while overpriced or dated listings can sit 90 to 120 days or longer.' },
      { question: 'Is Riverview FL a buyer\'s or seller\'s market in 2026?', answer: 'Riverview is technically in seller territory at about 2.4 months of supply, but the market behavior favors buyers significantly more than it did in 2021 or 2022. With 742 active listings, 70-day average days on market, and sellers regularly accepting price reductions and closing cost contributions, buyers have the most leverage they have had since 2019.' },
      { question: 'How does Riverview FL compare to Valrico FL for families?', answer: 'Riverview and Valrico have similar price ranges in 33569 and 33579 ($398K to $399K median) versus Valrico 33594 ($378,907 median). The key difference is school zones. Valrico 33596 feeds Newsome High School, which consistently ranks among the top high schools in Hillsborough County. Riverview\'s top school zone is Sumner High School in 33579, which is improving but has not yet reached Newsome\'s performance tier. Riverview has far more new construction options. Valrico offers larger lots and no CDD fees in most established neighborhoods.' },
      { question: 'What is the best neighborhood in Riverview FL to buy in 2026?', answer: 'For families, Triple Creek (33579, Sumner HS zone) and Panther Trace (33569, Riverview HS zone) offer the best amenity packages and long-term resale demand. For value buyers, South Fork (33579) delivers newer housing at a modest discount to Triple Creek. For investors, 33578 near I-75 provides the best yield math with median prices around $335,000 and rents of $1,900 to $2,100 per month.' },
      { question: 'Do Riverview FL neighborhoods have CDD fees?', answer: 'Many of Riverview\'s newer master-planned communities have Community Development District (CDD) fees. Triple Creek and similar communities in 33579 carry CDDs of $1,500 to $2,500 per year added to the annual tax bill, on top of property taxes and HOA dues. Older established neighborhoods in 33569 like Panther Trace may not have CDDs. Always verify CDD obligations before making an offer, as they add $125 to $210 per month to your effective carrying cost.' },
    ],
    publish_date: '2026-08-09T10:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/riverview-fl-real-estate-market-2026.jpeg',
    featured_image_alt: 'Riverview FL homes for sale 2026 in Hillsborough County neighborhoods including Panther Trace, Triple Creek, and South Fork',
    related_slugs: ['brandon-fl-real-estate-market-2026', 'valrico-real-estate-mid-year-2026-review', 'valrico-vs-brandon-vs-lithia-where-to-buy-in-east-hillsborough-2026'],
  },
  {
    slug: 'sun-city-center-fl-real-estate-market-2026',
    title: 'Sun City Center FL Real Estate Market 2026: Prices, Communities, and Retirement Living Guide',
    excerpt: 'Sun City Center FL real estate market 2026: median $262,500 to $305,000, down 9.5% year over year, 58 to 68 days on market. A complete guide to Kings Point, original SCC, and Renaissance for retirees comparing 55-plus options in Hillsborough County.',
    pillar: 'comparison',
    tags: ['Sun City Center FL', 'Neighboring Communities', '33573', 'Market Report', '2026', '55 Plus', 'Retirement', 'Hillsborough County'],
    meta_title: 'Sun City Center FL Real Estate Market 2026: Prices & Community Guide | ValricoAgent.com',
    meta_description: 'Sun City Center FL real estate market 2026: median $262,500-$305,000, down 9.5% YoY, 8 golf courses. Kings Point, original SCC, Renaissance communities compared for retirees and 55-plus buyers.',
    focus_keyword: 'Sun City Center FL real estate market 2026',
    secondary_keywords: ['Sun City Center FL homes for sale 2026', 'Kings Point Sun City Center', 'Renaissance Sun City Center FL', '33573 housing market 2026', 'Sun City Center vs Valencia Lakes', '55 plus communities Hillsborough County'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Sun City Center FL in 2026?', answer: 'The median sale price in Sun City Center FL (33573) is $262,500 to $305,000 in mid-2026 depending on the trailing period. The 12-month trailing median is near $305,000, while the most recent months (May to July 2026) are landing closer to $262,500 to $285,000. Prices are down approximately 9.5% year over year, one of the steeper declines in south Hillsborough County.' },
      { question: 'What are the different communities in Sun City Center FL?', answer: 'Sun City Center has three main community types. The original Sun City Center, developed by Del Webb starting in 1961, offers large sections of single-family homes and villas with access to the Sun City Center Community Association\'s extensive amenity complex including pools, fitness centers, and an 18-hole golf course. Kings Point is the most amenity-dense option, a gated community of approximately 5,277 homes with a 90,000-square-foot clubhouse, 27 holes of golf, six pools, and HOA fees of $400 to $600 per month. Renaissance is the newest section, developed in the 2000s to 2010s, featuring more contemporary homes in the $340,000 to $500,000 range and a private country club with an 18-hole championship golf course.' },
      { question: 'How many golf courses does Sun City Center FL have?', answer: 'Sun City Center has eight golf courses with 162 total holes, making it one of the best destinations for golf-focused retirees in Florida. The community is also home to the Ben Sutton Golf School, which offers instruction for golfers at every level. Both championship and executive courses are available within the Sun City Center area.' },
      { question: 'What are the total monthly costs of living in Sun City Center FL?', answer: 'The total monthly cost of ownership in Sun City Center is significantly higher than the purchase price alone suggests. For a median Kings Point villa at $265,000 with 20% down at 6.25%, the breakdown is approximately $1,306 per month in principal and interest, $290 to $350 per month in property taxes, $150 to $290 per month in homeowner\'s insurance, and $400 to $600 per month in HOA fees. The total monthly carrying cost typically runs $2,200 to $2,600 per month. Buyers should budget against this total number, not just the mortgage payment.' },
      { question: 'How does Sun City Center FL compare to Valencia Lakes and Medley at SouthShore Bay?', answer: 'Sun City Center wins on price, golf access, and the scale of its social infrastructure. Kings Point villas start around $175,000, compared to $350,000 to $500,000 at Valencia Lakes and similar ranges at Medley at SouthShore Bay. Sun City Center has eight golf courses with 162 holes, which neither Valencia Lakes nor Medley can match. Valencia Lakes offers a larger amenity building and stricter 55-plus enforcement. Medley at SouthShore Bay is newer construction with a resort feel and the 5.5-acre Crystal Lagoon. Apollo Beach offers waterfront access but at significantly higher prices, often $479,000 to $538,000 median, with insurance costs that can exceed $10,000 per year.' },
      { question: 'Is Sun City Center FL a good investment in 2026?', answer: 'Sun City Center is best understood as a lifestyle purchase rather than a traditional investment. The 55-plus age restriction limits resale to age-qualified buyers, which is a smaller pool than the general market. The 9.5% year-over-year price decline should not be ignored by buyers with short holding timelines. For buyers making a long-term lifestyle decision with a 10-plus-year horizon, the case is more reasonable. The Tampa Bay area\'s retirement demographic continues to grow, I-75 access is excellent, and demand for proven 55-plus infrastructure should remain steady. The condo and villa market at $175,000 to $265,000 offers the best acquisition math for snowbird buyers, but verify rental restrictions before purchasing with income in mind.' },
    ],
    publish_date: '2026-08-09T12:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/sun-city-center-fl-activities.jpg',
    featured_image_alt: 'Sun City Center FL active adult retirement community activities and amenities in Hillsborough County',
    related_slugs: ['wimauma-fl-real-estate-market-2026', 'apollo-beach-fl-real-estate-market-2026', 'valrico-real-estate-mid-year-2026-review'],
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (token !== 'aug9seed2026') {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'] || '';
  const supabaseKey = process.env['SUPABASE_SERVICE_ROLE_KEY'] || '';

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      error: 'Missing Supabase credentials',
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseKey,
      availableSupabaseKeys: Object.keys(process.env).filter(k => k.toLowerCase().includes('supabase')),
    }, { status: 500 });
  }

  const sb = createClient(supabaseUrl, supabaseKey);
  const results: { slug: string; status: string; error?: string }[] = [];

  for (const post of POSTS) {
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

    const { error } = await sb.from('blog_posts').upsert({
      ...post,
      content,
      status: 'published',
      word_count: wordCount,
      reading_time: readingTime,
      og_image: null,
    }, { onConflict: 'slug' });

    if (error) {
      results.push({ slug: post.slug, status: 'error', error: error.message });
    } else {
      results.push({ slug: post.slug, status: `upserted (${wordCount} words, ${readingTime} min)` });
    }
  }

  return NextResponse.json({ results });
}
