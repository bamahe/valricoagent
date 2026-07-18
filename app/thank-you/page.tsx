/**
 * app/thank-you/page.tsx
 *
 * Post-submission thank-you page. Server component with noindex metadata.
 * Shows a 3-step timeline, a "Can't wait?" call box, and useful page links.
 */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | ValricoAgent.com',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  /* 3-step timeline items */
  const steps = [
    { number: 1, label: 'Barrett reviews your info' },
    { number: 2, label: "You'll hear back within 2 hours" },
    { number: 3, label: "We'll build a plan together" },
  ];

  /* Useful links for the visitor to explore while waiting */
  const links = [
    { href: '/valrico-fl-homes-for-sale/', text: 'Browse Valrico Homes for Sale' },
    { href: '/blog/', text: 'Read the Blog' },
    { href: '/neighborhoods/', text: 'Explore Neighborhoods' },
    { href: '/valrico-school-zones/', text: 'Valrico School Zones' },
  ];

  return (
    <section style={{ padding: '72px 24px', minHeight: '60vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>

        {/* Heading */}
        <h1
          className="font-serif"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}
        >
          Thank You &mdash; We Got Your Message
        </h1>
        <p style={{ fontSize: 16, color: '#555', marginBottom: 48, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
          Your request is on Barrett&apos;s desk. Here&apos;s what happens next:
        </p>

        {/* 3-Step Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 420, margin: '0 auto 48px' }}>
          {steps.map((step, i) => (
            <div key={step.number} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              {/* Vertical line + circle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: '#003da5',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
                {/* Connector line (skip on last step) */}
                {i < steps.length - 1 && (
                  <div style={{ width: 2, height: 32, background: '#d4d4d4' }} />
                )}
              </div>
              {/* Step label */}
              <p style={{ fontSize: 16, color: '#1a1a1a', fontWeight: 500, paddingTop: 8, textAlign: 'left', margin: 0 }}>
                {step.label}
              </p>
            </div>
          ))}
        </div>

        {/* "Can't wait?" call box */}
        <div
          style={{
            background: '#f0f4ff',
            border: '1px solid #c7d6f5',
            borderRadius: 12,
            padding: '28px 24px',
            marginBottom: 48,
            maxWidth: 420,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 700, color: '#003da5', marginBottom: 8, marginTop: 0 }}>
            Can&apos;t wait?
          </p>
          <p style={{ fontSize: 14, color: '#555', marginBottom: 16, marginTop: 0 }}>
            Call Barrett directly &mdash; he picks up.
          </p>
          <a
            href="tel:+18137337907"
            className="btn-primary"
            style={{ fontSize: 16 }}
          >
            📞 (813) 733-7907
          </a>
        </div>

        {/* Useful links */}
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>
            While you wait
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="btn-outline"
                style={{ fontSize: 13 }}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
