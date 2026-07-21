'use client';
import Link from 'next/link';
import { ContactForm } from '../components/ContactForm';

export default function WhyBarrettPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Why Barrett Henry</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Why Clients Choose Barrett Over Every Other Valrico Agent</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>
            There are 500+ licensed agents in the Valrico area. Most will tell you what you want to hear. Barrett tells you what you need to hear — then delivers results.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">(813) 733-7907</a>
            <Link href="/testimonials/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Read Reviews</Link>
          </div>
        </div>
      </div>

      {/* Credentials bar */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>23+</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>124+</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Homes Sold</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>85+</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>5-Star Reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>Hall of Fame</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>REMAX 2024</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>Broker</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Associate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1140px] mx-auto px-7 py-16 space-y-12" style={{ color: 'var(--ink-soft)' }}>

        {/* The difference */}
        <div>
          <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>What Makes Barrett Different</h2>
          <p className="text-[15px] leading-[1.8] mb-4">Most agents show you homes and write offers. Barrett does that too — but he starts with data. Before you look at a single home, Barrett pulls comparable sales, analyzes school zone premiums, checks flood maps, verifies insurance costs, and calculates total monthly cost including HOA and CDD. You know exactly what you are getting into before you make an offer.</p>
          <p className="text-[15px] leading-[1.8]">For sellers, Barrett runs a full competitive market analysis and prices based on actual sold data — not Zillow estimates. He will tell you if your home needs a new roof before listing, if your kitchen upgrades will return their cost, and whether your timeline is realistic. Honest answers save money.</p>
        </div>

        {/* Credentials */}
        <div>
          <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>Credentials That Matter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              ['Broker Associate', 'Higher license level than a standard agent. Barrett can review contracts, manage transactions, and operate independently — giving you an extra layer of expertise.'],
              ['REMAX Hall of Fame 2024', 'Awarded for career achievement in sales volume. Fewer than 5% of REMAX agents worldwide reach Hall of Fame status.'],
              ['MRP — Military Relocation Professional', 'Certified to help active duty, veterans, and military families navigate PCS moves, VA loans, and BAH-based budgeting.'],
              ['SRS — Seller Representative Specialist', 'Advanced training in listing strategy, pricing, marketing, and seller negotiation. This is not a weekend course — it requires ongoing education.'],
              ['e-PRO — Digital Marketing Certification', 'Certified in digital marketing, social media, and online lead generation. Barrett uses technology to market your home where buyers actually search.'],
              ['100% Club — 8 Years Running', 'REMAX production award for sustained high volume. Consistent performance, not a one-year spike.'],
            ].map(([title, desc]) => (
              <div key={title} className="border rounded-lg p-5" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--ink)' }}>{title}</h3>
                <p className="text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Barrett works */}
        <div>
          <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>How Barrett Works With Clients</h2>
          <div className="space-y-6">
            {[
              ['No Pressure, Ever', 'Barrett does not chase clients or push timelines. If now is not the right time to buy or sell, he will tell you. Several clients have waited 6-12 months on Barrett\'s advice and came out ahead financially.'],
              ['Data Over Emotion', 'Every recommendation is backed by MLS data, comparable sales, and market trends. Barrett shows you the numbers and lets you make an informed decision — not an emotional one.'],
              ['Responsive Communication', 'Barrett typically responds within 2 hours during business hours. Text, call, or email — whatever works for you. No phone tag, no waiting days for answers.'],
              ['Full Transaction Management', 'From pre-approval coordination to inspection negotiations to closing day, Barrett manages every detail. You do not need to chase contractors, title companies, or lenders.'],
              ['Free to You (Buyers)', 'Buyer representation costs you nothing — the seller pays the agent commission. You get a professional negotiator working for your interests at zero cost.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4">
                <div className="w-1 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                <div>
                  <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>{title}</h3>
                  <p className="text-[15px] leading-[1.8]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage */}
        <div>
          <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>Local Knowledge That Cannot Be Googled</h2>
          <p className="text-[15px] leading-[1.8] mb-4">Barrett covers all <Link href="/neighborhoods/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>42 Valrico neighborhoods</Link> across ZIP codes 33594 and 33596. He knows which streets flood after heavy rain, which sections of Bloomingdale feed into which middle school, where the CDD fees are highest, and which builders cut corners on their spec homes.</p>
          <p className="text-[15px] leading-[1.8]">This is not information you find on Zillow. It comes from selling 124+ homes in the area and driving these streets every week. When Barrett tells you a home is overpriced, under-maintained, or in the wrong school zone — he is not guessing. He has the receipts.</p>
        </div>

        {/* Awards timeline */}
        <div>
          <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>REMAX Award History</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              ['2016', 'Platinum Club Team'],
              ['2017', '100% Club Team'],
              ['2018', '100% Club Team'],
              ['2020', 'Executive Club + 5yr Anniversary'],
              ['2021', 'Executive Club'],
              ['2022', '100% Club'],
              ['2023', '100% Club Team'],
              ['2024', '100% Club Team + Hall of Fame'],
              ['2025', 'Executive Club Team + 10yr Anniversary'],
            ].map(([year, award]) => (
              <div key={year} className="border rounded-lg p-3 text-center" style={{ borderColor: 'var(--border)' }}>
                <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>{year}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--ink-soft)' }}>{award}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="font-serif text-2xl mb-3">Ready to Talk?</h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,.7)' }}>No pitch, no pressure. Just a conversation about what you need and whether Barrett is the right fit.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:8137337907" className="btn-solid" style={{ background: '#fff', color: '#003da5' }}>(813) 733-7907</a>
            <a href="mailto:barrett@nowtb.com" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-sm rounded no-underline">Email Barrett</a>
          </div>
        </div>
      </section>

      {/* Schema */}
      
      {/* Lead Capture Form */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://valricoagent.com/" },
          { "@type": "ListItem", position: 2, name: "Why Barrett", item: "https://valricoagent.com/why-barrett/" },
        ]
      }) }} />
    </>
  );
}
