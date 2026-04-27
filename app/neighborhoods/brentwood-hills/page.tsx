'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Brentwood Hills Homes for Sale &mdash; Valrico FL 33594 / 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Brentwood Hills is an established family community straddling the 33594 and 33596 ZIP codes in Valrico. Prices from $340K–$475K. Barrett Henry, REALTOR&reg; with RE/MAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Brentwood Hills listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
          <div>
            <h2 className="font-serif text-2xl mb-4">About Brentwood Hills, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Brentwood Hills is an established family community straddling the 33594 and 33596 ZIP codes in Valrico. The neighborhood features sidewalks throughout, a community pool maintained by the HOA, and proximity to the Bloomingdale Avenue commercial corridor. Homes are primarily single-family with 3 to 5 bedrooms built through the 1990s and 2000s.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>The community sits within walking distance of the Bloomingdale Avenue commercial corridor, giving residents quick access to Publix, Winn-Dixie, restaurants, banks, and professional services without needing a car for every errand. HOA fees cover community pool access, common area maintenance, and enforcement of community standards that keep property values consistent. The pool is a major draw for families during Florida's 9-month warm season.</p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>Price Range</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>$340K–$475K</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>ZIP Code</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>33594 / 33596</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>School Zone</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Bloomingdale HS</span></div>
              <div className="border rounded-md p-4" style={{borderColor:'var(--border)'}}><span className="text-xs uppercase tracking-wider block mb-1" style={{color:'var(--ink-muted)'}}>REALTOR\u00ae</span><span className="font-serif text-lg" style={{color:'var(--ink)'}}>Barrett Henry</span></div>
            </div>

            <h2 className="font-serif text-2xl mb-4 mt-10">Schools serving Brentwood Hills</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Zoned for Bloomingdale High School (A-rated). Feeder schools include Burns Middle School and local elementary options. The straddling of two ZIP codes means some Brentwood Hills addresses are in 33594 and others in 33596. Barrett Henry, REALTOR® can confirm the exact ZIP and school assignment for any Brentwood Hills address.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Who Brentwood Hills fits best</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Families who want sidewalks, community pool access, and Bloomingdale HS zoning at a price point below Bloomingdale proper or River Hills. First-time buyers and young families looking for an established community with recreational amenities. Buyers who prioritize walkable commercial access and a community feel.</p>

            <h2 className="font-serif text-2xl mb-4 mt-10">Explore more Valrico neighborhoods</h2>
            <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{color:'var(--accent)'}}>Bloomingdale</Link> &middot; <Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--accent)'}}>River Hills</Link> &middot; <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{color:'var(--accent)'}}>Diamond Hill</Link> &middot; <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{color:'var(--accent)'}}>Buckhorn</Link> &middot; <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{color:'var(--accent)'}}>Twin Lakes</Link> &middot; <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{color:'var(--accent)'}}>Crestwood Estates</Link> &middot; <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{color:'var(--accent)'}}>Canterbury Oaks</Link> &middot; </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{color:'var(--ink-soft)'}}>Looking for homes in Brentwood Hills? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>get a free home valuation</Link>.</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett about Brentwood Hills</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR&reg; knows every section of Brentwood Hills. Get pricing, listings, and neighborhood-specific advice.</p>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Brentwood Hills?</h3>
              <p className="text-sm mb-4" style={{color:'rgba(255,255,255,.7)'}}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section, not an algorithm.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://valricoagent.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Neighborhoods\", \"item\": \"https://valricoagent.com/#neighborhoods\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Brentwood Hills Homes for Sale\", \"item\": \"https://valricoagent.com/neighborhoods/brentwood-hills/\"}]}, {\"@type\": \"Place\", \"name\": \"Brentwood Hills, Valrico FL\", \"address\": {\"@type\": \"PostalAddress\", \"addressLocality\": \"Valrico\", \"addressRegion\": \"FL\", \"postalCode\": \"33594\", \"addressCountry\": \"US\"}, \"geo\": {\"@type\": \"GeoCoordinates\", \"latitude\": 27.9378, \"longitude\": -82.2365}}]}"}} />
    </>
  );
}
