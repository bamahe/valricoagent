import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', color: '#fff', padding: '56px 0 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.08)' }}>

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://nowtb.com/wp-content/uploads/2026/02/remax-balloon-2025-white.png" alt="RE/MAX" style={{ height: 36, opacity: 0.6 }} />
              <div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>Barrett Henry</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>REALTOR® · Broker Associate</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.7 }}>
              REMAX Collective<br />417 Lithia Pinecrest Rd<br />Brandon, FL 33511
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="tel:8137337907" style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,.8)' }}>(813) 733-7907</a>
            </p>
            <p>
              <a href="mailto:barrett@nowtb.com" style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>barrett@nowtb.com</a>
            </p>
            <div style={{ marginTop: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', color: 'var(--accent)', display: 'block' }}>MOVE WITH CONFIDENCE.</span>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,.25)', letterSpacing: '.08em' }}>Straight talk. Smart strategy.</span>
            </div>

            {/* Designations */}
            <div style={{ marginTop: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['e-PRO', 'MRP', 'SRS'].map((d) => (
                <span key={d} style={{ fontSize: 9, fontWeight: 700, padding: '2px 6px', border: '1px solid rgba(255,255,255,.12)', borderRadius: 3, color: 'rgba(255,255,255,.3)' }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Buyers column */}
          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.25)', marginBottom: 14, fontWeight: 700 }}>Buyers</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['/valrico-fl-homes-for-sale/', 'Search Homes'],
                ['/valrico-first-time-homebuyer/', 'First-Time Buyers'],
                ['/valrico-down-payment-assistance/', 'Down Payment Help'],
                ['/valrico-pool-homes/', 'Pool Homes'],
                ['/valrico-no-hoa-homes/', 'No HOA Homes'],
                ['/valrico-new-construction-homes/', 'New Construction'],
                ['/valrico-luxury-homes/', 'Luxury Homes'],
                ['/homes-for-sale-33594/', '33594 Homes'],
                ['/homes-for-sale-33596/', '33596 Homes'],
                ['/living-in-valrico/', 'Living in Valrico'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 6 }}><Link href={h} style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', transition: '.2s' }}>{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Sellers & Resources column */}
          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.25)', marginBottom: 14, fontWeight: 700 }}>Sellers &amp; Landlords</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['/valrico-fl-home-values/', "What's My Home Worth?"],
                ['/sell-my-home-valrico/', 'Sell My Home'],
                ['/valrico-market-report/', 'Market Report'],
                ['/valrico-property-management/', 'Property Management'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 6 }}><Link href={h} style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', transition: '.2s' }}>{n}</Link></li>
              ))}
            </ul>

            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.25)', marginTop: 20, marginBottom: 14, fontWeight: 700 }}>Resources</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['/valrico-school-zones/', 'School Zones'],
                ['/blog/', 'Blog'],
                ['/valrico-real-estate-agent/', 'About Barrett'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 6 }}><Link href={h} style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', transition: '.2s' }}>{n}</Link></li>
              ))}
            </ul>

            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.25)', marginTop: 20, marginBottom: 14, fontWeight: 700 }}>More</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['https://nowtb.com', 'nowtb.com'],
                ['https://bestbayservices.com', 'Best Bay Services'],
                ['https://valrico.blog', 'Valrico Blog'],
                ['https://vivipm.com', 'ViVi PM'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 6 }}><a href={h} target="_blank" rel="noopener" style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', transition: '.2s' }}>{n}</a></li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods column */}
          <div>
            <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.25)', marginBottom: 14, fontWeight: 700 }}>Valrico Neighborhoods</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['/neighborhoods/bloomingdale/', 'Bloomingdale'],
                ['/neighborhoods/river-hills/', 'River Hills'],
                ['/neighborhoods/diamond-hill/', 'Diamond Hill'],
                ['/neighborhoods/buckhorn/', 'Buckhorn / Boyette'],
                ['/neighborhoods/crestwood-estates/', 'Crestwood Estates'],
                ['/neighborhoods/twin-lakes/', 'Twin Lakes'],
                ['/neighborhoods/arista/', 'Arista'],
                ['/neighborhoods/brentwood-hills/', 'Brentwood Hills'],
                ['/neighborhoods/bloomingdale-oaks/', 'Bloomingdale Oaks'],
                ['/neighborhoods/buckhorn-preserve/', 'Buckhorn Preserve'],
                ['/neighborhoods/canterbury-oaks/', 'Canterbury Oaks'],
                ['/neighborhoods/kings-mill/', 'Kings Mill'],
              ].map(([h, n]) => (
                <li key={h} style={{ marginBottom: 5 }}><Link href={h} style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', transition: '.2s' }}>{n}</Link></li>
              ))}
              <li style={{ marginTop: 8 }}><Link href="/#neighborhoods" style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', fontWeight: 600 }}>All 32 Neighborhoods →</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,.15)', lineHeight: 1.7 }}>
            Barrett Henry is a licensed REALTOR® and Broker Associate with REMAX Collective in Brandon, FL. REMAX and the REMAX balloon logo are registered trademarks of RE/MAX, LLC. Equal Housing Opportunity. The information on this website is not intended to solicit properties currently listed for sale or buyers currently under contract. All data is deemed reliable but not guaranteed and should be independently verified.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, paddingBottom: 20, fontSize: 11, color: 'rgba(255,255,255,.15)', flexWrap: 'wrap', gap: 8 }}>
          <span>© 2026 Barrett Henry, REALTOR® · REMAX Collective · All Rights Reserved</span>
          <span>Built by <a href="https://vyrabyte.com" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,.2)' }}>Vyrabyte</a></span>
        </div>
      </div>

      {/* Responsive override for mobile */}
      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
