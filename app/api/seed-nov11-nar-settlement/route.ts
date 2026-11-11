import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'nar-settlement-buyer-agent-compensation-valrico-fl-2026';

const META = {
  title: 'How the NAR Settlement Changed Buyer Agent Compensation in Valrico FL',
  excerpt:
    'The August 2024 NAR settlement changed how buyer agents get paid in Florida. Written buyer-broker agreements are now required before touring homes, compensation offers no longer appear on MLS, and sellers pay through the purchase contract. What it means for Valrico buyers and sellers in 2026.',
  pillar: 'buyer',
  tags: [
    'Buyer Guide',
    'NAR Settlement',
    'Valrico FL',
    'Buyer Agent Commission',
    'Florida Real Estate',
    'Hillsborough County',
    'Real Estate Law',
    '2026',
    'Buyer Broker Agreement',
  ],
  meta_title: 'NAR Settlement: Buyer Agent Compensation in Valrico FL 2026 | ValricoAgent.com',
  meta_description:
    'How the NAR settlement changed buyer agent compensation in Valrico FL. Written buyer-broker agreements required before touring, no MLS compensation fields, and what sellers should offer to maximize buyer traffic in 2026.',
  focus_keyword: 'NAR settlement buyer agent compensation Valrico FL',
  secondary_keywords: [
    'buyer broker agreement Valrico FL 2026',
    'realtor commission Florida NAR settlement',
    'how buyer agents get paid Florida 2026',
    'NAR settlement Florida real estate',
    'written buyer agreement Valrico realtor',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What did the NAR settlement change about buyer agent compensation?',
      answer:
        'The NAR settlement effective August 17, 2024 made two core changes. First, MLS listings no longer carry offers of buyer agent compensation in the MLS fields. Second, buyers must sign a written buyer-broker agreement before touring any home, and that agreement must specify how the agent will be compensated in terms that are specific and not open-ended. Sellers can still offer to pay the buyer\'s agent, but it now flows through the purchase contract rather than the MLS.',
    },
    {
      question: 'Do Valrico home sellers still need to pay the buyer\'s agent?',
      answer:
        'No, sellers are not required to pay the buyer\'s agent under the post-settlement rules. However, most sellers in Valrico and east Hillsborough County are still offering 2 to 2.5 percent buyer\'s agent compensation through the purchase contract because it expands the buyer pool. Sellers who offer no compensation risk losing buyers whose agents charge more than the buyer can or will pay out of pocket. It is a strategic decision, not a legal requirement.',
    },
    {
      question: 'What is in a buyer-broker agreement in Florida?',
      answer:
        'A Florida buyer-broker agreement specifies the agent\'s compensation (typically a percentage of the purchase price such as 2.5 to 3 percent), the duration of the agreement (usually 90 days), the geographic area covered, any exclusivity terms, and what happens if the seller does not cover the agreed fee. Florida licensees operate as transaction brokers by default; buyers who want full fiduciary representation must separately request single-agent designation in writing.',
    },
    {
      question: 'Have commission rates dropped in Valrico after the NAR settlement?',
      answer:
        'Commission rates in Valrico have declined modestly, roughly 0.2 to 0.4 percentage points on average, rather than the dramatic reductions predicted when the settlement was announced. The mid-price market in east Hillsborough County, where experienced local agents command demonstrable neighborhood expertise, has seen less compression than higher-price markets with more competing agents. Total transaction costs for buyers and sellers have not changed dramatically.',
    },
    {
      question: 'Can a buyer in Valrico negotiate agent compensation after the NAR settlement?',
      answer:
        'Yes. All agent compensation is now negotiable and must be explicitly agreed to in writing before touring. Buyers can negotiate the percentage, the structure (flat fee versus percentage), and the terms of what happens if seller compensation does not cover the agreed amount. The settlement actually increased transparency and buyer awareness of agent compensation in a way the old system did not.',
    },
  ],
  publish_date: '2026-11-11T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/homeowner-reviewing-documents-florida.png' as string | null,
  featured_image_alt:
    'Florida homeowner reviewing buyer-broker agreement documents at a table, representing the NAR settlement changes to buyer agent compensation in Valrico FL in 2026' as string | null,
  related_slugs: [
    'what-a-valrico-buyers-agent-actually-does-for-you',
    'how-to-choose-the-best-real-estate-agent-in-valrico',
    'buying-a-home-in-valrico-fl-in-2026-prices-competition-and-strategy',
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
}
