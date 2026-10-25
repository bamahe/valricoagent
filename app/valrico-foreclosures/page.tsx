// Server component on purpose. PropertySearch and ContactForm carry their own
// 'use client' directive, so marking this page client-side only shipped the
// static copy to the browser as JavaScript for no benefit.
import Image from 'next/image';
import Link from 'next/link';
import PropertySearch from '../components/PropertySearch';
import { ContactForm } from '../components/ContactForm';
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs';
import QuickAnswer from '../components/QuickAnswer';

const CRUMBS = [{ name: 'Valrico Foreclosures', href: '/valrico-foreclosures/' }];

// Nearby cities used for the fallback grid when Valrico inventory is thin.
// Must match Stellar MLS City values exactly.
const NEARBY_CITIES = ['Brandon', 'Riverview', 'Lithia', 'Seffner', 'Dover', 'Plant City'];

// Shared comparison-table cell styles
const thStyle: React.CSSProperties = {
  textAlign: 'left', padding: '12px 14px', fontSize: 12, fontWeight: 700,
  textTransform: 'uppercase', letterSpacing: '.05em',
  borderBottom: '2px solid var(--border)', color: 'var(--ink)',
};

const tdStyle: React.CSSProperties = {
  padding: '12px 14px', borderBottom: '1px solid var(--border)',
  color: 'var(--ink-soft)', verticalAlign: 'top',
};

export default function ValricoForeclosures() {
  return (
    <>
      <Breadcrumbs items={CRUMBS} />

      {/* Hero */}
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Distressed Properties</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Valrico Foreclosure Homes</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Foreclosure homes in Valrico can offer below-market pricing, but they come with risks most buyers don&apos;t anticipate. Florida is a judicial foreclosure state, which means every foreclosure goes through the court system. That process creates opportunities at different stages, if you know where to look and what to watch for.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call<br/>(813) 733-7907</a>
            <a href="#help-form" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Get Confidential Help</a>
          </div>
        </div>
      </div>

      {/* AEO QuickAnswer, direct extractable answer for AI engines and snippets */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <QuickAnswer
          question="Are there foreclosure homes for sale in Valrico, FL?"
          answer="Yes. Valrico typically has a handful of active distressed listings at any time, flagged on Stellar MLS as bank-owned (REO), short sale, or auction. Inventory is far smaller than the 2008-2012 wave. Florida is a judicial foreclosure state, so every foreclosure passes through the Hillsborough County court system, creating buying windows at the pre-foreclosure, auction, REO, and HUD stages."
        />
      </div>

      {/* PROPERTY SEARCH, distressed inventory only.
          distressedOnly filters Stellar MLS SpecialListingConditions to
          Short Sale / Real Estate Owned / Auction. Without it this grid
          returned every active Valrico listing, roughly 250 homes. */}
      <div className="max-w-[1140px] mx-auto px-7 pt-10">
        <h2 className="font-serif text-2xl mb-2">Foreclosure &amp; Distressed Homes Currently for Sale in Valrico</h2>
        <p className="text-[15px] leading-[1.8] mb-5" style={{ color: 'var(--ink-soft)' }}>
          Every home below is flagged on Stellar MLS as bank-owned (REO), a short sale, or
          auction. This is live MLS data, not a scraped list of old filings, so what you see is
          what is actually available today. Use the buttons to narrow by foreclosure type.
        </p>
        <PropertySearch
          defaultCity="Valrico"
          distressedOnly
          heading="Valrico Foreclosure & Distressed Homes"
          resultNoun="distressed listing"
        />
      </div>

      {/* NEARBY FALLBACK, Valrico distressed inventory is usually single digits.
          Sending a motivated buyer away empty-handed loses the lead, so widen
          the net to the surrounding Hillsborough County towns. */}
      <div className="max-w-[1140px] mx-auto px-7 pt-16">
        <h2 className="font-serif text-2xl mb-2">Foreclosures Near Valrico: Brandon, Riverview, Lithia &amp; Plant City</h2>
        <p className="text-[15px] leading-[1.8] mb-5" style={{ color: 'var(--ink-soft)' }}>
          Valrico is a small market, so distressed inventory inside the city limits is often just
          a handful of homes. These neighboring communities sit within a 15-minute drive and
          usually carry more foreclosure, REO, and short sale options. Barrett works all of them.
        </p>
        <PropertySearch
          cities={NEARBY_CITIES}
          distressedOnly
          hideFilters
          hideDisclaimer
          resultsPerPage={12}
          resultNoun="nearby distressed listing"
        />
      </div>

      {/* Main content */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>
            {/* Bloomingdale image */}
            <div style={{ position: 'relative', aspectRatio: '16/7', marginBottom: 24, borderRadius: 8, overflow: 'hidden' }}>
              <Image src="/bloomingdale-valrico.jpg" alt="Bloomingdale Valrico FL foreclosure homes for sale" fill className="object-cover" sizes="(max-width:768px) 100vw, 900px" />
            </div>

            {/* Types of Foreclosures */}
            <h2 className="font-serif text-2xl mb-4">What Types of Foreclosures Are Sold in Valrico?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Not all foreclosures are the same. Where a property sits in the foreclosure process determines how you buy it, what risks you take, and what kind of deal is possible.</p>

            <div className="space-y-8 mb-10">
              {[
                ['Pre-Foreclosure','The homeowner has missed payments and the bank has filed a lis pendens (a public notice that foreclosure proceedings have started). The home is not yet at auction. At this stage, the owner can still sell the property through a traditional sale or short sale. Pre-foreclosures often represent the best opportunity because you can inspect the home, negotiate terms, and use conventional financing. Read the full pre-foreclosure guide for Valrico homeowners.'],
                ['Auction (Courthouse Steps)','Once the court issues a final judgment of foreclosure, the property goes to auction. In Hillsborough County, these are held online through the clerk of court. Auction purchases typically require cash or certified funds, you cannot inspect the property beforehand, and there is no warranty on title or condition. This is the highest-risk, highest-reward stage.'],
                ['Bank-Owned / REO','If nobody bids enough at auction, the bank takes ownership. These are called REO (Real Estate Owned) properties. Banks list REOs through real estate agents, and you can usually inspect the property and use financing. However, all REO sales are AS-IS. The bank will not make repairs or provide seller disclosures.'],
                ['HUD Homes','When a home with an FHA-insured mortgage goes through foreclosure, HUD (the Department of Housing and Urban Development) takes ownership. HUD homes are listed on hudhomestore.com and have a specific bidding process. Owner-occupant buyers get priority during the first 30 days of listing before investors can bid.'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-semibold text-lg mb-2" style={{color:'var(--ink)'}}>{title}</h3>
                  <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* AEO comparison table, AI answer engines extract tabular data readily */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Which Foreclosure Stage Is Right for You?</h2>
            <p className="text-[15px] leading-[1.8] mb-5" style={{color:'var(--ink-soft)'}}>Each stage trades risk against discount. Use this to decide where you should be shopping before you start making offers.</p>
            <div style={{ overflowX: 'auto', marginBottom: 40 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 620 }}>
                <caption style={{ captionSide: 'bottom', fontSize: 12, color: 'var(--ink-soft)', paddingTop: 10, textAlign: 'left' }}>
                  Foreclosure buying stages in Hillsborough County, FL. Typical discounts reflect
                  sale-to-market-value spreads and vary by property condition.
                </caption>
                <thead>
                  <tr style={{ background: 'var(--cream-warm)' }}>
                    <th scope="col" style={thStyle}>Stage</th>
                    <th scope="col" style={thStyle}>Can You Inspect?</th>
                    <th scope="col" style={thStyle}>Financing Allowed?</th>
                    <th scope="col" style={thStyle}>Typical Discount</th>
                    <th scope="col" style={thStyle}>Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pre-Foreclosure / Short Sale', 'Yes', 'Yes, incl. FHA & VA', '5-15% below market', 'Low'],
                    ['Courthouse Auction', 'No', 'No, cash or certified funds', '20-40% below market', 'Very high'],
                    ['Bank-Owned (REO)', 'Yes, but AS-IS', 'Usually yes', '10-20% below market', 'Moderate'],
                    ['HUD Home', 'Yes, but AS-IS', 'Yes, incl. FHA 203(k)', '10-20% below market', 'Moderate'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <th scope="row" style={{ ...tdStyle, fontWeight: 600, color: 'var(--ink)', textAlign: 'left' }}>{row[0]}</th>
                      <td style={tdStyle}>{row[1]}</td>
                      <td style={tdStyle}>{row[2]}</td>
                      <td style={tdStyle}>{row[3]}</td>
                      <td style={tdStyle}>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mid-article CTA, catches readers at the decision point */}
            <div style={{ background: 'var(--blue-deep)', borderRadius: 10, padding: '28px 30px', marginBottom: 40 }}>
              <h3 className="font-serif text-xl mb-2" style={{ color: '#fff' }}>Not sure which stage fits your budget?</h3>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,.78)' }}>
                Tell Barrett your price range and loan type and he will tell you straight whether
                auction, REO, or a short sale is realistic for you, and which Valrico-area
                properties are worth a showing this week.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="tel:8137337907" className="btn-solid">Call<br/>(813) 733-7907</a>
                <a href="#help-form" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Send My Criteria</a>
              </div>
            </div>

            {/* How to Buy */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Do You Buy a Foreclosure in Valrico?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Buying a foreclosure is not the same as buying a traditional resale. Here is the step-by-step process.</p>

            <div className="space-y-8 mb-10">
              {[
                ['1. Get pre-approved for financing','Before you start looking, get a pre-approval letter from a lender. Some foreclosures require cash, but many REO and HUD properties accept FHA, VA, and conventional financing. Know your budget and your loan type before you start shopping.'],
                ['2. Find an agent who knows distressed properties','Not every agent understands the foreclosure process. REO transactions have different contracts, different timelines, and different negotiation dynamics than traditional sales. Barrett Henry brings 23+ years of real estate experience to distressed transactions.'],
                ['3. Search for available foreclosures','Barrett monitors REO listings across Stellar MLS, bank asset management portals, HUD listings, and auction schedules for Hillsborough County. You get access to properties as soon as they hit the market.'],
                ['4. Inspect carefully (but understand AS-IS)','Most foreclosures sell AS-IS, meaning the bank will not make repairs. You can still inspect the property (except at auction), and you should. But your inspection is for your information only, it is not a negotiation tool for repair credits like in a traditional sale.'],
                ['5. Make an offer','REO offers go through a bank asset manager, which means longer response times (sometimes 2-4 weeks). HUD homes use a sealed bid process. Barrett structures your offer to meet bank requirements and maximize your chances of acceptance.'],
                ['6. Close the deal','Foreclosure closings often take longer than traditional sales due to bank bureaucracy, title issues, and HOA lien negotiations. Expect 45-60 days from accepted offer to closing on most REO transactions.'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-semibold text-lg mb-2" style={{color:'var(--ink)'}}>{title}</h3>
                  <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Diamond Hill image */}
            <div style={{ position: 'relative', aspectRatio: '16/7', marginTop: 32, marginBottom: 8, borderRadius: 8, overflow: 'hidden' }}>
              <Image src="/images/neighborhoods/diamond-hill-valrico-fl-entrance.jpg" alt="Diamond Hill Valrico FL foreclosure and REO homes" fill className="object-cover" sizes="(max-width:768px) 100vw, 900px" />
            </div>

            {/* What to Watch For */}
            <h2 className="font-serif text-2xl mb-4 mt-10">What Should You Watch Out For on a Foreclosure?</h2>
            <div className="space-y-4 mb-10">
              {[
                ['AS-IS condition','Foreclosed homes often have deferred maintenance, vandalism, or damage. Roofs, AC systems, plumbing, and pools are common problem areas. Budget for repairs beyond the purchase price.'],
                ['Title issues and liens','Tax liens, HOA liens, code enforcement liens, and second mortgages can all cloud the title on a foreclosure. Title insurance is essential, and Barrett ensures title is researched thoroughly before you close.'],
                ['No seller disclosures','Banks are not required to provide the same disclosures as a traditional seller. You will not get a seller\'s disclosure form detailing known defects. What you see (and inspect) is what you get.'],
                ['Longer closing timelines','Bank asset managers move slowly. Expect delays for approvals, addenda, and extensions. Patience is part of the foreclosure buying process.'],
                ['Cash vs. financing limitations','Some properties (especially at auction or those in poor condition) may not qualify for financing. FHA and VA loans have property condition requirements that distressed properties may not meet.'],
                ['Inspection limitations','At auction, you cannot inspect. On REO properties, you can inspect but cannot ask for repairs. Plan your budget accordingly.'],
              ].map(([title, desc]) => (
                <div key={title} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Current Activity */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Much Foreclosure Activity Is There in Valrico Right Now?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Foreclosure inventory in Valrico is low as of 2026. Strong home equity levels and a stable local economy mean fewer homeowners are falling into distress compared to 2008-2012. However, opportunities still exist, particularly in cases involving divorce, probate, job loss, or adjustable-rate mortgage resets.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>For courthouse auction schedules, check the <a href="https://www.hillsclerk.com" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Hillsborough County Clerk of Court</a> website. Barrett monitors these listings and can alert you when properties in Valrico ZIP codes (33594, 33596) come up for sale.</p>

            {/* Buckhorn image */}
            <div style={{ position: 'relative', aspectRatio: '16/7', marginTop: 32, marginBottom: 8, borderRadius: 8, overflow: 'hidden' }}>
              <Image src="/images/neighborhoods/buckhorn-preserve-valrico-fl-entrance-sign.jpg" alt="Buckhorn Preserve Valrico FL distressed property opportunities" fill className="object-cover" sizes="(max-width:768px) 100vw, 900px" />
            </div>

            {/* EEAT author block */}
            <div className="flex items-center gap-4 p-5 rounded-md border mt-6 mb-6" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <div style={{ position: 'relative', width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/barrett-henry.png" alt="Barrett Henry REALTOR Valrico FL foreclosure specialist" fill className="object-cover" sizes="72px" />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Barrett Henry, REALTOR® | Broker Associate, REMAX Collective</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--ink-soft)' }}>23+ years of real estate experience · REO transactions · Bank negotiation · Title resolution on distressed properties</p>
                <p className="text-xs mt-1" style={{ color: 'var(--ink-soft)' }}>Free, confidential consultation for buyers and sellers facing distress</p>
                <a href="tel:8137337907" className="text-xs font-semibold no-underline mt-1 inline-block" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>
              </div>
            </div>

            {/* Expanded internal links */}
            <div className="mb-6 text-[15px] leading-[1.8]">
              <p>
                <strong style={{ color: 'var(--ink)' }}>Related resources:</strong>{' '}
                <Link href="/valrico-pre-foreclosure/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Pre-foreclosure options</Link> &middot;{' '}
                <Link href="/valrico-short-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Short sale help</Link> &middot;{' '}
                <Link href="/valrico-cash-offer/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Cash offer in 24 hours</Link> &middot;{' '}
                <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Sell my home</Link> &middot;{' '}
                <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Home values</Link> &middot;{' '}
                <Link href="/valrico-investment-property/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Investment properties</Link> &middot;{' '}
                <Link href="/valrico-market-report/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Market report</Link> &middot;{' '}
                <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search all homes</Link> &middot;{' '}
                <Link href="/homes-for-sale-33594/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>33594 listings</Link> &middot;{' '}
                <Link href="/homes-for-sale-33596/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>33596 listings</Link>
              </p>
            </div>

            {/* Barrett's Advantage */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Why Work with Barrett on a Foreclosure Purchase?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Barrett Henry has 23+ years of real estate experience, including extensive work with REO listings, bank negotiations, and title resolution on distressed properties. He understands how asset managers think, what banks need to see in an offer, and how to navigate the title issues that sink most foreclosure deals.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Whether you are an investor looking for a deal or a homebuyer trying to stretch your budget, Barrett can help you find, evaluate, and close on foreclosure properties in Valrico and the surrounding Tampa Bay area. You may also want to explore <Link href="/valrico-short-sale/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>short sale options</Link>, <Link href="/valrico-cash-offer/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>cash offers for quick sales</Link>, or check current <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Valrico home values</Link> to compare foreclosure pricing to market value. If you are a homeowner facing foreclosure, read the <Link href="/valrico-pre-foreclosure/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>pre-foreclosure guide</Link> for your options, or consider <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>selling your home</Link> before it goes to auction.</p>

            <div className="flex gap-3 flex-wrap mt-8 mb-12">
              <a href="tel:8137337907" className="btn-solid">Call<br/>(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost">Email barrett@nowtb.com</a>
            </div>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Foreclosure FAQ</h2>
            <div className="space-y-4">
              {[
                ['Are foreclosures cheaper than regular homes in Valrico?','Generally yes, but not always. REO and auction properties often sell 10-20% below market value, but repair costs can eat into that discount quickly. You need to factor in the full cost of purchase plus repairs to determine if a foreclosure is actually a good deal.'],
                ['Can I use an FHA loan to buy a foreclosure in Valrico?','You can use FHA financing on REO and HUD properties, but the home must meet FHA minimum property standards. If the roof, electrical, plumbing, or structural systems are in poor condition, the property may not qualify. A 203(k) renovation loan is an option for properties that need significant work.'],
                ['How do I find foreclosures in Valrico before they hit the market?','Barrett monitors lis pendens filings, auction schedules, and bank REO pipelines. Pre-foreclosure properties can sometimes be purchased through short sales before they reach auction. Contact Barrett directly for current inventory.'],
                ['Is it safe to buy a foreclosure at auction in Hillsborough County?','Auction purchases carry the highest risk. You cannot inspect the property, you must pay cash or certified funds, and title issues may not be resolved. Most first-time foreclosure buyers should stick with REO or HUD properties where you can inspect and use financing.'],
              ].map(([q, a]) => (
                <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
                </div>
              ))}
            </div>

            {/* Sources, GEO signal. AI engines weight pages that cite primary sources. */}
            <h2 className="font-serif text-2xl mb-4 mt-12">Sources &amp; Official Resources</h2>
            <ul className="text-[15px] leading-[1.9] mb-8 pl-5" style={{ color: 'var(--ink-soft)', listStyle: 'disc' }}>
              <li>
                <a href="https://www.hillsclerk.com/Additional-Services/Foreclosure-Sales" target="_blank" rel="noopener" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Hillsborough County Clerk of Court, Foreclosure Sales</a>
                {' '},  online auction calendar and bidding rules for Valrico-area properties.
              </li>
              <li>
                <a href="https://www.hudhomestore.gov/" target="_blank" rel="noopener" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>HUD HomeStore</a>
                {' '},  official listing site for HUD-owned homes, including the owner-occupant priority period.
              </li>
              <li>
                <a href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0045/0045.html" target="_blank" rel="noopener" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Florida Statutes Chapter 45</a>
                {' '},  governs judicial sale procedure, including the clerk&apos;s sale and certificate of title.
              </li>
              <li>
                <a href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0702/0702.html" target="_blank" rel="noopener" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Florida Statutes Chapter 702</a>
                {' '},  Florida&apos;s judicial foreclosure process and the right of redemption.
              </li>
              <li>
                <a href="https://www.hcpafl.org/" target="_blank" rel="noopener" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Hillsborough County Property Appraiser</a>
                {' '},  verify assessed value, ownership history, and homestead status before you bid.
              </li>
              <li>
                <a href="https://hillsborough.county-taxes.com/" target="_blank" rel="noopener" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Hillsborough County Tax Collector</a>
                {' '},  check for delinquent taxes and outstanding tax certificates on a property.
              </li>
            </ul>

            <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              This page is general information, not legal, tax, or financial advice. Foreclosure
              law and timelines change. Consult a Florida attorney about your specific situation.
              Listing data is provided by Stellar MLS and deemed reliable but not guaranteed.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR® at REMAX Collective, has 23+ years of real estate experience including distressed property transactions. Free, confidential consultation.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">Call<br/>(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-pre-foreclosure/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Pre-foreclosure help in Valrico &rarr;</Link></li>
                <li><Link href="/valrico-short-sale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico short sale assistance &rarr;</Link></li>
                <li><Link href="/valrico-cash-offer/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Get a cash offer on your home &rarr;</Link></li>
                <li><Link href="/sell-my-home-valrico/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Sell my Valrico home &rarr;</Link></li>
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>What is my home worth? &rarr;</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are foreclosures cheaper than regular homes in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Generally yes, but not always. REO and auction properties often sell 10-20% below market value, but repair costs can eat into that discount. Factor in purchase price plus repairs to determine if it is a good deal."}},{"@type":"Question","name":"Can I use an FHA loan to buy a foreclosure in Valrico?","acceptedAnswer":{"@type":"Answer","text":"You can use FHA financing on REO and HUD properties, but the home must meet FHA minimum property standards. A 203(k) renovation loan is an option for properties needing significant work."}},{"@type":"Question","name":"How do I find foreclosures in Valrico before they hit the market?","acceptedAnswer":{"@type":"Answer","text":"Barrett monitors lis pendens filings, auction schedules, and bank REO pipelines. Pre-foreclosure properties can sometimes be purchased through short sales before they reach auction."}},{"@type":"Question","name":"Is it safe to buy a foreclosure at auction in Hillsborough County?","acceptedAnswer":{"@type":"Answer","text":"Auction purchases carry the highest risk. You cannot inspect the property and must pay cash. Most first-time foreclosure buyers should stick with REO or HUD properties."}}]})}} />

      {/* BreadcrumbList JSON-LD, generated from the same CRUMBS array the
          visible breadcrumb bar uses so the two can never disagree. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(CRUMBS)) }} />

      {/* Lead Capture Form.
          id="help-form" is the target for the hero and mid-article CTAs.
          It was missing, so both of those buttons did nothing when clicked.
          scroll-mt offsets the sticky header so the form heading is not hidden. */}
      <div id="help-form" className="max-w-[1140px] mx-auto px-7 py-12 scroll-mt-24">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"RealEstateAgent","name":"Barrett Henry","jobTitle":"REALTOR® & Broker Associate","url":"https://valricoagent.com/valrico-foreclosures/","telephone":"(813) 733-7907","email":"barrett@nowtb.com","image":"https://valricoagent.com/barrett-henry.png","address":{"@type":"PostalAddress","addressLocality":"Valrico","addressRegion":"FL","addressCountry":"US"},"worksFor":{"@type":"RealEstateOrganization","name":"REMAX Collective"},"description":"Barrett Henry is a REALTOR® and Broker Associate at REMAX Collective with 23+ years of real estate experience, specializing in foreclosure and distressed property transactions in Valrico FL."})}} />
    </>
  );
}
