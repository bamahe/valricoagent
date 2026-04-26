'use client';
import Link from 'next/link';
import { useState } from 'react';

const buyLinks = [
  { href: '/valrico-fl-homes-for-sale/', text: 'Search All Homes' },
  { href: '/valrico-first-time-homebuyer/', text: 'First-Time Buyers' },
  { href: '/valrico-down-payment-assistance/', text: 'Down Payment Help' },
  { href: '/valrico-va-loan-homes/', text: 'VA Loan Homes' },
  { href: '/valrico-pool-homes/', text: 'Pool Homes' },
  { href: '/valrico-no-hoa-homes/', text: 'No HOA Homes' },
  { href: '/valrico-new-construction-homes/', text: 'New Construction' },
  { href: '/valrico-luxury-homes/', text: 'Luxury Homes' },
  { href: '/valrico-waterfront-homes/', text: 'Waterfront Homes' },
  { href: '/homes-for-sale-33594/', text: '33594 Homes' },
  { href: '/homes-for-sale-33596/', text: '33596 Homes' },
];

const sellLinks = [
  { href: '/valrico-fl-home-values/', text: "What's My Home Worth?" },
  { href: '/sell-my-home-valrico/', text: 'Selling Guide' },
  { href: '/valrico-cash-offer/', text: 'Cash Offer' },
  { href: '/valrico-short-sale/', text: 'Short Sale Help' },
  { href: '/valrico-foreclosures/', text: 'Foreclosures' },
  { href: '/valrico-market-report/', text: 'Market Report' },
  { href: '/valrico-property-management/', text: 'Property Management' },
];

const hoodLinks = [
  { href: '/neighborhoods/bloomingdale/', text: 'Bloomingdale' },
  { href: '/neighborhoods/river-hills/', text: 'River Hills' },
  { href: '/neighborhoods/diamond-hill/', text: 'Diamond Hill' },
  { href: '/neighborhoods/buckhorn/', text: 'Buckhorn' },
  { href: '/neighborhoods/crestwood-estates/', text: 'Crestwood Estates' },
  { href: '/neighborhoods/twin-lakes/', text: 'Twin Lakes' },
  { href: '/#neighborhoods', text: 'All 32 Neighborhoods →' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDD, setOpenDD] = useState<string | null>(null);
  const [mobileDD, setMobileDD] = useState<string | null>(null);

  const dropdowns = [
    { key: 'buy', label: 'Buy', items: buyLinks },
    { key: 'sell', label: 'Sell', items: sellLinks },
    { key: 'hoods', label: 'Neighborhoods', items: hoodLinks },
  ];

  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #e5e5e5', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 4px rgba(0,0,0,.04)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://nowtb.com/wp-content/uploads/2026/02/remax-balloon-2025-white.png"
            alt="RE/MAX"
            style={{ height: 34 }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div style={{ lineHeight: 1.2 }}>
            <strong style={{ fontSize: 15, color: '#222', display: 'block' }}>Barrett Henry</strong>
            <small style={{ fontSize: 10, color: '#888' }}>REALTOR® · RE/MAX Collective</small>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav">
          {dropdowns.map((dd) => (
            <div
              key={dd.key}
              className="dd-wrap"
              onMouseEnter={() => setOpenDD(dd.key)}
              onMouseLeave={() => setOpenDD(null)}
            >
              <span className="dd-trigger">{dd.label} <span style={{ fontSize: 10 }}>▾</span></span>
              {openDD === dd.key && (
                <div className="dd-menu">
                  {dd.items.map((item) => (
                    <Link key={item.href} href={item.href} className="dd-item" onClick={() => setOpenDD(null)}>
                      {item.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/valrico-school-zones/" className="nav-link">Schools</Link>
          <Link href="/blog/" className="nav-link">Blog</Link>
          <Link href="/valrico-realtor/" className="nav-link">About</Link>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a
            href="tel:8137337907"
            style={{ padding: '8px 16px', background: '#003da5', color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 6, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            (813) 733-7907
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {dropdowns.map((dd) => (
            <div key={dd.key}>
              <button
                className="mobile-section-btn"
                onClick={() => setMobileDD(mobileDD === dd.key ? null : dd.key)}
              >
                {dd.label} <span style={{ float: 'right' }}>{mobileDD === dd.key ? '−' : '+'}</span>
              </button>
              {mobileDD === dd.key && (
                <div className="mobile-sub">
                  {dd.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="mobile-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/valrico-school-zones/" className="mobile-link-top" onClick={() => setMobileOpen(false)}>Schools</Link>
          <Link href="/blog/" className="mobile-link-top" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/valrico-realtor/" className="mobile-link-top" onClick={() => setMobileOpen(false)}>About Barrett</Link>
          <Link href="/valrico-relocation-guide/" className="mobile-link-top" onClick={() => setMobileOpen(false)}>Relocating</Link>
          <div style={{ padding: '16px 20px', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <a href="tel:8137337907" style={{ fontSize: 16, fontWeight: 700, color: '#222', display: 'block' }}>(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" style={{ fontSize: 12, color: '#888' }}>barrett@nowtb.com</a>
            </div>
            <span style={{ fontSize: 10, color: '#888', fontWeight: 600 }}>RE/MAX Collective</span>
          </div>
        </div>
      )}

      <style>{`
        /* Desktop nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .dd-wrap { position: relative; }
        .dd-trigger {
          font-size: 13px;
          font-weight: 500;
          color: #222;
          padding: 22px 14px;
          cursor: pointer;
          display: block;
          transition: color .2s;
        }
        .dd-trigger:hover { color: #003da5; }
        .dd-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,.1);
          min-width: 220px;
          z-index: 200;
          padding: 6px 0;
        }
        .dd-item {
          display: block;
          padding: 10px 20px;
          font-size: 13px;
          color: #222;
          transition: all .15s;
        }
        .dd-item:hover {
          background: #f7f7f7;
          color: #003da5;
        }
        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: #222;
          padding: 22px 14px;
          transition: color .2s;
        }
        .nav-link:hover { color: #003da5; }

        /* Hamburger */
        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
          padding: 4px 8px;
          color: #222;
        }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          background: #fff;
          border-top: 1px solid #e5e5e5;
          max-height: 80vh;
          overflow-y: auto;
        }
        .mobile-section-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 14px 20px;
          font-size: 15px;
          font-weight: 600;
          color: #222;
          background: none;
          border: none;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
        }
        .mobile-sub {
          background: #fafafa;
          border-bottom: 1px solid #f0f0f0;
        }
        .mobile-link {
          display: block;
          padding: 11px 20px 11px 36px;
          font-size: 14px;
          color: #555;
          border-bottom: 1px solid #f5f5f5;
        }
        .mobile-link:hover { color: #003da5; }
        .mobile-link-top {
          display: block;
          padding: 14px 20px;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          border-bottom: 1px solid #f0f0f0;
        }

        /* Responsive */
        @media (min-width: 1025px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
