'use client';
import Link from 'next/link';
import { ContactForm } from '../components/ContactForm';

// All client reviews — add new ones at the top
const reviews = [
  { quote: "Barrett told us NOT to sell when we first contacted him — said the timing wasn't right for our situation. Six months later when it made sense, he listed our home and got us top dollar. That kind of honesty is rare.", author: "Jennifer W.", type: "Seller", neighborhood: "River Hills", year: "2026", stars: 5 },
  { quote: "Barrett made the entire process smooth from start to finish. He knows Valrico inside and out — every neighborhood, every school zone, every price trend. He gave us honest advice, never pushed us, and helped us find exactly the right home in Bloomingdale for our family.", author: "Sarah M.", type: "Buyer", neighborhood: "Bloomingdale", year: "2025", stars: 5 },
  { quote: "We interviewed three agents before choosing Barrett. He was the only one who showed us actual comparable sales data instead of just telling us what we wanted to hear. Our home sold in 22 days at 98% of asking price.", author: "David & Lisa R.", type: "Seller", neighborhood: "Buckhorn", year: "2025", stars: 5 },
  { quote: "We relocated from Ohio and Barrett was our guide to everything Valrico. Schools, commute times, flood zones, insurance costs — he covered it all before we even flew down for our house-hunting trip. Could not have done it without him.", author: "The Thompson Family", type: "Relocation", neighborhood: "Valrico", year: "2025", stars: 5 },
  { quote: "As a first-time buyer, I was nervous about the whole process. Barrett walked me through every step, explained everything in plain English, and made sure I didn't overpay. Found a great home in Twin Lakes within my budget.", author: "Marcus J.", type: "First-Time Buyer", neighborhood: "Twin Lakes", year: "2024", stars: 5 },
  { quote: "Barrett negotiated $15K off the builder's price on our new construction home in Heritage Crest plus got us a rate buydown. The builder's agent was not happy but Barrett stood his ground. Saved us real money.", author: "Carlos & Maria P.", type: "Buyer", neighborhood: "Heritage Crest", year: "2025", stars: 5 },
  { quote: "Sold our home in Crestwood Estates in 11 days, above asking. Barrett's staging advice and pricing strategy were spot on. He told us to skip the kitchen remodel and focus on curb appeal — he was right.", author: "Robert K.", type: "Seller", neighborhood: "Crestwood Estates", year: "2024", stars: 5 },
  { quote: "I've bought and sold four homes with Barrett over the past eight years. Every time, he makes it painless. He remembers what matters to us and doesn't waste our time on homes that don't fit.", author: "Amanda & Brian T.", type: "Repeat Client", neighborhood: "Multiple", year: "2024", stars: 5 },
  { quote: "Barrett helped us find rental properties in Valrico that actually cash flow. He ran the numbers, not just the emotion. Two duplexes later, we're generating $2,800/month net. He gets investors.", author: "Steve D.", type: "Investor", neighborhood: "Valrico", year: "2024", stars: 5 },
  { quote: "Military PCS move from San Diego to MacDill. Barrett handled everything remotely until we could fly out — video tours, school zone research, commute timing. We closed before we even moved to Florida.", author: "SSgt. Rodriguez Family", type: "Military Relocation", neighborhood: "Brandon", year: "2025", stars: 5 },
  { quote: "After a bad experience with another agent, Barrett stepped in mid-transaction and saved our deal. Professional, responsive, and completely transparent about everything.", author: "Michelle H.", type: "Buyer", neighborhood: "Bloomingdale Oaks", year: "2024", stars: 5 },
  { quote: "Barrett told me my Zestimate was $40K too high and showed me the data. I was annoyed at first but he was right. We listed at his price and got two offers in the first weekend.", author: "Tom & Karen S.", type: "Seller", neighborhood: "Buckhorn Preserve", year: "2025", stars: 5 },
  { quote: "Downsizing from a 4-bedroom in Diamond Hill to a villa in Sun City Center. Barrett handled both sides and made the timing work perfectly so we never had to move twice.", author: "The Nelsons", type: "Seller & Buyer", neighborhood: "Diamond Hill", year: "2024", stars: 5 },
  { quote: "Found us a no-HOA home on a half acre in Valrico Hills — exactly what we wanted. Barrett knew which streets had the bigger lots before we even started looking.", author: "Jake & Priya M.", type: "Buyer", neighborhood: "Valrico Hills", year: "2026", stars: 5 },
  { quote: "Barrett's not flashy but he's thorough. He caught a drainage issue during the walkthrough that the inspector missed. That saved us $8K minimum. Attention to detail matters.", author: "Chris L.", type: "Buyer", neighborhood: "Bent Tree Estates", year: "2025", stars: 5 },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Client Reviews</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">What Clients Say About Barrett Henry</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>
            85+ five-star reviews across Google, Zillow, and Realtor.com. Real clients, real transactions, real results. Here&apos;s what working with Barrett actually looks like.
          </p>
          <a href="tel:8137337907" className="btn-solid">(813) 733-7907</a>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>85+</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>124+</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Homes Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>23+</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>42</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Valrico Neighborhoods</div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-xl border p-6" style={{ borderColor: 'var(--border)' }}>
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} style={{ color: '#f59e0b', fontSize: 18 }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>
                &ldquo;{r.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{r.author}</p>
                  <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>{r.type} — {r.neighborhood} · {r.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="font-serif text-2xl mb-3">Ready to Work with Barrett?</h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,.7)' }}>Join 124+ satisfied clients across Tampa Bay. Free consultation, honest advice, zero pressure.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:8137337907" className="btn-solid" style={{ background: '#fff', color: '#003da5' }}>(813) 733-7907</a>
            <Link href="/valrico-fl-homes-for-sale/" className="inline-block py-3 px-7 border-2 border-white text-white font-semibold text-sm rounded no-underline hover:bg-white/20">Search Valrico Homes</Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "RealEstateAgent", name: "REMAX Collective" },
        telephone: "(813) 733-7907",
        email: "barrett@nowtb.com",
        url: "https://valricoagent.com/",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", worstRating: "1", reviewCount: "85", ratingCount: "85" },
        review: reviews.slice(0, 10).map(r => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          reviewBody: r.quote,
          reviewRating: { "@type": "Rating", ratingValue: r.stars, bestRating: 5 },
          datePublished: `${r.year}-01-01`,
        })),
      }) }} />
      
      {/* Lead Capture Form */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://valricoagent.com/" },
          { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://valricoagent.com/testimonials/" },
        ]
      }) }} />
    </>
  );
}
