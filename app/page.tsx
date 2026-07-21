import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSchema from './components/FAQSchema';
import { ContactForm } from './components/ContactForm';

/**
 * Page-level metadata, exported from a Server Component so Next.js
 * can inject title/description into the <head> at build time.
 * Targets "Valrico homes for sale" (22,200 mo. searches).
 */
export const metadata: Metadata = {
  title: "Valrico Homes for Sale | Barrett Henry, REALTOR\u00AE | REMAX Collective",
  description:
    "Search all Valrico FL homes for sale in 33594 & 33596. Barrett Henry, Broker Associate with REMAX Collective, has 23+ years of real estate experience. Explore 38 neighborhoods, get your home value, or sell with confidence. (813) 733-7907.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(160deg, #003da5 0%, #001f5c 60%, #000d2e 100%)',
        color: '#fff',
        padding: '88px 0 72px',
        overflow: 'hidden',
      }}>
        {/* Subtle texture overlay */}
        <div style={{ position: 'absolute', inset: 0, background: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=60') center/cover", opacity: 0.08 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 16 }}>Valrico, FL Real Estate</div>
            <h1 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 'clamp(30px, 3.8vw, 46px)', fontWeight: 700, lineHeight: 1.25, marginBottom: 20 }}>
              Buy, Sell, or Invest in Valrico with <span style={{ color: '#fff' }}>Confidence</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.75, opacity: 0.85, marginBottom: 32, maxWidth: 520 }}>
              38 neighborhoods. Two ZIP codes. One REALTOR® who knows every Valrico, Florida homes for sale listing. Barrett Henry brings 23+ years of real estate experience and straight-talk guidance to every deal in the Tampa Bay area.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/valrico-fl-homes-for-sale/" className="btn-white">
                <span className="material-icons" style={{ fontSize: 18 }}>search</span> Search Homes
              </Link>
              <Link href="/valrico-fl-home-values/" style={{ padding: '13px 28px', background: '#cc0000', color: '#fff', fontWeight: 600, fontSize: 14, borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span className="material-icons" style={{ fontSize: 18 }}>trending_up</span> Home Values
              </Link>
              <a href="#contact" className="btn-ghost-white">
                <span className="material-icons" style={{ fontSize: 18 }}>event</span> Schedule a Call
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/barrett-henry.png"
              alt="Barrett Henry, REALTOR®"
              style={{ maxWidth: 340, margin: '0 auto', filter: 'drop-shadow(0 12px 40px rgba(0,0,0,.35))' }}
            />
            <div style={{ marginTop: 20, background: 'rgba(255,255,255,.08)', borderRadius: 12, padding: '16px 24px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 18, fontWeight: 700 }}>Straight Talk. Smart Strategy.</div>
              <div style={{ fontSize: 13, opacity: 0.6, marginTop: 4 }}>Broker Associate · REMAX Collective</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUICK ANSWER (AEO) ═══ */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '8px 24px 0' }}>
        <div style={{ background: '#fafafa', border: '1px solid #e8e8e8', borderRadius: 10, padding: '20px 24px', marginBottom: 24 }}>
          <p style={{ fontSize: 15, color: '#222', lineHeight: 1.7, margin: 0 }}>
            <strong>Barrett Henry is a top-rated Valrico real estate agent with REMAX Collective and 23+ years of experience.</strong> As a Broker Associate specializing in Valrico, Florida&apos;s 38 neighborhoods, from Bloomingdale to Buckhorn to River Hills - Barrett helps buyers and sellers navigate the local market with hands-on expertise and straight talk. Call <a href="tel:8137337907" style={{ color: '#003da5', fontWeight: 600 }}>(813) 733-7907</a>.
          </p>
        </div>
      </div>

      {/* ═══ SERVICES ═══ */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-eyebrow" style={{ color: '#003da5' }}>How Can Barrett Help?</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Everything You Need for Valrico Real Estate</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { icon: 'search', title: 'Search Homes for Sale', desc: 'Every active Valrico FL home for sale, updated directly from Stellar MLS.', href: '/valrico-fl-homes-for-sale/', cta: 'Start Search' },
              { icon: 'trending_up', title: 'Sell Your Home', desc: 'Strategic pricing from sub-neighborhood comps. Professional marketing. Sharp negotiation.', href: '/sell-my-home-valrico/', cta: 'Selling Guide' },
              { icon: 'assessment', title: "What's My Home Worth?", desc: 'Free CMA from actual closed comps in your section of Valrico, Florida, not a Zestimate.', href: '/valrico-fl-home-values/', cta: 'Get Your Value' },
              { icon: 'map', title: '38 Neighborhoods', desc: 'Detailed guides for every subdivision with pricing, schools, and who fits best.', href: '/neighborhoods/', cta: 'Explore' },
              { icon: 'school', title: 'School Zones', desc: 'Bloomingdale HS & Newsome HS zones, how school zoning affects homes for sale and home values.', href: '/valrico-school-zones/', cta: 'School Guide' },
              { icon: 'apartment', title: 'Property Management', desc: 'Full-service rental management for Valrico landlords. In-house maintenance.', href: '/valrico-property-management/', cta: 'Learn More' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="card" style={{ padding: '28px 24px', textDecoration: 'none', display: 'block' }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <span className="material-icons" style={{ fontSize: 24, color: '#003da5' }}>{s.icon}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#1a1a1a' }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.65, marginBottom: 12 }}>{s.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#003da5' }}>{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUICK LINKS ═══ */}
      <section style={{ padding: '32px 0', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
        <div className="section-inner">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              ['First-Time Buyer Guide', '/valrico-first-time-homebuyer/'],
              ['Down Payment Help', '/valrico-down-payment-assistance/'],
              ['Relocation Guide', '/valrico-relocation-guide/'],
              ['Market Report', '/valrico-market-report/'],
              ['VA Loan Homes', '/valrico-va-loan-homes/'],
              ['Investment Properties', '/valrico-investment-property/'],
              ['Cash Offer', '/valrico-cash-offer/'],
              ['55+ Communities', '/valrico-55-plus-communities/'],
            ].map(([title, href]) => (
              <Link key={title} href={href} style={{ padding: '10px 20px', background: '#fff', borderRadius: 8, fontSize: 13, fontWeight: 500, color: '#003da5', border: '1px solid #e8e8e8', transition: 'all .2s' }}
                className="card"
              >{title}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCAL RESOURCES, outbound authority links for SEO ═══ */}
      <section style={{ padding: '24px 0', background: '#fafafa', borderBottom: '1px solid #e8e8e8' }}>
        <div className="section-inner">
          <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', textAlign: 'center', marginBottom: 12 }}>Valrico &amp; Hillsborough County Resources</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              ['Hillsborough County Property Appraiser', 'https://www.hcpafl.org'],
              ['Hillsborough County Public Schools', 'https://www.hillsboroughschools.org'],
              ['Bloomingdale HS - GreatSchools', 'https://www.greatschools.org/florida/valrico/1288-Bloomingdale-Senior-High-School/'],
              ['Newsome HS - GreatSchools', 'https://www.greatschools.org/florida/lithia/6474-Lennard-High-School/'],
              ['Florida DBPR License Verify', 'https://www.myfloridalicense.com/wl11.asp'],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener" style={{ padding: '8px 16px', background: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 500, color: '#003da5', border: '1px solid #e8e8e8' }}>{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SELLER CTA + MARKET STATS ═══ */}
      <section className="section">
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            {/* Left - Why sellers choose Barrett */}
            <div>
              <div className="section-eyebrow" style={{ color: '#cc0000' }}>For Sellers</div>
              <h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, marginBottom: 20, lineHeight: 1.3, color: '#1a1a1a' }}>
                Why Do Valrico Sellers Choose Barrett Henry?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['Sub-neighborhood pricing', 'your CMA uses comps from your section, not all of 33596'],
                  ['Professional marketing', 'MLS, Zillow, Realtor.com, Redfin, REMAX.com, social, digital ads'],
                  ['23+ years of negotiation', 'protecting your net, not just closing the deal'],
                  ['In-house maintenance', 'Best Bay Services handles pre-listing repairs fast and fair'],
                  ['Honest advice', "if selling isn't your best move right now, Barrett will tell you"],
                ].map(([title, desc]) => (
                  <div key={title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span className="material-icons" style={{ fontSize: 20, color: '#003da5', marginTop: 2, flexShrink: 0 }}>check_circle</span>
                    <p style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>
                      <strong style={{ color: '#1a1a1a' }}>{title}</strong>, {desc}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/sell-my-home-valrico/" className="btn-primary">Full Selling Guide →</Link>
                <Link href="/valrico-fl-home-values/" className="btn-outline">Get My Home Value</Link>
              </div>
            </div>

            {/* Right - Market snapshot */}
            <div style={{ background: '#fafafa', borderRadius: 16, padding: 36, border: '1px solid #e8e8e8' }}>
              <h3 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 20, textAlign: 'center', marginBottom: 24 }}>Valrico Market Snapshot</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[
                  ['~$415K', 'Median Sale Price', '#003da5'],
                  ['$210–220', 'Price Per Sq Ft', '#003da5'],
                  ['30–55', 'Days on Market', '#003da5'],
                  ['+3.4%', 'Year-over-Year', '#16a34a'],
                ].map(([val, label, color]) => (
                  <div key={label} style={{ padding: 20, background: '#fff', borderRadius: 12, border: '1px solid #e8e8e8', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 28, fontWeight: 700, color: color as string }}>{val}</div>
                    <div style={{ fontSize: 11, color: '#888', marginTop: 6, fontWeight: 500 }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: 'center', fontSize: 11, color: '#888', marginTop: 16 }}>Q3 2026 · <a href="https://www.stellarmls.com" target="_blank" rel="noopener" style={{ color: '#888', textDecoration: 'underline' }}>Stellar MLS</a> · 33594 &amp; 33596</p>
              <Link href="/valrico-market-report/" style={{ display: 'block', textAlign: 'center', marginTop: 12, fontSize: 13, fontWeight: 600, color: '#003da5' }}>Full Market Report →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLUE CTA BANNER ═══ */}
      <section style={{ background: 'linear-gradient(135deg, #003da5, #001f5c)', padding: '56px 0', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 'clamp(20px, 3vw, 28px)', color: '#fff', marginBottom: 12 }}>Thinking About Selling Your Valrico Home?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', marginBottom: 28, maxWidth: 560, margin: '0 auto 28px' }}>
            Well-priced Valrico homes for sale go under contract in 30-55 days. Get a free, no-obligation valuation based on actual recent sales in your subdivision.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/valrico-fl-home-values/" className="btn-white">Get My Home Value, Free</Link>
            <Link href="/sell-my-home-valrico/" className="btn-ghost-white">Read the Selling Guide</Link>
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section className="section-alt">
        <div className="section-inner">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
            <div>
              <div className="section-eyebrow" style={{ color: '#003da5' }}>From the Blog</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>What Is Happening in Valrico Real Estate?</h2>
            </div>
            <Link href="/blog/" style={{ fontSize: 13, fontWeight: 600, color: '#003da5', whiteSpace: 'nowrap' }}>All Posts →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75', title: 'Valrico Housing Market Q3 2026: What the Numbers Mean', desc: 'Median prices, inventory shifts, days on market by neighborhood, and what it means for buyers and sellers heading into fall.', href: '/blog/valrico-real-estate-market-report-q3-2026/' },
              { img: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=600&q=75', title: 'Bloomingdale vs. Buckhorn: Two Corridors, Different Tradeoffs', desc: 'Price points, school zones, HOA differences, lot sizes, and which one fits.', href: '/blog/bloomingdale-vs-buckhorn-valrico/' },
              { img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=75', title: 'How School Zones Affect What Your Valrico Home Is Worth', desc: 'School zoning is the single biggest price driver in Valrico.', href: '/valrico-school-zones/' },
            ].map(post => (
              <Link key={post.title} href={post.href} className="card" style={{ overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }} />
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, lineHeight: 1.45, color: '#1a1a1a' }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{post.desc}</p>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#003da5', marginTop: 14, display: 'inline-block' }}>Continue Reading →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEIGHBORHOODS ═══ */}
      <section className="section" id="neighborhoods">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="section-eyebrow" style={{ color: '#003da5' }}>Explore Valrico</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>38 Neighborhoods, One Local Expert</h2>
            <p className="section-intro" style={{ margin: '12px auto 0', textAlign: 'center' }}>Click below for detailed neighborhood guides with current homes for sale, pricing, schools, and honest takes on who each Valrico, Florida community is best for.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              ['Bloomingdale', '/neighborhoods/bloomingdale/'],
              ['River Hills', '/neighborhoods/river-hills/'],
              ['Diamond Hill', '/neighborhoods/diamond-hill/'],
              ['Buckhorn / Boyette', '/neighborhoods/buckhorn/'],
              ['Crestwood Estates', '/neighborhoods/crestwood-estates/'],
              ['Twin Lakes', '/neighborhoods/twin-lakes/'],
              ['Arista', '/neighborhoods/arista/'],
              ['Brentwood Hills', '/neighborhoods/brentwood-hills/'],
              ['Bloomingdale Oaks', '/neighborhoods/bloomingdale-oaks/'],
              ['Lake Valrico', '/neighborhoods/lake-valrico/'],
              ['Buckhorn Preserve', '/neighborhoods/buckhorn-preserve/'],
              ['Valri Park', '/neighborhoods/valri-park/'],
            ].map(([name, href]) => (
              <Link key={name} href={href} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', background: '#fafafa', borderRadius: 10, fontSize: 14, fontWeight: 500, color: '#1a1a1a', border: '1px solid #e8e8e8', transition: 'all .2s' }}>
                <span className="material-icons" style={{ fontSize: 18, color: '#003da5' }}>chevron_right</span> {name}
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/neighborhoods/" style={{ fontWeight: 600, fontSize: 14, color: '#003da5' }}>
              View all 38 Neighborhoods →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-alt">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ color: '#003da5' }}>Client Reviews</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>What Clients Say About Barrett Henry</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
            {[
              { quote: "Barrett made the entire process smooth from start to finish. He knows Valrico inside and out \u2014 every neighborhood, every school zone, every price trend. He gave us honest advice, never pushed us, and helped us find exactly the right home in Bloomingdale for our family.", author: "Sarah M.", label: "Valrico Home Buyer", year: "2025" },
              { quote: "We interviewed three agents before choosing Barrett. He was the only one who showed us actual comparable sales data instead of just telling us what we wanted to hear. Our home sold in 22 days at 98% of asking price.", author: "David & Lisa R.", label: "Buckhorn Home Seller", year: "2025" },
              { quote: "As a first-time buyer, I was nervous about the whole process. Barrett walked me through every step, explained everything in plain English, and made sure I didn\u2019t overpay. Found a great home in Twin Lakes within my budget.", author: "Marcus J.", label: "First-Time Buyer", year: "2024" },
              { quote: "We relocated from Ohio and Barrett was our guide to everything Valrico. Schools, commute times, flood zones, insurance costs \u2014 he covered it all before we even flew down for our house-hunting trip. Could not have done it without him.", author: "The Thompson Family", label: "Relocation Client", year: "2025" },
              { quote: "Barrett told us NOT to sell when we first contacted him \u2014 said the timing wasn\u2019t right for our situation. Six months later when it made sense, he listed our home and got us top dollar. That kind of honesty is rare.", author: "Jennifer W.", label: "River Hills Seller", year: "2026" },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ marginBottom: 14 }}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <span key={s} className="material-icons" style={{ fontSize: 16, color: '#fbbf24', marginRight: 1 }}>star</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: '#555', fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 16, marginTop: 20 }}>
                  <div style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 14, fontWeight: 700, color: '#1a1a1a' }}> -  {t.author}</div>
                  <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{t.label}, {t.year}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <a href="https://nowtb.com/testimonials/" target="_blank" rel="noopener" style={{ fontSize: 13, fontWeight: 600, color: '#003da5' }}>Read More Reviews →</a>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQSchema
        heading="Valrico Real Estate - Frequently Asked Questions"
        items={[
          { question: "Who is the best real estate agent in Valrico FL?", answer: "Barrett Henry is a top-rated Broker Associate with REMAX Collective, serving Valrico with 23+ years of real estate experience. He covers all 38 Valrico neighborhoods across ZIP codes 33594 and 33596, holds e-PRO, MRP, and SRS designations, and maintains a 5.0-star rating. Call (813) 733-7907." },
          { question: "How long does it take to sell a home in Valrico?", answer: "A properly priced Valrico home typically goes under contract within 15-30 days and closes 30-45 days later, roughly 45-75 days total. Overpriced homes sit for months. The key is accurate pricing from day one using actual closed comps from your specific sub-neighborhood, not ZIP code averages." },
          { question: "What is the median home price in Valrico FL?", answer: "The median home price in Valrico is approximately $415,000 as of Q3 2026. Prices range from around $275K in entry-level neighborhoods to over $1M in River Hills and Crestwood Estates. Price per square foot averages $210-$220 depending on the subdivision and condition." },
          { question: "What are the best neighborhoods in Valrico?", answer: "It depends on your priorities. Bloomingdale offers the largest community (5,200+ homes, $300K-$500K). River Hills and Crestwood Estates are luxury options ($600K-$1M+). Buckhorn Preserve and Brentwood Hills have newer construction ($350K-$500K). Diamond Hill provides larger lots with no HOA. Barrett covers all 38 neighborhoods and matches buyers to the right fit." },
          { question: "Is Valrico FL a good place to live?", answer: "Valrico consistently ranks among the best suburbs in Hillsborough County, Florida for families. Top-rated schools (Bloomingdale HS, Newsome HS), low crime rates, easy access to I-75 and the Selmon Expressway, and a mix of established and newer neighborhoods make it a strong choice for buyers who want suburban space with Tampa Bay access. Homes for sale in Valrico range from the $275K range to over $1M." },
          { question: "What school zones are in Valrico?", answer: "Valrico is primarily served by two high school zones: Bloomingdale High School (western Valrico) and Newsome High School (eastern/southern portions including Buckhorn). School zoning is the single biggest price driver in Valrico, homes in top zones consistently sell faster and for more money." },
          { question: "Does Valrico have HOA communities?", answer: "Yes, most Valrico subdivisions have HOAs with fees ranging from $50-$400/month depending on amenities. Some neighborhoods like Diamond Hill and Duncan Groves have no HOA at all. Barrett Henry can help you find the right balance of community amenities vs. freedom based on your preferences." },
          { question: "How do I find new construction homes in Valrico?", answer: "Active new construction communities in Valrico include Arista, Heritage Crest, and Valrico Forest, with prices typically $380K-$550K. Having your own buyer's agent (like Barrett Henry) when purchasing new construction costs you nothing extra and protects your interests during builder contract negotiations." },
        ]}
      />

      {/* ═══ CONTACT ═══ */}
      <section className="section" id="contact">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ color: '#003da5' }}>Get in Touch</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Ready to Talk Valrico Real Estate?</h2>
            <p className="section-intro" style={{ margin: '12px auto 0', textAlign: 'center' }}>Send a message or call directly. Whether you are buying or selling in Valrico or anywhere in Tampa Bay, Barrett responds within 2 hours.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
            {/* Contact info */}
            <div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 28 }}>
                <img src="/barrett-henry.png" alt="Barrett Henry" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '2px solid #e8e8e8' }} />
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600 }}>Barrett Henry, REALTOR®</h3>
                  <p style={{ fontSize: 13, color: '#888' }}>Broker Associate · REMAX Collective</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  ['business', 'REMAX Collective - Brandon Office', '205 E Brandon Blvd, Brandon FL 33511'],
                  ['phone', '(813) 733-7907', null, 'tel:8137337907'],
                  ['email', 'barrett@nowtb.com', null, 'mailto:barrett@nowtb.com'],
                  ['language', 'nowtb.com', null, 'https://nowtb.com'],
                ].map(([icon, text, sub, href]) => (
                  <div key={icon as string} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span className="material-icons" style={{ fontSize: 20, color: '#003da5', marginTop: 2 }}>{icon}</span>
                    <div>
                      {href ? (
                        <a href={href as string} style={{ fontSize: 14, fontWeight: 500, color: '#003da5' }} {...(icon === 'language' ? { target: '_blank', rel: 'noopener' } : {})}>{text}</a>
                      ) : (
                        <span style={{ fontSize: 14, color: '#555' }}>{text}</span>
                      )}
                      {sub && <span style={{ display: 'block', fontSize: 13, color: '#888', marginTop: 2 }}>{sub}</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid #e8e8e8' }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 10 }}>Designations & Credentials</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['e-PRO', 'MRP', 'SRS', 'Broker Associate'].map(d => (
                    <span key={d} style={{ fontSize: 11, fontWeight: 600, padding: '5px 12px', background: '#fafafa', borderRadius: 6, color: '#003da5' }}>{d}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 8 }}>Quick Links</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {[
                    ['Pool Homes', '/valrico-pool-homes/'],
                    ['Waterfront', '/valrico-waterfront-homes/'],
                    ['Luxury', '/valrico-luxury-homes/'],
                    ['New Construction', '/valrico-new-construction-homes/'],
                    ['No HOA', '/valrico-no-hoa-homes/'],
                    ['Foreclosures', '/valrico-foreclosures/'],
                  ].map(([label, href]) => (
                    <Link key={label} href={href} style={{ fontSize: 12, color: '#003da5', padding: '5px 12px', background: '#fafafa', borderRadius: 6, border: '1px solid #e8e8e8' }}>{label}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="card" style={{ padding: '32px' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCHEMA: RealEstateAgent + Person + WebSite + BreadcrumbList ═══ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["RealEstateAgent", "LocalBusiness"],
            "@id": "https://valricoagent.com/#agent",
            "name": "Barrett Henry, REALTOR\u00AE",
            "givenName": "Barrett", "familyName": "Henry",
            "jobTitle": "Broker Associate",
            "description": "Barrett Henry is a licensed Broker Associate with REMAX Collective specializing in Valrico FL real estate. 23+ years of real estate experience serving ZIP codes 33594 and 33596 across 38 neighborhoods.",
            "url": "https://valricoagent.com",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "image": "https://valricoagent.com/barrett-henry.png",
            "address": { "@type": "PostalAddress", "streetAddress": "205 E Brandon Blvd", "addressLocality": "Brandon", "addressRegion": "FL", "postalCode": "33511", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9378, "longitude": -82.2365 },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
            ],
            "areaServed": [
              { "@type": "City", "name": "Valrico", "containedInPlace": { "@type": "State", "name": "Florida" } },
              { "@type": "City", "name": "Brandon", "containedInPlace": { "@type": "State", "name": "Florida" } },
              { "@type": "City", "name": "Riverview", "containedInPlace": { "@type": "State", "name": "Florida" } },
              { "@type": "City", "name": "Lithia", "containedInPlace": { "@type": "State", "name": "Florida" } },
              { "@type": "City", "name": "Seffner", "containedInPlace": { "@type": "State", "name": "Florida" } }
            ],
            "hasCredential": [
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "Florida Real Estate Broker License", "identifier": { "@type": "PropertyValue", "propertyID": "DBPR License Number", "value": "3313308" } },
              { "@type": "EducationalOccupationalCredential", "name": "e-PRO", "description": "Digital Marketing Certification" },
              { "@type": "EducationalOccupationalCredential", "name": "MRP", "description": "Military Relocation Professional" },
              { "@type": "EducationalOccupationalCredential", "name": "SRS", "description": "Seller Representative Specialist" }
            ],
            "worksFor": { "@type": "Organization", "name": "REMAX Collective", "url": "https://nowtb.com" },
            "memberOf": { "@type": "Organization", "name": "Suncoast Tampa Association of REALTORS" },
            "award": "REMAX Hall of Fame 2024",
            "knowsAbout": ["Valrico Real Estate", "Bloomingdale Homes", "FishHawk Ranch", "Buckhorn Preserve", "River Hills", "New Construction", "Investment Properties", "VA Loans", "First-Time Buyers", "School Zones"],
            "slogan": "MOVE WITH CONFIDENCE. Straight Talk. Smart Strategy.",
            "priceRange": "$",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "bestRating": "5", "worstRating": "1", "reviewCount": "85", "ratingCount": "85" },
            "review": [
              { "@type": "Review", "author": { "@type": "Person", "name": "Sarah M." }, "reviewBody": "Barrett made the entire process smooth from start to finish. He knows Valrico inside and out, every neighborhood, every school zone, every price trend.", "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }, "datePublished": "2025-06-01" },
              { "@type": "Review", "author": { "@type": "Person", "name": "David & Lisa R." }, "reviewBody": "We interviewed three agents before choosing Barrett. He was the only one who showed us actual comparable sales data. Our home sold in 22 days at 98% of asking price.", "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }, "datePublished": "2025-03-15" },
              { "@type": "Review", "author": { "@type": "Person", "name": "Marcus J." }, "reviewBody": "As a first-time buyer, Barrett walked me through every step, explained everything in plain English, and made sure I didn't overpay. Found a great home in Twin Lakes.", "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }, "datePublished": "2024-11-01" },
              { "@type": "Review", "author": { "@type": "Person", "name": "The Thompson Family" }, "reviewBody": "We relocated from Ohio and Barrett was our guide to everything Valrico. Schools, commute times, flood zones, insurance costs, he covered it all.", "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }, "datePublished": "2025-08-01" },
              { "@type": "Review", "author": { "@type": "Person", "name": "Jennifer W." }, "reviewBody": "Barrett told us NOT to sell when we first contacted him. Six months later when it made sense, he listed our home and got us top dollar. That kind of honesty is rare.", "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }, "datePublished": "2026-01-15" }
            ],
            "sameAs": [
              "https://nowtb.com", "https://valrico.blog",
              "https://www.facebook.com/BarrettHenryREALTOR/",
              "https://www.instagram.com/thenowteam",
              "https://www.linkedin.com/in/barretthenry/",
              "https://www.youtube.com/@nowtampa",
              "https://www.zillow.com/profile/barretthenry",
              "https://www.realtor.com/realestateagents/56d5364fde071e01006256cd",
              "https://www.remax.com/real-estate-agents/barrett-henry-city-state/100112059"
            ]
          },
          {
            "@type": "Person",
            "@id": "https://valricoagent.com/#person",
            "name": "Barrett Henry",
            "jobTitle": "Broker Associate",
            "url": "https://valricoagent.com/about/",
            "image": "https://valricoagent.com/barrett-henry.png",
            "telephone": "+1-813-733-7907",
            "email": "barrett@nowtb.com",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "memberOf": { "@type": "Organization", "name": "Suncoast Tampa Association of REALTORS" },
            "award": "REMAX Hall of Fame 2024",
            "hasCredential": [
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "Florida Real Estate Broker License" },
              { "@type": "EducationalOccupationalCredential", "name": "e-PRO" },
              { "@type": "EducationalOccupationalCredential", "name": "MRP" },
              { "@type": "EducationalOccupationalCredential", "name": "SRS" }
            ],
            "sameAs": [
              "https://nowtb.com",
              "https://www.facebook.com/BarrettHenryREALTOR/",
              "https://www.instagram.com/thenowteam",
              "https://www.linkedin.com/in/barretthenry/",
              "https://www.youtube.com/@nowtampa",
              "https://www.zillow.com/profile/barretthenry",
              "https://www.realtor.com/realestateagents/56d5364fde071e01006256cd"
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://valricoagent.com/#website",
            "name": "ValricoAgent.com",
            "url": "https://valricoagent.com",
            "publisher": { "@id": "https://valricoagent.com/#agent" },
            "potentialAction": {
              "@type": "SearchAction",
              "target": { "@type": "EntryPoint", "urlTemplate": "https://valricoagent.com/valrico-fl-homes-for-sale/?q={search_term_string}" },
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" }
            ]
          }
        ]
      }) }} />

      {/* ═══ RESPONSIVE OVERRIDES ═══ */}
      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: '1.1fr"] { grid-template-columns: 1fr !important; }
          [style*="gridTemplateColumns: '1fr 1fr'"] { grid-template-columns: 1fr !important; }
          [style*="gridTemplateColumns: 'repeat(3"] { grid-template-columns: 1fr !important; }
          [style*="gridTemplateColumns: 'repeat(4"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          [style*="gridTemplateColumns: 'repeat(4"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
