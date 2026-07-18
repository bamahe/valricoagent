/**
 * app/get-help/page.tsx
 *
 * Full contact page — uses ContactForm component.
 * This is the main CTA destination across the site.
 */
import type { Metadata } from 'next';
import { ContactForm } from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Get Help — Contact Barrett Henry | Valrico REALTOR',
  description:
    'Reach Barrett Henry for any Valrico real estate question — buying, selling, investing, or relocating. Response within 2 hours. Call (813) 733-7907.',
  alternates: { canonical: '/get-help/' },
  openGraph: {
    title: 'Get Help — Contact Barrett Henry | Valrico REALTOR',
    description:
      'Reach Barrett Henry for any Valrico real estate question — buying, selling, investing, or relocating. Response within 2 hours. Call (813) 733-7907.',
    url: 'https://valricoagent.com/get-help/',
    siteName: 'ValricoAgent.com',
    type: 'website',
    images: [
      {
        url: 'https://valricoagent.com/barrett-henry.png',
        width: 600,
        height: 600,
        alt: 'Barrett Henry, REALTOR - Valrico FL',
      },
    ],
  },
};

export default function GetHelpPage() {
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '48px 20px' }}>
      {/* Page heading */}
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 8 }}>
        How Can Barrett Help?
      </h1>
      <p style={{ fontSize: 15, color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
        Whether you&apos;re buying your first home, selling for top dollar, or just have questions about
        the Valrico market — Barrett responds within 2 hours. Fill out the form or call{' '}
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
        <p style={{ fontSize: 13, color: '#888' }}>
          Barrett Henry, REALTOR® &amp; Broker Associate — REMAX Collective — 23+ years of real estate experience.
        </p>
      </div>
    </main>
  );
}
