import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-seller-rate-buydown-strategy-december-2026';

const META = {
  title: 'Valrico FL Seller Rate Buydown Strategy: How to Close Deals at 7.4% Rates in December 2026',
  excerpt:
    'At 7.40% mortgage rates, the most effective tool a Valrico seller has is not a price cut -- it is a rate buydown. This guide covers how 2-1, 1-0, and permanent buydowns work, what each costs a seller, the math on monthly savings for buyers, loan program concession limits, and how December 2026 Valrico transactions are actually being structured to close.',
  pillar: 'seller',
  tags: [
    'Seller Strategy',
    'Rate Buydown',
    'Valrico FL',
    'December 2026',
    'Seller Concessions',
    'Mortgage Rates',
    '33594',
    '33596',
    '2-1 Buydown',
    '1-0 Buydown',
    'Closing Costs',
    'East Hillsborough County',
    'Buyer Incentives',
    '2026',
  ],
  meta_title: 'Valrico FL Seller Rate Buydown Strategy December 2026: 2-1 and 1-0 Buydowns Explained | ValricoAgent.com',
  meta_description:
    'How Valrico FL sellers are using 2-1 and 1-0 rate buydowns to close deals at 7.4% mortgage rates in December 2026. Includes seller cost math, monthly savings for buyers, loan program limits, and how to structure concessions in 33594 and 33596.',
  focus_keyword: 'Valrico FL seller rate buydown December 2026',
  secondary_keywords: [
    'seller rate buydown Valrico FL 2026',
    '2-1 buydown Valrico FL seller',
    'seller concessions Hillsborough County Florida 2026',
    'how to sell home at 7 percent rates Florida',
    'seller closing cost credit vs price reduction Valrico FL',
    'Valrico FL seller strategy high mortgage rates',
    'east Hillsborough County seller concessions December 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What is a 2-1 buydown and how does it work in Valrico FL?',
      answer:
        'A 2-1 buydown is a seller-paid contribution that temporarily reduces the buyer\'s mortgage interest rate by 2% in year one and 1% in year two, with the full note rate applying from year three onward. The buyer qualifies at the full note rate. On a $380,000 Valrico home at 7.40%, the seller\'s cost to fund a 2-1 buydown is approximately $8,580. In year one, the buyer\'s effective rate is 5.40%, saving approximately $475 per month compared to the full 7.40% rate.',
    },
    {
      question: 'Is a seller concession the same as a price reduction?',
      answer:
        'No. A seller concession is a dollar amount contributed by the seller at closing to cover specific allowable costs: closing fees, prepaid items, lender charges, or a rate buydown. A price reduction lowers the sale price, which reduces the loan amount and monthly payment modestly. A seller concession of $10,000 directed toward a 2-1 buydown typically delivers a larger monthly payment benefit to the buyer in years one and two than a $10,000 price reduction delivers over the same period.',
    },
    {
      question: 'How much can a seller contribute toward a rate buydown in Valrico FL?',
      answer:
        'Seller contribution limits depend on the loan program. Conventional loans allow 3% to 9% of purchase price depending on down payment (3% for less than 10% down; 6% for 10% to 24.9% down; 9% for 25%+ down). FHA allows 6%. VA allows 4% for certain items plus unlimited payment of loan-related closing costs. For most Valrico transactions, the practical ceiling is the buyer\'s actual closing costs, which run $8,000 to $14,000 on a typical purchase.',
    },
    {
      question: 'When does a seller-paid rate buydown make more sense than a price reduction?',
      answer:
        'A rate buydown typically makes more sense when: (1) the buyer is payment-sensitive but not down-payment short, (2) the buyer expects to hold the home 7+ years (permanent buydown break-even math), (3) the buyer expects to refinance within 2 to 3 years and can benefit from a 2-1 buydown bridge to a refinance, or (4) the seller wants to maintain a higher sale price on the public record. A price reduction is simpler and sometimes better when the buyer\'s primary need is qualifying for a larger loan amount.',
    },
    {
      question: 'Are Valrico sellers currently offering rate buydowns?',
      answer:
        'Yes. In November and December 2026, seller-paid rate buydowns are present in approximately 20% to 30% of Valrico resale transactions, with higher prevalence among homes that have been listed 45 days or more. Sellers offering 2-1 or 1-0 buydowns in MLS remarks are differentiating their listings and attracting payment-sensitive buyers. The practice is most common in the $380,000 to $550,000 price band where monthly payment sensitivity is highest.',
    },
  ],
  publish_date: '2026-11-18T12:00:00.000Z',
  cta_type: 'seller' as const,
  featured_image: '/images/bloomingdale-modern-white-ranch-estate-valrico.jpg' as string | null,
  featured_image_alt:
    'Modern white ranch estate home in Bloomingdale Valrico FL representing a home where seller-paid rate buydowns are being used to attract buyers at 7.4% mortgage rates in December 2026' as string | null,
  related_slugs: [
    'valrico-fl-december-2026-real-estate-market-update',
    'valrico-fl-real-estate-market-update-november-2026',
    'cost-of-selling-a-house-in-valrico-fl-2026',
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
