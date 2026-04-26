'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white/60 pt-14 pb-7 px-7" style={{ background: 'var(--blue-deep)' }}>
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mb-9">

          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://nowtb.com/wp-content/uploads/2026/02/remax-balloon-2025-white.png" alt="RE/MAX" className="h-[56px] w-auto opacity-85 mb-3" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <div className="font-serif text-[17px] text-white mb-2.5">Valrico Realtor</div>
            <p className="text-sm leading-relaxed mb-2.5">Your Valrico real estate agent. Homes for sale, neighborhood guides, market reports, and local expertise from Barrett Henry, Broker Associate with RE/MAX Collective.</p>
            <p className="text-[13px]">
              <a href="tel:8137337907" className="text-white/80 hover:text-white">(813) 733-7907</a> · <a href="mailto:barrett@nowtb.com" className="text-white/80 hover:text-white">barrett@nowtb.com</a>
            </p>
            <div className="flex gap-3 items-center flex-wrap mt-3.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://nowtb.com/wp-content/uploads/2026/02/REMAX_Logo_Barrett_Henry__Black_.png" alt="RE/MAX" className="h-[36px] invert opacity-60" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://nowtb.com/wp-content/uploads/2026/02/The-REMAX-Collection-Logo-RGB-White.webp" alt="RE/MAX Collection" className="h-[26px] opacity-50" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://nowtb.com/wp-content/uploads/2026/02/REMAX-Commercial-RGB-White.webp" alt="RE/MAX Commercial" className="h-[22px] opacity-50" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-3.5">Neighborhoods</h4>
            <ul className="space-y-2">
              {['Bloomingdale','River Hills','Diamond Hill','Buckhorn / Boyette','Twin Lakes','Brentwood Hills','Bloomingdale East','Canterbury Oaks','Bent Tree Estates','Crosby Crossings'].map(n => (
                <li key={n}><Link href={`/neighborhoods/${n.toLowerCase().replace(/ \/ /g,'-').replace(/ /g,'-')}/`} className="text-[13px] text-white/55 hover:text-white no-underline">{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Bordering + Property Types */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-3.5">Bordering Areas</h4>
            <ul className="space-y-2">
              {[['FishHawk Ranch','/neighborhoods/fishhawk-ranch/'],['Lithia','/areas/lithia/'],['Brandon','/areas/brandon/'],['Riverview','/areas/riverview/'],['Plant City','/areas/plant-city/']].map(([n,h]) => (
                <li key={n}><Link href={h} className="text-[13px] text-white/55 hover:text-white no-underline">{n}</Link></li>
              ))}
            </ul>
            <h4 className="text-white text-xs uppercase tracking-widest mb-3.5 mt-5">Property Types</h4>
            <ul className="space-y-2">
              {[['Pool Homes','/valrico-pool-homes/'],['No HOA Homes','/valrico-no-hoa-homes/'],['New Construction','/valrico-new-construction-homes/'],['Newest Listings','/valrico-newest-listings/']].map(([n,h]) => (
                <li key={n}><Link href={h} className="text-[13px] text-white/55 hover:text-white no-underline">{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Sellers + Resources + Backlinks */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-3.5">Sellers</h4>
            <ul className="space-y-2">
              {[['Home Values','/valrico-fl-home-values/'],['Sell My Home','/sell-my-home-valrico/'],['Market Report','/valrico-market-report/'],["What's My Home Worth?",'/home-value-valrico-fl/']].map(([n,h]) => (
                <li key={n}><Link href={h} className="text-[13px] text-white/55 hover:text-white no-underline">{n}</Link></li>
              ))}
            </ul>
            <h4 className="text-white text-xs uppercase tracking-widest mb-3.5 mt-5">Resources</h4>
            <ul className="space-y-2">
              {[['School Zone Guide','/valrico-school-zones/'],['Living in Valrico','/living-in-valrico/'],['33594 Homes','/homes-for-sale-33594/'],['33596 Homes','/homes-for-sale-33596/']].map(([n,h]) => (
                <li key={n}><Link href={h} className="text-[13px] text-white/55 hover:text-white no-underline">{n}</Link></li>
              ))}
            </ul>
            <h4 className="text-white text-xs uppercase tracking-widest mb-3.5 mt-5">More from Barrett</h4>
            <ul className="space-y-2">
              <li><a href="https://nowtb.com" target="_blank" rel="noopener" className="text-[13px] text-white/55 hover:text-white no-underline">nowtb.com — Tampa Bay Real Estate</a></li>
              <li><a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="text-[13px] text-white/55 hover:text-white no-underline">Valrico on nowtb.com</a></li>
              <li><a href="https://nowtb.com/best-realtor-valrico/" target="_blank" rel="noopener" className="text-[13px] text-white/55 hover:text-white no-underline">Best Valrico Realtor</a></li>
              <li><a href="https://nowtb.com/commercial/" target="_blank" rel="noopener" className="text-[13px] text-white/55 hover:text-white no-underline">RE/MAX Commercial Listings</a></li>
              <li><a href="https://nowtb.com/luxury/" target="_blank" rel="noopener" className="text-[13px] text-white/55 hover:text-white no-underline">RE/MAX Collection Luxury</a></li>
              <li><a href="https://tbrelo.com" target="_blank" rel="noopener" className="text-[13px] text-white/55 hover:text-white no-underline">Tampa Bay Relocation Guide</a></li>
              <li><a href="https://valrico.blog" target="_blank" rel="noopener" className="text-[13px] text-white/55 hover:text-white no-underline">Valrico Blog — Community &amp; Local Life</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/[.08] pt-5 flex flex-wrap justify-between gap-2.5 text-[11px] text-white/35">
          <span>&copy; 2026 Barrett Henry, REALTOR® · Valrico Real Estate Agent · Valrico RE/MAX · RE/MAX Collective · 417 Lithia Pinecrest Rd, Brandon FL 33511</span>
          <span className="tracking-[.12em] font-semibold">MOVE WITH CONFIDENCE. <span className="opacity-60 font-normal">Straight talk. Smart strategy.</span></span>
        </div>
      </div>
    </footer>
  );
}
