'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Forest Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Valrico Forest is one of the newest communities in Valrico, featuring Craftsman-style homes with modern construction standards and contemporary design. Prices from $400K–$525K. Barrett Henry, REALTOR&reg; with RE/MAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Valrico Forest listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
          <div>
            <h2 className="font-serif text-2xl mb-4">About Valrico Forest, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Valrico Forest is one of the newest communities in Valrico, featuring Craftsman-style homes with modern construction standards and contemporary design. Located in north Valrico (33594) near Diamond Hill, the community offers the newest housing stock available in the area.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Homes range from approximately 1,800 to 2,800 square feet with 3 to 5 bedrooms. Craftsman-style exteriors feature covered front porches, board-and-batten accents, and architectural details not commonly found in standard production homes. Interior finishes include quartz countertops, soft-close cabinetry, and energy-efficient systems throughout.</p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>Price Range</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>$400K–$525K</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>ZIP Code</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>33594</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>School Zone</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Varies by section</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>REALTOR\u00ae</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Barrett Henry</span></div>
            </div>

            <h2 className="font-serif text-2xl mb-4 mt-10">Schools serving Valrico Forest</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>School zoning varies by address in 33594. The brand-new construction means all major systems (roof, HVAC, electrical, plumbing) carry builder warranties.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Who Valrico Forest fits best</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Buyers who want brand-new construction in Valrico with modern Craftsman styling. Families who prefer new over renovated and want current building code compliance and energy efficiency.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Explore more Valrico neighborhoods</h2>
            <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{color:'var(--accent)'}}>Bloomingdale</Link> &middot; <Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--accent)'}}>River Hills</Link> &middot; <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{color:'var(--accent)'}}>Diamond Hill</Link> &middot; <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{color:'var(--accent)'}}>Buckhorn</Link> &middot; <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{color:'var(--accent)'}}>Twin Lakes</Link> &middot; <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{color:'var(--accent)'}}>Brentwood Hills</Link> &middot; <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{color:'var(--accent)'}}>Crestwood Estates</Link> &middot; <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{color:'var(--accent)'}}>Canterbury Oaks</Link> &middot; </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett about Valrico Forest</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR&reg; knows every section of Valrico Forest. Get pricing, listings, and neighborhood-specific advice.</p>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Valrico Forest?</h3>
              <p className="text-sm mb-4" style={{color:'rgba(255,255,255,.7)'}}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section, not an algorithm.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://valricoagent.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Neighborhoods\", \"item\": \"https://valricoagent.com/#neighborhoods\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Valrico Forest Homes for Sale\", \"item\": \"https://valricoagent.com/neighborhoods/valrico-forest/\"}]}, {\"@type\": \"Place\", \"name\": \"Valrico Forest, Valrico FL\", \"address\": {\"@type\": \"PostalAddress\", \"addressLocality\": \"Valrico\", \"addressRegion\": \"FL\", \"postalCode\": \"33594\", \"addressCountry\": \"US\"}, \"geo\": {\"@type\": \"GeoCoordinates\", \"latitude\": 27.9378, \"longitude\": -82.2365}}]}"}} />
    </>
  );
}
