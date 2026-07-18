/**
 * app/components/MobileBottomBar.tsx
 *
 * Sticky bottom bar for mobile users — Call button (2/3 width) + Text/Get Help button (1/3 width).
 * Only visible below 768px. z-index 80 (below cookie consent at 90).
 * Includes safe-area padding for iPhone home indicator.
 */
'use client';

export default function MobileBottomBar() {
  return (
    <div
      className="mobile-bottom-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        zIndex: 80,
        /* Safe-area padding for iPhone notch/home indicator */
        paddingBottom: 'env(safe-area-inset-bottom)',
        background: '#fff',
        borderTop: '1px solid #e8e8e8',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.08)',
      }}
    >
      {/* Call button — 2/3 width, navy background */}
      <a
        href="tel:+18137337907"
        aria-label="Call Barrett Henry at (813) 733-7907"
        style={{
          flex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '14px 12px',
          background: '#003da5',
          color: '#fff',
          fontWeight: 600,
          fontSize: 15,
          textDecoration: 'none',
          border: 'none',
        }}
      >
        {/* Phone icon (inline SVG to avoid extra dependency) */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        (813) 733-7907
      </a>

      {/* Text / Get Help button — 1/3 width, lighter style */}
      <a
        href="/get-help/"
        aria-label="Get help from Barrett Henry"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          padding: '14px 12px',
          background: '#f5f5f5',
          color: '#003da5',
          fontWeight: 600,
          fontSize: 14,
          textDecoration: 'none',
          border: 'none',
          borderLeft: '1px solid #e8e8e8',
        }}
      >
        {/* Message icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
        Text
      </a>

      {/* CSS to hide this bar on desktop (768px+) */}
      <style>{`
        .mobile-bottom-bar { display: flex !important; }
        @media (min-width: 769px) {
          .mobile-bottom-bar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
