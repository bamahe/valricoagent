import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'valrico-fl-2026-real-estate-year-in-review';

const META = {
  title: 'Valrico FL Real Estate 2026 Year in Review: Prices, Trends, and What Changed',
  excerpt:
    'Valrico FL real estate in 2026: blended median went from $425-435K in Q1 to $413-422K in Q4. Full-year breakdown by quarter, inventory from 100 listings to 260, the five trends that defined the year, and what 2026 means for buyers and sellers in 2027.',
  pillar: 'market',
  tags: [
    'Valrico FL',
    '2026 Year in Review',
    'Market Report',
    'Annual Review',
    'Hillsborough County',
    '33594',
    '33596',
    'Market Trends',
    'Home Prices',
    'Inventory',
    'Amendment 3',
    'Days on Market',
  ],
  meta_title: 'Valrico FL Real Estate 2026 Year in Review: Prices & Trends | ValricoAgent.com',
  meta_description:
    'Valrico FL 2026 real estate year in review: median prices by quarter, inventory from 100 to 260 listings, DOM from 15 days to 68, the five trends that defined 2026, and what it means for buyers and sellers heading into 2027.',
  focus_keyword: 'Valrico FL real estate 2026 year in review',
  secondary_keywords: [
    'Valrico FL home prices 2026 annual',
    'Valrico FL housing market 2026 recap',
    'Valrico FL real estate market trends 2026',
    'Hillsborough County real estate 2026 review',
    'Valrico FL market statistics 2026',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What was the median home price in Valrico FL in 2026?',
      answer:
        'The blended Valrico median sale price peaked in early 2026 at approximately $425,000 to $435,000 and normalized to approximately $413,000 to $422,000 by Q4 2026. The two Valrico ZIP codes show meaningfully different levels: 33594 ran approximately $372,000 to $395,000 depending on quarter, while 33596 held at approximately $462,000 to $483,000. The year-over-year change from Q4 2025 to Q4 2026 is approximately flat to down 1 to 3 percent blended.',
    },
    {
      question: 'Did Valrico home prices drop in 2026?',
      answer:
        'Valrico prices moderated in 2026 but did not crash. From Q1 2026 to Q4 2026, the blended median declined approximately 4 to 5 percent. That represents a normalization from 2022 to 2024 peak levels, not a distressed correction. Homes that were priced accurately and in good condition continued to sell and in some cases attracted multiple offers. The price pressure was most concentrated in the 33594 ZIP code and in homes above $430,000 that faced move-up buyer rate sensitivity.',
    },
    {
      question: 'How did the Newsome High School zone affect Valrico 33596 prices in 2026?',
      answer:
        'The Newsome High School attendance zone in 33596 provided a persistent demand floor throughout 2026. While 33594 showed flat to down 1 to 2 percent year-over-year performance, 33596 stayed flat to up 1 percent, outperforming the broader Valrico market. The effective school zone premium in 33596 versus comparable-sized 33594 homes ran approximately $70,000 to $90,000 based on median price comparison.',
    },
    {
      question: 'How many homes sold in Valrico in 2026?',
      answer:
        'Valrico closing volume in 2026 ran approximately 55 to 75 homes per month across both ZIP codes during active market periods, with lower volume in December to January and higher volume in spring. Full-year 2026 estimated closings totaled approximately 650 to 800 homes across 33594 and 33596. That is modestly below the 2021 to 2022 surge volumes but consistent with 2018 to 2019 normalized market activity.',
    },
    {
      question: 'What was the biggest factor that changed Valrico\'s real estate market in 2026?',
      answer:
        'The single biggest factor was the normalization of post-pandemic demand combined with elevated mortgage rates. The explosive buyer competition of 2021 to 2023 could not sustain itself when rates moved above 6.5 percent. The rate lock effect extended the transition by keeping new listings scarce in Q1, but by Q2 and Q3 life-driven listings accumulated faster than demand absorbed them. Florida Amendment 3\'s property tax savings beginning January 1, 2027 are the most significant positive catalyst entering the new year.',
    },
  ],
  publish_date: '2026-11-14T12:00:00.000Z',
  cta_type: 'market-report' as const,
  featured_image: '/images/bloomingdale-street-sign-valrico.jpg' as string | null,
  featured_image_alt:
    'Bloomingdale street sign in Valrico FL representing the 2026 real estate market year-in-review for east Hillsborough County' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-fl-2027-housing-market-outlook-after-amendment-3',
    'hillsborough-county-fl-real-estate-year-end-2026',
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
