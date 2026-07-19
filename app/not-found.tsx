/**
 * app/not-found.tsx
 *
 * Custom 404 page, friendly message with links to key pages.
 */
import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        maxWidth: 600,
        margin: '0 auto',
        padding: '80px 20px',
        textAlign: 'center',
      }}
    >
      {/* Page heading */}
      <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', marginBottom: 12 }}>
        Page Not Found
      </h1>

      {/* Friendly message */}
      <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, marginBottom: 32 }}>
        Sorry, the page you were looking for doesn&apos;t exist or has been moved.
        Try one of the links below, or call Barrett directly.
      </p>

      {/* Phone number */}
      <a
        href="tel:+18137337907"
        style={{
          display: 'inline-block',
          fontSize: 18,
          fontWeight: 600,
          color: '#003da5',
          marginBottom: 32,
        }}
      >
        (813) 733-7907
      </a>

      {/* Navigation links */}
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
        }}
      >
        <Link
          href="/"
          style={{ fontSize: 15, color: '#003da5', fontWeight: 500, textDecoration: 'underline' }}
        >
          Back to Homepage
        </Link>
        <Link
          href="/valrico-fl-homes-for-sale/"
          style={{ fontSize: 15, color: '#003da5', fontWeight: 500, textDecoration: 'underline' }}
        >
          Search Valrico Homes for Sale
        </Link>
        <Link
          href="/neighborhoods/"
          style={{ fontSize: 15, color: '#003da5', fontWeight: 500, textDecoration: 'underline' }}
        >
          Explore 32 Neighborhoods
        </Link>
        <Link
          href="/get-help/"
          style={{ fontSize: 15, color: '#003da5', fontWeight: 500, textDecoration: 'underline' }}
        >
          Get Help from Barrett
        </Link>
      </nav>

      {/* Trust signal */}
      <p style={{ fontSize: 13, color: '#888', marginTop: 40 }}>
        Barrett Henry, REALTOR® &amp; Broker Associate - REMAX Collective, 23+ years of real estate experience.
      </p>
    </main>
  );
}
