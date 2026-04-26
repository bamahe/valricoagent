'use client';
import Link from 'next/link';

export default function ValricoAgent() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Valrico Real Estate Agent — Why Local Expertise Beats Big Portals</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Zillow can show you listings. Barrett Henry, REALTOR® can tell you which ones are overpriced, which streets flood, which subdivisions hold value, and which school zone boundary will cost you $30,000 if you&apos;re on the wrong side of it. That&apos;s the difference between a portal and a Valrico real estate agent.</p>
          <a href="tel:8137337907" className="btn-solid">(813) 733-7907 — Talk to Barrett</a>
        </div>
      </div>
      <div className="max-w-[780px] mx-auto px-7 py-16 space-y-6" style={{color:'var(--ink-soft)'}}>
        <h2 className="font-serif text-2xl" style={{color:'var(--ink)'}}>What makes Barrett Henry different as a Valrico real estate agent</h2>
        <p className="text-[15px] leading-[1.8]">There are over 1,000 agents who claim to serve Valrico. Most of them live in Tampa or Riverview and drive out here when a lead comes in from Zillow. Barrett lives and works this market every day from the <a href="https://nowtb.com" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>RE/MAX Collective Brandon office</a> on Lithia Pinecrest Road — five minutes from every Valrico neighborhood.</p>
        <p className="text-[15px] leading-[1.8]">23 years in real estate. 5.0 Google rating. Deep knowledge of every subdivision in 33594 and 33596. Broker Associate with RE/MAX Collective, which means you get the global reach and referral network of one of the most recognized brands in real estate, combined with neighborhood-level knowledge that most agents simply don&apos;t have.</p>

        <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Neighborhoods served</h2>
        <p className="text-[15px] leading-[1.8]">Barrett serves every Valrico neighborhood: <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{color:'var(--accent)'}}>Bloomingdale</Link> (5,200+ homes, 32+ sub-neighborhoods), <Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--accent)'}}>River Hills</Link> (gated golf, $400K-$800K+), <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{color:'var(--accent)'}}>Diamond Hill</Link> (gated golf, $350K-$550K+), <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{color:'var(--accent)'}}>Buckhorn/Boyette</Link> (Newsome HS zone), <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{color:'var(--accent)'}}>Twin Lakes</Link>, <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{color:'var(--accent)'}}>Brentwood Hills</Link>, Canterbury Oaks, Bent Tree Estates, Crosby Crossings, Duncan Groves, Crestwood Estates, and more.</p>
        <p className="text-[15px] leading-[1.8]">Plus bordering areas: FishHawk Ranch (Lithia), Lithia, Brandon, Riverview, and Plant City. Barrett also handles <Link href="/#commercial" className="font-semibold no-underline" style={{color:'var(--accent)'}}>commercial real estate</Link> through RE/MAX Commercial.</p>

        <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[['Buyer representation','Full-service buyer agency from search to closing. Barrett previews homes, negotiates offers, coordinates inspections, and manages timelines.'],['Seller representation','Accurate pricing, professional marketing, showing management, negotiation, and closing coordination. SRS designated.'],['Home valuations','Free comparative market analysis based on actual sub-neighborhood comps. Not an algorithm.'],['Investment analysis','Cash-flow analysis, cap rate evaluation, and rental portfolio strategy through RE/MAX Commercial.'],['Military relocation','MRP designated. Barrett helps military families relocate to the MacDill AFB / Tampa Bay area.'],['Commercial real estate','Office, retail, multi-family, land, and investment properties through RE/MAX Commercial.']].map(([t,d])=>(
            <div key={t} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
              <h3 className="font-semibold text-base mb-1" style={{color:'var(--ink)'}}>{t}</h3>
              <p className="text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-md text-center" style={{background:'var(--cream-warm)'}}>
          <h3 className="font-serif text-lg mb-2">Talk to a Valrico real estate agent who actually knows Valrico</h3>
          <p className="text-sm mb-4" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR® · Broker Associate · RE/MAX Collective</p>
          <a href="tel:8137337907" className="btn-solid mr-2">(813) 733-7907</a>
          <a href="mailto:barrett@nowtb.com" className="btn-ghost">Email Barrett</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://valricoagent.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Valrico Real Estate Agent\", \"item\": \"https://valricoagent.com/valrico-real-estate-agent/\"}]}"}} />
    </>
  );
}
