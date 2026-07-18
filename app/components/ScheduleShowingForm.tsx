/**
 * app/components/ScheduleShowingForm.tsx
 *
 * Form for scheduling a property showing.
 * Posts to /api/leads with type: 'showing'.
 */
'use client';

import { useState } from 'react';

export function ScheduleShowingForm() {
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
      preferredDate: data.get('preferredDate') as string,
      preferredTime: data.get('preferredTime') as string,
      propertyAddress: data.get('propertyAddress') as string,
      message: data.get('message') as string,
      type: 'showing',
      source: 'ValricoAgent.com',
    };

    // Validate required fields
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
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  // Success state
  if (status === 'success') {
    return (
      <div style={{ padding: '32px 20px', textAlign: 'center', background: '#f0fdf4', borderRadius: 8, border: '1px solid #bbf7d0' }}>
        <p style={{ fontSize: 18, fontWeight: 700, color: '#15803d', marginBottom: 8 }}>Showing Request Submitted!</p>
        <p style={{ fontSize: 14, color: '#555' }}>Barrett will confirm your showing within 2 hours.</p>
        <a href="tel:+18137337907" style={{ display: 'inline-block', marginTop: 16, fontSize: 14, fontWeight: 600, color: '#003da5' }}>
          Or call now: (813) 733-7907
        </a>
      </div>
    );
  }

  // Shared styles
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
      {/* Name row */}
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

      {/* Contact */}
      <div>
        <label style={labelStyle}>Phone *</label>
        <input name="phone" type="tel" required placeholder="(555) 555-5555" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input name="email" type="email" required placeholder="you@email.com" style={inputStyle} />
      </div>

      {/* Scheduling */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>Preferred Date</label>
          <input name="preferredDate" type="date" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Preferred Time</label>
          <select name="preferredTime" style={inputStyle}>
            <option value="">Select a time</option>
            <option>9:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
          </select>
        </div>
      </div>

      {/* Property address (optional) */}
      <div>
        <label style={labelStyle}>Property Address (optional)</label>
        <input name="propertyAddress" type="text" placeholder="123 Main St, Valrico, FL" style={inputStyle} />
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Message</label>
        <textarea name="message" placeholder="Any special requests or questions?" style={{ ...inputStyle, height: 80, resize: 'vertical' as const }} />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p style={{ fontSize: 13, color: '#dc2626', fontWeight: 600 }}>
          Something went wrong. Please try again or call (813) 733-7907.
        </p>
      )}

      {/* Submit */}
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
        {status === 'loading' ? 'Submitting...' : 'Schedule My Showing'}
      </button>
    </form>
  );
}
