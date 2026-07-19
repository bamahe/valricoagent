'use client';
import Link from 'next/link';
import PropertySearch from '../components/PropertySearch';

export default function WaterfrontHomes() {
  return (
    <>
      {/* HERO */}
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Waterfront Living</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Waterfront &amp; Lake Homes in Valrico, FL</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Valrico is not beachfront, but it has lake homes, pond-front lots, and water-view properties that give you a private retreat without coastal insurance premiums. Here is what &quot;waterfront&quot; actually means in Valrico and where to find it.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call<br/>(813) 733-7907</a>
            <Link href="/valrico-fl-homes-for-sale/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Search Valrico Homes</Link>
          </div>
        </div>
      </div>

      {/* PROPERTY SEARCH, homes first, content below */}
      <div className="max-w-[1140px] mx-auto px-7 pt-8">
        <PropertySearch defaultCity="Valrico" waterfrontOnly heading="Valrico Waterfront Homes" />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>

            {/* WHAT WATERFRONT MEANS */}
            <h2 className="font-serif text-2xl mb-4">What &quot;waterfront&quot; means in Valrico</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>When people search for waterfront homes in Valrico, they are not looking at oceanfront or bay views. Valrico is about 30 miles inland from the Gulf of Mexico. Waterfront here means lakefront, pond-front, or canal-adjacent properties. The appeal is different from coastal waterfront, you get peaceful water views, wildlife, privacy from rear neighbors, and often larger lots. No saltwater corrosion, no flood surge risk, and significantly lower insurance costs than anything on the coast.</p>

            {/* LAKE VALRICO */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Lake Valrico area</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Lake Valrico is the largest lake in the immediate area and the origin of the community&apos;s name. Homes on or near Lake Valrico range from older ranch-style properties built in the 1970s-80s to custom-built homes on larger lots. Prices for direct lakefront on Lake Valrico typically start around $450K and can exceed $800K+ depending on lot size, home condition, and direct water access. Some Lake Valrico properties have private docks. The lake is a freshwater lake, fishing, kayaking, and paddleboarding are common. No motorized boat access on most Valrico-area lakes.</p>

            {/* POND-FRONT LOTS */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Pond-front lots in subdivisions</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Many Valrico subdivisions were designed with retention ponds and small lakes as part of the stormwater management system. These ponds create water-view lots that are more affordable than lakefront properties. The premium for a pond-front lot versus an interior lot is typically $15,000 to $40,000 depending on the neighborhood and the size of the water feature.</p>
            <div className="space-y-4 mb-6">
              {[
                ['Bloomingdale','Multiple retention ponds throughout the subdivision. Pond-front lots in Bloomingdale Oaks, Bloomingdale Ridge, and Bloomingdale East offer water views with Bloomingdale HS zoning. Expect a $20K–$35K premium over comparable interior lots.'],
                ['Buckhorn Preserve','Several large ponds with conservation buffers. Some of the most scenic water views in Valrico. Newer construction (2005+) with modern floor plans. Pond lots run $400K–$550K.'],
                ['Arista at FishHawk (border area)','Newer community with designed lake features. Water-view lots with fountains and walking trails along the water. $425K–$600K range.'],
                ['River Hills','The most exclusive waterfront in Valrico. Large lots (0.5–2+ acres) on the Alafia River and private lakes. Custom homes $600K–$1.5M+. Gated community with golf course.'],
                ['Diamond Hill','Acreage lots with pond frontage. Rural waterfront feel with 1-5 acre lots. Custom homes from $500K–$900K+. Some properties have private ponds.'],
                ['Twin Lakes','Named for the two lakes in the community. Lakefront lots command premiums but entry-level lake-view homes start around $375K. Mature neighborhood with established landscaping.'],
              ].map(([hood,desc])=>(
                <div key={hood} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{hood}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* PRICE PREMIUMS */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Price premiums for water views</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Water-view properties in Valrico consistently sell for more than interior lots in the same neighborhood. The premium depends on the type of water feature:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                ['Small retention pond','$10K–$20K premium'],
                ['Large pond / small lake','$20K–$40K premium'],
                ['Direct lakefront','$50K–$150K+ premium'],
              ].map(([type,premium])=>(
                <div key={type} className="p-4 rounded-md border text-center" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
                  <div className="font-semibold text-sm">{type}</div>
                  <div className="text-lg font-bold mt-2" style={{color:'var(--accent)'}}>{premium}</div>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Water-view homes also tend to sell faster. Buyers specifically search for water features, and inventory is limited since there are only so many lots that back to water in any given neighborhood. If you own a water-view home in Valrico, it is a selling advantage, <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>check your home value</Link> to see what it could be worth. Ready to buy? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Search current Valrico listings</Link>.</p>

            {/* FLOOD ZONES */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Flood zone considerations</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Most Valrico properties are in FEMA Flood Zone X (minimal flood risk), which means flood insurance is not required by lenders. However, some lakefront and riverfront properties, particularly along the Alafia River corridor and parts of Lake Valrico, fall in Zone A or AE, which requires flood insurance. Flood insurance costs vary widely: $400/year for a preferred-risk property in Zone X to $2,000+/year for a home in a high-risk zone. Barrett always checks flood zone status before you make an offer. It is one of the first things to verify on any water-adjacent property in Valrico.</p>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Waterfront homes FAQ</h2>
            <div className="space-y-4">
              {[
                ['Can I fish in Valrico lakes?','Yes. Most Valrico-area lakes support freshwater fishing, bass, bream, and catfish are common. Some HOA-managed ponds have fishing restrictions, so check the community rules. Lake Valrico and other natural lakes are generally open for fishing from your property.'],
                ['Do waterfront homes in Valrico need flood insurance?','It depends on the flood zone. Most Valrico homes are in Zone X (no flood insurance required). Lakefront and riverfront properties may be in Zone A or AE, which requires flood insurance. Barrett checks this before you make an offer.'],
                ['Are there homes on the Alafia River in Valrico?','Yes. River Hills is a gated community with homes along the Alafia River. Some properties in the Lithia area (just south of Valrico) also offer Alafia River frontage. These are premium properties typically priced $600K and up.'],
                ['What is the best neighborhood for water views under $450K?','Twin Lakes, Bloomingdale (pond-front lots), and Valri Park offer water-adjacent or pond-view properties under $450K. These are retention-pond views rather than large lake frontage, but they still provide a peaceful rear outlook.'],
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
              <h3 className="font-serif text-lg mb-3">Find waterfront homes in Valrico</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR® at REMAX Collective, knows every pond, lake, and water-view lot in Valrico. 23+ years of real estate experience. He can set up a custom MLS search filtered specifically for water-view and waterfront properties.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">Call<br/>(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-fl-homes-for-sale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Search all Valrico homes &rarr;</Link></li>
                <li><Link href="/valrico-pool-homes/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico pool homes &rarr;</Link></li>
                <li><Link href="/valrico-luxury-homes/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico luxury homes &rarr;</Link></li>
                <li><Link href="/neighborhoods/river-hills/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>River Hills neighborhood &rarr;</Link></li>
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico home values &rarr;</Link></li>
                <li><Link href="/valrico-55-plus-communities/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>55+ communities &rarr;</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="material-icons" style={{fontSize:48,marginBottom:12,opacity:.8}}>water</span>
          <h2 className="font-serif text-2xl mb-3">Want a Home on the Water?</h2>
          <p className="text-sm mb-6 max-w-[560px] mx-auto" style={{color:'rgba(255,255,255,.7)'}}>Barrett Henry, REALTOR® with REMAX Collective, can set up a custom search for waterfront, lakefront, and pond-view homes in Valrico. 23+ years of real estate experience and deep knowledge of every water feature in the area.</p>
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
            "description":"Valrico FL REALTOR® and Broker Associate with REMAX Collective. 23+ years of real estate experience. Specializes in waterfront, lakefront, and water-view homes in Valrico FL.",
            "url":"https://valricoagent.com/valrico-waterfront-homes/",
            "telephone":"(813) 733-7907",
            "email":"barrett@nowtb.com",
            "address":{"@type":"PostalAddress","streetAddress":"417 Lithia Pinecrest Rd","addressLocality":"Brandon","addressRegion":"FL","postalCode":"33511","addressCountry":"US"},
            "areaServed":{"@type":"City","name":"Valrico, FL"}
          },
          {
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"Can I fish in Valrico lakes?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most Valrico-area lakes support freshwater fishing including bass, bream, and catfish. Some HOA-managed ponds have restrictions."}},
              {"@type":"Question","name":"Do waterfront homes in Valrico need flood insurance?","acceptedAnswer":{"@type":"Answer","text":"It depends on the flood zone. Most Valrico homes are in Zone X (no flood insurance required). Lakefront and riverfront properties may be in Zone A or AE, requiring flood insurance."}},
              {"@type":"Question","name":"Are there homes on the Alafia River in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Yes. River Hills is a gated community with homes along the Alafia River. Some Lithia-area properties also offer Alafia River frontage, typically priced $600K and up."}},
              {"@type":"Question","name":"What is the best neighborhood for water views under $450K?","acceptedAnswer":{"@type":"Answer","text":"Twin Lakes, Bloomingdale pond-front lots, and Valri Park offer water-adjacent or pond-view properties under $450K."}}
            ]
          }
        ]
      })}} />
    </>
  );
}
