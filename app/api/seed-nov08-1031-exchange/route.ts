import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = '1031-exchange-real-estate-valrico-fl-investors-guide';

const META = {
  title: '1031 Exchange Real Estate Guide for Valrico FL Investors: Rules, Timelines, and East Hillsborough Opportunities',
  excerpt:
    'How a 1031 exchange works for Valrico and east Hillsborough County investment property owners: the 45-day identification and 180-day completion deadlines, qualified intermediary requirements, Florida-specific rules, and how to use the fall 2026 market to acquire replacement property.',
  pillar: 'market',
  tags: [
    'Investor Guide',
    'Valrico FL',
    '1031 Exchange',
    'Investment Property',
    'Capital Gains',
    'Tax Deferral',
    'Hillsborough County',
    '2026',
    'Rental Property',
  ],
  meta_title: '1031 Exchange Real Estate Guide for Valrico FL Investors | ValricoAgent.com',
  meta_description:
    'Complete 1031 exchange guide for Valrico FL investment property owners: 45-day identification, 180-day completion, qualified intermediary rules, Florida tax advantages, and how to use east Hillsborough County as a replacement property target in 2026.',
  focus_keyword: '1031 exchange Valrico FL real estate investors',
  secondary_keywords: [
    '1031 exchange Florida 2026',
    'Valrico investment property 1031 exchange',
    'east Hillsborough 1031 exchange replacement property',
    'qualified intermediary Florida real estate',
    '1031 exchange rules 2026 Florida',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'Can I do a 1031 exchange on a Valrico rental property?',
      answer:
        'Yes. Any Valrico investment property held for rental income or productive use in a trade or business qualifies for a 1031 exchange. Single-family rentals in Valrico 33594 and 33596, duplexes, commercial properties, and vacant land held for investment all qualify as relinquished properties. Primary residences and properties bought to flip do not qualify.',
    },
    {
      question: 'What are the deadlines for a 1031 exchange in Florida?',
      answer:
        'Florida follows the federal IRS 1031 exchange timeline: you have 45 calendar days from the closing of your relinquished property to formally identify replacement properties in writing, and 180 calendar days from the same closing date to complete the purchase of the replacement property. Both deadlines run simultaneously from the original sale date. Florida adds no state-specific requirements since the state has no income tax.',
    },
    {
      question: 'Do I need a qualified intermediary for a 1031 exchange in Valrico?',
      answer:
        "Yes. A qualified intermediary is required. If the sale proceeds pass through your hands or your attorney's trust account at any point between the relinquished property closing and the replacement property closing, the IRS treats it as constructive receipt and the exchange fails. The QI holds the exchange funds in a segregated account between closings and documents the exchange properly. Well-known national QIs include First American Exchange, IPX1031, and Accruit.",
    },
    {
      question: 'What is the gross rent yield on Valrico investment properties in 2026?',
      answer:
        'Single-family homes in Valrico 33594 are trading in the $370,000 to $420,000 range as of late 2026, with average single-family rents running approximately $2,400 to $2,450 per month. Gross rent yields work out to approximately 6.8 to 7.0 percent. After property taxes, insurance, vacancy, and maintenance, net cap rates land in the 4.5 to 5.5 percent range depending on the specific property and management approach.',
    },
    {
      question: 'Is there a cap on how much gain I can defer in a 1031 exchange in 2026?',
      answer:
        'No. As of 2026, there is no limit on the amount of capital gain that can be deferred in a properly structured 1031 exchange. A previously proposed $500,000 cap on deferred gains was not enacted into law. The full benefit of gain deferral remains available under current tax law, including for high-value property exchanges involving Valrico luxury homes and commercial properties.',
    },
  ],
  publish_date: '2026-11-08T10:00:00.000Z',
  cta_type: 'consultation' as const,
  featured_image: '/images/investing-valrico-fl-real-estate.jpg' as string | null,
  featured_image_alt:
    'Valrico FL investment property representing a 1031 exchange opportunity for east Hillsborough County real estate investors in 2026' as string | null,
  related_slugs: [
    'valrico-fl-rental-market-investment-property-2026',
    'commercial-real-estate-valrico-east-hillsborough-2026',
    'capital-gains-tax-selling-valrico-fl-home-2026',
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
