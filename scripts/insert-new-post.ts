/**
 * Insert a single new blog post from scripts/content/<slug>.md
 * Usage: npx tsx scripts/insert-new-post.ts <slug>
 * Example: npx tsx scripts/insert-new-post.ts valrico-fl-foreclosure-activity-recession-indicators-2026
 *
 * Requires .env.local with NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Post metadata by slug — add entries here for new posts
const META: Record<string, {
  title: string;
  excerpt: string;
  pillar: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  focus_keyword: string;
  secondary_keywords: string[];
  schema_type: string;
  faq_data: { question: string; answer: string }[];
  publish_date: string;
  cta_type: string;
  featured_image?: string;
  featured_image_alt?: string;
}> = {
  'valrico-real-estate-mid-year-2026-review': {
    title: 'Valrico FL Mid-Year 2026 Real Estate Market Review and Second-Half Outlook',
    excerpt: 'First-half 2026 results for Valrico real estate: 33594 median $378,907, 33596 median $468,996, 57-day average DOM in late July. Plus what the data says about H2 2026.',
    pillar: 'market',
    tags: ['Market Trends', 'Valrico FL', '33594', '33596', 'Mid-Year 2026', 'Hillsborough County', 'Market Report'],
    meta_title: 'Valrico FL Mid-Year 2026 Real Estate Market Review | ValricoAgent.com',
    meta_description: 'Valrico real estate mid-year 2026: 33594 median $378,907, 33596 median $468,996, 57-day DOM. Full H1 recap and second-half outlook from a local REMAX expert.',
    focus_keyword: 'Valrico FL real estate market 2026',
    secondary_keywords: ['valrico home prices 2026', 'valrico real estate mid-year report', 'valrico housing market second half 2026', '33594 33596 market data'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Valrico FL in 2026?', answer: 'The median home price in Valrico FL is approximately $413,000 to $415,000 across both ZIP codes as of mid-2026. The 33594 ZIP (Bloomingdale, Copper Ridge, Twin Lakes) has a median of $378,907, while the 33596 ZIP (Buckhorn, River Hills, Diamond Hill) has a median of $468,996.' },
      { question: 'How long are homes taking to sell in Valrico FL in 2026?', answer: 'The average days on market in Valrico is approximately 57 days as of late July 2026, up from the spring peak of 28 to 32 days. The summer slowdown is the primary driver. Homes priced aggressively against current comps are still moving in 25 to 35 days.' },
      { question: 'Is the Valrico FL housing market a buyers or sellers market in 2026?', answer: 'Valrico is currently balanced to slightly seller-favored in 33596 and more balanced in 33594. The spring selling season tightened conditions, but the summer period has normalized with roughly 172 active listings and a 57-day average DOM. Buyers have more leverage than at any point since 2019.' },
      { question: 'What will Valrico home prices do in the second half of 2026?', answer: 'Valrico home prices are expected to remain essentially flat through the end of 2026, with the national forecast at approximately 2.2% appreciation. The 33596 Newsome zone should hold value better than the broader market due to persistent school zone demand. No meaningful appreciation is expected before 2027.' },
      { question: 'What mortgage rate should buyers plan for in Valrico in 2026?', answer: 'Buyers should plan for a 30-year fixed mortgage rate in the 6.0% to 6.25% range through the end of 2026. Most forecasters from Bankrate and Morgan Stanley project rates staying above 6.0% through year-end. At 6.25% on a $413,000 home with 20% down, principal and interest is approximately $2,035 per month.' },
    ],
    publish_date: '2026-07-30T10:00:00.000Z',
    cta_type: 'market-report',
    featured_image: '/images/northwood-estates-valrico-westbay.jpg',
    featured_image_alt: 'Northwood Estates Valrico FL by Homes by WestBay new construction community in 33596',
  },
  'wimauma-fl-real-estate-market-2026': {
    title: 'Wimauma FL Real Estate Market 2026: What Buyers and Investors Need to Know',
    excerpt: 'Wimauma FL median home price $371,000 to $375,000 in 2026, up 2.9% year over year. How SouthShore Bay, Sereno, and the 33598 market compare to Valrico for buyers and investors.',
    pillar: 'comparison',
    tags: ['Wimauma FL', 'Neighboring Communities', '33598', 'Market Report', '2026', 'New Construction', 'Hillsborough County'],
    meta_title: 'Wimauma FL Real Estate Market 2026 | ValricoAgent.com',
    meta_description: 'Wimauma FL real estate market 2026: median $371K-$375K, up 2.9% YoY, 39% new construction. SouthShore Bay, Sereno, and how Wimauma compares to Valrico for buyers.',
    focus_keyword: 'Wimauma FL real estate market 2026',
    secondary_keywords: ['Wimauma homes for sale 2026', 'SouthShore Bay Wimauma', 'Wimauma vs Valrico', 'Hillsborough County 33598 real estate'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Wimauma FL in 2026?', answer: 'The median home price in Wimauma FL (33598) is approximately $371,000 to $375,000 as of mid-2026, up 2.9% year over year. That makes Wimauma one of the few Hillsborough County submarkets showing positive year-over-year appreciation in 2026.' },
      { question: 'What are the best neighborhoods in Wimauma FL?', answer: 'The most talked-about community in Wimauma is SouthShore Bay, which features a 5.5-acre Crystal Lagoon and the Medley 55-plus section. Sereno (D.R. Horton) offers resort-style living in the $350,000 to $500,000 range. Valencia Lakes is a strictly 55-plus community with extensive amenities. Berry Bay, Cypress Ridge Ranch, and Creek Preserve round out the market.' },
      { question: 'Is Wimauma FL a good place to buy in 2026?', answer: 'Wimauma is a strong choice for buyers who want new construction at a price point below Valrico, buyers seeking the Crystal Lagoon lifestyle of SouthShore Bay, active adults considering Valencia Lakes or Medley, and investors targeting better initial yield than Valrico offers. It is not the right choice for families prioritizing Hillsborough County high school zone rankings above Lennard HS.' },
      { question: 'How does Wimauma compare to Valrico FL real estate?', answer: 'Wimauma median prices ($371,000 to $375,000) run 10 to 15 percent below Valrico 33596 ($468,996 median) and are roughly comparable to Valrico 33594 ($378,907). Wimauma has far more new construction (39% of inventory), unique amenities like the Crystal Lagoon, and is 10 to 15 miles further from Tampa. Valrico holds the school zone advantage with Newsome and Bloomingdale High School zones.' },
      { question: 'Is Wimauma FL good for investment properties?', answer: 'Wimauma attracts investors because acquisition prices run 10 to 20 percent below comparable Valrico properties, improving initial cash flow. The I-75 logistics corridor near Wimauma supports stable tenant demand from distribution workers. The positive 2.9% year-over-year appreciation suggests healthy absorption without oversupply. Budget $340,000 to $375,000 for a typical investor acquisition in a Wimauma master-planned community.' },
    ],
    publish_date: '2026-07-30T12:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/wimauma-fl-real-estate-market-2026.jpg',
    featured_image_alt: 'Wimauma FL homes for sale 2026 in SouthShore Bay and Sereno master-planned communities in 33598',
  },
  'valrico-fl-foreclosure-activity-recession-indicators-2026': {
    title: 'Foreclosure Activity and Recession Indicators in Valrico FL: What the 2026 Data Shows',
    excerpt: 'A data-backed look at foreclosure filings, price cuts, and inventory trends in Valrico FL 33594 and 33596 as of mid-2026. Not 2008, but not 2021 either.',
    pillar: 'market',
    tags: ['Market Trends', 'Foreclosure', 'Valrico FL', '33594', '33596', 'Hillsborough County'],
    meta_title: 'Valrico FL Foreclosure Activity & Recession Indicators 2026',
    meta_description: 'Is Valrico FL headed for a downturn? A data-backed look at foreclosure filings, price cuts, and inventory trends in 33594 & 33596 as of mid-2026.',
    focus_keyword: 'valrico fl foreclosure activity 2026',
    secondary_keywords: ['valrico real estate market 2026', 'hillsborough county foreclosures', 'valrico housing market trends', 'recession indicators valrico'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'Is Valrico FL in a foreclosure crisis?', answer: "No. Hillsborough County has 183 active foreclosure filings as of mid-2026, representing a tiny fraction of the county's 550,000 housing units. Activity is rising from a low post-pandemic base, but it is not a local crisis." },
      { question: 'Are home prices dropping in Valrico FL?', answer: "Valrico's median sale price is around $413,000, down roughly 6% year-over-year. Price per square foot is around $188, down about 6.9% from a year ago." },
      { question: 'How long are homes sitting on the market in Valrico?', answer: 'Listings in Valrico are averaging in the mid-70s for days on market as of mid-2026, compared to 47-54 days for the broader Tampa Bay region a year or two ago.' },
      { question: 'Should I buy a home in Valrico in 2026?', answer: 'Buyers have more leverage than at any point since 2020: more inventory, longer marketing times, and sellers willing to negotiate. Mortgage rate environment still has the biggest impact on your monthly payment.' },
      { question: 'How much inventory is there in Valrico FL?', answer: 'Roughly 172 homes are listed across Valrico, with 33596 sitting at about 2.0 months of supply - tilted toward sellers but well off the sub-one-month supply of 2021-2022.' },
    ],
    publish_date: '2026-07-25T10:00:00.000Z',
    cta_type: 'market-report',
  },
};

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Usage: npx tsx scripts/insert-new-post.ts <slug>');
    process.exit(1);
  }

  const meta = META[slug];
  if (!meta) {
    console.error(`No metadata found for slug: ${slug}`);
    console.error('Add it to the META object in this script first.');
    process.exit(1);
  }

  const contentFile = path.join(__dirname, 'content', `${slug}.md`);
  if (!fs.existsSync(contentFile)) {
    console.error(`Content file not found: ${contentFile}`);
    process.exit(1);
  }

  const content = fs.readFileSync(contentFile, 'utf-8');

  // Check for duplicate
  const { data: existing } = await sb.from('blog_posts').select('slug').eq('slug', slug).maybeSingle();
  if (existing) {
    console.log(`Post already exists: ${slug}`);
    process.exit(0);
  }

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200);

  const { error } = await sb.from('blog_posts').insert({
    ...meta,
    slug,
    content,
    status: 'published',
    word_count: wordCount,
    reading_time: readingTime,
    related_slugs: [],
    featured_image: meta.featured_image ?? null,
    featured_image_alt: meta.featured_image_alt ?? null,
    og_image: null,
  });

  if (error) {
    console.error('Insert failed:', error.message);
    process.exit(1);
  }

  console.log(`Inserted: ${slug} (${wordCount} words, ${readingTime} min read)`);
}

main().catch(console.error);
