import Link from 'next/link';
import PropertySearch from '../components/PropertySearch';

export default function HomesForSale() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Search Valrico</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Valrico FL Homes for Sale - Live Listings in 33594 &amp; 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Search every active listing in Valrico, updated directly from Stellar MLS. Filter by price, bedrooms, pool, waterfront, and more. Barrett Henry, REALTOR® with <a href="https://nowtb.com" target="_blank" rel="noopener" className="text-white underline">REMAX Collective</a> is your Valrico real estate agent for buying in 33594 and 33596.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '24px 24px 0' }}>
        <div style={{ background: '#fafafa', border: '1px solid #e8e8e8', borderRadius: 10, padding: '20px 24px', marginBottom: 24 }}>
          <p style={{ fontSize: 15, color: '#222', lineHeight: 1.7, margin: 0 }}>
            <strong>Valrico FL typically has 150-250 active homes for sale at any given time across ZIP codes 33594 and 33596. The median home price is approximately $415,000 as of 2026, with prices ranging from the low $300Ks for starter homes in north Valrico to over $1 million for estate properties in River Hills and Crestwood Estates.</strong>
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-12">
        {/* Live MLS search, pulls from Bridge MLS API (Stellar MLS data) */}
        <PropertySearch defaultCity="Valrico" heading="Valrico Homes for Sale" showRentToggle />

        <div style={{ marginTop: 48 }} />

        <h2 className="font-serif text-2xl mb-4">Search by neighborhood</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
          {[['Bloomingdale','/neighborhoods/bloomingdale/'],['River Hills','/neighborhoods/river-hills/'],['Diamond Hill','/neighborhoods/diamond-hill/'],['Buckhorn','/neighborhoods/buckhorn/'],['Twin Lakes','/neighborhoods/twin-lakes/'],['Brentwood Hills','/neighborhoods/brentwood-hills/'],['Canterbury Oaks','/neighborhoods/canterbury-oaks/'],['Bloomingdale East','/neighborhoods/bloomingdale-east/'],['Bent Tree Estates','/neighborhoods/bent-tree-estates/'],['Crosby Crossings','/neighborhoods/crosby-crossings/'],['Crestwood Estates','/neighborhoods/crestwood-estates/'],['Valrico Oaks','/neighborhoods/valrico-oaks/']].map(([n,h])=>(
            <Link key={n} href={h} className="border rounded-md px-4 py-3 text-sm font-semibold no-underline hover:bg-[var(--cream)] transition-colors" style={{borderColor:'var(--border)',color:'var(--ink)'}}>{n} →</Link>
          ))}
        </div>

        <h2 className="font-serif text-2xl mb-4">Search by property type</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
          {[['Pool Homes','/valrico-pool-homes/'],['No HOA Homes','/valrico-no-hoa-homes/'],['New Construction','/valrico-new-construction-homes/'],['Luxury Homes','/valrico-luxury-homes/'],['33594 Homes','/homes-for-sale-33594/'],['33596 Homes','/homes-for-sale-33596/'],['Gated Communities','/neighborhoods/diamond-hill/'],['Golf Course Homes','/neighborhoods/river-hills/']].map(([n,h])=>(
            <Link key={n} href={h} className="border rounded-md px-4 py-3 text-sm font-semibold no-underline hover:bg-[var(--cream)] transition-colors" style={{borderColor:'var(--border)',color:'var(--accent)'}}>{n} →</Link>
          ))}
        </div>

        <h2 className="font-serif text-2xl mb-4">Why buy in Valrico?</h2>
        <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Valrico is an unincorporated community in eastern Hillsborough County, 15 miles east of downtown Tampa. Families come here for the school zones (Bloomingdale HS and Newsome HS are both A-rated), the larger lot sizes compared to Brandon and Riverview, and the no-city-tax advantage of being unincorporated. Home prices range from the low $300Ks for starter homes in north Valrico to over $1 million for estate properties in River Hills and south Valrico.</p>
        <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR® has been selling homes in Valrico since 2003 and knows every neighborhood on this page. Whether you&apos;re a <Link href="/valrico-first-time-homebuyer/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>first-time buyer</Link>, moving up, <Link href="/valrico-relocation-guide/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>relocating from out of state</Link>, or looking for an <Link href="/valrico-investment-property/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>investment property</Link>, Barrett provides straight-talk guidance based on local data, not portal algorithms. Check <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>current home values by neighborhood</Link> or explore <Link href="/valrico-down-payment-assistance/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>down payment assistance programs</Link>. <a href="tel:8137337907" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Call<br/>(813) 733-7907</a> to start your Valrico home search.</p>

        <div className="space-y-4">
          {[['How much do homes cost in Valrico FL?','The median home price in Valrico is approximately $415K as of Q3 2026. Prices range from the low $300Ks to over $1M depending on neighborhood, lot size, and condition.'],['What are the best neighborhoods in Valrico?','Top neighborhoods include Bloomingdale (5,200+ homes, $300K-$500K), River Hills (gated golf, $400K-$800K+), Diamond Hill (gated golf, $350K-$550K+), Buckhorn/Boyette (Newsome HS zone, $350K-$500K), and Twin Lakes ($375K-$475K).'],['Can I find no HOA homes in Valrico?','Yes. Several Valrico neighborhoods have voluntary or no HOA, including sections of Bloomingdale and Lake Valrico. See the no HOA homes page for details.']].map(([q,a])=>(
            <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
              <h3 className="font-semibold text-base mb-2">{q}</h3>
              <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do homes cost in Valrico FL?","acceptedAnswer":{"@type":"Answer","text":"The median home price is approximately $415K. Prices range from the low $300Ks to over $1M."}},{"@type":"Question","name":"What are the best neighborhoods in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Top neighborhoods include Bloomingdale, River Hills, Diamond Hill, Buckhorn/Boyette, and Twin Lakes."}},{"@type":"Question","name":"Can I find no HOA homes in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Yes. Several neighborhoods have voluntary or no HOA, including sections of Bloomingdale and Lake Valrico."}}]})}} />
    </>
  );
}
