import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'buyer-closing-costs-valrico-fl-2026';

const META = {
  title: 'Buyer Closing Costs in Valrico FL: Complete 2026 Breakdown for Hillsborough County',
  excerpt:
    'What buyers actually pay at closing in Valrico FL in 2026: a complete breakdown of lender fees, title insurance, Florida taxes, prepaid items, and HOA charges for a Hillsborough County purchase, plus how seller concessions and loan type affect your cash to close.',
  pillar: 'buyer',
  tags: [
    'Buyer Guide',
    'Closing Costs',
    'Valrico FL',
    'Hillsborough County',
    'Title Insurance',
    'Florida Taxes',
    '2026',
    'Cash to Close',
    'Seller Concessions',
  ],
  meta_title:
    'Buyer Closing Costs Valrico FL 2026: Complete Hillsborough County Breakdown | ValricoAgent.com',
  meta_description:
    'Complete 2026 buyer closing costs guide for Valrico FL and Hillsborough County: title insurance, Florida doc stamps, intangible tax, lender fees, prepaid items, HOA charges, and how to reduce your cash to close with seller concessions.',
  focus_keyword: 'buyer closing costs Valrico FL 2026',
  secondary_keywords: [
    'Hillsborough County closing costs 2026',
    'Florida buyer closing costs 2026',
    'Valrico FL title insurance buyer',
    'cash to close Valrico FL',
    'seller concessions Hillsborough County 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'How much are buyer closing costs in Valrico FL in 2026?',
      answer:
        "Buyer closing costs in Valrico FL and Hillsborough County typically run 2.0 to 3.5 percent of the purchase price, according to Barnes Walker title and transaction data. On a $415,000 home, that is approximately $8,300 to $14,525. The wide range exists because several cost items are negotiable or optional depending on loan type, lender, and contract structure. The largest single buyer cost in Hillsborough County is owner's title insurance, which the buyer customarily pays here unlike in most other Florida counties.",
    },
    {
      question: 'Who pays title insurance in Hillsborough County Florida?',
      answer:
        "In Hillsborough County, the buyer customarily selects the title company and pays for both the owner's and lender's title insurance policies. This is the reverse of most Florida counties, where the seller traditionally pays for the owner's policy. The standard FAR/BAR contract designates the county of the property as determining who selects the title agent and pays for title insurance. For a $415,000 purchase, the owner's policy costs approximately $1,750 to $2,100 and the lender's policy costs $275 to $400 at simultaneous issue. Florida title insurance rates are promulgated by state statute and are the same at all Florida title companies.",
    },
    {
      question: 'What Florida taxes does the buyer pay at closing in Valrico?',
      answer:
        'Buyers in Valrico pay two Florida-specific mortgage taxes at closing. The Florida intangible tax on the mortgage is 0.20 percent of the mortgage amount, which equals $664 on a $332,000 loan. The documentary stamp tax on the mortgage note is $0.35 per $100 of mortgage amount, which equals $1,162 on a $332,000 loan. Combined Florida mortgage taxes for the buyer total approximately $1,826 on a $332,000 mortgage. Cash buyers do not pay either tax. The documentary stamp tax on the deed ($0.70 per $100 of purchase price) is traditionally a seller cost in Hillsborough County.',
    },
    {
      question: 'Are sellers offering closing cost concessions in Valrico in 2026?',
      answer:
        'Yes. In the fall 2026 Valrico market, sellers are regularly accepting closing cost contribution requests of 2 to 3 percent of purchase price, which equals $8,300 to $12,450 on a $415,000 home. This has become a standard negotiating lever because buyers are stretched on cash after a down payment, and sellers who have held since before 2021 have significant equity to work with. Conventional loan guidelines allow seller contributions up to 3 percent of purchase price with less than 10 percent down, or up to 6 percent with 10 to 25 percent down.',
    },
    {
      question: 'What is the cash to close for a $415,000 home in Valrico with 10 percent down?',
      answer:
        'For a $415,000 home with 10 percent down on a conventional loan in 2026, estimated cash to close is approximately $49,200. This breaks down as: $41,500 down payment, approximately $10,500 in closing costs, approximately $5,500 in prepaid items (first year insurance, property tax escrow, prepaid interest), less an assumed 2 percent seller concession of $8,300. Actual numbers will vary based on insurance costs, lender fees, and negotiated concessions. Your lender is required to provide a Loan Estimate within three business days of application with itemized closing cost projections.',
    },
  ],
  publish_date: '2026-11-15T12:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Homeowner reviewing closing cost documents for a Valrico FL home purchase in Hillsborough County 2026' as string | null,
  related_slugs: [
    'valrico-homes-with-no-hoa-what-buyers-need-to-know',
    'buying-a-home-in-valrico-fl-in-2026-prices-competition-and-strategy',
    'va-loan-home-buying-valrico-fl-macdill-afb-guide',
    'cost-of-selling-a-house-in-valrico-fl-2026',
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
