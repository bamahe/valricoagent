import { NextRequest, NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';

export const runtime = 'nodejs';

// One-time seed route -- remove after successful insert
// Protected by query param: ?token=seed-mkt-0729
const SEED_TOKEN = 'seed-mkt-0729';

const POSTS = [
  // =====================================================================
  // POST 1: Brandon FL Real Estate Market 2026
  // Sources: Redfin ($336K median sale, $209/sqft, 53 DOM),
  // Movoto ($390K list, 60 DOM, 358 active listings),
  // Zillow (typical value ~$350K-370K)
  // =====================================================================
  {
    title: 'Brandon FL Real Estate Market 2026: Prices, Inventory, and What Buyers Need to Know',
    slug: 'brandon-fl-real-estate-market-2026',
    pillar: 'comparison',
    cta_type: 'buyer',
    featured_image: '/images/brandon-fl-real-estate-market-2026.jpg',
    featured_image_alt: 'Brandon FL real estate market 2026 -- homes and neighborhoods west of Valrico in Hillsborough County',
    meta_title: 'Brandon FL Real Estate Market 2026 | Prices, Trends & Data',
    meta_description: 'Brandon FL real estate market 2026: median sale prices $336K-$390K, $209/sqft, 53 days on market. Expert data-backed analysis from a local Hillsborough County REALTOR with 23 years experience.',
    focus_keyword: 'Brandon FL real estate market 2026',
    secondary_keywords: [
      'Brandon FL home prices 2026',
      'Brandon FL housing market trends',
      'east Hillsborough County real estate 2026',
      'Brandon vs Valrico homes',
    ],
    tags: ['Brandon', 'Hillsborough County', 'market report', 'neighboring communities', '2026'],
    excerpt: 'Brandon FL median sale prices run $336K to $390K in 2026 at $209 per square foot, with homes averaging 53 days on market. Here is what the data actually shows for buyers and sellers in east Hillsborough County.',
    schema_type: 'FAQPage',
    faq_data: [
      {
        question: 'What is the median home price in Brandon FL in 2026?',
        answer: 'The median sale price in Brandon FL is approximately $336,000 as of mid-2026 according to Redfin, while Movoto shows active listings averaging around $390,000 in list price. The gap reflects seller pricing ambitions versus actual transaction prices. Price per square foot runs about $209 based on current data.',
      },
      {
        question: 'How long are homes sitting on the market in Brandon FL?',
        answer: 'Homes in Brandon FL averaged 53 days on market as of mid-2026, up from 45 days the year prior. This 18% increase in marketing time reflects cooler buyer urgency and gives buyers more time for due diligence and negotiation compared to the 7-14 day pace of 2021-2022.',
      },
      {
        question: 'How does Brandon FL compare to Valrico FL for home prices?',
        answer: 'Brandon FL runs approximately $30,000 to $60,000 less than comparable homes in Valrico, with a price per square foot of about $209 versus $215-$225 for Valrico. The premium in Valrico is largely driven by Newsome High School zoning and larger lot sizes in subdivisions like Bloomingdale and River Hills.',
      },
      {
        question: 'Is Brandon FL a good place to buy in 2026?',
        answer: 'Brandon FL offers strong value for buyers who do not need Newsome or Bloomingdale High School zoning. With 53 days on market, active inventory around 358 homes, and prices below Valrico, buyers have meaningful negotiating power. Insurance costs and roof age remain the most important variables to evaluate before making an offer.',
      },
      {
        question: 'What ZIP codes make up Brandon FL?',
        answer: 'Brandon FL spans three primary ZIP codes: 33510 (west Brandon, closest to Tampa), 33511 (east Brandon, the bulk of residential inventory along Bloomingdale Avenue), and 33527 which includes portions of Brandon near the Seffner and Dover borders. The 33511 ZIP carries most of the mid-market activity.',
      },
    ],
    content: `Brandon, Florida sits directly west of Valrico along State Road 60, making it one of the most searched real estate markets in east Hillsborough County. With roughly 120,000 residents, Brandon is the largest unincorporated community in Hillsborough County and a natural comparison point for anyone evaluating a home purchase in the area. If you are weighing Brandon against Valrico, Riverview, or Lithia, here is the 2026 data you actually need.

## Current Brandon FL Home Prices (Mid-2026)

The median sale price in Brandon as of mid-2026 runs approximately **$336,000** based on Redfin transaction data. Active listings on Movoto are averaging around **$390,000** in list price. The spread between list and sale price illustrates the shift in buyer leverage that has characterized the Tampa Bay market since late 2024. Sellers are asking for more than they are getting.

Price per square foot in Brandon is approximately **$209**, according to both Redfin and Movoto market trend reports. That compares to roughly $215 to $225 per square foot in Valrico and $250 to $275 in FishHawk Ranch, confirming Brandon's position as the most affordable entry point among the major east Hillsborough communities.

To put that in dollar terms: a 1,800 square foot home in Brandon would typically transact between $360,000 and $395,000. The same square footage in Valrico runs $387,000 to $415,000. The spread exists because Brandon has more older housing stock built in the 1970s through 1990s, and because Valrico's newer subdivisions command a premium for lot size and school zone positioning.

## Days on Market: What the 2026 Data Shows

Homes in Brandon averaged **53 days on market** as of mid-2026, up from 45 days the same period last year. That 18% increase in marketing time is meaningful. It tells you that buyer urgency has cooled, and that homes priced above recent comps sit.

For context, during the peak of the 2021 to 2022 seller's market, homes in Brandon and Valrico were going under contract in 7 to 14 days with multiple offers above list price. The current 53-day average means buyers have time to negotiate, schedule inspections, and compare properties without the pressure tactics that defined that era.

The practical implication for buyers: sellers who are not under financial pressure will hold their price, but sellers who need to move are more willing to negotiate on price, closing costs, or repair credits than at any point since 2020. Properties that have been listed for more than 60 days are where the best negotiating opportunities exist.

## Active Inventory in Brandon FL

As of mid-2026, Movoto reports approximately **358 active listings** in Brandon across all price ranges. Hillsborough County as a whole sits around 5,900 active listings. Brandon's inventory is concentrated in the $300,000 to $450,000 range, which aligns with where the majority of buyers are shopping.

Homes above $500,000 in Brandon move more slowly because that price point competes directly with newer construction in FishHawk Ranch, Riverview, and Lithia, where buyers at that budget typically prefer newer builds with builder warranties and modern open floor plans.

The approximately 1.43-month supply figure puts Brandon in seller's territory by historical standards. A balanced market typically sits at 6 months of supply. Even so, the pace has slowed enough that buyers are operating in a fundamentally different environment than 2022.

## Brandon FL vs. Valrico: A Side-by-Side Look

This comparison comes up constantly in conversations with buyers. Here is how the markets break down by price tier in mid-2026:

**Under $350,000:** Brandon has more options at this price point. Older ranch-style homes in Kingsway, Oak Park, and portions of Lakeview Village price here. Valrico at this tier is limited and typically requires significant updating.

**$350,000 to $450,000:** Both markets are active. In Brandon, this range delivers newer mid-2000s homes or updated 1990s builds with good lot sizes. In Valrico, the same range gets you into Bloomingdale, Diamond Hill, and Buckhorn, where school zoning for Newsome High School drives a measurable premium.

**$450,000 to $550,000:** Valrico dominates this tier. River Hills Country Club homes, portions of Bloomingdale East, and newer construction off Lithia Pinecrest Road price here. Brandon at this range tends to be higher-end renovation projects or custom-built infill, a narrower and slower market.

If Newsome High School zoning matters to your family, that factor alone can justify the $30,000 to $60,000 premium between a comparable Brandon and Valrico home. If you do not have school-age children, Brandon offers the better dollar-per-square-foot value. For a full three-way comparison of Brandon, Valrico, and Lithia, see our [east Hillsborough buyer's guide](/blog/valrico-vs-brandon-vs-lithia-where-to-buy-in-east-hillsborough-2026).

## Brandon FL Neighborhood Breakdown

**Brandon proper (33510):** The western portion of Brandon, closest to Tampa along SR-60 and US-301. Mostly 1970s through 1990s construction. Highest retail density in the Brandon market area. Shortest commute to downtown Tampa or HCA Florida Brandon Hospital. Median prices in the lower range for the Brandon market.

**Brandon east (33511):** The bulk of Brandon's residential inventory and where most buyer activity concentrates. A mix of 1980s through 2000s construction. Neighborhoods like Brandon Crossings, Lakeview Village, and the communities along Bloomingdale Avenue that border Valrico. Solid school zoning to Spoto and Strawberry Crest High.

**Brandon/Seffner border (33527):** The eastern fringe, blending into Dover and Seffner. Larger lots, older homes, and prices that can run below Brandon proper on a per-square-foot basis. Durant High School serves much of this zone. This area is worth a look for buyers who want more land without paying FishHawk prices.

## What Is Driving Brandon Real Estate in 2026

Several structural forces are shaping the Brandon market right now:

**Interest rate pressure:** With 30-year fixed rates in the mid-to-upper 6% range through most of 2026, buyer purchasing power remains compressed compared to the 2020 to 2022 era of sub-4% rates. A buyer who qualified for $450,000 at 3.5% in 2021 qualifies for roughly $370,000 at 6.75% with the same income. This is the single biggest driver of extended days on market across all of east Hillsborough County.

**Florida insurance costs:** Homeowner's insurance has increased substantially across Hillsborough County. Buyers in Brandon are budgeting $2,800 to $4,200 per year for a standard HO-3 policy. Homes with older roofs -- anything over 15 to 20 years -- are seeing buyers negotiate price reductions or demand roof replacement as a condition. Roof age is now a make-or-break factor in many transactions.

**Lock-in effect:** Many Brandon homeowners refinanced between 2020 and 2022 at 2.5% to 3.5%. Trading that rate to buy at 6.75% means a significant monthly payment increase on the new purchase. This lock-in effect is suppressing existing home turnover even as days on market extend, which is why inventory is not flooding the market despite slower sales pace.

**Retail and lifestyle access:** Brandon's Westfield Brandon Mall corridor, Costco on SR-60, Target and Walmart on Causeway Boulevard, and the dense restaurant strip along Parsons Avenue remain strong quality-of-life draws for buyers relocating from other states. Compared to more rural east Hillsborough options like Dover or Boyette, Brandon delivers urban convenience at suburban prices.

## Brandon FL Foreclosure Activity

[Hillsborough County foreclosure data](https://www.realtytrac.com/statsandtrends/foreclosuretrends/fl/hillsborough-county/) shows approximately 96 bank-owned REO properties and 219 homes headed for auction county-wide as of mid-2026. Brandon's share of this is a small fraction of the county total. This is not a repeat of 2008. The foreclosure inventory does not represent a systemic threat to prices and is not sufficient volume to move the general market.

Pre-foreclosure activity across Hillsborough County is more notable: approximately 10.69% of residential properties carry some form of pre-foreclosure classification according to RealtyTrac. This figure sounds alarming but largely reflects the procedural pace of Florida's court-supervised foreclosure system rather than an imminent wave of distressed sales. The concentration is in Tampa proper, not in Brandon or Valrico.

For buyers hoping to find deeply discounted distressed properties in Brandon, the pickings are thin. Price-reduced listings from motivated sellers are a more realistic target. Barrett Henry at REMAX Collective monitors the Hillsborough distressed and price-reduced inventory as part of ongoing market tracking for buyer clients.

## Brandon FL Investment Property Overview

Brandon rental demand remains solid, anchored by major employers: HCA Florida Brandon Hospital, Amazon distribution operations off US-301, and the office parks along Lakeland Avenue and Providence Road. Single-family rental properties in the $330,000 to $400,000 purchase range typically produce gross rents of $2,100 to $2,600 per month in mid-2026, yielding gross cap rates in the 6% to 7.5% range before expenses.

Investors considering multi-family should note that Brandon proper has limited duplex and triplex inventory, mostly in older neighborhoods near SR-60. Investors seeking larger multi-family assets typically look to Tampa proper or to the adjacent commercial corridors where mixed-use zoning allows residential above retail.

## Summary: Brandon FL Market Direction in 2026

Brandon in 2026 is a buyer's market compared to 2021 to 2022, but not a crash. Prices are not collapsing -- the median is off roughly 10% from peak levels per Redfin -- and the structural shortage of housing relative to population in the Tampa Bay metro area continues to provide a floor. The conditions favor patient buyers who are willing to make competitive but not desperate offers.

For the most current transaction data, [Redfin's Brandon market page](https://www.redfin.com/city/21605/FL/Brandon/housing-market) and [Zillow's Brandon home values](https://www.zillow.com/home-values/10528/brandon-fl/) update regularly. [Movoto's Brandon market trends](https://www.movoto.com/brandon-fl/market-trends/) are also worth bookmarking for active listing counts.

Barrett Henry is a Broker Associate at REMAX Collective with 23 years of experience in east Hillsborough County real estate. For a comparison of Brandon and Valrico from a buyer's standpoint, the [Valrico vs Brandon page](/valrico-vs-brandon) covers the key differences in school zones, lot sizes, and price points. For the broader Valrico picture, the [Valrico Market Report](/valrico-market-report) has current data for 33594 and 33596.`,
    publish_date: '2026-07-28T10:00:00.000Z',
  },

  // =====================================================================
  // POST 2: Dover FL Real Estate 2026
  // Sources: Movoto ($427K-$565K median listing March 2026, $256/sqft,
  // 103 DOM), Hillsborough County (unincorporated, ~4,000 residents),
  // Redfin Hillsborough County data
  // =====================================================================
  {
    title: 'Dover FL Real Estate 2026: What Buyers Need to Know About This Hillsborough County Community',
    slug: 'dover-fl-real-estate-2026',
    pillar: 'comparison',
    cta_type: 'buyer',
    featured_image: null,
    featured_image_alt: null,
    meta_title: 'Dover FL Real Estate 2026 | Prices, Market Trends & Buyer Guide',
    meta_description: 'Dover FL real estate 2026: $256/sqft, 103 days on market, and larger lots than Brandon or Valrico. What buyers need to know about this underrated Hillsborough County community.',
    focus_keyword: 'Dover FL real estate 2026',
    secondary_keywords: [
      'Dover FL homes for sale 2026',
      'Dover FL housing market',
      'east Hillsborough County real estate',
      'Hillsborough County rural homes large lots',
    ],
    tags: ['Dover', 'Hillsborough County', 'neighboring communities', 'large lots', '2026'],
    excerpt: 'Dover FL offers larger lots and rural character at prices that can undercut Valrico and Brandon, with 103 days on market giving buyers real negotiating leverage. Here is what the 2026 data shows for this underrated east Hillsborough community.',
    schema_type: 'FAQPage',
    faq_data: [
      {
        question: 'What are home prices in Dover FL in 2026?',
        answer: 'Dover FL median listing prices ran approximately $427,000 to $565,000 in early 2026 depending on the data source and available inventory. Price per square foot for listed Dover homes averaged approximately $256 in March 2026. Dover tends to command higher per-square-foot prices than Brandon because homes typically sit on larger lots with more land value factored in.',
      },
      {
        question: 'How long do homes take to sell in Dover FL?',
        answer: 'Dover FL homes averaged approximately 103 days on market in March 2026, down 11% from the same period the year prior. This slower pace reflects the limited buyer pool for a rural community of about 4,000 residents compared to larger Brandon or Valrico. Buyers have more negotiating time and leverage than in higher-demand Valrico submarkets.',
      },
      {
        question: 'Where is Dover FL located?',
        answer: 'Dover is an unincorporated community in Hillsborough County located along US Highway 574 (East MLK Boulevard) between Seffner to the west and Plant City to the east, approximately 18 to 22 miles east of downtown Tampa. State Road 60 also passes through the southern edge of the Dover area.',
      },
      {
        question: 'What schools serve Dover FL?',
        answer: 'Dover FL feeds primarily into Hillsborough County public schools. Depending on exact location within Dover, students may be zoned for Durant High School, Strawberry Crest High School, or other Hillsborough County secondary schools. Buyers should verify current school boundaries with Hillsborough County Schools before purchasing, as zones can shift.',
      },
      {
        question: 'How does Dover FL compare to Valrico for real estate?',
        answer: 'Dover offers larger lot sizes and more rural character than Valrico, with slower marketing times that give buyers more leverage. However, Dover lacks the retail access, school zone appeal, and community amenities that support Valrico home values. Buyers choosing Dover are typically prioritizing land, privacy, and lower density over walkable convenience and school quality.',
      },
    ],
    content: `Dover, Florida does not get much attention in the east Hillsborough real estate conversation. That is largely because it is a small, unincorporated community of roughly 4,000 residents tucked along US Highway 574 between Seffner and Plant City, about 20 miles east of downtown Tampa. But for buyers who want more land than Brandon or Valrico offers, and who do not need the retail density or school zone appeal of a master-planned suburb, Dover deserves a serious look.

Here is the 2026 data and what it means if you are comparing Dover against Valrico, Seffner, or Plant City.

## Where Is Dover FL?

Dover sits in east Hillsborough County along US-574 (East Martin Luther King Jr. Boulevard), directly north of State Road 60 and east of Seffner. To the east is Plant City; to the west, Seffner and Brandon. The community blends agricultural land, large-lot residential parcels, and a small commercial corridor along US-574.

There is no incorporated city of Dover. It is an unincorporated area of Hillsborough County, which means you pay county taxes but no city taxes, your zoning is governed by Hillsborough County rather than a city government, and you are unlikely to find city-maintained sidewalks or street lighting in older residential sections.

Interstate 4 is accessible via US-574 heading west through Seffner, making Dover a viable option for buyers who commute east toward Lakeland or Polk County. For Tampa commuters, the drive is longer than Brandon or Valrico -- plan for 35 to 50 minutes depending on exact location and time of day.

## Dover FL Home Prices in 2026

Dover's real estate data is thinner than Brandon or Valrico because the community is smaller and transactions are less frequent. Based on available 2026 data:

- **Median listing price:** Approximately $427,000 to $565,000 depending on the source and available inventory mix in a given month (Movoto, March 2026)
- **Median price per square foot:** Approximately $256 for listed inventory (March 2026)
- **Days on market:** Approximately 103 days as of March 2026, down 11% from the year prior
- **Hillsborough County median comparison:** $399,900 overall (Redfin, mid-2026)

The wide range in Dover's median price reflects the nature of its inventory. In a month when larger acreage properties or custom homes dominate the available listings, the median climbs significantly. When smaller ranch homes or older properties are more prominent, it drops. Do not read too much into any single month's median without understanding the specific homes driving it.

What the $256 per square foot figure tells you is that Dover does not offer a deep per-square-foot discount compared to Brandon ($209) or Valrico ($215 to $225). The land component is where the value proposition lives -- buyers get more acres per dollar in Dover than in either of those markets.

## Dover FL vs. Valrico: What the Difference Really Is

The comparison between Dover and Valrico comes down to what you are optimizing for as a buyer.

**Where Valrico wins:**

Valrico offers significantly better school zone access, particularly Newsome High School and Bloomingdale High School, two of the most sought-after public high schools in Hillsborough County. The retail density on SR-60 and Bloomingdale Avenue is another advantage -- grocery stores, restaurants, and services within a short drive. Valrico neighborhoods like Bloomingdale, River Hills, and Diamond Hill also carry strong resale liquidity. Homes sell faster and tend to hold value better in corrections because the buyer pool is deep.

**Where Dover wins:**

If you want a half-acre to five-plus-acre lot without paying FishHawk Ranch or Lithia prices, Dover is one of the few remaining options in Hillsborough County within a reasonable commute of Tampa. The lot sizes in Dover are not available in established Valrico or Brandon neighborhoods at comparable budgets. Buyers who keep horses, operate home-based businesses requiring land, or simply want space and privacy from neighbors will find what they need in Dover more readily than anywhere closer to Tampa.

The 103-day average marketing time in Dover also means buyers have real leverage. Unlike Valrico's active submarkets where properly priced homes still generate multiple offers, Dover buyers can negotiate more deliberately.

For context on how Valrico compares to nearby markets, the [Valrico market report](/valrico-market-report) covers current pricing and inventory for the 33594 and 33596 ZIP codes.

## Dover FL Land and Lot Sizes

The defining characteristic of Dover real estate is lot size. While the typical Valrico subdivision offers quarter-acre to half-acre lots, Dover has a meaningful inventory of one-acre to ten-acre parcels that range from rural residential to agricultural zoning.

This land inventory creates a range of buyer profiles:

**Residential buyers on larger lots:** Families who want a standard three or four bedroom home but with enough yard space for outbuildings, gardens, or simply separation from neighbors. Older Dover homes on one to two acres in the $400,000 to $500,000 range represent the core of this market.

**Agricultural/equestrian buyers:** Hillsborough County maintains agricultural zoning on portions of Dover that allows horses, small livestock, and agricultural uses not permitted in standard residential zoning. Buyers looking to keep horses or operate small farms will find more options in Dover than anywhere else within 25 miles of Tampa proper.

**Rural investment buyers:** Parcels in Dover have historically attracted investors seeking land that could appreciate as suburban growth from Brandon and Valrico continues moving east. This is a longer-horizon investment thesis -- Dover has not absorbed rapid suburban growth the way FishHawk Ranch or Riverview did in the 2000s and 2010s.

## What Drives Dover FL Home Values

With a community of only about 4,000 residents and limited commercial activity, Dover home values are driven primarily by:

**Land value:** The per-acre cost in Dover relative to closer-in Hillsborough County communities continues to be the primary driver of buyer interest. As developable land in Valrico and Brandon becomes increasingly scarce, the differential between Dover's land prices and those in established suburbs may narrow over time.

**I-4 and US-574 corridor employment:** Dover residents who commute to Lakeland, Polk County, or eastern Hillsborough County employment centers find that Dover's US-574 access is a practical advantage. The Tampa to Lakeland logistics corridor continues adding employment centers that support housing demand east of Brandon.

**Hillsborough County infrastructure:** Unlike rural areas in other Florida counties, Dover benefits from Hillsborough County water and sewer service extending into portions of the community, which removes one of the traditional barriers to development that has constrained property values in more rural areas.

**Proximity to Plant City:** Dover's location between Brandon and Plant City puts it within easy reach of Plant City's growing retail base along SR-60 and James Redman Parkway, as well as annual events like the Florida Strawberry Festival that draw significant regional attention to the area. The [Plant City FL real estate market](/blog/plant-city-fl-real-estate-market-2026) is growing independently and contributes to the broader east Hillsborough picture.

## Foreclosure and Distressed Activity in Dover

Dover does not generate specific foreclosure statistics as an unincorporated community, but the Hillsborough County data provides context. According to [RealtyTrac](https://www.realtytrac.com/statsandtrends/foreclosuretrends/fl/hillsborough-county/), Hillsborough County has approximately 96 bank-owned REO properties and 219 auction-bound foreclosures county-wide as of mid-2026. Rural areas like Dover and Seffner typically represent a modest share of this total.

The longer days on market in Dover (103 days versus Valrico's 57) can make individual seller motivation more visible. Homes that have been listed for 90 or more days in Dover often represent either overpriced properties or motivated sellers willing to negotiate. This is where buyer leverage is most evident.

## Schools Serving Dover FL

Dover is served by Hillsborough County Schools. Exact school zoning depends on the specific address within Dover. Common schools serving Dover area students include Durant High School and Strawberry Crest High School, the latter of which serves the eastern portion of Hillsborough County near Plant City and Dover. Middle and elementary school assignments also vary by exact address.

Unlike Valrico's sought-after Newsome and Bloomingdale school zones, Dover's schools are solid but do not carry the premium associated with Valrico's highest-demand zones. Buyers for whom school zoning is a top priority should verify current boundaries at the Hillsborough County Schools website and consider whether Valrico's premium makes more sense for their family.

## Is Dover FL Right for You?

Dover FL makes sense for a specific type of buyer in 2026: someone who values land, privacy, and a rural character more than retail access and elite school zone positioning. The 103-day average marketing time and the absence of competitive bidding activity give buyers more control over the transaction than they would have in Brandon or Valrico.

For buyers who want the best of both -- land and school zone access -- the eastern edge of Valrico along Lithia Pinecrest Road and Boyette Road offers some larger lots in the 33596 ZIP code at Valrico prices with better school zone options. That inventory is limited but worth watching.

For the most current data on Hillsborough County, [Redfin's county-level housing market data](https://www.redfin.com/county/464/FL/Hillsborough-County/housing-market) updates frequently and shows county-wide trends that apply to Dover. The [Hillsborough County Property Appraiser](https://www.hcpafl.org/) is the authoritative source for assessed values, ownership history, and parcel data.

Barrett Henry is a Broker Associate at REMAX Collective with 23 years of experience in Hillsborough County real estate, including the rural and semi-rural markets east of Brandon. If you are evaluating Dover, Seffner, or Plant City alongside Valrico, a conversation grounded in current transaction data is the right starting point.`,
    publish_date: '2026-07-29T10:00:00.000Z',
  },
];

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');
  if (token !== SEED_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sb = getServiceClient();
  const results: { slug: string; status: string }[] = [];

  for (const post of POSTS) {
    // Check for existing post
    const { data: existing } = await sb
      .from('blog_posts')
      .select('slug')
      .eq('slug', post.slug)
      .maybeSingle();

    if (existing) {
      results.push({ slug: post.slug, status: 'skipped (already exists)' });
      continue;
    }

    const wordCount = post.content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    const { error } = await sb.from('blog_posts').insert({
      ...post,
      status: 'published',
      word_count: wordCount,
      reading_time: readingTime,
      related_slugs: [],
      og_image: null,
    });

    if (error) {
      results.push({ slug: post.slug, status: `error: ${error.message}` });
    } else {
      results.push({ slug: post.slug, status: `inserted (${wordCount} words, ${readingTime} min read)` });
    }
  }

  return NextResponse.json({ success: true, results });
}
