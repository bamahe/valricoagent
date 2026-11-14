import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-january-2027-real-estate-what-buyers-sellers-need-to-know';

const META = {
  title: 'Valrico FL January 2027 Real Estate: What Buyers and Sellers Need to Know',
  excerpt:
    'Florida Amendment 3 takes effect January 1, 2027, saving most Valrico homeowners $950-$1,150 annually in property taxes. The homestead filing deadline is March 1, 2027. Full January market conditions: buyer competition, inventory levels, mortgage rate outlook, and seller strategy for the new year.',
  pillar: 'market',
  tags: [
    'Valrico FL',
    'January 2027',
    'Amendment 3',
    'Homestead Exemption',
    'Market Update',
    'Buyer Guide',
    'Seller Guide',
    'Hillsborough County',
    'Property Taxes',
    'Mortgage Rates',
    '33594',
    '33596',
  ],
  meta_title: 'Valrico FL January 2027 Real Estate: What Buyers and Sellers Need to Know | ValricoAgent.com',
  meta_description:
    'Valrico FL January 2027 real estate guide: Amendment 3 takes effect Jan 1 (saving $950-$1,150/yr), homestead deadline March 1, 2027. January market conditions, mortgage rate outlook, and buyer-seller strategy for the new year.',
  focus_keyword: 'Valrico FL January 2027 real estate',
  secondary_keywords: [
    'Valrico FL Amendment 3 homestead exemption 2027',
    'Valrico FL January 2027 home prices',
    'homestead exemption deadline March 1 2027 Hillsborough County',
    'Valrico FL buyer strategy January 2027',
    'Valrico FL mortgage rates Q1 2027',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'When does Florida Amendment 3 take effect for property taxes?',
      answer:
        'Amendment 3 takes effect January 1, 2027 for the 2027 tax year. Homeowners will see the expanded $150,000 non-school homestead exemption reflected in their 2027 TRIM notice, typically mailed in August 2027. The savings apply automatically to any home with an active homestead exemption on January 1, 2027. Homeowners who establish homestead by filing with the Hillsborough County Property Appraiser before March 1, 2027 will receive the full 2027 benefit.',
    },
    {
      question: 'What is the homestead exemption deadline in Hillsborough County for 2027?',
      answer:
        'The homestead exemption application deadline is March 1, 2027. Buyers who close on a Valrico home in December 2026 or January 2027 must file Form DR-501 with the Hillsborough County Property Appraiser at hcpafl.org by March 1 to receive the 2027 expanded exemption. Missing this deadline means waiting until the 2028 tax year for the Amendment 3 savings.',
    },
    {
      question: 'Is January 2027 a good time to buy a home in Valrico FL?',
      answer:
        'January 2027 offers meaningful advantages for buyers: less competition than spring, motivated sellers who have been on market since fall 2026, inventory of 200-plus homes, and significant negotiating leverage. The March 1 homestead deadline creates a window of buyer activity that is more active than a typical January. Buyers who plan carefully, underwrite conservatively, and ask for seller concessions can find strong value in January 2027.',
    },
    {
      question: 'Will Valrico home prices drop in January 2027?',
      answer:
        'Significant price drops in January 2027 are not anticipated. The market is in normalization mode, not distress. 33594 median prices are flat to down 1 to 2 percent year-over-year, while 33596 is flat to up 1 percent. January historically does not bring significant price movement in either direction. The bigger factors for price direction in 2027 are mortgage rate changes and whether the spring buyer market materializes.',
    },
    {
      question: 'How much can a Valrico buyer save with Amendment 3 in 2027?',
      answer:
        'Most Valrico homeowners and buyers will see approximately $950 to $1,150 in annual property tax savings in 2027 under Amendment 3. For 33594 homes assessed at $375,000 to $382,000, the annual savings run approximately $950 to $1,050. For 33596 Newsome zone homes assessed at $462,000 to $474,000, the savings run approximately $1,050 to $1,150. These translate to roughly $79 to $96 per month in reduced carrying cost.',
    },
  ],
  publish_date: '2026-11-14T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/bloomingdale-brick-ranch-tropical-landscaping-valrico.jpg' as string | null,
  featured_image_alt:
    'Bloomingdale neighborhood Valrico FL tropical landscaped brick ranch home representing January 2027 real estate market and Amendment 3 homestead exemption savings' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-november-2026',
    'florida-amendment-3-passed-november-2026-valrico-tax-savings',
    'valrico-fl-2027-housing-market-outlook-after-amendment-3',
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
