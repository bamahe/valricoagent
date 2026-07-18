'use client';
import Link from 'next/link';

export default function PropertyManagement() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Property Management</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Property Management — Rental Management for Landlords &amp; Investors</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Own a rental property in Valrico? Barrett Henry manages single-family rentals, townhomes, and small multi-family properties across 33594 and 33596 through ViVi Property Management. Full-service management with in-house maintenance, tenant screening, rent collection, and compliance handled for you.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">(813) 733-7907 — Talk to Barrett</a>
            <a href="mailto:barrett@nowtb.com" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Email for PM info</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div className="space-y-6" style={{color:'var(--ink-soft)'}}>
            <h2 className="font-serif text-2xl" style={{color:'var(--ink)'}}>Why Valrico landlords choose ViVi Property Management</h2>
            <p className="text-[15px] leading-[1.8]">Most property management companies are either too big to care about your single rental or too small to handle the work professionally. ViVi PM operates under Barrett Henry&apos;s brokerage at REMAX Collective, which means you get the accountability of a licensed brokerage, the local market knowledge of a Valrico REALTOR&reg; who knows every neighborhood, and in-house maintenance through Best Bay Services that keeps your costs down and response times fast.</p>

            <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>What we handle</h2>
            <div className="space-y-4">
              {[
                ['Tenant screening and placement','Background checks, credit verification, income verification, rental history, and eviction history. We find qualified tenants who pay on time and take care of your property.'],
                ['Rent collection and accounting','Online rent collection, direct deposit to your account, monthly owner statements, and year-end tax documentation. You see exactly where every dollar goes.'],
                ['Maintenance coordination','In-house maintenance through <a href="https://bestvalricohandyman.com" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;text-decoration:none">Best Valrico Handyman</a> (Best Bay Services) handles routine repairs, HVAC service, painting, tile, flooring, smart home upgrades, and Airbnb turnover. No middleman markups on basic maintenance.'],
                ['Property inspections','Move-in, move-out, and periodic inspections with photo documentation. We catch issues early before they become expensive problems.'],
                ['Lease management and compliance','Florida landlord-tenant law compliance, lease drafting and renewals, security deposit handling per Florida statute, and eviction coordination if needed.'],
                ['Vacancy marketing','Professional photos, MLS listing, Zillow/Trulia syndication, and targeted marketing to fill vacancies fast. Average days to lease in Valrico is significantly shorter than the county average because of school zone demand.'],
              ].map(([title, desc]) => (
                <div key={title} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-1" style={{color:'var(--ink)'}}>{title}</h3>
                  <p className="text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Management fee: 10%</h2>
            <p className="text-[15px] leading-[1.8]">ViVi PM charges 10% of collected rent. No hidden fees, no upcharges on maintenance, no percentage of repair costs. If rent is $2,000/month, management is $200/month. The fee covers everything listed above. Maintenance and repairs are billed at cost through <a href="https://bestvalricohandyman.com" target="_blank" rel="noopener" style={{color:'var(--accent)',fontWeight:600,textDecoration:'none'}}>Best Valrico Handyman</a> (Best Bay Services) with no management markup.</p>

            <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Why Valrico rentals perform well</h2>
            <p className="text-[15px] leading-[1.8]">Valrico&apos;s rental market benefits from the same factors that drive home sales: strong school zones, no city taxes, and suburban character. Families who want Bloomingdale HS or Newsome HS zoning but cannot yet buy will rent in these zones. This creates consistent demand for well-maintained rental properties, particularly 3-4 bedroom single-family homes with pools.</p>
            <p className="text-[15px] leading-[1.8]">Typical rental rates in Valrico range from $1,800 to $2,800/month for single-family homes depending on size, condition, pool, and school zone. Homes in the Newsome HS zone often command slightly higher rents due to concentrated demand from FishHawk-priced-out families.</p>

            <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Already own a rental? Thinking about converting?</h2>
            <p className="text-[15px] leading-[1.8]">Whether you already have a tenant and need better management, or you are considering converting your Valrico home to a rental instead of selling, Barrett can run the numbers both ways. A rental analysis includes estimated monthly rent, projected cash flow after expenses, cap rate, and comparison to selling proceeds. Sometimes renting makes more sense. Sometimes selling does. The math tells the story. <a href="tel:8137337907" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Call (813) 733-7907</a> for a free rental analysis.</p>

            <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                ['What areas do you manage?','We manage properties in Valrico (33594 and 33596), Brandon, Bloomingdale, Buckhorn/Boyette, and the surrounding east Hillsborough County area.'],
                ['Do you handle Airbnb and short-term rentals?','Yes. Best Bay Services provides Airbnb turnover service (cleaning, restocking, guest coordination) for short-term rental properties in Valrico and the Tampa Bay area.'],
                ['What if my tenant stops paying rent?','We handle the entire eviction process in compliance with Florida law, including notices, court filings, and property recovery. Our screening process minimizes this risk, but we are prepared if it happens.'],
                ['Can you help me buy an investment property?','Absolutely. Barrett Henry, REALTOR&reg; handles both the acquisition and management side. Buy the property through Barrett, and ViVi PM manages it from day one. See the investment property guide for details.'],
              ].map(([q,a]) => (
                <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett about PM</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR&reg; manages Valrico rentals through ViVi Property Management. Free rental analysis for current or prospective landlords.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Office</h3>
              <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>RE/MAX Collective — Brandon<br />417 Lithia Pinecrest Rd<br />Brandon, FL 33511</p>
              <p className="text-sm mt-2" style={{color:'var(--ink-muted)'}}>(813) 733-7907 &middot; barrett@nowtb.com</p>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>What&apos;s my Valrico home worth? &rarr;</Link></li>
                <li><Link href="/sell-my-home-valrico/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Sell my Valrico home &rarr;</Link></li>
                <li><Link href="/valrico-investment-property/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Investment property guide &rarr;</Link></li>
                <li><Link href="/valrico-fl-homes-for-sale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Search Valrico homes &rarr;</Link></li>
                <li><a href="https://nowtb.com/commercial/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Investment properties on nowtb.com &rarr;</a></li>
                <li><a href="https://bestvalricohandyman.com" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Best Valrico Handyman &rarr;</a></li>
                <li><a href="https://bestbayservices.com" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Best Bay Services — Maintenance &rarr;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://valricoagent.com/"},{"@type":"ListItem","position":2,"name":"Valrico Property Management","item":"https://valricoagent.com/valrico-property-management/"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What areas do you manage rental properties in?","acceptedAnswer":{"@type":"Answer","text":"We manage properties in Valrico (33594 and 33596), Brandon, Bloomingdale, Buckhorn/Boyette, and east Hillsborough County."}},{"@type":"Question","name":"What is the property management fee?","acceptedAnswer":{"@type":"Answer","text":"10% of collected rent with no hidden fees or maintenance markups."}},{"@type":"Question","name":"Do you handle Airbnb and short-term rentals?","acceptedAnswer":{"@type":"Answer","text":"Yes. Best Bay Services provides Airbnb turnover service including cleaning, restocking, and guest coordination."}},{"@type":"Question","name":"Can you help me buy an investment property in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Yes. Barrett Henry handles both acquisition and management through RE/MAX Collective and ViVi Property Management."}}]}]})}} />
    </>
  );
}
