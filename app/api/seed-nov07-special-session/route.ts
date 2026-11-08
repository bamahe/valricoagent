import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'florida-desantis-special-session-amendment-3-valrico-homeowners-2026';

const META = {
  title: 'Florida Special Session 2026: What DeSantis\'s Post-Election Property Tax Announcement Means for Valrico Homeowners',
  excerpt:
    'DeSantis announced November 4 he will call a special session before January 5 to implement Amendment 3 and limit local government workarounds. Here is what that means for Valrico homeowners, what the governor transition to Byron Donalds signals for 2027 housing policy, and what buyers and sellers should do before year-end.',
  pillar: 'market',
  tags: [
    'Market Update',
    'Valrico FL',
    'Amendment 3',
    'Property Tax Savings',
    'Florida Special Session',
    'DeSantis',
    'Byron Donalds',
    '33594',
    '33596',
    'Hillsborough County',
    'Florida Housing Policy',
  ],
  meta_title: 'Florida Special Session 2026: DeSantis Property Tax Announcement & What It Means for Valrico | ValricoAgent.com',
  meta_description:
    'DeSantis called a special session November 4, 2026 to implement Amendment 3 and limit local government workarounds. What it means for Valrico homeowners, the Byron Donalds transition, Tampa Bay housing policy, and your year-end action plan.',
  focus_keyword: 'Florida special session 2026 property tax Valrico homeowners',
  secondary_keywords: [
    'DeSantis special session Amendment 3 implementation 2026',
    'Byron Donalds governor Florida housing policy 2027',
    'Amendment 3 local government workaround Hillsborough County',
    'Valrico FL property tax savings 2027',
    'Florida housing policy post-election 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What will the Florida special session on property taxes actually do?',
      answer:
        'The special session DeSantis announced will implement Amendment 3\'s January 1, 2027 effective date, set the schedule for the expanded homestead exemption, and -- critically -- restrict local governments from raising other millage rates or fees to offset the revenue loss from the larger exemption. Without those guardrails, counties could legally raise other assessments to claw back the tax savings Amendment 3 creates. The session also plans to establish a bridge funding pool for local governments to cover essential services like rural law enforcement.',
    },
    {
      question: 'Do I need to file anything for the Amendment 3 savings to take effect?',
      answer:
        'No. If you already have an active homestead exemption with the Hillsborough County Property Appraiser, you automatically receive the expanded exemption for the 2027 tax year. The savings appear on your November 2027 Hillsborough County tax bill. If you do not have a homestead exemption on file, the deadline to file for the 2027 tax year is March 1, 2027. Buyers who close by December 31, 2026 can file by that March deadline and receive the full 2027 savings.',
    },
    {
      question: 'What does the governor transition from DeSantis to Byron Donalds mean for Florida housing?',
      answer:
        'Byron Donalds, who takes office January 5, 2027, is a free-market conservative likely to pursue zoning preemption and local permitting reform to address Tampa Bay\'s estimated 150,000-unit housing shortfall. He is expected to continue the Amendment 3 property tax relief framework and preserve SHIP affordable housing funding ($165.7 million in the 2026-2027 budget). The 2027 legislative session will be the first indicator of how aggressively the new administration moves on housing supply-side policy.',
    },
    {
      question: 'What should Valrico investors know about the special session?',
      answer:
        'Investors should watch the session language carefully. If the session effectively limits local government millage rate increases, your non-homestead property tax burden is better protected. Amendment 3 also reduced the non-homestead assessment growth cap from 10% to 5%, which is separately beneficial for investment property carrying costs. However, if Hillsborough County responds with expanded non-ad-valorem assessments tied to services, those are not covered by the homestead exemption rules and could affect rental property cash flow.',
    },
    {
      question: 'Should buyers still try to close before December 31, 2026 given the special session?',
      answer:
        'Yes, the case for a December close is stronger, not weaker, because of the special session. Closing by December 31 locks in homestead eligibility for the 2027 tax year, capturing approximately $1,000 to $1,200 in annual tax savings at typical Valrico assessed values. The special session\'s goal of limiting local government workarounds means those savings are more likely to be durable. Combined with currently motivated sellers, elevated inventory, and routine 2% to 3% seller concessions, November and December remain the most buyer-favorable conditions since 2019.',
    },
  ],
  publish_date: '2026-11-07T14:00:00.000Z',
  cta_type: 'market-report' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Florida homeowner reviewing property tax documents in 2026, representing the Amendment 3 special session impact on Valrico and Hillsborough County homeowners' as string | null,
  related_slugs: [
    'florida-amendment-3-passed-november-2026-valrico-tax-savings',
    'valrico-fl-2027-housing-market-outlook-after-amendment-3',
    'valrico-fl-year-end-buyer-action-plan-close-before-december-31-2026',
    'valrico-fl-real-estate-market-update-november-2026',
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
