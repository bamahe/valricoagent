import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'usda-loans-near-valrico-fl-wimauma-rural-hillsborough-zero-down-2026';

const META = {
  title: 'USDA Loans Near Valrico FL: Zero-Down Financing in Wimauma and Rural Eastern Hillsborough County (2026)',
  excerpt:
    'Most buyers shopping near Valrico never know that USDA zero-down financing is available just 20 minutes away in Wimauma and rural eastern Hillsborough County. With median prices around $347,000-$351,000 and USDA rates running 25-50 basis points below conventional in November 2026, eligible buyers can skip the down payment entirely and pay less per month than FHA. This guide covers which ZIP codes qualify, the 2026 income limits, the real cost comparison against FHA and conventional, and who this program is actually built for.',
  pillar: 'buyer',
  tags: [
    'USDA Loan',
    'Zero Down Payment',
    'Wimauma FL',
    'Rural Hillsborough County',
    'Valrico FL',
    'First Time Buyer',
    'Mortgage',
    '33598',
    'FHA vs USDA',
    'Eastern Hillsborough',
    'Buyer Guide',
    '2026',
    'Home Financing',
    'Rural Housing',
    'USDA Eligible',
  ],
  meta_title: 'USDA Loans Near Valrico FL 2026: Zero Down in Wimauma and Rural Hillsborough County | ValricoAgent.com',
  meta_description:
    'USDA zero-down financing is available in Wimauma (33598) and rural parts of eastern Hillsborough County near Valrico. 2026 income limits, rate comparison vs FHA, eligible areas, property requirements, and who qualifies. Expert guide from Barrett Henry, REMAX Collective.',
  focus_keyword: 'USDA loans near Valrico FL 2026',
  secondary_keywords: [
    'USDA eligible areas Wimauma FL',
    'zero down home loan Hillsborough County FL',
    'USDA loan income limits Hillsborough County 2026',
    'USDA vs FHA loan Wimauma FL',
    'rural housing loan eastern Hillsborough County',
    'zero down mortgage near Valrico FL',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Is Valrico FL eligible for USDA loans?',
      answer:
        'No. Valrico (ZIP codes 33594 and 33596) is not in a USDA-eligible rural area. However, Wimauma (33598), located about 20 miles south of Valrico, is a confirmed USDA-eligible area where buyers can use zero-down USDA financing. Parts of Dover (33527) and other rural portions of eastern Hillsborough County may also qualify. Use the USDA Property Eligibility Map at eligibility.sc.egov.usda.gov to check any specific address.',
    },
    {
      question: 'What are the USDA income limits for Hillsborough County FL in 2026?',
      answer:
        'Under the FY2026 figures updated by USDA in July 2026, the moderate income limit for the USDA Guaranteed Loan Program in Hillsborough County is approximately $119,850 for households of 1 to 4 people and approximately $158,250 for households of 5 to 8 people. Income is counted household-wide from all adult members, not just loan applicants. Certain deductions for childcare, dependents, and medical expenses can reduce your qualifying household income. Verify the exact current limits at eligibility.sc.egov.usda.gov before applying.',
    },
    {
      question: 'What is the USDA loan rate compared to FHA in November 2026?',
      answer:
        'As of November 2026, USDA guaranteed loan rates are running approximately 25 to 50 basis points below conventional 30-year fixed rates. With conventional rates around 7.10 to 7.25 percent, USDA rates are approximately 6.65 to 6.90 percent for well-qualified borrowers with 640-plus credit scores. FHA rates are similar to conventional. USDA also carries a significantly lower monthly insurance cost: 0.35 percent annually versus FHA\'s 0.85 percent, which translates to roughly $138 per month in savings on a $350,000 loan.',
    },
    {
      question: 'How does a USDA loan compare to FHA for a $350,000 home in Wimauma FL?',
      answer:
        'On a $350,000 purchase in a USDA-eligible area, USDA requires zero down compared to FHA\'s $12,250 (3.5 percent). The USDA upfront guarantee fee of 1 percent ($3,500) is rolled into the loan. Monthly USDA mortgage insurance is approximately $103 versus FHA\'s approximately $241, saving $138 per month. At 6.75 percent USDA versus 6.90 percent FHA, the total monthly USDA payment (P&I plus fees) is approximately $110 lower than FHA while also eliminating the down payment requirement. USDA is the superior choice for most buyers who qualify and are purchasing in eligible rural areas.',
    },
    {
      question: 'What homes qualify for USDA financing near Valrico?',
      answer:
        'To qualify for USDA financing, the home must be a primary residence in a USDA-eligible rural area, must be move-in ready condition meeting USDA minimum property standards, and must be a single-family detached home or approved condominium. No investment properties, vacation homes, or large-acreage farm operations qualify. Manufactured homes on permanent foundations may qualify under specific conditions. Homes in Wimauma (33598) that are well-maintained and priced under $450,000 generally meet USDA property requirements without issues.',
    },
  ],
  publish_date: '2026-11-24T14:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Homeowner reviewing USDA loan documents for a home purchase near Valrico FL in eastern Hillsborough County' as string | null,
  related_slugs: [
    'fha-loan-valrico-fl-2026-hillsborough-county-buyers-guide',
    'first-time-home-buyer-in-valrico-fl-what-to-know',
    'wimauma-fl-real-estate-market-2026',
    'valrico-fl-vs-wimauma-fl-where-to-buy-2027',
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
