/**
 * app/components/ContactForm.tsx
 *
 * Client-side contact form for valricoagent.com.
 * Posts to /api/leads which pushes to Follow Up Boss.
 */
'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: data.get('firstName') as string,
      lastName: data.get('lastName') as string,
      phone: data.get('phone') as string,
      email: data.get('email') as string,
      message: data.get('message') as string,
      bestTime: data.get('bestTime') as string,
      type: 'contact',
      source: 'ValricoAgent.com',
    };

    if (!payload.firstName || !payload.phone || !payload.email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        // Fire GA4 lead conversion event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'form',
            event_label: 'contact_form',
            value: 1,
          });
        }
        // Redirect to thank-you page (success state stays as fallback if redirect is slow)
        window.location.href = '/thank-you/';
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '32px 20px', textAlign: 'center', background: '#f0fdf4', borderRadius: 8, border: '1px solid #bbf7d0' }}>
        <p style={{ fontSize: 18, fontWeight: 700, color: '#15803d', marginBottom: 8 }}>Message Sent!</p>
        <p style={{ fontSize: 14, color: '#555' }}>Barrett will reach out within 2 hours.</p>
        <a href="tel:+18137337907" style={{ display: 'inline-block', marginTop: 16, fontSize: 14, fontWeight: 600, color: '#003da5' }}>
          Or call now: (813) 733-7907
        </a>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #e8e8e8',
    borderRadius: 6,
    fontSize: 14,
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 4,
    color: '#222',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>First Name *</label>
          <input name="firstName" type="text" required placeholder="First name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Last Name</label>
          <input name="lastName" type="text" placeholder="Last name" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Phone *</label>
        <input name="phone" type="tel" required placeholder="(555) 555-5555" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input name="email" type="email" required placeholder="you@email.com" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea name="message" placeholder="How can Barrett help you?" style={{ ...inputStyle, height: 100, resize: 'vertical' as const }} />
      </div>
      <div>
        <label style={labelStyle}>Best time to call</label>
        <select name="bestTime" style={inputStyle}>
          <option>ASAP</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>

      {status === 'error' && (
        <p style={{ fontSize: 13, color: '#dc2626', fontWeight: 600 }}>
          Something went wrong. Please try again or call (813) 733-7907.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          padding: '14px 32px',
          background: status === 'loading' ? '#6b7280' : '#003da5',
          color: '#fff',
          fontSize: 14,
          fontWeight: 600,
          border: 'none',
          borderRadius: 6,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {status === 'loading' ? 'Sending...' : '✉ Send Message'}
      </button>

      {/* Trust signal — response time guarantee */}
      <p style={{ fontSize: 12, color: '#6b7280', textAlign: 'center', margin: 0 }}>
        Typically responds within 2 hours &middot; 23+ years experience &middot; Your info stays confidential
      </p>
    </form>
  );
}
