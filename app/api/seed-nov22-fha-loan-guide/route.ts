import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'fha-loan-valrico-fl-2026-hillsborough-county-buyers-guide';

const META = {
  title: 'FHA Loans in Valrico FL 2026-2027: Loan Limits, Requirements, and What First-Time Buyers Need to Know',
  excerpt:
    'The 2026 FHA loan limit for Hillsborough County is $541,287, covering virtually every home in Valrico\'s 33594 and 33596 ZIP codes. This guide covers FHA down payment requirements (3.5% at 580+ credit score), mortgage insurance premium calculations, FHA vs conventional comparison at Valrico price points, and which neighborhoods and price tiers work best with FHA financing.',
  pillar: 'buyer',
  tags: [
    'FHA Loan',
    'Valrico FL',
    'First-Time Buyer',
    'Hillsborough County',
    'FHA Loan Limits',
    '2026',
    '2027',
    'Mortgage',
    'Down Payment',
    'Mortgage Insurance',
    '33594',
    '33596',
    'Buyer Guide',
    'East Hillsborough',
    'FHA vs Conventional',
  ],
  meta_title: 'FHA Loans Valrico FL 2026-2027 | $541,287 Hillsborough County Limit | First-Time Buyer Guide | ValricoAgent.com',
  meta_description:
    '2026 FHA loan limit for Hillsborough County FL is $541,287 -- covering most Valrico homes. Learn FHA requirements, 3.5% down payment options, mortgage insurance costs, and how FHA compares to conventional financing at Valrico 33594 and 33596 price points.',
  focus_keyword: 'FHA loan Valrico FL 2026',
  secondary_keywords: [
    'FHA loan limit Hillsborough County 2026',
    'FHA loan Hillsborough County Florida',
    'FHA vs conventional Valrico FL',
    'first-time buyer FHA loan Valrico',
    'FHA loan requirements Florida 2026',
    'FHA mortgage insurance premium calculation',
    '3.5 percent down payment Valrico FL',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the FHA loan limit for Hillsborough County FL in 2026?',
      answer:
        'The 2026 FHA single-family loan limit for Hillsborough County is $541,287. This covers the majority of Valrico\'s active listing inventory in both 33594 and 33596 ZIP codes. The 2027 limits were not yet published as of November 2026 -- check HUD\'s official site for updates in December 2026 or January 2027.',
    },
    {
      question: 'Can I use an FHA loan to buy in the Newsome High School zone in Valrico 33596?',
      answer:
        'Yes. Homes priced under $541,287 in 33596 -- which includes much of the Buckhorn, River Hills, and Diamond Hill inventory in the $400,000 to $530,000 range -- are FHA-eligible by loan size. The FHA appraisal and minimum property standards still apply, so home condition matters. Newer construction (post-2000) in the Newsome zone typically sails through FHA appraisal.',
    },
    {
      question: 'Will FHA mortgage insurance eventually go away on my Valrico home?',
      answer:
        'Only if you put 10 percent or more down at closing, in which case annual MIP cancels after 11 years. If you put 3.5 percent down, MIP is permanent unless you refinance into a conventional loan. Many Valrico buyers plan to refinance when rates moderate, eliminating the MIP at that point.',
    },
    {
      question: 'How does an FHA loan compare to a conventional loan for a first-time buyer in Valrico?',
      answer:
        'FHA requires less down payment (3.5 percent vs typically 5 to 20 percent for conventional) and accepts lower credit scores. The tradeoff is FHA mortgage insurance, which adds approximately $170 to $210 per month to a typical Valrico purchase and is permanent unless you refinance. Conventional PMI, by contrast, cancels automatically when you reach 20 percent equity.',
    },
    {
      question: 'What credit score do I need for an FHA loan in Hillsborough County?',
      answer:
        'HUD sets the minimum at 500, but most Hillsborough County lenders require 580 for the 3.5 percent down option. Some lenders set their floor at 620. If your score is in the 580 to 620 range, work with a mortgage broker who can shop multiple FHA-approved lenders rather than going to a single bank.',
    },
  ],
  publish_date: '2026-11-22T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Homeowner reviewing FHA loan documents in Florida representing the FHA loan guide for Valrico FL buyers in Hillsborough County' as string | null,
  related_slugs: [
    'first-time-home-buyer-in-valrico-fl-what-to-know',
    'buyer-closing-costs-valrico-fl-2026',
    'va-loan-home-buying-valrico-fl-macdill-afb-guide',
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
