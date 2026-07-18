/**
 * app/privacy-policy/page.tsx
 *
 * Basic privacy policy covering form data, CRM usage, analytics cookies, and no data sales.
 */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for ValricoAgent.com — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy/' },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 24 }}>
        Privacy Policy
      </h1>

      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
        Effective date: July 17, 2026. This policy explains what information ValricoAgent.com
        collects, how we use it, and your choices.
      </p>

      {/* What we collect */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#111', marginBottom: 8 }}>
        What Information Do We Collect?
      </h2>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
        When you fill out a contact form or schedule-a-showing form on this site, we collect the
        information you provide: your name, email address, and phone number. We do not collect
        sensitive personal information such as financial data or Social Security numbers.
      </p>

      {/* How we use it */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#111', marginBottom: 8 }}>
        How Is Your Information Used?
      </h2>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
        Your contact information is sent to Follow Up Boss, our customer relationship management
        (CRM) platform, so Barrett Henry can respond to your inquiry — typically within 2 hours.
        We use your information solely to follow up on your real estate question and provide the
        service you requested. We do not use your data for automated decision-making or profiling.
      </p>

      {/* Cookies and analytics */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#111', marginBottom: 8 }}>
        Cookies and Analytics
      </h2>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
        This site uses Google Analytics 4 (GA4) to understand how visitors use the site — pages
        visited, time on site, and general geographic region. Analytics cookies are only loaded
        after you accept cookies via the consent banner. You can decline analytics cookies and
        still use the site normally.
      </p>

      {/* No data sold */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#111', marginBottom: 8 }}>
        Do We Sell Your Data?
      </h2>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
        No. We never sell, rent, or trade your personal information to third parties.
      </p>

      {/* Third-party services */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#111', marginBottom: 8 }}>
        Third-Party Services
      </h2>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
        We use the following third-party services that may receive your data in the course of
        providing their service: Follow Up Boss (CRM), Google Analytics (website analytics), and
        Vercel (website hosting). Each has its own privacy policy governing how they handle data.
      </p>

      {/* Your choices */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#111', marginBottom: 8 }}>
        Your Choices
      </h2>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
        You may contact us at any time to request that we delete the personal information we hold
        about you. You can also decline analytics cookies when prompted by the consent banner.
      </p>

      {/* Contact */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#111', marginBottom: 8 }}>
        Contact Us
      </h2>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 8 }}>
        If you have questions about this privacy policy, contact:
      </p>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>
        Barrett Henry<br />
        Email:{' '}
        <a href="mailto:barrett@nowtb.com" style={{ color: '#003da5' }}>
          barrett@nowtb.com
        </a>
        <br />
        Phone:{' '}
        <a href="tel:+18137337907" style={{ color: '#003da5' }}>
          (813) 733-7907
        </a>
      </p>
    </main>
  );
}
