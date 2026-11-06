import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-2027-housing-market-outlook-after-amendment-3';

const META = {
  title: 'Valrico FL 2027 Housing Market Revised Outlook: What Changes Now That Amendment 3 Is Law',
  excerpt:
    'Amendment 3 passed November 3, 2026. Every 2027 Valrico market forecast written before the election treated passage as a variable. It is now law. This revised outlook factors in confirmed Amendment 3 savings, the December bridge effect, and three price scenarios for 33594 and 33596.',
  pillar: 'market',
  tags: [
    'Market Update',
    'Valrico FL',
    '33594',
    '33596',
    '2027 Forecast',
    'Amendment 3',
    'Property Tax Savings',
    'Newsome Zone',
    'Bloomingdale',
    'Hillsborough County',
  ],
  meta_title: 'Valrico FL 2027 Housing Market Outlook After Amendment 3 | ValricoAgent.com',
  meta_description:
    'Valrico FL 2027 housing market revised forecast after Amendment 3 passed November 3, 2026. Three price scenarios for 33594 and 33596, the December bridge effect, and what buyers and sellers should do now.',
  focus_keyword: 'Valrico FL 2027 housing market outlook Amendment 3',
  secondary_keywords: [
    'Valrico FL home price forecast 2027',
    'Valrico 33596 Newsome zone market 2027',
    'Amendment 3 impact on Valrico real estate',
    'Valrico FL real estate market after Amendment 3',
    'Hillsborough County housing market 2027',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'How does Amendment 3 change the 2027 Valrico housing market outlook?',
      answer:
        'Amendment 3 adds a third demand driver to the 2027 Valrico market that was not in pre-election forecasts. The confirmed $946 to $1,200 per year in property tax savings is equivalent to roughly $12,000 to $15,000 in additional purchasing power at a 6.5 percent mortgage rate. This brings buyers who were previously priced out of the 33594 median at $380,000 back into the market, and moves fence-sitters in the 33596 Newsome zone at $469,000 toward action.',
    },
    {
      question: 'What is the base case price forecast for Valrico 33594 and 33596 in 2027?',
      answer:
        'The base case (60 percent probability) assumes mortgage rates decline from 6.5 percent to approximately 6.0 to 6.25 percent by mid-2027. Valrico 33594 is forecast to appreciate 3 to 5 percent, with median price moving from approximately $378,907 to $391,000 to $398,000. Valrico 33596 is forecast to appreciate 4 to 6 percent, with median price moving from approximately $468,996 to $488,000 to $497,000. The 33596 Newsome zone premium persists because school-zone demand is structural.',
    },
    {
      question: 'What is the December 2026 bridge effect in Valrico?',
      answer:
        'The December bridge effect is the short-run demand spike caused by buyers who want to own their home as of January 1, 2027 to claim the first year of Amendment 3 savings. These buyers must close by December 31, 2026. The effect is most pronounced in 33596, where active supply is approximately 2.0 months. It is adding motivated buyers to a market that already had seller-favorable conditions in that ZIP code and sets the spring 2027 starting point at a higher active-demand level than a typical January reset.',
    },
    {
      question: 'What should Valrico sellers do before the spring 2027 market?',
      answer:
        'The revised post-Amendment 3 outlook favors listing in January or February 2027, before competing inventory arrives in March and April. Price for the current market, not the spring peak you hope for. Prepare the home for maximum internet appeal with professional photography, light staging, and a pre-listing inspection. If selling and buying another Florida home, file the Save Our Homes portability application (Form DR-501T) with the Hillsborough County Property Appraiser at the same time you file for your new homestead exemption.',
    },
    {
      question: 'Is the Newsome High School zone in Valrico 33596 still a good buy in 2027?',
      answer:
        'The 33596 Newsome zone is the most defensible submarket in Valrico for 2027 because demand is derived from school zoning, not just housing preferences. Families with school-age children cannot achieve the same school zone outcome by buying in 33594, Brandon, or Riverview. That inelastic demand provides a floor. As long as Newsome High School maintains its performance profile, families will pay the premium. Amendment 3 makes that premium more affordable in year-over-year carrying cost terms. Spring 2027 is likely to be the tightest segment in east Hillsborough County.',
    },
  ],
  publish_date: '2026-11-06T10:00:00.000Z',
  cta_type: 'market-report' as const,
  featured_image: '/images/bloomingdale-brick-home-palm-landscaping-valrico.jpg' as string | null,
  featured_image_alt:
    'Bloomingdale Valrico FL home with palm landscaping representing the 33594 market in the revised 2027 housing outlook after Amendment 3' as string | null,
  related_slugs: [
    'florida-amendment-3-passed-november-2026-valrico-tax-savings',
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-fl-november-december-2026-market-year-end-guide',
    'valrico-fl-year-end-buyer-action-plan-close-before-december-31-2026',
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
