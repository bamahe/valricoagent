import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'florida-amendment-3-passed-november-2026-valrico-tax-savings';

const META = {
  title: 'Florida Amendment 3 Passed: What Valrico Homeowners Save Starting 2027',
  excerpt:
    'Florida Amendment 3 passed November 3, 2026 with 62 percent of the vote. The non-school homestead exemption rises from $50,000 to $150,000 in 2027 and $250,000 in 2028. Valrico homeowners in 33594 save approximately $950 to $1,050 per year starting 2027; 33596 homeowners save $1,100 to $1,200. Buyers closing before December 31 capture the first year of savings.',
  pillar: 'market',
  tags: [
    'Florida Amendment 3',
    'Property Tax',
    'Homestead Exemption',
    'Valrico FL',
    'Hillsborough County',
    '2027 Tax Savings',
    '33594',
    '33596',
    'Buyer Strategy',
    'November 2026',
  ],
  meta_title: 'Florida Amendment 3 Passed: Valrico Homeowner Tax Savings 2027 | ValricoAgent.com',
  meta_description:
    'Florida Amendment 3 passed November 2026, expanding the homestead exemption to $150,000 in 2027 and $250,000 in 2028. See exactly how much Valrico homeowners in 33594 and 33596 save, what buyers closing before year-end capture, and what the amendment does not change.',
  focus_keyword: 'Florida Amendment 3 passed Valrico homestead exemption 2027',
  secondary_keywords: [
    'Florida Amendment 3 property tax savings 2026',
    'Valrico FL homestead exemption increase 2027',
    'Hillsborough County property tax reform 2027',
    'Amendment 3 homestead exemption $150000',
    'Valrico FL buyer tax savings 2027',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Did Florida Amendment 3 pass in November 2026?',
      answer:
        'Yes. Florida Amendment 3 passed on November 3, 2026 with approximately 62 percent of the vote, clearing the 60 percent supermajority threshold required to amend the Florida Constitution. The amendment expands the non-school homestead exemption from $50,000 to $150,000 effective January 1, 2027, and further to $250,000 effective January 1, 2028, with inflation adjustments beginning in 2029.',
    },
    {
      question: 'How much will Valrico homeowners save on property taxes in 2027 from Amendment 3?',
      answer:
        'Savings depend on your assessed value and Hillsborough County\'s non-school millage rate of approximately 11.0 to 11.5 mills. For a home assessed at $413,000 (the blended Valrico median), the 2027 savings are approximately $1,100 per year. Homeowners in 33594 with median assessed values near $375,000 to $382,000 will save approximately $950 to $1,050 per year. Homeowners in 33596 with median assessed values near $441,000 to $472,000 will save approximately $1,100 to $1,200 per year. By 2028, when the exemption reaches $250,000, those savings roughly double.',
    },
    {
      question: 'Do I need to refile for homestead exemption to get the Amendment 3 benefit?',
      answer:
        'No. If you are already homesteaded in Hillsborough County, the new exemption applies automatically for the 2027 tax year. The Property Appraiser will apply the increased exemption to your account without requiring any action from you. Buyers who close before December 31, 2026 must file a new homestead exemption application by March 1, 2027 to qualify for the 2027 benefit.',
    },
    {
      question: 'Does Amendment 3 affect school property taxes in Valrico?',
      answer:
        'No. Amendment 3 expands only the non-school homestead exemption. School district taxes are calculated separately and are not affected by the new amendment. Your school millage applies to your assessed value minus the original school exemption, which remains unchanged. The savings are entirely on the non-school portion of your Hillsborough County tax bill.',
    },
    {
      question: 'Why should Valrico buyers close before December 31, 2026 because of Amendment 3?',
      answer:
        'To receive the new homestead exemption for the 2027 tax year, you must qualify for homestead exemption by January 1, 2027, which means closing before December 31, 2026 and filing by March 1, 2027. Buyers who close in January 2027 instead of December 2026 miss the first full year of Amendment 3 savings, worth approximately $1,100 to $1,200 for a home in the $420,000 to $450,000 range. November and December also offer lower buyer competition and more motivated sellers than spring season.',
    },
  ],
  publish_date: '2026-11-04T10:00:00.000Z',
  cta_type: 'valuation' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt: 'Valrico homeowner reviewing Florida Amendment 3 property tax documents at kitchen table' as string | null,
  related_slugs: [
    'florida-amendment-3-homestead-exemption-valrico-2026',
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-fl-home-price-forecast-2027',
    'florida-save-our-homes-portability-valrico-sellers-guide',
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
    title: META.title,
    excerpt: META.excerpt,
    content,
    pillar: META.pillar,
    tags: META.tags,
    meta_title: META.meta_title,
    meta_description: META.meta_description,
    focus_keyword: META.focus_keyword,
    secondary_keywords: META.secondary_keywords,
    schema_type: META.schema_type,
    faq_data: META.faq_data,
    featured_image: META.featured_image,
    featured_image_alt: META.featured_image_alt,
    status: 'published',
    publish_date: META.publish_date,
    related_slugs: META.related_slugs,
    cta_type: META.cta_type,
    word_count: wordCount,
    reading_time: readingTime,
  });

  if (error) {
    return NextResponse.json({ status: 'error', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ status: 'seeded', slug: SLUG, word_count: wordCount });
}
