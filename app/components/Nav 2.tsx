'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/valrico-fl-homes-for-sale/', label: 'Homes for Sale' },
    { href: '/#neighborhoods', label: 'Neighborhoods' },
    { href: '/valrico-fl-home-values/', label: 'Home Values' },
    { href: '/sell-my-home-valrico/', label: 'Sell' },
    { href: '/#schools', label: 'Schools' },
    { href: '/blog/', label: 'Blog' },
    { href: '/#about', label: 'About' },
    { href: '/#commercial', label: 'Commercial' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-7 flex items-center justify-between h-[64px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://nowtb.com/wp-content/uploads/2026/02/remax-balloon-2025-white.png"
            alt="RE/MAX"
            className="h-9 md:h-11 w-auto drop-shadow"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <span>
            <span className="font-serif text-[17px] md:text-[19px] font-bold tracking-tight block" style={{ color: 'var(--ink)', lineHeight: 1.1 }}>
              Valrico Realtor
            </span>
            <span className="text-[10px] md:text-[11px] tracking-wide block" style={{ color: 'var(--ink-muted)' }}>
              Barrett Henry, REALTOR&reg;
            </span>
          </span>
        </Link>

        {/* Desktop nav — only on xl screens */}
        <div className="hidden xl:flex items-center gap-1">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold px-3 py-2 rounded no-underline transition-colors hover:bg-[var(--cream)]"
              style={{ color: 'var(--ink-soft)' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Phone button — always visible */}
          <a
            href="tel:8137337907"
            className="px-4 md:px-5 py-2 rounded font-semibold text-[13px] no-underline transition-colors"
            style={{ background: 'var(--accent)', color: '#fff' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-hover)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; }}
          >
            <span className="hidden md:inline">(813) 733-7907</span>
            <span className="md:hidden">Call</span>
          </a>

          {/* Hamburger — visible below xl */}
          <button
            className="xl:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/tablet slide-down menu */}
      {open && (
        <div className="xl:hidden" style={{ borderTop: '1px solid var(--border)', background: 'var(--cream)' }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-7 py-3">
            <div className="grid grid-cols-2 gap-x-4">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium py-3 no-underline"
                  style={{ color: 'var(--ink-soft)', borderBottom: '1px solid var(--border-light)' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
              <div>
                <a href="tel:8137337907" className="font-serif text-lg font-bold no-underline block" style={{ color: 'var(--ink)' }}>(813) 733-7907</a>
                <a href="mailto:barrett@nowtb.com" className="text-sm no-underline" style={{ color: 'var(--ink-muted)' }}>barrett@nowtb.com</a>
              </div>
              <span className="text-[11px] font-semibold tracking-wider" style={{ color: 'var(--ink-muted)' }}>RE/MAX Collective</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
