'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

/**
 * Valrico Village neighborhood page - Valrico FL
 * Bloomingdale HS zone, $280K–$400K price range
 */
export default function ValricoVillagePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'valrico-village', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  const faqs = [
    { q: 'What do homes cost in Valrico Village?', a: 'Valrico Village homes typically sell between $280K–$400K depending on square footage, lot size, and updates. Call Barrett Henry at (813) 733-7907 for current Valrico Village pricing.' },
    { q: 'What schools serve Valrico Village?', a: 'Valrico Village is zoned for Bloomingdale HS in the Hillsborough County School District. Elementary and middle school assignments vary by address. Barrett Henry can confirm exact school zoning for any Valrico Village home.' },
    { q: 'Does Valrico Village have an HOA?', a: 'Valrico Village HOA structure varies by section. Contact Barrett Henry at (813) 733-7907 for current HOA details on specific properties.' },
    { q: 'Is Valrico Village a good place to live?', a: 'Valrico Village is a established community with mature trees neighborhood in Valrico. The Bloomingdale HS zone and convenient location make it popular with families and buyers looking for value in the Valrico area.' },
  ];

  return (
    <>
      {/* HERO */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Village Homes for Sale, Valrico FL</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Valrico Village is a established community with mature trees neighborhood in Valrico with homes from $280K–$400K. Bloomingdale HS zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Valrico Village listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* PROPERTY SEARCH */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["VALRICO VILLAGE"]} heading="Valrico Village Homes for Sale" />
      </div>

      {/* MAP */}
      <div className="max-w-[1140px] mx-auto px-7 pb-12">
        <NeighborhoodMap center={neighborhoodCoords['valrico-village']} neighborhoodName="Valrico Village" />
      </div>

      {/* CONTENT */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>
            <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>About Valrico Village, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valrico Village is a established community with mature trees neighborhood in Valrico. Homes here range from $280K–$400K, offering good value in the Bloomingdale HS zone. The community features the kind of suburban lifestyle that draws families and professionals to the Valrico area.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Barrett Henry, REALTOR&reg; and Broker Associate with REMAX Collective, covers Valrico Village and all 38 Valrico neighborhoods. With 24+ years of real estate experience, Barrett can help you find the right home in Valrico Village or compare it against similar communities. Call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10" style={{ color: 'var(--ink)' }}>Valrico Village FAQ</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
                  <h3 className="font-semibold text-base mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep, #003da5)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Ask About Valrico Village</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Barrett Henry covers every Valrico neighborhood. Get honest advice about Valrico Village pricing, schools, and lifestyle fit.</p>
              <a href="tel:8137337907" className="btn-solid block text-center text-sm mb-3">Call (813) 733-7907</a>
              <Link href="/get-help/" className="btn-ghost block text-center text-sm">Send a Message</Link>
            </div>
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-serif text-lg mb-3" style={{ color: 'var(--ink)' }}>Related</h3>
              <ul className="space-y-2">
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 38 neighborhoods &rarr;</Link></li>
                <li><Link href="/valrico-fl-homes-for-sale/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Search all Valrico homes &rarr;</Link></li>
                <li><Link href="/valrico-school-zones/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Valrico school zones &rarr;</Link></li>
                <li><Link href="/valrico-first-time-homebuyer/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>First-time buyer guide &rarr;</Link></li>
              </ul>
            </div>

            {/* LEAD FORM */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm, #fdf8f0)' }}>
              <h3 className="font-serif text-lg mb-3" style={{ color: 'var(--ink)' }}>Get Valrico Village Info</h3>
              {sent ? (
                <p className="text-sm text-green-700">Got it! Barrett will be in touch within 2 hours.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border rounded px-3 py-2 text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border rounded px-3 py-2 text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border rounded px-3 py-2 text-sm" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid w-full text-sm">{sending ? 'Sending...' : 'Send'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
            { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://valricoagent.com/neighborhoods/" },
            { "@type": "ListItem", "position": 3, "name": "Valrico Village", "item": "https://valricoagent.com/neighborhoods/valrico-village/" },
          ]},
          { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        ]
      }) }} />
    </>
  );
}
