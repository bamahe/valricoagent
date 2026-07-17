'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * NeighborhoodMap — renders a Google Map centered on a neighborhood.
 * Uses the Google Maps JavaScript API loaded via a script tag.
 * Requires NEXT_PUBLIC_GOOGLE_MAPS_API_KEY env var.
 */

interface NeighborhoodMapProps {
  center: { lat: number; lng: number };
  zoom?: number;
  neighborhoodName: string;
}

export default function NeighborhoodMap({ center, zoom = 14, neighborhoodName }: NeighborhoodMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  // Grab API key from env
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  useEffect(() => {
    // If no API key, show fallback
    if (!apiKey) {
      setError(true);
      return;
    }

    // Avoid loading the script more than once
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');

    function initMap() {
      if (!mapRef.current) return;
      // Google Maps types loaded globally via script
      const map = new (window as any).google.maps.Map(mapRef.current, {
        center,
        zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      // Place a marker at the neighborhood center
      new (window as any).google.maps.Marker({
        position: center,
        map,
        title: neighborhoodName,
      });
    }

    if (existingScript) {
      // Script already loaded — just init the map
      if ((window as any).google?.maps) {
        initMap();
      } else {
        // Script is loading but not ready yet — wait for it
        existingScript.addEventListener('load', initMap);
      }
    } else {
      // Load Google Maps script dynamically
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => setError(true);
      document.head.appendChild(script);
    }
  }, [apiKey, center, zoom, neighborhoodName]);

  // Fallback if no API key is set
  if (!apiKey || error) {
    return (
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <h2 className="font-serif text-2xl mb-4">{neighborhoodName} Location</h2>
        <div
          className="w-full flex items-center justify-center rounded-lg border text-sm"
          style={{ height: '400px', borderColor: 'var(--border)', background: 'var(--cream)', color: 'var(--ink-muted)' }}
        >
          Map unavailable — Google Maps API key not configured.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1140px] mx-auto px-7 py-12">
      <h2 className="font-serif text-2xl mb-4">{neighborhoodName} Location</h2>
      <div
        ref={mapRef}
        className="w-full rounded-lg border"
        style={{ height: '400px', borderColor: 'var(--border)' }}
      />
    </div>
  );
}
