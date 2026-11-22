import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'how-to-buy-and-sell-at-the-same-time-valrico-fl-2026';

const META = {
  title: 'How to Buy and Sell at the Same Time in Valrico FL: Contingent Offers, Bridge Loans, and 2026 Strategies',
  excerpt:
    'The November 2026 Valrico market -- with 50 to 68 average days on market and 37% of listings showing price reductions -- is the most favorable environment for simultaneous buy-sell transactions since 2019. This guide covers the four approaches Valrico move-up buyers use: sell-first with leaseback, contingent offer with kick-out clause, bridge loan, and HELOC, with real numbers for each strategy.',
  pillar: 'buyer',
  tags: [
    'Move-Up Buyer',
    'Valrico FL',
    'Contingent Offer',
    'Bridge Loan',
    'Buy and Sell',
    '2026',
    'Leaseback',
    'HELOC',
    'Buyer Strategy',
    'Seller Strategy',
    '33594',
    '33596',
    'East Hillsborough',
    'Simultaneous Closing',
    'Hillsborough County',
  ],
  meta_title: 'How to Buy and Sell at the Same Time in Valrico FL 2026 | Bridge Loans, Contingent Offers & Leaseback Strategies | ValricoAgent.com',
  meta_description:
    'The 2026 Valrico market favors simultaneous buy-sell transactions. Learn how to use a contingent offer, bridge loan, or leaseback to buy your next home without being stuck with two mortgages or a housing gap. Real math and timelines for 33594 and 33596.',
  focus_keyword: 'how to buy and sell at the same time Valrico FL',
  secondary_keywords: [
    'contingent offer Valrico FL 2026',
    'bridge loan Hillsborough County FL',
    'move-up buyer Valrico FL 2026',
    'sell house and buy at same time Florida',
    'leaseback agreement Valrico FL',
    'buy home before selling Valrico FL',
    'simultaneous closing Hillsborough County',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Can I buy a house before selling my current home in Valrico FL?',
      answer:
        'Yes, but it requires planning. The most common approaches are a bridge loan (borrow against your current home\'s equity for the down payment), a contingent offer (buy the new home contingent on selling your existing one), or accessing equity via HELOC. Barrett works with Valrico clients on all three approaches depending on their timeline, equity position, and lender qualification situation.',
    },
    {
      question: 'How long does a contingency period last in a Valrico real estate contract?',
      answer:
        'A contingency period is negotiated, but typically runs 30 to 60 days in a Valrico purchase contract. The seller retains a kick-out clause allowing them to accept a competing non-contingent offer, which gives you typically 48 to 72 hours to either remove your contingency or release the contract.',
    },
    {
      question: 'What is a leaseback agreement in real estate?',
      answer:
        'A leaseback lets the seller of a home stay in the property after closing as a tenant, paying a daily rental rate, for a negotiated period -- typically 30 to 90 days. The buyer receives possession at the end of the leaseback period. In the current Valrico market, 30 to 60 day leasebacks are negotiated regularly, giving sellers time to find and close on their next home.',
    },
    {
      question: 'What does a bridge loan cost in Hillsborough County?',
      answer:
        'Bridge loan rates in the current market typically run prime plus 1 to 2 percent (approximately 9.5 to 10.5 percent). On a $100,000 bridge used for 4 months, expect approximately $4,000 to $5,500 in total interest and origination costs. Bridge loans are available through local community banks and credit unions; most major national lenders no longer offer residential bridge products.',
    },
    {
      question: 'Is it better to buy or sell first in Valrico FL right now?',
      answer:
        'For most Valrico move-up buyers in late 2026, the right approach is to list your current home and begin seriously shopping simultaneously. If you find the right target home and need a contingent offer, do it. If the seller won\'t accept a contingency, pivot to a bridge loan conversation. Most transactions in the current Valrico market can be structured without a bridge loan if you are realistic about timeline and willing to negotiate creatively.',
    },
  ],
  publish_date: '2026-11-22T14:00:00.000Z',
  cta_type: 'consultation' as const,
  featured_image: '/images/bloomingdale-modern-white-ranch-estate-valrico.jpg' as string | null,
  featured_image_alt:
    'Modern white ranch estate home in Bloomingdale Valrico FL representing the move-up buyer strategy for buying and selling at the same time in east Hillsborough County' as string | null,
  related_slugs: [
    'valrico-fl-move-up-buyer-guide-2026',
    'how-to-sell-a-house-in-valrico-without-losing-money',
    'valrico-fl-seller-rate-buydown-strategy-december-2026',
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
