/**
 * app/get-help/page.tsx
 *
 * Full contact page, uses ContactForm component.
 * This is the main CTA destination across the site.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '../components/ContactForm';
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs';

const CRUMBS = [{ name: 'Get Help', href: '/get-help/' }];

export const metadata: Metadata = {
  title: 'Get Help - Contact Barrett Henry | Valrico REALTOR',
  description:
    'Reach Barrett Henry for any Valrico real estate question, buying, selling, investing, or relocating. Response within 2 hours. Call (813) 733-7907.',
  alternates: { canonical: '/get-help/' },
  openGraph: {
    title: 'Get Help - Contact Barrett Henry | Valrico REALTOR',
    description:
      'Reach Barrett Henry for any Valrico real estate question, buying, selling, investing, or relocating. Response within 2 hours. Call (813) 733-7907.',
    url: 'https://valricoagent.com/get-help/',
    siteName: 'ValricoAgent.com',
    type: 'website',
    images: [
      {
        url: 'https://valricoagent.com/og-image.png',
        width: 600,
        height: 600,
        alt: 'Barrett Henry, REALTOR - Valrico FL',
      },
    ],
  },
};

export default function GetHelpPage() {
  return (
    <>
      <Breadcrumbs items={CRUMBS} />

      {/* BreadcrumbList JSON-LD, mirrors the visible trail above */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(CRUMBS)) }} />

      <main style={{ maxWidth: 640, margin: '0 auto', padding: '48px 20px' }}>
      {/* Page heading */}
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 8 }}>
        How Can Barrett Help?
      </h1>
      <p style={{ fontSize: 15, color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
        Whether you&apos;re buying your first home, selling for top dollar, or just have questions about
        the Valrico market - Barrett responds within 2 hours. Fill out the form or call{' '}
        <a href="tel:+18137337907" style={{ color: '#003da5', fontWeight: 600 }}>
          (813) 733-7907
        </a>
        .
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
        <ContactForm />
      </div>

      {/* Trust signals */}
      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>
          Your information is confidential. No spam, ever.
        </p>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>
          Barrett Henry, REALTOR® &amp; Broker Associate - REMAX Collective, 23+ years of real estate experience.
        </p>
        {/* Response-time guarantee, a conversion signal right next to the form */}
        <p style={{ fontSize: 13, fontWeight: 600, color: '#003da5' }}>
          Typical response time: within 2 hours.
        </p>
        <p style={{ fontSize: 14, marginTop: 14 }}>
          Prefer to talk now?{' '}
          <a href="tel:8137337907" style={{ color: '#003da5', fontWeight: 700 }}>
            Call (813) 733-7907
          </a>
        </p>
      </div>

      {/* Internal links. This page previously had zero, which left it a dead
          end for both visitors and crawlers despite being the main CTA target
          that most pages link into. */}
      <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid #e8e8e8' }}>
        <p style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: '#888', marginBottom: 12 }}>
          While you wait, start here
        </p>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '8px 24px', listStyle: 'none', padding: 0, fontSize: 14, lineHeight: 1.9 }}>
          {[
            ['/valrico-fl-homes-for-sale/', 'Search every Valrico home for sale'],
            ['/valrico-fl-home-values/', 'Find out what your home is worth'],
            ['/neighborhoods/', 'Compare all 41 Valrico neighborhoods'],
            ['/valrico-market-report/', 'Read the current Valrico market report'],
            ['/sell-my-home-valrico/', 'Selling a home in Valrico'],
            ['/valrico-first-time-homebuyer/', 'First-time buyer guide'],
            ['/valrico-school-zones/', 'Valrico school zones by address'],
            ['/testimonials/', 'Read client reviews'],
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
