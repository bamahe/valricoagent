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
  'brandon-fl-real-estate-market-2026': {
    title: 'Brandon FL Real Estate Market 2026: Prices, Trends, and Buyer Opportunities',
    excerpt: 'Brandon FL real estate market 2026: ZIP 33510 median $341K, 33511 median $368K, 38-55 day DOM, and flat-to-modest appreciation. How the east Hillsborough hub compares to Valrico for buyers, sellers, and investors.',
    pillar: 'comparison',
    tags: ['Brandon FL', 'Neighboring Communities', '33510', '33511', 'Market Report', '2026', 'Hillsborough County', 'Buyer Guide'],
    meta_title: 'Brandon FL Real Estate Market 2026: Prices & Trends | ValricoAgent.com',
    meta_description: 'Brandon FL real estate market 2026: 33510 median $341K, 33511 median $368K, 38-55 day DOM. How Brandon compares to Valrico for buyers, sellers, and investors in east Hillsborough.',
    focus_keyword: 'Brandon FL real estate market 2026',
    secondary_keywords: ['Brandon FL homes for sale 2026', 'Brandon vs Valrico real estate', '33510 33511 housing market', 'Brandon FL home prices 2026'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Brandon FL in 2026?', answer: 'Median home prices in Brandon FL vary by ZIP code in 2026. The 33510 ZIP averages approximately $341,000, the 33511 ZIP averages approximately $368,000, and the 33596 ZIP (Bloomingdale area bordering Valrico) averages approximately $470,000. The overall Brandon market median falls in the $350,000 to $380,000 range depending on the source and time period.' },
      { question: 'Is Brandon FL a buyer\'s or seller\'s market in 2026?', answer: 'Brandon is a balanced market in 2026, with slight buyer leverage. Days on market run 38 to 55 days, approximately 28 to 30% of listings have taken price reductions, and seller-paid closing cost contributions have become routine in negotiations. Buyers have more negotiating power than at any point since 2019, though Brandon moves faster than Ruskin or Plant City.' },
      { question: 'How does Brandon FL compare to Valrico FL for home prices?', answer: 'Brandon 33511 runs approximately $20,000 to $60,000 below comparable Valrico 33594 homes, and $100,000 or more below Valrico 33596. The premium Valrico commands comes from larger lots, Newsome High School zone access, and a quieter residential character. Brandon offers more convenience, lower prices, and faster access to Tampa via the Selmon Expressway.' },
      { question: 'What are the best neighborhoods in Brandon FL?', answer: 'Providence Lakes is an underrated golf course community in southern 33511 with homes from $345,000 to $410,000. Heather Lakes near the Valrico border offers established 1980s to 1990s homes in the $350,000 to $425,000 range. Lake Parsons Green in 33510 is the most affordable entry point. Buckhorn on the Brandon/Valrico border offers larger lots in the $340,000 to $440,000 range.' },
      { question: 'Is Brandon FL a good place to invest in real estate in 2026?', answer: 'Brandon attracts significant investor activity due to lower acquisition costs versus Valrico. Single-family homes in 33511 rent for $2,100 to $2,300 per month on a $355,000 to $370,000 purchase, producing gross yields of approximately 6.8% to 7.2%. After expenses, net cap rates run 4.5% to 5.5%. Rental demand is strong given Brandon\'s retail employment and Selmon Expressway access.' },
      { question: 'What school zones are in Brandon FL?', answer: 'Brandon FL is primarily served by Brandon High School (33510 and parts of 33511) and Bloomingdale High School (southern 33511 and 33596). Bloomingdale High carries a stronger academic reputation and modest school zone premium. Neither competes with Newsome High School in Valrico for home value premium, which is a primary reason Brandon prices run below Valrico.' },
    ],
    publish_date: '2026-08-05T10:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/brandon-fl-real-estate-market-2026.jpg',
    featured_image_alt: 'Brandon FL homes for sale 2026 in east Hillsborough County neighborhoods including 33510 and 33511 ZIP codes',
  },
  'ruskin-fl-real-estate-guide-2026': {
    title: 'Ruskin FL Real Estate Market 2026: Affordable SouthShore Living on Tampa Bay',
    excerpt: 'Ruskin FL (33570) median sale price $319,990 in 2026, down 3-6% year over year, 76-78 day DOM, and genuine buyer leverage. How Ruskin compares to Apollo Beach, Wimauma, and Valrico for buyers, investors, and retirees.',
    pillar: 'comparison',
    tags: ['Ruskin FL', 'Neighboring Communities', '33570', 'Market Report', '2026', 'SouthShore', 'Hillsborough County', 'Waterfront'],
    meta_title: 'Ruskin FL Real Estate Market 2026: Prices & Buyer Guide | ValricoAgent.com',
    meta_description: 'Ruskin FL real estate market 2026: median $319,990, down 3-6% YOY, 76-78 day DOM. Little Harbor, Mira Lago, flood zones, and how 33570 compares to Apollo Beach and Valrico.',
    focus_keyword: 'Ruskin FL real estate market 2026',
    secondary_keywords: ['Ruskin FL homes for sale 2026', 'Ruskin vs Apollo Beach real estate', '33570 housing market 2026', 'Little Harbor Ruskin FL', 'Ruskin FL home prices'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Ruskin FL in 2026?', answer: 'The median sale price in Ruskin FL (33570) is approximately $319,990 as of July 2026, with a typical home value (Zillow ZHVI) of $314,866. Median list prices run approximately $351,000, reflecting a significant gap between seller expectations and what buyers are actually paying. Prices are down 3% to 6% year over year depending on the metric.' },
      { question: 'Is Ruskin FL a buyer\'s or seller\'s market in 2026?', answer: 'Ruskin is firmly a buyer\'s market in 2026. Days on market average 76 to 78 days, the median sale price is approximately 9% below median list price, and sellers regularly accept offers below list with closing cost contributions. The Momentum Market Score rates 33570 at 69 out of 100, solidly in buyer value territory.' },
      { question: 'How does Ruskin FL compare to Apollo Beach for real estate?', answer: 'Apollo Beach (33572) commands median prices of $430,000 to $475,000 versus Ruskin\'s $319,990, a difference of $110,000 to $155,000 for comparable homes in similar geographic positions near Tampa Bay. Apollo Beach has a more developed commercial corridor and stronger name recognition. Ruskin offers nearly identical bay access at a significant discount.' },
      { question: 'What are the best neighborhoods in Ruskin FL?', answer: 'Little Harbor is a marina village on Tampa Bay with waterfront homes from $400,000 to $800,000 and resort-style amenities. Mira Lago is a gated community about one mile from Ruskin Beach with homes in the $350,000 to $500,000 range. The SouthShore corridor neighborhoods offer newer construction in the $300,000 to $400,000 range. East Lake Ruskin is the most affordable area with larger lots under $290,000.' },
      { question: 'Does Ruskin FL have flood zone risk?', answer: 'Yes, flood zone risk varies significantly within 33570. Waterfront and low-lying areas near Tampa Bay often fall in FEMA flood zones AE or VE, requiring flood insurance at $1,800 to $5,000 or more per year. Most inland residential neighborhoods are Zone X (minimal risk) and do not require flood insurance. Always verify the specific flood zone at msc.fema.gov before making an offer.' },
      { question: 'Is Ruskin FL a good place for real estate investment in 2026?', answer: 'Ruskin offers the strongest gross yield math in Hillsborough County. At a $320,000 purchase price with $2,000 per month rent, the gross yield is approximately 7.5%. Third-party data cites an 8.28% cap rate for 33570. The combination of lower acquisition costs, stable rental demand near Tampa Bay industrial and port employment, and the retiree market makes Ruskin compelling for buy-and-hold investors.' },
    ],
    publish_date: '2026-08-05T12:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/ruskin-fl-real-estate-guide-2026.jpg',
    featured_image_alt: 'Ruskin FL homes for sale 2026 in the SouthShore area of Hillsborough County near Tampa Bay and Little Harbor',
  },
  'seffner-fl-real-estate-market-2026': {
    title: 'Seffner FL Real Estate Market 2026: Prices, Trends, and How It Compares to Valrico',
    excerpt: 'Seffner FL (33584) median sale price $362,650 in 2026, 49-51 days on market, and list prices up 9% year-over-year. How Seffner stacks up against Valrico 33594 and 33596 for buyers, school zones, and investors.',
    pillar: 'comparison',
    tags: ['Seffner FL', 'Neighboring Communities', '33584', 'Market Report', '2026', 'Hillsborough County', 'Buyer Guide'],
    meta_title: 'Seffner FL Real Estate Market 2026: Prices & Comparison to Valrico | ValricoAgent.com',
    meta_description: 'Seffner FL real estate market 2026: median $362,650, 49-51 days on market, list prices up 9% YoY. How 33584 compares to Valrico 33594 and 33596 for buyers.',
    focus_keyword: 'Seffner FL real estate market 2026',
    secondary_keywords: ['Seffner FL homes for sale 2026', 'Seffner vs Valrico real estate', '33584 housing market', 'Seffner FL home prices'],
    schema_type: 'FAQPage',
    faq_data: [
      { question: 'What is the median home price in Seffner FL in 2026?', answer: 'The median sale price in Seffner FL (33584) is approximately $362,650 over the trailing 12 months as of mid-2026, with an average sale price of $402,308. Median list prices run $412,000 to $414,000, up approximately 9% year-over-year.' },
      { question: 'How does Seffner FL compare to Valrico FL for home prices?', answer: 'Seffner median sale prices ($362,650) run about $16,000 below Valrico 33594 ($378,907 median) and about $106,000 below Valrico 33596 ($468,996 median). The large gap with 33596 is driven primarily by the Newsome High School zone premium in Valrico.' },
      { question: 'What high school zone is Seffner FL in?', answer: 'Most of Seffner (33584) feeds to Strawberry Crest High School in Dover. Strawberry Crest carries a Niche A grade, a 94.7% graduation rate, and offers International Baccalaureate and Cambridge International magnet programs. It ranks 151st in Florida.' },
      { question: 'How long are homes taking to sell in Seffner FL in 2026?', answer: 'Homes in Seffner are averaging 49 to 51 days on market as of mid-2026. That is meaningfully faster than the Hillsborough County average of approximately 130 days and also faster than the Valrico average of 57 days during the summer slowdown.' },
      { question: 'Is Seffner FL a good place to invest in real estate in 2026?', answer: 'Seffner offers lower acquisition costs than surrounding submarkets, with single-family homes in the $340,000 to $420,000 range renting for $2,100 to $2,500 per month. That produces gross yields of roughly 6.5% to 8.0% before expenses -- meaningfully above what the Valrico 33596 market offers at higher purchase prices.' },
    ],
    publish_date: '2026-08-02T10:00:00.000Z',
    cta_type: 'buyer',
    featured_image: '/images/seffner-fl-market-trends.jpg',
    featured_image_alt: 'Seffner FL homes for sale 2026 in 33584 east Hillsborough County real estate market',
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
