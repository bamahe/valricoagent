/**
 * One-time seed route to insert two new blog posts.
 * DELETE THIS FILE after successful seed.
 * GET /api/seed-aug8?token=aug8seed2026
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
    slug: 'gibsonton-fl-real-estate-market-2026',
    title: 'Gibsonton FL Real Estate Market 2026: What Buyers and Investors Need to Know',
    excerpt: 'Gibsonton FL (33534) median sale price $310,900 in 2026, down 8% year over year, 67-day DOM, and elevated pre-foreclosure activity. How the south Hillsborough ZIP compares to Ruskin and Valrico for buyers, investors, and MacDill families.',
    pillar: 'comparison',
    tags: ['Gibsonton FL', 'Neighboring Communities', '33534', 'Market Report', '2026', 'Hillsborough County', 'Buyer Guide'],
    meta_title: 'Gibsonton FL Real Estate Market 2026: Prices & Buyer Guide | ValricoAgent.com',
    meta_description: 'Gibsonton FL real estate market 2026: median $310,900, down 8% YoY, 67-day DOM, 5.0 months supply. How 33534 compares to Ruskin and Valrico for buyers, investors, and MacDill families.',
    focus_keyword: 'Gibsonton FL real estate market 2026',
    secondary_keywords: ['Gibsonton FL homes for sale 2026', 'Gibsonton vs Ruskin real estate', '33534 housing market 2026', 'Gibsonton FL home prices', 'Carriage Pointe Gibsonton'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Gibsonton FL in 2026?', answer: 'The median sale price in Gibsonton FL (33534) is approximately $310,900 as of mid-2026, down 8.0% to 8.6% year over year. Price per square foot runs $174, and active listings number approximately 65 homes with 5.0 months of supply.' },
      { question: 'Is Gibsonton FL a good place to buy in 2026?', answer: "Gibsonton is a genuine value play for buyers with a hard price ceiling below $330,000 who need I-75 access in south Hillsborough County. The community's elevated pre-foreclosure rate (estimated 16.38%) warrants due diligence, but for investors and budget-focused buyers, the math is compelling relative to neighboring Ruskin and Riverview." },
      { question: 'How does Gibsonton FL compare to Ruskin for real estate in 2026?', answer: "Gibsonton (33534) median sale price of $310,900 runs approximately $29,000 to $30,000 below Ruskin's median of $340,000. Gibsonton has a stronger I-75 commute connection; Ruskin offers Tampa Bay waterfront access and the SouthShore amenity corridor. Both are buyer's markets in 2026 with elevated days on market." },
      { question: 'What are the best neighborhoods in Gibsonton FL?', answer: 'Carriage Pointe and Carriage Pointe South are the largest established HOA communities in Gibsonton, offering pool facilities and deed restriction protection in the $300,000 to $360,000 range. Dug Creek by Starlight Homes offers new construction from $279,990 for buyers who want builder warranty and modern floor plans at entry-level pricing.' },
      { question: 'What school zone is Gibsonton FL in?', answer: 'Gibsonton feeds primarily to East Bay High School, which carries mid-range rankings within Hillsborough County. It is not in the Newsome, Bloomingdale, or Strawberry Crest zones that command premiums in Valrico and Seffner. Families where school ranking is a primary criterion will find better options in Valrico 33594 or 33596.' },
      { question: 'Is Gibsonton FL good for real estate investment in 2026?', answer: 'Gibsonton offers some of the strongest gross yield math in Hillsborough County. A $310,000 acquisition can produce $1,900 to $2,300 per month in rent, yielding 7.4% to 8.9% gross. Investors should budget conservatively for higher vacancy rates and factor in the elevated pre-foreclosure environment when underwriting comps.' },
    ],
    publish_date: '2026-08-07T10:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/gibsonton-fl-real-estate-market-2026.jpg',
    featured_image_alt: 'Gibsonton FL homes for sale 2026 in 33534 south Hillsborough County real estate market including Carriage Pointe',
    related_slugs: ['ruskin-fl-real-estate-guide-2026', 'valrico-fl-foreclosure-activity-recession-indicators-2026', 'apollo-beach-fl-real-estate-market-2026'],
  },
  {
    slug: 'temple-terrace-fl-real-estate-market-2026',
    title: 'Temple Terrace FL Real Estate Market 2026: City Snapshot, Prices, and Buyer Strategy',
    excerpt: 'Temple Terrace FL median sale price $350,000 in 2026, 58-66 days on market, and 3.2 months of supply. How the chartered city compares to Brandon and Valrico for buyers who need USF proximity, Tampa access, and architectural character.',
    pillar: 'comparison',
    tags: ['Temple Terrace FL', 'Neighboring Communities', '33617', '33637', 'Market Report', '2026', 'Hillsborough County', 'Buyer Guide'],
    meta_title: 'Temple Terrace FL Real Estate Market 2026: Prices & Buyer Guide | ValricoAgent.com',
    meta_description: 'Temple Terrace FL real estate market 2026: median $350,000, 58-66 day DOM, 3.2 months supply. Historic Estates homes, USF proximity, and how 33617 compares to Brandon and Valrico for buyers.',
    focus_keyword: 'Temple Terrace FL real estate market 2026',
    secondary_keywords: ['Temple Terrace FL homes for sale 2026', 'Temple Terrace Estates homes', '33617 housing market 2026', 'Temple Terrace vs Brandon real estate', 'Temple Terrace FL home prices 2026'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Temple Terrace FL in 2026?', answer: 'The median sale price in Temple Terrace FL is approximately $350,000 as of mid-2026, with a Zillow average of $332,559. The historic Temple Terrace Estates core commands a premium, with a median around $451,000 for that submarket. Year-over-year prices are flat to down modestly (-0.08% to -4.7%) depending on the metric.' },
      { question: 'How does Temple Terrace FL compare to Brandon for real estate in 2026?', answer: 'Temple Terrace median prices ($350,000) run $40,000 to $65,000 below Brandon 33511 ($390,000 to $415,000). Temple Terrace offers shorter commutes to USF and northern Tampa employment, while Brandon offers more retail access, newer inventory, and the Bloomingdale school zone in its southern sections. Both are balanced markets in 2026 with moderate buyer leverage.' },
      { question: "Is Temple Terrace FL a buyer's or seller's market in 2026?", answer: "Temple Terrace is a balanced market with slight buyer leverage in 2026. Days on market have doubled to 58-66 days year over year, and the sale-to-list ratio of 96.02% means buyers can negotiate modest concessions on homes that have been active 45 or more days. The 3.2 months of supply is relatively tight and does not suggest a distress scenario." },
      { question: 'What is Temple Terrace Estates?', answer: 'Temple Terrace Estates is the historic residential core of Temple Terrace, a 1925 planned community designed by Dwight James Baum. It features Mediterranean Revival architecture, curvilinear streets, and Hillsborough River frontage. Homes in the Estates trade at a premium (median approximately $451,000) and offer architectural character that is genuinely irreplaceable in the suburban Tampa market.' },
      { question: 'What school zone is Temple Terrace FL in?', answer: 'Temple Terrace is primarily served by King High School for public high school. Middle school students attend Greco Middle School, which rates well within Hillsborough County. Families requiring the Newsome High School zone will need to search Valrico 33596, which carries a $119,000 median premium over Temple Terrace but delivers the top-ranked high school in the county.' },
      { question: 'Is Temple Terrace FL good for real estate investment?', answer: 'Temple Terrace has historically been a strong investor market due to USF proximity. Single-family homes in the $340,000 range can rent for $2,200 to $2,600 per month, producing 7.8% to 9.2% gross yields. Short-term rental activity is subject to Temple Terrace city regulations rather than county-only oversight, so investors should confirm applicable rules before purchase.' },
    ],
    publish_date: '2026-08-07T12:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/temple-terrace-fl-real-estate-market-2026.jpg',
    featured_image_alt: 'Temple Terrace FL homes for sale 2026 including historic Temple Terrace Estates Mediterranean Revival architecture near USF Tampa',
    related_slugs: ['brandon-fl-real-estate-market-2026', 'valrico-vs-brandon-vs-lithia-where-to-buy-in-east-hillsborough-2026', 'how-school-ratings-affect-valrico-home-values-in-2026'],
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (token !== 'aug8seed2026') {
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
    const { data: existing } = await sb
      .from('blog_posts')
      .select('slug')
      .eq('slug', post.slug)
      .maybeSingle();

    if (existing) {
      results.push({ slug: post.slug, status: 'already_exists' });
      continue;
    }

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
