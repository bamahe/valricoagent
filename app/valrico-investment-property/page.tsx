'use client';
import Link from 'next/link';
import PropertySearch from '../components/PropertySearch';
import { ContactForm } from '../components/ContactForm';

export default function InvestmentProperty() {
  return (
    <>
      {/* HERO */}
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Investing in Valrico</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Valrico Investment Properties - Rental &amp; Multi-Family Opportunities</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>East Hillsborough County has strong rental demand, reasonable entry points, and a landlord-friendly state government. Whether you are buying your first rental or adding to a portfolio, Barrett Henry can help you find properties that actually cash flow.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call<br/>(813) 733-7907</a>
            <Link href="/valrico-fl-homes-for-sale/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Search Valrico Homes</Link>
          </div>
        </div>
      </div>

      {/* PROPERTY SEARCH, homes first */}
      <div className="max-w-[1140px] mx-auto px-7 pt-8">
        <PropertySearch defaultCity="Valrico" heading="Valrico Investment Properties" />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>

            {/* WHY VALRICO FOR INVESTORS */}
            <h2 className="font-serif text-2xl mb-4">Why invest in Valrico real estate?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Valrico sits in one of the fastest-growing corridors in Tampa Bay. East Hillsborough County has added thousands of new residents over the past five years, and the rental market has tightened along with it. Vacancy rates in the 33594 and 33596 ZIP codes consistently run below the national average. The combination of strong schools, proximity to MacDill AFB and major employers, and a shortage of affordable rental inventory makes this a solid market for buy-and-hold investors.</p>

            {/* RENTAL DEMAND */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Rental demand in Valrico</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Tenant demand comes from several reliable sources: military families stationed at MacDill AFB (15 miles west), young professionals working in Tampa or Brandon, families who want Valrico school zones but are not ready to buy, and corporate relocations. Single-family rentals in good <Link href="/valrico-school-zones/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>school zones</Link> are especially in demand, families will pay a premium to rent in <Link href="/neighborhoods/bloomingdale/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Bloomingdale</Link> or Newsome high school zones.</p>

            {/* AVERAGE RENTS */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Average rents by bedroom count</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                ['2 BR / 2 BA','$1,600–$1,900/mo'],
                ['3 BR / 2 BA','$1,900–$2,300/mo'],
                ['4 BR / 2 BA','$2,200–$2,700/mo'],
                ['4 BR / 3 BA','$2,500–$3,100/mo'],
              ].map(([beds,rent])=>(
                <div key={beds} className="p-4 rounded-md border text-center" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
                  <div className="font-semibold text-sm">{beds}</div>
                  <div className="text-lg font-bold mt-2" style={{color:'var(--accent)'}}>{rent}</div>
                </div>
              ))}
            </div>
            <p className="text-sm mb-6" style={{color:'var(--ink-muted)'}}>Q3 2026 estimates based on Stellar MLS rental data and Barrett&apos;s property management portfolio. Actual rents vary by condition, location, and school zone.</p>

            {/* CAP RATES */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Cap rates and cash flow</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Cap rates in Valrico typically range from 4.5% to 6.5% depending on purchase price, condition, and rental income. Townhomes and lower-priced single-family homes in neighborhoods like Kings Mill, Savannah Landings, and Valri Park tend to produce the best cash-on-cash returns. Higher-end homes in Bloomingdale or River Hills produce lower cap rates but stronger appreciation. Your strategy, cash flow vs. appreciation vs. a blend of both, determines which neighborhoods make sense for you.</p>

            {/* BEST NEIGHBORHOODS */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Best neighborhoods for rental investors</h2>
            <div className="space-y-4 mb-6">
              {[
                ['Kings Mill Townhomes','Entry point around $220K–$275K. 2-3 BR townhomes with HOA-maintained exteriors. Strong rental demand, low maintenance. Rents $1,600–$1,900/mo. One of the best cash-flow plays in Valrico.'],
                ['Savannah Landings','Newer construction (2015+), 3-4 BR single-family homes in the $320K–$400K range. Modern finishes attract quality tenants. Rents $2,000–$2,400/mo. Appreciation upside is strong.'],
                ['Valri Park','Affordable single-family entry at $275K–$350K. Established neighborhood with mature trees. Rents $1,800–$2,200/mo. Solid for buy-and-hold investors who want steady income.'],
                ['Bloomingdale area','Higher entry ($375K–$500K) but premium rents ($2,300–$2,800/mo) because of the school zone. Lower cap rate, stronger appreciation. Best for investors with a longer time horizon.'],
              ].map(([hood,desc])=>(
                <div key={hood} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{hood}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* PROPERTY MANAGEMENT */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Property management through ViVi PM</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Barrett Henry also runs <a href="https://vivipm.com" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>ViVi PM</a>, a full-service property management company serving Valrico and east Hillsborough County. When you buy an investment property through Barrett, you get a single point of contact for acquisition, tenant placement, and ongoing management. Maintenance is handled in-house through <a href="https://bestvalricohandyman.com" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Best Valrico Handyman</a> (Best Bay Services), no third-party markups. Management fee is 10% of collected rent. This means your investment is managed by someone who actually knows the neighborhood, not a call center.</p>

            {/* 1031 EXCHANGE */}
            <h2 className="font-serif text-2xl mb-4 mt-10">1031 exchange basics</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>If you are selling an investment property elsewhere and want to defer capital gains taxes, a 1031 exchange allows you to roll your proceeds into a like-kind property. The key deadlines: you have 45 days from closing to identify replacement properties and 180 days to close. Florida&apos;s no state income tax makes it an especially attractive destination for 1031 exchanges from high-tax states. Barrett has worked with multiple 1031 exchange buyers and can coordinate with your qualified intermediary to meet the timeline.</p>

            {/* WHY EAST HILLSBOROUGH */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Why east Hillsborough County?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>East Hillsborough - Valrico, Brandon, Riverview, Lithia, is where the growth is happening. New commercial development, road improvements, school construction, and population growth all point east. Prices are still below the Hillsborough County average, which means more room for appreciation compared to South Tampa, Westchase, or other established areas where prices have already peaked. For investors, the combination of rising rents, population growth, and below-average entry prices creates a window that will not stay open forever. Review the latest <Link href="/valrico-market-report/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Valrico market report</Link> for current pricing data and trends, or check <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>current home values by neighborhood</Link>.</p>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Investment property FAQ</h2>
            <div className="space-y-4">
              {[
                ['What is the minimum down payment for an investment property in Florida?','Most conventional lenders require 20-25% down for investment properties. Some portfolio lenders offer 15% down with higher rates. DSCR (debt service coverage ratio) loans are also available for investors who qualify based on rental income rather than personal income.'],
                ['Can I buy a Valrico rental property from out of state?','Absolutely. Barrett works with out-of-state investors regularly. He handles property identification, virtual tours, offer negotiation, and coordinates with ViVi PM for tenant placement and ongoing management. You do not need to be local.'],
                ['Are there multi-family properties in Valrico?','True multi-family (duplex, triplex, fourplex) inventory is limited in Valrico proper. Most investment opportunities are single-family rentals or townhomes. Brandon and Riverview offer more multi-family options nearby.'],
                ['What insurance costs should I expect on a Valrico rental?','Landlord (DP-3) policies in Valrico typically run $2,500 to $4,500 per year depending on the home. Inland location keeps flood insurance costs low, most Valrico properties are not in a flood zone. Barrett can connect you with insurance agents who specialize in investor policies.'],
              ].map(([q,a])=>(
                <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett about investing</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>23+ years of real estate experience. Barrett Henry, REALTOR® at REMAX Collective, helps investors find properties that cash flow in Valrico and east Hillsborough County. Also runs ViVi PM for turnkey property management.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">Call<br/>(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-property-management/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Property management &rarr;</Link></li>
                <li><Link href="/valrico-market-report/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico market report &rarr;</Link></li>
                <li><Link href="/valrico-fl-homes-for-sale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Search all Valrico homes &rarr;</Link></li>
                <li><a href="https://vivipm.com" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>ViVi PM website &rarr;</a></li>
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico home values &rarr;</Link></li>
                <li><Link href="/neighborhoods/bloomingdale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Bloomingdale neighborhood &rarr;</Link></li>
                <li><a href="https://bestvalricohandyman.com" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Rental maintenance - Best Valrico Handyman &rarr;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="material-icons" style={{fontSize:48,marginBottom:12,opacity:.8}}>account_balance</span>
          <h2 className="font-serif text-2xl mb-3">Ready to Build Your Valrico Portfolio?</h2>
          <p className="text-sm mb-6 max-w-[560px] mx-auto" style={{color:'rgba(255,255,255,.7)'}}>Barrett Henry, REALTOR® with REMAX Collective, helps investors identify, acquire, and manage rental properties in Valrico and east Hillsborough County. From acquisition to tenant placement to ongoing management through ViVi PM, one call handles it all.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:8137337907" className="btn-solid" style={{background:'#fff',color:'#003da5'}}>Call<br/>(813) 733-7907</a>
            <a href="mailto:barrett@nowtb.com" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-sm rounded no-underline">Email Barrett</a>
          </div>
        </div>
      </section>

      {/* JSON-LD SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org",
        "@graph":[
          {
            "@type":"RealEstateAgent",
            "name":"Barrett Henry",
            "description":"Valrico FL REALTOR® and Broker Associate with REMAX Collective. 23+ years of real estate experience. Helps investors find rental and investment properties in Valrico and east Hillsborough County.",
            "url":"https://valricoagent.com/valrico-investment-property/",
            "telephone":"(813) 733-7907",
            "email":"barrett@nowtb.com",
            "address":{"@type":"PostalAddress","streetAddress":"205 E Brandon Blvd","addressLocality":"Brandon","addressRegion":"FL","postalCode":"33511","addressCountry":"US"},
            "areaServed":{"@type":"City","name":"Valrico, FL"}
          },
          {
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is the minimum down payment for an investment property in Florida?","acceptedAnswer":{"@type":"Answer","text":"Most conventional lenders require 20-25% down for investment properties. DSCR loans are also available for investors who qualify based on rental income rather than personal income."}},
              {"@type":"Question","name":"Can I buy a Valrico rental property from out of state?","acceptedAnswer":{"@type":"Answer","text":"Yes. Barrett works with out-of-state investors regularly, handling property identification, virtual tours, negotiation, and coordinates with ViVi PM for tenant placement and ongoing management."}},
              {"@type":"Question","name":"Are there multi-family properties in Valrico?","acceptedAnswer":{"@type":"Answer","text":"True multi-family inventory is limited in Valrico proper. Most investment opportunities are single-family rentals or townhomes. Brandon and Riverview offer more multi-family options nearby."}},
              {"@type":"Question","name":"What insurance costs should I expect on a Valrico rental?","acceptedAnswer":{"@type":"Answer","text":"Landlord (DP-3) policies in Valrico typically run $2,500 to $4,500 per year. Most Valrico properties are not in a flood zone, which keeps flood insurance costs low."}}
            ]
          }
        ]
      })}} />

      {/* BreadcrumbList JSON-LD */}
      
      {/* Lead Capture Form */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
          { "@type": "ListItem", "position": 2, "name": "Investment Properties", "item": "https://valricoagent.com/valrico-investment-property/" },
        ]
      }) }} />
    </>
  );
}
