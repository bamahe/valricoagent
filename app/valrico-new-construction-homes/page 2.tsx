'use client';
import Link from 'next/link';
export default function NewConstruction() {
  return (<>
    <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7"><div className="max-w-[1140px] mx-auto">
      <h1 className="font-serif text-[clamp(28px,4vw,38px)] leading-tight tracking-tight mb-4">New Construction Homes in Valrico FL — New Homes for Sale 2026</h1>
      <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>New construction in Valrico includes communities like Valrico Forest, Arista, Heritage Crest, and select infill lots. Barrett Henry, REALTOR® helps buyers navigate builder contracts, negotiate upgrades, and understand the difference between what&apos;s worth upgrading and what&apos;s not.</p>
      <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search all Valrico homes</Link>
    </div></div>
    <div className="max-w-[780px] mx-auto px-7 py-16 space-y-6" style={{color:'var(--ink-soft)'}}>
      <div className="border-2 border-dashed rounded-lg p-16 text-center mb-6" style={{borderColor:'var(--border)'}}><p className="font-serif text-xl mb-2" style={{color:'var(--ink)'}}>IDX Widget — New Construction</p><p className="text-sm" style={{color:'var(--ink-muted)'}}>Showcase IDX filtered for new construction in Valrico</p></div>
      <h2 className="font-serif text-2xl" style={{color:'var(--ink)'}}>New construction in Valrico: what buyers need to know</h2>
      <p className="text-[15px] leading-[1.8]">Builder contracts are not the same as resale contracts. The builder&apos;s sales agent works for the builder, not for you. Having your own Valrico REALTOR® at the table protects your interests on price, upgrades, timeline, and warranty items. Barrett Henry has worked with multiple national and regional builders in the Valrico market and knows which upgrades add resale value and which are cosmetic upsells.</p>
      <p className="text-[15px] leading-[1.8]">New construction in Valrico typically ranges from $400K to $550K for Craftsman and modern-style homes in communities like Valrico Forest and Arista. Many new builds include CDD fees in addition to (or instead of) HOA — understand the difference before you sign. Barrett can walk you through the full cost picture. <a href="tel:8137337907" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Call (813) 733-7907</a>.</p>
    </div>
  </>);
}
