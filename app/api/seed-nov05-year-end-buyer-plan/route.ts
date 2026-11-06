import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-year-end-buyer-action-plan-close-before-december-31-2026';

const META = {
  title: 'Valrico FL Year-End Buyer Action Plan: Close Before December 31 and Save on Property Taxes',
  excerpt:
    'Amendment 3 passed November 3, 2026. Valrico buyers who close before December 31 capture $946 to $1,200 per year in property tax savings starting 2027. Here is the step-by-step action plan: pre-approval, search strategy, offer structure, and the closing timeline that makes December 31 realistic.',
  pillar: 'buyer',
  tags: [
    'Buyer Guide',
    'Valrico FL',
    '33594',
    '33596',
    'Year-End 2026',
    'Amendment 3',
    'Property Tax Savings',
    'Homestead Exemption',
    'Closing Strategy',
    'December 2026',
  ],
  meta_title: 'Valrico FL Year-End Buyer Action Plan: Close Before December 31, 2026 | ValricoAgent.com',
  meta_description:
    'Valrico FL buyers: close before December 31, 2026 to capture $946-$1,200/yr in Amendment 3 property tax savings starting 2027. Step-by-step action plan from pre-approval through closing.',
  focus_keyword: 'Valrico FL year-end buyer close before December 31 2026',
  secondary_keywords: [
    'close on home before year end Valrico 2026',
    'Valrico FL Amendment 3 buyer tax savings 2027',
    'December 2026 home buying Valrico FL',
    'Valrico FL homestead exemption 2027',
    'buy home Valrico before December 31',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Why does closing on a Valrico home before December 31, 2026 matter?',
      answer:
        'Florida Amendment 3 passed on November 3, 2026, expanding the non-school homestead exemption from $25,000 to $150,000 effective January 1, 2027. To capture the first year of savings, you must own the home as of January 1, 2027, meaning you must close by December 31, 2026. For a Valrico 33594 home assessed at $380,000, that is approximately $946 per year in savings. For a 33596 home at $469,000, the savings reach $1,100 to $1,200 per year.',
    },
    {
      question: 'What is the realistic timeline to close on a Valrico home by December 31?',
      answer:
        'With a standard 30 to 35-day closing window in Hillsborough County, you need a ratified contract in place by approximately November 25 to December 1 to close by December 31. The key variable is the appraisal, which runs 10 to 18 days in Hillsborough County in December. Work with a lender who orders the appraisal immediately upon contract and has relationships with local certified appraisers. Have your inspection team and title company identified before submitting your first offer.',
    },
    {
      question: 'What mortgage rate should Valrico buyers plan for in December 2026?',
      answer:
        'Current 30-year fixed mortgage rates in early November 2026 are running approximately 6.3 to 6.75 percent. At 6.5 percent on a $380,000 loan with 20 percent down (purchase price around $475,000), the monthly principal and interest is approximately $2,403. Use this range for your budget planning. Rate buydowns funded by seller concessions are common in the current Valrico market and can lower your effective rate for the first one to two years.',
    },
    {
      question: 'What seller concessions can Valrico buyers negotiate in December 2026?',
      answer:
        'December 2026 is an unusually favorable negotiating environment for Valrico buyers. Approximately 35 to 42 percent of active listings have already taken price reductions. Seller-paid closing costs of two to three percent (approximately $9,000 to $13,500 on a $450,000 purchase) are routinely accepted. Temporary 2-1 buydowns funded by the seller are another common structure. Target homes that have been listed for 60 or more days, as these sellers have the most motivation to close before year-end.',
    },
    {
      question: 'What is the homestead exemption deadline after closing in Valrico?',
      answer:
        'After closing on a Valrico home by December 31, 2026, you must file for homestead exemption with the Hillsborough County Property Appraiser by March 1, 2027 to receive the exemption for the 2027 tax year. File online at hcpafl.org or in person at their offices. If you are transferring a Save Our Homes benefit from a prior Florida home, also file Form DR-501T (the portability application) by the same March 1 deadline.',
    },
  ],
  publish_date: '2026-11-05T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Valrico FL homebuyer reviewing closing documents before December 31 2026 deadline to capture Amendment 3 property tax savings' as string | null,
  related_slugs: [
    'florida-amendment-3-passed-november-2026-valrico-tax-savings',
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-fl-november-december-2026-market-year-end-guide',
    'valrico-fl-2027-housing-market-outlook-after-amendment-3',
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
