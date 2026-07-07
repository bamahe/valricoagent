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
    <nav className="site-nav">
      <div className="nav-inner">
        {/* Brand */}
        <Link href="/" className="nav-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/remax-logo.png" alt="REMAX" className="nav-logo" />
          <div>
            <strong className="nav-name">Barrett Henry</strong>
            <small className="nav-sub">REALTOR® · REMAX Collective</small>
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
              <span className="dd-trigger">{dd.label} <span className="dd-arrow">▾</span></span>
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
          <Link href="/about/" className="nav-link">About</Link>
        </div>

        {/* Right side */}
        <div className="nav-right">
          <a href="tel:8137337907" className="nav-phone">
            <span className="material-icons" style={{ fontSize: 16 }}>phone</span>
            (813) 733-7907
          </a>
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
                    <Link key={item.href} href={item.href} className="mobile-link" onClick={() => setMobileOpen(false)}>
                      {item.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/valrico-school-zones/" className="mobile-link-top" onClick={() => setMobileOpen(false)}>Schools</Link>
          <Link href="/blog/" className="mobile-link-top" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/about/" className="mobile-link-top" onClick={() => setMobileOpen(false)}>About Barrett</Link>
          <Link href="/valrico-relocation-guide/" className="mobile-link-top" onClick={() => setMobileOpen(false)}>Relocating</Link>
          <div className="mobile-footer">
            <div>
              <a href="tel:8137337907" className="mobile-phone">(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="mobile-email">barrett@nowtb.com</a>
            </div>
            <span className="mobile-brand">REMAX Collective</span>
          </div>
        </div>
      )}

      <style>{`
        .site-nav {
          background: #fff;
          border-bottom: 1px solid #e8e8e8;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo { height: 28px; }
        .nav-name {
          font-size: 15px;
          color: #1a1a1a;
          display: block;
          line-height: 1.2;
        }
        .nav-sub {
          font-size: 10px;
          color: #888;
          display: block;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-phone {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          background: #003da5;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: background .2s;
        }
        .nav-phone:hover { background: #002a7a; }

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
          color: #1a1a1a;
          padding: 22px 14px;
          cursor: pointer;
          display: block;
          transition: color .2s;
        }
        .dd-arrow { font-size: 9px; opacity: .5; }
        .dd-trigger:hover { color: #003da5; }
        .dd-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          box-shadow: 0 12px 36px rgba(0,0,0,.1);
          min-width: 230px;
          z-index: 200;
          padding: 8px 0;
          animation: fadeIn .15s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        .dd-item {
          display: block;
          padding: 10px 20px;
          font-size: 13px;
          color: #1a1a1a;
          transition: all .15s;
        }
        .dd-item:hover {
          background: #f0f4ff;
          color: #003da5;
        }
        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: #1a1a1a;
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
          color: #1a1a1a;
        }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          background: #fff;
          border-top: 1px solid #e8e8e8;
          max-height: 80vh;
          overflow-y: auto;
        }
        .mobile-section-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
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
          padding: 12px 24px 12px 40px;
          font-size: 14px;
          color: #4a4a4a;
          border-bottom: 1px solid #f5f5f5;
        }
        .mobile-link:hover { color: #003da5; }
        .mobile-link-top {
          display: block;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
          border-bottom: 1px solid #f0f0f0;
        }
        .mobile-footer {
          padding: 16px 24px;
          border-top: 1px solid #e8e8e8;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mobile-phone { font-size: 16px; font-weight: 700; color: #1a1a1a; display: block; }
        .mobile-email { font-size: 12px; color: #888; }
        .mobile-brand { font-size: 10px; color: #888; font-weight: 600; }

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
