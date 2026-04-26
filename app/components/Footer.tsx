import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#111827', color: '#fff', padding: '56px 0 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 48, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.1)' }}>

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://nowtb.com/wp-content/uploads/2026/02/remax-balloon-2025-white.png" alt="RE/MAX" style={{ height: 36, opacity: 0.7 }} />
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>Barrett Henry</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)' }}>REALTOR® · Broker Associate</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.8 }}>
              REMAX Collective<br />417 Lithia Pinecrest Rd<br />Brandon, FL 33511
            </p>
            <p style={{ marginTop: 14 }}>
              <a href="tel:8137337907" style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>(813) 733-7907</a>
            </p>
            <p>
              <a href="mailto:barrett@nowtb.com" style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>barrett@nowtb.com</a>
            </p>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', color: '#3b82f6' }}>MOVE WITH CONFIDENCE.</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', display: 'block', marginTop: 2 }}>Straight talk. Smart strategy.</span>
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
              {['e-PRO', 'MRP', 'SRS'].map((d) => (
                <span key={d} style={{ fontSize: 9, fontWeight: 700, padding: '3px 7px', border: '1px solid rgba(255,255,255,.15)', borderRadius: 3, color: 'rgba(255,255,255,.4)' }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Buyers column */}
          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.35)', marginBottom: 16, fontWeight: 700 }}>Buyers</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['/valrico-fl-homes-for-sale/', 'Search Homes'],
                ['/valrico-first-time-homebuyer/', 'First-Time Buyers'],
                ['/valrico-down-payment-assistance/', 'Down Payment Help'],
                ['/valrico-va-loan-homes/', 'VA Loan Homes'],
                ['/valrico-pool-homes/', 'Pool Homes'],
                ['/valrico-no-hoa-homes/', 'No HOA Homes'],
                ['/valrico-new-construction-homes/', 'New Construction'],
                ['/valrico-luxury-homes/', 'Luxury Homes'],
                ['/valrico-waterfront-homes/', 'Waterfront Homes'],
                ['/homes-for-sale-33594/', '33594 Homes'],
                ['/homes-for-sale-33596/', '33596 Homes'],
                ['/valrico-relocation-guide/', 'Relocating to Valrico'],
                ['/valrico-investment-property/', 'Investment Properties'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 7 }}><Link href={h} style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', transition: '.2s' }}>{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Sellers & Resources column */}
          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.35)', marginBottom: 16, fontWeight: 700 }}>Sellers</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['/valrico-fl-home-values/', "What's My Home Worth?"],
                ['/sell-my-home-valrico/', 'Sell My Home'],
                ['/valrico-cash-offer/', 'Cash Offer'],
                ['/valrico-short-sale/', 'Short Sale Help'],
                ['/valrico-foreclosures/', 'Foreclosures'],
                ['/valrico-pre-foreclosure/', 'Pre-Foreclosure Help'],
                ['/valrico-market-report/', 'Market Report'],
                ['/valrico-property-management/', 'Property Management'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 7 }}><Link href={h} style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', transition: '.2s' }}>{n}</Link></li>
              ))}
            </ul>

            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.35)', marginTop: 24, marginBottom: 16, fontWeight: 700 }}>Resources</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['/valrico-school-zones/', 'School Zones'],
                ['/valrico-realtor/', 'Valrico Realtor'],
                ['/valrico-real-estate-agent/', 'Valrico Agent'],
                ['/valrico-55-plus-communities/', '55+ Communities'],
                ['/living-in-valrico/', 'Living in Valrico'],
                ['/blog/', 'Blog'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 7 }}><Link href={h} style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', transition: '.2s' }}>{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods column */}
          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.35)', marginBottom: 16, fontWeight: 700 }}>Neighborhoods</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['/neighborhoods/bloomingdale/', 'Bloomingdale'],
                ['/neighborhoods/river-hills/', 'River Hills'],
                ['/neighborhoods/diamond-hill/', 'Diamond Hill'],
                ['/neighborhoods/buckhorn/', 'Buckhorn'],
                ['/neighborhoods/crestwood-estates/', 'Crestwood Estates'],
                ['/neighborhoods/twin-lakes/', 'Twin Lakes'],
                ['/neighborhoods/arista/', 'Arista'],
                ['/neighborhoods/brentwood-hills/', 'Brentwood Hills'],
                ['/neighborhoods/bloomingdale-oaks/', 'Bloomingdale Oaks'],
                ['/neighborhoods/buckhorn-preserve/', 'Buckhorn Preserve'],
                ['/neighborhoods/canterbury-oaks/', 'Canterbury Oaks'],
                ['/neighborhoods/kings-mill/', 'Kings Mill'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 7 }}><Link href={h} style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', transition: '.2s' }}>{n}</Link></li>
              ))}
              <li style={{ marginTop: 10 }}><Link href="/#neighborhoods" style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>All 32 Neighborhoods →</Link></li>
            </ul>

            <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.35)', marginBottom: 12, fontWeight: 700 }}>More</h4>
              {[
                ['https://nowtb.com', 'nowtb.com'],
                ['https://bestbayservices.com', 'Best Bay Services'],
                ['https://valrico.blog', 'Valrico Blog'],
                ['https://vivipm.com', 'ViVi PM'],
                ['https://flforeclosurehelp.com', 'FL Foreclosure Help'],
              ].map(([h, n]) => (
                <a key={h} href={h} target="_blank" rel="noopener" style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: 6, transition: '.2s' }}>{n}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ padding: '20px 0', fontSize: 10, color: 'rgba(255,255,255,.3)', lineHeight: 1.7, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
          Barrett Henry is a licensed REALTOR® and Broker Associate with REMAX Collective in Brandon, FL. REMAX and the REMAX balloon logo are registered trademarks of RE/MAX, LLC. Equal Housing Opportunity. The information on this website is not intended to solicit properties currently listed for sale or buyers currently under contract. All data is deemed reliable but not guaranteed and should be independently verified.
        </p>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0 20px', fontSize: 11, color: 'rgba(255,255,255,.3)', flexWrap: 'wrap', gap: 8 }}>
          <span>© 2026 Barrett Henry, REALTOR® · REMAX Collective</span>
          <span>Built by <a href="https://vyrabyte.com" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,.4)' }}>Vyrabyte</a></span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        footer a:hover { color: #fff !important; }
      `}</style>
    </footer>
  );
}
