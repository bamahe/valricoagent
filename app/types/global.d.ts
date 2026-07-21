/**
 * Global TypeScript declarations for window extensions.
 * gtag is loaded conditionally via GA4 in layout.tsx.
 */

interface Window {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  _gaLoaded?: boolean;
  _clLoaded?: boolean;
}
