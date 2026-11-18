import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-home-inspection-guide-east-hillsborough-county-buyers';

const META = {
  title: 'Valrico FL Home Inspection Guide: What Every Buyer Needs to Know Before Closing in East Hillsborough County',
  excerpt:
    'A thorough home inspection in Valrico FL covers more than a checklist. This guide breaks down the top issues found in east Hillsborough County homes -- roofs, HVAC, polybutylene pipes, electrical panels, moisture, and mold -- with repair costs, specialty inspections to order, and how to use inspection results to negotiate credits in the current buyer\'s market.',
  pillar: 'buyer',
  tags: [
    'Home Inspection',
    'Valrico FL',
    'East Hillsborough County',
    'Buyer Guide',
    'Florida Real Estate',
    '2026',
    '33594',
    '33596',
    'Roof Inspection',
    'HVAC',
    'Wind Mitigation',
    'WDO Inspection',
    'Four Point Inspection',
    'Buyer Contingency',
    'Closing',
  ],
  meta_title: 'Valrico FL Home Inspection Guide: Roof, HVAC, Plumbing and What Buyers Must Know | ValricoAgent.com',
  meta_description:
    'Buying a home in Valrico FL? This home inspection guide covers what comes up most often in east Hillsborough County homes: aging roofs, HVAC wear, polybutylene pipes, electrical panels, mold, and wind mitigation. Includes repair costs and negotiation strategy for the current buyer\'s market.',
  focus_keyword: 'Valrico FL home inspection guide buyers',
  secondary_keywords: [
    'home inspection east Hillsborough County Florida',
    'Florida home inspection what to look for',
    'wind mitigation inspection Tampa Bay FL',
    'WDO inspection Valrico FL',
    'four point inspection Hillsborough County',
    'polybutylene pipes Florida home inspection',
    'Valrico FL buyer contingency inspection',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What does a home inspection cover in Valrico FL?',
      answer:
        'A Florida-licensed home inspector covers the structure, roof exterior, HVAC systems, plumbing, electrical systems, and visible interior surfaces including evidence of moisture intrusion. The standard inspection does NOT include swimming pool equipment, irrigation systems, well and septic systems, or a determination of wood-destroying organisms -- those require separate specialty inspections. The average cost for a general home inspection in the Tampa Bay area in 2026 runs approximately $350 to $550 for a typical 1,800 to 2,500 square foot Valrico home.',
    },
    {
      question: 'What are the most common home inspection issues found in Valrico FL?',
      answer:
        'The most common issues in Valrico and east Hillsborough County homes involve roof age and condition, HVAC system wear, plumbing (including polybutylene pipes in homes built before 1995), electrical panels, and moisture intrusion from Florida\'s year-round humidity. Roof replacement is typically the highest-cost item, running $15,000 to $35,000 for a typical Valrico home. HVAC replacement runs $6,000 to $12,000. These items are negotiating tools in the current buyer\'s market, and sellers frequently grant repair credits at closing.',
    },
    {
      question: 'What is a wind mitigation inspection and do I need one in Valrico FL?',
      answer:
        'A wind mitigation inspection evaluates the structural features that reduce hurricane damage risk: roof shape, roof deck attachment, roof covering type, roof-to-wall connections, and opening protection. The report is submitted to your homeowners insurance carrier and can produce annual premium discounts of $400 to $1,500 or more, depending on what the home qualifies for. The inspection costs approximately $75 to $150. For most Valrico buyers, the premium savings pay for the inspection many times over. It is strongly recommended as part of every Valrico home purchase.',
    },
    {
      question: 'What is a four-point inspection and when is it required in Florida?',
      answer:
        'A four-point inspection evaluates the four systems most relevant to insurance claims: roof, HVAC, electrical, and plumbing. Many Florida homeowners insurance carriers require a four-point inspection for homes older than 30 years before they will issue a new policy. For Bloomingdale homes built in the late 1980s and early 1990s, this means most buyers will need one. Cost is approximately $75 to $150, and it is typically performed by the same licensed home inspector at the time of the general inspection. Ask for it upfront to avoid a second trip charge.',
    },
    {
      question: 'Should I waive my home inspection contingency to buy a home in Valrico FL?',
      answer:
        'No. In Valrico\'s November 2026 buyer\'s market -- with 240 to 260 active listings, 45 to 68 average days on market, and 35 to 42 percent of listings having taken at least one price reduction -- buyers no longer need to waive inspection contingencies to compete. Sellers who refuse to allow an inspection in this environment are sellers who have something to hide. Inspect every property. Use the inspection period to identify issues and negotiate repair credits or price adjustments before closing.',
    },
  ],
  publish_date: '2026-11-17T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/bloomingdale-modern-white-ranch-estate-valrico.jpg' as string | null,
  featured_image_alt:
    'Modern white ranch estate home in Bloomingdale Valrico FL representing the typical east Hillsborough County home a buyer would have inspected before closing' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-november-2026',
    'buyer-closing-costs-valrico-fl-2026',
    'buying-a-home-in-valrico-fl-in-2026-prices-competition-and-strategy',
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
