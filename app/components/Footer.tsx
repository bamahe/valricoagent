import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Main grid */}
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/remax-logo.png" alt="REMAX" style={{ height: 26, filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
              <div>
                <div style={{ fontSize: 17, fontWeight: 700 }}>Barrett Henry</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.45)' }}>REALTOR® · Broker Associate</div>
              </div>
            </div>
            <p className="footer-address">REMAX Collective<br />417 Lithia Pinecrest Rd<br />Brandon, FL 33511</p>
            <p style={{ marginTop: 16 }}>
              <a href="tel:8137337907" className="footer-phone">(813) 733-7907</a>
            </p>
            <p><a href="mailto:barrett@nowtb.com" className="footer-email">barrett@nowtb.com</a></p>

            <div className="footer-tagline">
              <span style={{ fontWeight: 700, color: '#fff' }}>MOVE WITH CONFIDENCE.</span>
              <span style={{ display: 'block', marginTop: 2 }}>Straight talk. Smart strategy.</span>
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
              {['e-PRO', 'MRP', 'SRS'].map(d => (
                <span key={d} className="footer-badge">{d}</span>
              ))}
            </div>
          </div>

          {/* Buyers */}
          <div>
            <p className="footer-heading">Buyers</p>
            <ul className="footer-links">
              {[
                ['/valrico-fl-homes-for-sale/', 'Search Homes'],
                ['/valrico-first-time-homebuyer/', 'First-Time Buyers'],
                ['/valrico-pool-homes/', 'Pool Homes'],
                ['/valrico-new-construction-homes/', 'New Construction'],
                ['/valrico-luxury-homes/', 'Luxury Homes'],
                ['/valrico-relocation-guide/', 'Relocating to Valrico'],
                ['/valrico-investment-property/', 'Investment Properties'],
              ].map(([h, n]) => (
                <li key={h}><Link href={h}>{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Sellers & Resources */}
          <div>
            <p className="footer-heading">Sellers</p>
            <ul className="footer-links">
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
                <li key={h}><Link href={h}>{n}</Link></li>
              ))}
            </ul>

            <p className="footer-heading" style={{ marginTop: 28 }}>Resources</p>
            <ul className="footer-links">
              {[
                ['/valrico-school-zones/', 'School Zones'],
                ['/valrico-55-plus-communities/', '55+ Communities'],
                ['/living-in-valrico/', 'Living in Valrico'],
                ['/blog/', 'Blog'],
                ['/about/', 'About Barrett'],
              ].map(([h, n]) => (
                <li key={h}><Link href={h}>{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <p className="footer-heading">Neighborhoods</p>
            <ul className="footer-links">
              {[
                ['/neighborhoods/bloomingdale/', 'Bloomingdale'],
                ['/neighborhoods/river-hills/', 'River Hills'],
                ['/neighborhoods/diamond-hill/', 'Diamond Hill'],
                ['/neighborhoods/buckhorn/', 'Buckhorn'],
                ['/neighborhoods/crestwood-estates/', 'Crestwood Estates'],
                ['/neighborhoods/twin-lakes/', 'Twin Lakes'],
              ].map(([h, n]) => (
                <li key={h}><Link href={h}>{n}</Link></li>
              ))}
              <li style={{ marginTop: 10 }}><Link href="/neighborhoods/" style={{ color: '#fff', fontWeight: 600 }}>All 32 Neighborhoods →</Link></li>
            </ul>

            <div className="footer-more">
              <p className="footer-heading">More</p>
              {[
                ['https://nowtb.com', 'nowtb.com'],
                ['https://bestbayservices.com', 'Best Bay Services'],
                ['https://valrico.blog', 'Valrico Blog'],
                ['https://vivipm.com', 'ViVi PM'],
                ['https://flforeclosurehelp.com', 'FL Foreclosure Help'],
              ].map(([h, n]) => (
                <a key={h} href={h} target="_blank" rel="noopener" className="footer-ext-link">{n}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="footer-disclaimer">
          Barrett Henry is a licensed REALTOR® and Broker Associate with REMAX Collective in Brandon, FL. REMAX and the REMAX balloon logo are registered trademarks of RE/MAX, LLC. Equal Housing Opportunity. The information on this website is not intended to solicit properties currently listed for sale or buyers currently under contract. All data is deemed reliable but not guaranteed.
        </p>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 Barrett Henry, REALTOR® · REMAX Collective · <Link href="/privacy-policy/" style={{ color: 'rgba(255,255,255,.4)' }}>Privacy Policy</Link></span>
          <span>Built by <a href="https://vyrabyte.com" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,.5)' }}>Vyrabyte</a></span>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #001f5c;
          color: #fff;
          padding: 64px 0 0;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr;
          gap: 48;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .footer-address {
          font-size: 13px;
          color: rgba(255,255,255,.45);
          line-height: 1.8;
        }
        .footer-phone {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }
        .footer-email {
          font-size: 13px;
          color: rgba(255,255,255,.45);
        }
        .footer-tagline {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.06);
          font-size: 11px;
          letter-spacing: .1em;
          color: rgba(255,255,255,.3);
        }
        .footer-badge {
          font-size: 9px;
          font-weight: 700;
          padding: 3px 8px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 4px;
          color: rgba(255,255,255,.35);
        }
        .footer-heading {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .14em;
          color: rgba(255,255,255,.3);
          margin-bottom: 16px;
          font-weight: 700;
        }
        .footer-links {
          list-style: none;
        }
        .footer-links li { margin-bottom: 8px; }
        .footer-links a {
          font-size: 13px;
          color: rgba(255,255,255,.5);
          transition: color .2s;
        }
        .footer-links a:hover { color: #fff; }
        .footer-more {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.06);
        }
        .footer-ext-link {
          font-size: 12px;
          color: rgba(255,255,255,.4);
          display: block;
          margin-bottom: 7px;
          transition: color .2s;
        }
        .footer-ext-link:hover { color: #fff; }
        .footer-disclaimer {
          padding: 20px 0;
          font-size: 10px;
          color: rgba(255,255,255,.25);
          line-height: 1.7;
          border-bottom: 1px solid rgba(255,255,255,.05);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding: 18px 0 22px;
          font-size: 11px;
          color: rgba(255,255,255,.25);
          flex-wrap: wrap;
          gap: 8px;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
