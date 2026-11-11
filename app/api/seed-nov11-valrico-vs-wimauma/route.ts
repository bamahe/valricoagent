import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-vs-wimauma-fl-where-to-buy-2027';

const META = {
  title: 'Valrico FL vs Wimauma FL: Where to Buy in 2027',
  excerpt:
    'Valrico FL median $413K vs Wimauma FL median $350K: which is right for your 2027 move? Side-by-side comparison on price, school zones (Newsome HS vs Sumner HS), CDD fees, new construction, Crystal Lagoon amenities, and Tampa commute times.',
  pillar: 'comparison',
  tags: [
    'Wimauma FL',
    'Valrico FL',
    'Comparison',
    '33598',
    '33596',
    '33594',
    'Where to Buy',
    '2027',
    'SouthShore Bay',
    'Hillsborough County',
    'School Zones',
    'New Construction',
  ],
  meta_title: 'Valrico FL vs Wimauma FL: Where to Buy in 2027 | ValricoAgent.com',
  meta_description:
    'Valrico FL vs Wimauma FL 2027: Valrico median $413K, Wimauma median $350K. Side-by-side on school zones, CDD fees, Crystal Lagoon amenities, Tampa commute, and new construction. Which is right for you?',
  focus_keyword: 'Valrico FL vs Wimauma FL where to buy 2027',
  secondary_keywords: [
    'Wimauma vs Valrico real estate 2027',
    'SouthShore Bay vs Valrico FL',
    'Wimauma FL homes for sale vs Valrico',
    'Hillsborough County where to buy 2027',
    'Wimauma FL school zones vs Valrico',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Is Wimauma FL cheaper than Valrico FL?',
      answer:
        'Yes. Wimauma FL has a median closed sale price of approximately $350,000 as of late 2026, compared to Valrico\'s blended median of approximately $413,000 across both 33594 and 33596. However, the gap narrows when you add CDD fees of $2,000 to $3,000 per year and HOA fees of $150 to $200 per month that are common in Wimauma\'s master-planned communities like SouthShore Bay and Sereno. The effective monthly cost difference is often $200 to $350, not $500 or more.',
    },
    {
      question: 'How do Valrico and Wimauma school zones compare?',
      answer:
        'Valrico 33596 feeds to Newsome High School, ranked among the top public high schools in Hillsborough County with consistent A ratings and strong academic outcomes. Wimauma 33598 feeds primarily to Sumner High School in Riverview, a newer school that has not yet built the same reputation track record as Newsome. For families prioritizing high school zone quality, Valrico 33596 holds a clear advantage. Always verify your specific address at the Hillsborough County Schools boundary locator.',
    },
    {
      question: 'Does Wimauma FL have better amenities than Valrico?',
      answer:
        'Wimauma has resort-style amenities that do not exist in Valrico, most notably the 5.5-acre Crystal Lagoon at SouthShore Bay with swim areas and paddleboards. Sereno and Berry Bay also offer community pools and amenity centers. Valrico has River Hills Country Club (private golf), Bloomingdale Golf Course (public), and established suburban retail and dining infrastructure. The choice depends on whether you prefer a newer resort amenity package or established neighborhood character.',
    },
    {
      question: 'How far is Wimauma from Tampa compared to Valrico?',
      answer:
        'Valrico is approximately 25 to 35 minutes from downtown Tampa during off-peak hours, 35 to 50 minutes in peak commute traffic. Wimauma is approximately 40 to 55 minutes from downtown Tampa off-peak, 50 to 70 minutes in peak traffic. The 15 to 20 minute commute difference matters for daily commuters. Valrico is better positioned for commutes to MacDill AFB, Brandon, and east Tampa employment corridors.',
    },
    {
      question: 'Is new construction cheaper in Wimauma than Valrico?',
      answer:
        'Yes. Wimauma\'s new construction market offers more entry-level options, with D.R. Horton and Lennar products starting in the mid-$300K range. Valrico\'s new construction starts at approximately $416,990 at Pulte Valri Forest in 33594 and $531,990 at WestBay Northwood Estates in 33596. However, Wimauma new construction typically carries CDD fees of $1,500 to $3,500 per year that add to the ongoing ownership cost and do not apply to most Valrico resale homes.',
    },
  ],
  publish_date: '2026-11-11T12:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/wimauma-fl-real-estate-market-2026.jpg' as string | null,
  featured_image_alt:
    'Wimauma FL master-planned community homes in SouthShore Bay and Sereno in 33598 Hillsborough County, compared against Valrico FL in a 2027 buyer decision guide' as string | null,
  related_slugs: [
    'wimauma-fl-real-estate-market-2026',
    'valrico-fl-new-construction-vs-resale-homes-q4-2026',
    'best-neighborhoods-in-valrico-for-buyers-in-2026',
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
}
