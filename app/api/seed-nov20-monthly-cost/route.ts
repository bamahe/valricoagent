import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'true-monthly-cost-of-owning-a-home-valrico-fl-2026';

const META = {
  title: 'True Monthly Cost of Owning a Home in Valrico FL in 2026: Mortgage, Taxes, Insurance, HOA and More',
  excerpt:
    'Most Valrico buyers focus on the mortgage payment. Here is the complete breakdown of what a $420,000 home actually costs each month in 2026: property taxes, homeowners insurance, HOA fees, CDD assessments, utilities, and a maintenance reserve -- with real Hillsborough County numbers.',
  pillar: 'buyer',
  tags: [
    'Buyer Guide',
    'Monthly Costs',
    'Valrico FL',
    'Property Taxes',
    'Homeowners Insurance',
    'HOA Fees',
    'CDD Fees',
    'Cost of Ownership',
    'Hillsborough County',
    '33594',
    '33596',
    '2026',
    'First-Time Buyers',
    'East Hillsborough County',
  ],
  meta_title: 'True Monthly Cost Owning a Home in Valrico FL 2026: Beyond the Mortgage | ValricoAgent.com',
  meta_description:
    'What does it really cost to own a $420,000 home in Valrico FL in 2026? This complete breakdown covers mortgage, Hillsborough County property taxes, Florida homeowners insurance, HOA fees, CDD assessments, utilities, and maintenance reserves.',
  focus_keyword: 'monthly cost of owning a home Valrico FL 2026',
  secondary_keywords: [
    'true cost homeownership Valrico Florida 2026',
    'Hillsborough County property taxes Valrico 2026',
    'homeowners insurance Valrico FL 2026',
    'HOA fees Valrico FL communities',
    'CDD fees east Hillsborough County Florida',
    'total monthly expenses home Valrico FL',
    'cost of living homeowner Valrico 33594 33596',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'How much does it cost to own a home in Valrico FL each month in 2026?',
      answer:
        'The total monthly cost of owning a $420,000 home in Valrico FL with 20% down at 7.00% is approximately $3,800 to $4,500 per month. This includes the mortgage payment of approximately $2,236, property taxes of $500 to $600, homeowners insurance of $292 to $417, HOA fees of $0 to $200 depending on community, utilities of $230 to $410, and a maintenance reserve of $350 to $500. The mortgage represents roughly 55% to 61% of the total monthly cost.',
    },
    {
      question: 'What are property taxes on a $420,000 home in Hillsborough County FL?',
      answer:
        'On a $420,000 primary residence in Hillsborough County with homestead exemption, the annual property tax bill typically falls between $5,800 and $7,200 per year, or approximately $483 to $600 per month. Florida\'s homestead exemption reduces the taxable value, with exemptions of $25,000 applying to all millage and an additional $25,000 exempt from non-school millage. Without homestead exemption (investment property), expect $6,300 to $8,400 per year.',
    },
    {
      question: 'How much is homeowners insurance in Valrico FL?',
      answer:
        'Homeowners insurance in Valrico FL typically costs $2,800 to $5,500 per year for a single-family home, depending on the age and construction type. Newer homes (2015 or later) with hip roofs qualify for lower rates, typically $2,800 to $3,800 per year. Mid-age homes from 2000 to 2014 average $3,500 to $5,000 annually. Older pre-2000 homes can reach $4,500 to $6,500 per year. Florida insurance costs remain above the national average due to hurricane exposure and market conditions.',
    },
    {
      question: 'Do most Valrico FL communities have HOA fees?',
      answer:
        'Valrico has a mix of HOA and non-HOA communities. Many older single-family neighborhoods in Valrico have no HOA. Newer communities built after 2000 often have HOAs with fees ranging from $50 to $400 per month depending on the amenities. Basic covenant communities with minimal oversight typically charge $50 to $150 per month. Communities with pools, clubhouses, and gated entrances may charge $200 to $400 per month. Buyers should always confirm HOA and CDD fee details before making an offer.',
    },
    {
      question: 'What are CDD fees and do I have to pay them in Valrico FL?',
      answer:
        'Community Development District (CDD) fees are special assessments added to your property tax bill that fund infrastructure improvements built by the original developer. Not all Valrico communities have CDDs -- they are more common in newer master-planned developments built after 2000. For communities with CDDs, annual assessments typically range from $900 to $3,500 per year. The fee appears on your Hillsborough County property tax bill as a separate line item. CDD fee status and amounts must be disclosed by the seller.',
    },
  ],
  publish_date: '2026-11-20T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Homeowner in Florida reviewing monthly mortgage documents and homeownership cost breakdown for a Valrico FL home purchase in 2026' as string | null,
  related_slugs: [
    'buyer-closing-costs-valrico-fl-2026',
    'valrico-fl-flood-zones-buyers-sellers-guide-2026',
    'florida-homeowners-insurance-costs-valrico-fl-2026',
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
