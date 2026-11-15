import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'hillsborough-county-homestead-exemption-2027-deadline-valrico-new-buyers';

const META = {
  title: 'How to File for Homestead Exemption in Hillsborough County Before the March 1, 2027 Deadline',
  excerpt:
    'If you bought a home in Valrico or Hillsborough County in 2026, you must file for homestead exemption by March 1, 2027. With Amendment 3 now law, the savings are $1,100 to $2,300 per year on a typical Valrico home. Step-by-step online filing guide, documents needed, Save Our Homes cap explained, and what happens if you miss the deadline.',
  pillar: 'buyer',
  tags: [
    'Homestead Exemption',
    'Valrico FL',
    'Hillsborough County',
    'Property Taxes',
    'Florida Real Estate',
    '2027',
    'Amendment 3',
    'Save Our Homes',
    'First-Time Buyer',
    'Tax Savings',
    'HCPAFL',
    '33594',
    '33596',
  ],
  meta_title: 'How to File Homestead Exemption in Hillsborough County Before March 1, 2027 | ValricoAgent.com',
  meta_description:
    'File for homestead exemption by March 1, 2027 to save $1,100 to $2,300 per year on your Valrico or Hillsborough County property taxes. Step-by-step guide for 2026 buyers: online filing at hcpafl.org, documents needed, Save Our Homes cap, and Amendment 3 savings.',
  focus_keyword: 'homestead exemption Hillsborough County 2027 deadline',
  secondary_keywords: [
    'how to file homestead exemption Florida 2027',
    'Hillsborough County homestead exemption march 1 deadline',
    'Valrico FL property tax exemption new buyer',
    'hcpafl.org homestead exemption application',
    'Florida homestead exemption Amendment 3 savings 2027',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is the deadline to file for homestead exemption in Hillsborough County for 2027?',
      answer:
        'The statutory deadline is March 1, 2027. If you bought a home in Valrico or anywhere in Hillsborough County in 2026 and want the exemption applied to your 2027 tax bill, you must file at hcpafl.org or in person at the Hillsborough County Property Appraiser office by March 1, 2027. Missing this deadline means you will not receive the exemption or the Save Our Homes cap protection until the 2028 tax year.',
    },
    {
      question: 'How much will I save with homestead exemption on a Valrico home in 2027?',
      answer:
        'With Florida Amendment 3 now effective for 2027, the savings on a typical Valrico home are substantially larger than in prior years. On a $415,000 assessed value home, the homestead exemption reduces non-school taxable value by approximately $175,000 and school taxable value by $25,000. Estimated annual savings versus no exemption are approximately $1,100 to $1,250. On a $465,000 33596 home, the savings are approximately $2,300 to $2,500 per year. Exact amounts depend on millage rates set each year by Hillsborough County.',
    },
    {
      question: 'How do I file for homestead exemption in Hillsborough County?',
      answer:
        'The fastest method is online at hcpafl.org/E-Filing/Homestead-E-file. You will need your parcel number, Florida driver\'s license or ID with your new Valrico address, Social Security number, and deed or closing disclosure. The process takes 10 to 15 minutes. You can also file in person at the Hillsborough County Property Appraiser office at 601 E. Kennedy Blvd., 16th Floor, Tampa, or by mailing Form DR-501 to the same address. Phone: 813-272-6100.',
    },
    {
      question: 'What is the Save Our Homes cap and when does it start?',
      answer:
        'Save Our Homes limits the annual increase in your property\'s assessed value to 3% per year or the Consumer Price Index, whichever is lower, once your homestead exemption is active. Without homestead exemption, your property is re-assessed at market value annually with no limit. The cap starts the first January 1 after your homestead exemption goes into effect. For a 2026 buyer who files by March 1, 2027, the Save Our Homes cap begins January 1, 2027. Over 10 years, this protection can save tens of thousands of dollars in property taxes compared to market-rate re-assessment.',
    },
    {
      question: 'Do I have to refile for homestead exemption every year in Florida?',
      answer:
        'No. Once your homestead exemption is approved, it automatically renews each year as long as your primary residence and eligibility status remain unchanged. You only need to refile if you move, the property changes ownership, or you lose Florida resident status. The renewal is automatic. If you sell the home and buy another Florida home, you will need to file a new homestead exemption on the new property and may also apply for portability to transfer your Save Our Homes differential.',
    },
  ],
  publish_date: '2026-11-14T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Valrico homeowner reviewing homestead exemption application documents at a table, representing the March 1, 2027 filing deadline for Hillsborough County property tax exemptions' as string | null,
  related_slugs: [
    'hillsborough-county-2026-property-tax-bills-valrico-early-payment-guide',
    'florida-amendment-3-passed-november-2026-valrico-tax-savings',
    'valrico-fl-2026-real-estate-year-in-review',
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
