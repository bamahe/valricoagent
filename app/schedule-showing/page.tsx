/**
 * app/schedule-showing/page.tsx
 *
 * Full page for scheduling a property showing in Valrico.
 */
import type { Metadata } from 'next';
import { ScheduleShowingForm } from '../components/ScheduleShowingForm';

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
        url: 'https://valricoagent.com/barrett-henry.png',
        width: 600,
        height: 600,
        alt: 'Barrett Henry, REALTOR - Valrico FL',
      },
    ],
  },
};

export default function ScheduleShowingPage() {
  return (
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
    </main>
  );
}
