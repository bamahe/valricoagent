/**
 * One-time seed route to insert the Riverview FL market 2026 blog post.
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
