// =============================================================================
// PhotoGallery - Full-width hero image + horizontal thumbnail strip below
// Click any thumbnail to swap the hero; click the hero to open lightbox
// Lightbox has arrow navigation + thumbnail strip at the bottom
// Uses Material Icons (already loaded sitewide) instead of lucide-react
// =============================================================================

'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

interface Photo {
  MediaURL: string;
  ShortDescription?: string;
  Order: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
  address: string;
  autoScroll?: boolean;
}

export default function PhotoGallery({ photos, address, autoScroll = false }: PhotoGalleryProps) {
  // Which photo is shown as the hero
  const [heroIndex, setHeroIndex] = useState(0);
  // Which photo is shown in the lightbox (-1 = closed)
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const lightboxOpen = lightboxIndex >= 0;
  // Pause auto-scroll on hover or after user clicks
  const [paused, setPaused] = useState(false);
  const userClicked = useRef(false);

  // Auto-scroll hero image every 4 seconds
  useEffect(() => {
    if (!autoScroll || paused || lightboxOpen || userClicked.current || photos.length <= 1) return;
    const timer = setInterval(() => {
      setHeroIndex((current) => (current === photos.length - 1 ? 0 : current + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [autoScroll, paused, lightboxOpen, photos.length]);

  // Navigate lightbox
  const goTo = useCallback(
    (direction: 'prev' | 'next') => {
      setLightboxIndex((current) => {
        if (direction === 'prev') return current === 0 ? photos.length - 1 : current - 1;
        return current === photos.length - 1 ? 0 : current + 1;
      });
    },
    [photos.length]
  );

  // Keyboard navigation in lightbox
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo('prev');
      else if (e.key === 'ArrowRight') goTo('next');
      else if (e.key === 'Escape') setLightboxIndex(-1);
    },
    [goTo]
  );

  if (photos.length === 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '16/9', background: '#f0f0f0' }}>
        <p style={{ color: '#888' }}>No photos available</p>
      </div>
    );
  }

  return (
    <>
      {/* ===== Full-width hero image, click to open lightbox ===== */}
      <div
        style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#1a1a1a' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          onClick={() => { userClicked.current = true; setLightboxIndex(heroIndex); }}
          style={{ width: '100%', cursor: 'pointer', border: 'none', padding: 0, background: 'none', display: 'block' }}
          aria-label={`View photo ${heroIndex + 1} fullscreen`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[heroIndex].MediaURL}
            alt={photos[heroIndex].ShortDescription || `${address}, photo ${heroIndex + 1}`}
            style={{ width: '100%', aspectRatio: '2/1', objectFit: 'cover', display: 'block', transition: 'transform .5s' }}
          />
        </button>

        {/* Hero navigation arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={() => { userClicked.current = true; setHeroIndex((i) => i === 0 ? photos.length - 1 : i - 1); }}
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.4)', color: '#fff', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}
              aria-label="Previous photo"
            >
              <span className="material-icons" style={{ fontSize: 22 }}>chevron_left</span>
            </button>
            <button
              onClick={() => { userClicked.current = true; setHeroIndex((i) => i === photos.length - 1 ? 0 : i + 1); }}
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.4)', color: '#fff', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}
              aria-label="Next photo"
            >
              <span className="material-icons" style={{ fontSize: 22 }}>chevron_right</span>
            </button>
          </>
        )}

        {/* Photo counter badge */}
        <span style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,.6)', color: '#fff', fontSize: 12, padding: '6px 12px', borderRadius: 20 }}>
          {heroIndex + 1} / {photos.length}
        </span>
      </div>

      {/* ===== Thumbnail strip below the hero, horizontal scroll ===== */}
      {photos.length > 1 && (
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '8px 0' }}>
          {photos.map((photo, index) => (
            <button
              key={photo.MediaURL}
              onClick={() => { userClicked.current = true; setHeroIndex(index); }}
              style={{
                flexShrink: 0, width: 96, height: 64, overflow: 'hidden', border: 'none', padding: 0, cursor: 'pointer', background: 'none',
                opacity: index === heroIndex ? 1 : 0.5,
                outline: index === heroIndex ? '2px solid #003da5' : '2px solid transparent',
                outlineOffset: -2,
                transition: 'opacity .2s, outline .2s',
              }}
              aria-label={`View photo ${index + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.MediaURL}
                alt={photo.ShortDescription || `${address}, thumbnail ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* ===== Fullscreen Lightbox ===== */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxIndex(-1)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Photo viewer"
          ref={(el) => el?.focus()}
          style={{ position: 'fixed', inset: 0, zIndex: 9990, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(-1)}
            style={{ position: 'absolute', top: 16, right: 16, color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.1)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            aria-label="Close"
          >
            <span className="material-icons" style={{ fontSize: 24 }}>close</span>
          </button>

          {/* Previous arrow */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goTo('prev'); }}
              style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,.6)', background: 'rgba(255,255,255,.1)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
              aria-label="Previous photo"
            >
              <span className="material-icons" style={{ fontSize: 28 }}>chevron_left</span>
            </button>
          )}

          {/* Main lightbox image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 1200, maxHeight: '90vh', margin: '0 auto', padding: '32px 64px' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[lightboxIndex].MediaURL}
              alt={photos[lightboxIndex].ShortDescription || `${address}, photo ${lightboxIndex + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Next arrow */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goTo('next'); }}
              style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,.6)', background: 'rgba(255,255,255,.1)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
              aria-label="Next photo"
            >
              <span className="material-icons" style={{ fontSize: 28 }}>chevron_right</span>
            </button>
          )}

          {/* Bottom bar: counter + thumbnail strip */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,.8))', paddingTop: 48, paddingBottom: 16, paddingLeft: 16, paddingRight: 16 }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, textAlign: 'center', marginBottom: 12 }}>
                {lightboxIndex + 1} / {photos.length}
              </p>
              <div style={{ display: 'flex', gap: 6, overflowX: 'auto', justifyContent: 'center' }}>
                {photos.map((photo, index) => (
                  <button
                    key={photo.MediaURL}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                    style={{
                      flexShrink: 0, width: 48, height: 36, borderRadius: 4, overflow: 'hidden', border: 'none', padding: 0, cursor: 'pointer', background: 'none',
                      opacity: index === lightboxIndex ? 1 : 0.4,
                      outline: index === lightboxIndex ? '2px solid #fff' : '2px solid transparent',
                      transition: 'opacity .2s',
                    }}
                    aria-label={`View photo ${index + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.MediaURL}
                      alt={photo.ShortDescription || `${address}, photo ${index + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
