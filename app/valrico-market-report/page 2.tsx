'use client';
import Link from 'next/link';
export default function MarketReport() {
  return (<>
    <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7"><div className="max-w-[1140px] mx-auto">
      <h1 className="font-serif text-[clamp(28px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Housing Market Report 2026 — Prices, Trends &amp; Forecast</h1>
      <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Monthly and quarterly market data for Valrico FL, broken down by neighborhood and ZIP code. Written by Barrett Henry, REALTOR® — not copied from a portal.</p>
    </div></div>
    <div className="max-w-[780px] mx-auto px-7 py-16 space-y-6" style={{color:'var(--ink-soft)'}}>
      <h2 className="font-serif text-2xl" style={{color:'var(--ink)'}}>Latest reports</h2>
      <div className="border rounded-md p-6 hover:shadow-md transition-shadow" style={{borderColor:'var(--border)'}}>
        <Link href="/blog/valrico-housing-market-q1-2026/" className="no-underline"><h3 className="font-serif text-xl mb-2" style={{color:'var(--ink)'}}>Valrico Housing Market Q1 2026</h3><p className="text-sm">Median prices, inventory shifts, days on market by neighborhood, and what it means for buyers and sellers in 33594 and 33596.</p><span className="text-xs mt-2 inline-block" style={{color:'var(--accent)'}}>Read the full report →</span></Link>
      </div>
      <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Key market indicators</h2>
      <div className="grid grid-cols-2 gap-4">
        {[['~$415K','Median sale price'],['$210–$220','Price per sq ft'],['30–55 days','Avg days on market'],['$300K–$1M+','Full price range']].map(([v,l])=>(
          <div key={l} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}><span className="font-serif text-2xl block mb-1" style={{color:'var(--ink)'}}>{v}</span><span className="text-sm" style={{color:'var(--ink-muted)'}}>{l}</span></div>
        ))}
      </div>
      <p className="text-[15px] leading-[1.8] mt-6">For the most accurate data on your specific neighborhood, <a href="tel:8137337907" className="font-semibold no-underline" style={{color:'var(--accent)'}}>call Barrett at (813) 733-7907</a> or check the <a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>full Valrico guide on nowtb.com</a>.</p>
    </div>
  </>);
}
