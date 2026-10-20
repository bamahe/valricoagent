/**
 * app/schedule-showing/page.tsx
 *
 * Full page for scheduling a property showing in Valrico.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ScheduleShowingForm } from '../components/ScheduleShowingForm';
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs';

const CRUMBS = [{ name: 'Schedule a Showing', href: '/schedule-showing/' }];

export const metadata: Metadata = {
  title: 'Schedule a Showing - Valrico FL Homes | Barrett Henry',
  description:
    'Book a private showing of any Valrico home for sale. Barrett Henry responds within 2 hours. Call (813) 733-7907 or fill out the form.',
  alternates: { canonical: '/schedule-showing/' },
  openGraph: {
    title: 'Schedule a Showing - Valrico FL Homes | Barrett Henry',
    description:
      'Book a private showing of any Valrico home for sale. Barrett Henry responds within 2 hours. Call (813) 733-7907 or fill out the form.',
    url: 'https://valricoagent.com/schedule-showing/',
    siteName: 'ValricoAgent.com',
    type: 'website',
    images: [
      {
        url: 'https://valricoagent.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Barrett Henry, REALTOR - Valrico FL',
      },
    ],
  },
};

export default function ScheduleShowingPage() {
  return (
    <>
      <Breadcrumbs items={CRUMBS} />

      {/* BreadcrumbList JSON-LD, mirrors the visible trail above */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(CRUMBS)) }} />

      <main style={{ maxWidth: 640, margin: '0 auto', padding: '48px 20px' }}>
      {/* Page heading */}
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 8 }}>
        Schedule a Private Showing
      </h1>
      <p style={{ fontSize: 15, color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
        Found a home you want to see in person? Fill out the form below and Barrett will confirm
        your showing within 2 hours, or call{' '}
        <a href="tel:+18137337907" style={{ color: '#003da5', fontWeight: 600 }}>
          (813) 733-7907
        </a>{' '}
        to book right now.
      </p>

      {/* Form card */}
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          padding: '28px 24px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}
      >
        <ScheduleShowingForm />
      </div>

      {/* Trust signal */}
      <p style={{ fontSize: 13, color: '#888', marginTop: 20, textAlign: 'center' }}>
        Your information is confidential. Barrett Henry, REALTOR®, 23+ years of real estate experience.
      </p>
      <p style={{ fontSize: 14, marginTop: 10, textAlign: 'center' }}>
        Need a showing today?{' '}
        <a href="tel:8137337907" style={{ color: '#003da5', fontWeight: 700 }}>Call (813) 733-7907</a>
      </p>

      {/* Internal links, this page previously had none */}
      <div style={{ marginTop: 36, paddingTop: 24, borderTop: '1px solid #e8e8e8' }}>
        <p style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: '#888', marginBottom: 12 }}>
          Not sure which home yet?
        </p>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '8px 24px', listStyle: 'none', padding: 0, fontSize: 14, lineHeight: 1.9 }}>
          {[
            ['/valrico-fl-homes-for-sale/', 'Browse all Valrico homes for sale'],
            ['/valrico-open-houses/', 'See open houses this weekend'],
            ['/neighborhoods/', 'Compare Valrico neighborhoods'],
            ['/valrico-pool-homes/', 'Valrico pool homes'],
            ['/valrico-new-construction-homes/', 'New construction in Valrico'],
            ['/valrico-school-zones/', 'Check school zones first'],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} style={{ color: '#003da5', fontWeight: 500 }}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      </main>
    </>
  );
}
