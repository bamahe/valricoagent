'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Diamond Hill Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Diamond Hill is a prestigious gated golf community in the heart of Valrico (33594), centered around the Diamond Hill Golf Club. Prices from $350K–$550K+. Barrett Henry, REALTOR&reg; with RE/MAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Diamond Hill listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
          <div>
            <h2 className="font-serif text-2xl mb-4">About Diamond Hill, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Diamond Hill is a prestigious gated golf community in the heart of Valrico (33594), centered around the Diamond Hill Golf Club. The Chic Adams-designed par-72 course stretches 6,920 yards and serves as the visual and recreational anchor for approximately 1,300 homes. The community features an Olympic-sized pool, fitness center, full clubhouse, playground, basketball court, and tennis facilities.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Homes range from 2-bedroom patio homes (starting around $350K) to 6-bedroom family estates with 3,600+ square feet (reaching $550K and above). Many homes back up to the golf course with views of fairways and conservation areas. The gated entrance provides security and a sense of exclusivity that few Valrico communities match at this price point. Primary construction dates from 2004 to 2006 with newer infill on remaining lots.</p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>Price Range</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>$350K–$550K+</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>ZIP Code</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>33594</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>School Zone</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Varies by section</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>REALTOR\u00ae</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Barrett Henry</span></div>
            </div>

            <h2 className="font-serif text-2xl mb-4 mt-10">Schools serving Diamond Hill</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>School zoning varies by specific address within Diamond Hill. Some sections of the community are zoned for Bloomingdale HS while others may feed into different high schools. Barrett Henry, REALTOR® verifies the exact school assignment for every Diamond Hill address as part of the buying or selling process. This is critical because school zone affects pricing even within the same gated community.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Who Diamond Hill fits best</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Golfers who want a gated community at a lower price point than River Hills. Families wanting resort-style amenities (Olympic pool, fitness center, clubhouse) within their neighborhood. Buyers who value the gated entrance and community programming. Retirees looking for patio home options with full golf course access.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Explore more Valrico neighborhoods</h2>
            <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{color:'var(--accent)'}}>Bloomingdale</Link> &middot; <Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--accent)'}}>River Hills</Link> &middot; <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{color:'var(--accent)'}}>Buckhorn</Link> &middot; <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{color:'var(--accent)'}}>Twin Lakes</Link> &middot; <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{color:'var(--accent)'}}>Brentwood Hills</Link> &middot; <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{color:'var(--accent)'}}>Crestwood Estates</Link> &middot; <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{color:'var(--accent)'}}>Canterbury Oaks</Link> &middot; </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{color:'var(--ink-soft)'}}>Looking for homes in Diamond Hill? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>get a free home valuation</Link>.</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett about Diamond Hill</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR&reg; knows every section of Diamond Hill. Get pricing, listings, and neighborhood-specific advice.</p>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Diamond Hill?</h3>
              <p className="text-sm mb-4" style={{color:'rgba(255,255,255,.7)'}}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section, not an algorithm.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://valricoagent.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Neighborhoods\", \"item\": \"https://valricoagent.com/#neighborhoods\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Diamond Hill Homes for Sale\", \"item\": \"https://valricoagent.com/neighborhoods/diamond-hill/\"}]}, {\"@type\": \"Place\", \"name\": \"Diamond Hill, Valrico FL\", \"address\": {\"@type\": \"PostalAddress\", \"addressLocality\": \"Valrico\", \"addressRegion\": \"FL\", \"postalCode\": \"33594\", \"addressCountry\": \"US\"}, \"geo\": {\"@type\": \"GeoCoordinates\", \"latitude\": 27.9378, \"longitude\": -82.2365}}]}"}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do homes cost in Diamond Hill Valrico?","acceptedAnswer":{"@type":"Answer","text":"Homes in Diamond Hill range from $350K to $550K+. Patio homes start around $350K while 6-bedroom family estates with 3,600+ sq ft can exceed $550K. Many homes have golf course views. Contact Barrett Henry, REALTOR® at (813) 733-7907."}},{"@type":"Question","name":"What school zone is Diamond Hill in?","acceptedAnswer":{"@type":"Answer","text":"School zoning varies by specific address within Diamond Hill. Some sections are zoned for Bloomingdale HS while others may feed into different schools. Barrett Henry, REALTOR® at (813) 733-7907 verifies exact school assignments for every Diamond Hill address."}},{"@type":"Question","name":"Does Diamond Hill have an HOA?","acceptedAnswer":{"@type":"Answer","text":"Yes, Diamond Hill is a gated golf community with a mandatory HOA. The community features an Olympic-sized pool, fitness center, clubhouse, playground, basketball court, and tennis facilities. Call Barrett Henry at (813) 733-7907 for current HOA details."}},{"@type":"Question","name":"Is Diamond Hill a good neighborhood in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Diamond Hill is a prestigious gated golf community centered around the Chic Adams-designed par-72 course. It offers resort-style amenities at a lower price point than River Hills, making it ideal for golfers and families wanting gated security. Barrett Henry, REALTOR® at (813) 733-7907 knows every section."}}]})}} />
    </>
  );
}
