'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">River Hills Masters Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>River Hills Masters is a section within the broader River Hills community in south Valrico (33596). Prices from $350K–$550K. Barrett Henry, REALTOR&reg; with RE/MAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search River Hills Masters listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
          <div>
            <h2 className="font-serif text-2xl mb-4">About River Hills Masters, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>River Hills Masters is a section within the broader River Hills community in south Valrico (33596). While homes here may not front the golf course, residents benefit from the guard-gated entry, private hiking trails along the Alafia River, and access to the River Hills Country Club social programming.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Homes range from approximately 1,800 to 3,200 square feet with 3 to 5 bedrooms. The Masters section generally trades at a lower price point than the golf course frontage lots, making it the most accessible way to live within the River Hills gates. Mature landscaping, winding streets, and the community's distinctive natural setting create a premium residential feel.</p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>Price Range</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>$350K–$550K</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>ZIP Code</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>33596</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>School Zone</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Bloomingdale HS</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>REALTOR\u00ae</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Barrett Henry</span></div>
            </div>

            <h2 className="font-serif text-2xl mb-4 mt-10">Schools serving River Hills Masters</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Zoned for Bloomingdale High School. The guard-gated entry and country club community amenities provide lifestyle benefits that extend beyond the home itself.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Who River Hills Masters fits best</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Buyers who want the River Hills lifestyle at a lower price point than golf frontage lots. Families who value gated security, trail access, and established community character.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Explore more Valrico neighborhoods</h2>
            <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{color:'var(--accent)'}}>Bloomingdale</Link> &middot; <Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--accent)'}}>River Hills</Link> &middot; <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{color:'var(--accent)'}}>Diamond Hill</Link> &middot; <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{color:'var(--accent)'}}>Buckhorn</Link> &middot; <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{color:'var(--accent)'}}>Twin Lakes</Link> &middot; <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{color:'var(--accent)'}}>Brentwood Hills</Link> &middot; <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{color:'var(--accent)'}}>Crestwood Estates</Link> &middot; <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{color:'var(--accent)'}}>Canterbury Oaks</Link> &middot; </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett about River Hills Masters</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR&reg; knows every section of River Hills Masters. Get pricing, listings, and neighborhood-specific advice.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Valrico on nowtb.com</h3>
              <ul className="space-y-2">
                <li><a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Full Valrico guide &rarr;</a></li>
                <li><a href="https://nowtb.com/best-realtor-valrico/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Best Valrico REALTOR&reg; &rarr;</a></li>
              </ul>
            </div>
            <div className="rounded-md p-6" style={{background:'var(--blue-deep)'}}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in River Hills Masters?</h3>
              <p className="text-sm mb-4" style={{color:'rgba(255,255,255,.7)'}}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section, not an algorithm.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://valricoagent.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Neighborhoods\", \"item\": \"https://valricoagent.com/#neighborhoods\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"River Hills Masters Homes for Sale\", \"item\": \"https://valricoagent.com/neighborhoods/river-hills-masters/\"}]}, {\"@type\": \"Place\", \"name\": \"River Hills Masters, Valrico FL\", \"address\": {\"@type\": \"PostalAddress\", \"addressLocality\": \"Valrico\", \"addressRegion\": \"FL\", \"postalCode\": \"33596\", \"addressCountry\": \"US\"}, \"geo\": {\"@type\": \"GeoCoordinates\", \"latitude\": 27.9378, \"longitude\": -82.2365}}]}"}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do homes cost in River Hills Masters Valrico?","acceptedAnswer":{"@type":"Answer","text":"Homes in River Hills Masters range from $350K to $550K. Homes are typically 1,800 to 3,200 sq ft with 3 to 5 bedrooms. This section trades below golf course frontage lots, offering the most accessible entry into River Hills. Contact Barrett Henry, REALTOR® at (813) 733-7907."}},{"@type":"Question","name":"What school zone is River Hills Masters in?","acceptedAnswer":{"@type":"Answer","text":"River Hills Masters is zoned for Bloomingdale High School (A-rated). School zoning is consistent across the entire River Hills community. Barrett Henry, REALTOR® at (813) 733-7907 can confirm."}},{"@type":"Question","name":"Does River Hills Masters have an HOA?","acceptedAnswer":{"@type":"Answer","text":"Yes, River Hills Masters benefits from the same guard-gated entry, private Alafia River trails, and country club amenities as the broader River Hills community. Call Barrett Henry at (813) 733-7907 for current HOA fee details."}},{"@type":"Question","name":"Is River Hills Masters a good neighborhood in Valrico?","acceptedAnswer":{"@type":"Answer","text":"River Hills Masters is the most accessible way to live within the River Hills gates, offering gated security, trail access, mature landscaping, and Bloomingdale HS zoning at a lower price than golf frontage lots. Barrett Henry, REALTOR® at (813) 733-7907 can help you compare sections."}}]})}} />
    </>
  );
}
