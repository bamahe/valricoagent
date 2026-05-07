'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Northwood Estates Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Northwood Estates is an intimate, boutique community in north Valrico (33594) featuring homes by WestBay, a well-regarded regional builder. Prices from $425K–$575K. Barrett Henry, REALTOR&reg; with RE/MAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Northwood Estates listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
          <div>
            <h2 className="font-serif text-2xl mb-4">About Northwood Estates, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Northwood Estates is an intimate, boutique community in north Valrico (33594) featuring homes by WestBay, a well-regarded regional builder. The community offers modern construction with designer-level finishes at a competitive price point with low HOA fees and no CDD assessments.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Homes feature LVP flooring throughout, quartz countertops, stainless steel appliances, spacious owners suites, and covered lanais. The no-CDD distinction is significant — many competing new construction communities in the area add $150-$300/month in CDD fees on top of property taxes and HOA, which affects buyer purchasing power. The small community size creates a boutique feel.</p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>Price Range</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>$425K–$575K</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>ZIP Code</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>33594</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>School Zone</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Varies by section</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>REALTOR\u00ae</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Barrett Henry</span></div>
            </div>

            <h2 className="font-serif text-2xl mb-4 mt-10">Schools serving Northwood Estates</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>School zoning varies by address in 33594. The premium builder and designer finishes position these homes above standard production construction.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Who Northwood Estates fits best</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Buyers who want boutique new construction with premium finishes in Valrico without CDD fees. Families and professionals who want modern homes with designer details in a small-community setting.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Explore more Valrico neighborhoods</h2>
            <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{color:'var(--accent)'}}>Bloomingdale</Link> &middot; <Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--accent)'}}>River Hills</Link> &middot; <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{color:'var(--accent)'}}>Diamond Hill</Link> &middot; <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{color:'var(--accent)'}}>Buckhorn</Link> &middot; <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{color:'var(--accent)'}}>Twin Lakes</Link> &middot; <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{color:'var(--accent)'}}>Brentwood Hills</Link> &middot; <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{color:'var(--accent)'}}>Crestwood Estates</Link> &middot; <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{color:'var(--accent)'}}>Canterbury Oaks</Link> &middot; </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett about Northwood Estates</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR&reg; knows every section of Northwood Estates. Get pricing, listings, and neighborhood-specific advice.</p>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Northwood Estates?</h3>
              <p className="text-sm mb-4" style={{color:'rgba(255,255,255,.7)'}}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section, not an algorithm.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://valricoagent.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Neighborhoods\", \"item\": \"https://valricoagent.com/#neighborhoods\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Northwood Estates Homes for Sale\", \"item\": \"https://valricoagent.com/neighborhoods/northwood-estates/\"}]}, {\"@type\": \"Place\", \"name\": \"Northwood Estates, Valrico FL\", \"address\": {\"@type\": \"PostalAddress\", \"addressLocality\": \"Valrico\", \"addressRegion\": \"FL\", \"postalCode\": \"33594\", \"addressCountry\": \"US\"}, \"geo\": {\"@type\": \"GeoCoordinates\", \"latitude\": 27.9378, \"longitude\": -82.2365}}]}"}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do homes cost in Northwood Estates Valrico?","acceptedAnswer":{"@type":"Answer","text":"Homes in Northwood Estates range from $425K to $575K. These are WestBay-built homes with designer finishes including quartz countertops, LVP flooring, and spacious owners suites. Contact Barrett Henry, REALTOR® at (813) 733-7907 for current pricing."}},{"@type":"Question","name":"What school zone is Northwood Estates in?","acceptedAnswer":{"@type":"Answer","text":"School zoning varies by address in the 33594 ZIP code. Barrett Henry, REALTOR® at (813) 733-7907 can verify the exact school zone for any Northwood Estates address."}},{"@type":"Question","name":"Does Northwood Estates have an HOA?","acceptedAnswer":{"@type":"Answer","text":"Yes, Northwood Estates has a low HOA fee and no CDD assessments, which is significant since many competing new construction communities charge $150-$300/month in CDD fees. Call Barrett Henry at (813) 733-7907 for current details."}},{"@type":"Question","name":"Is Northwood Estates a good neighborhood in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Northwood Estates is a boutique community offering premium WestBay construction with designer finishes, no CDD fees, and a small-community feel in north Valrico. Barrett Henry, REALTOR® at (813) 733-7907 is the local expert."}}]})}} />
    </>
  );
}
