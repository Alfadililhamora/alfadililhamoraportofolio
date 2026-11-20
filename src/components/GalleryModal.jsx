import React, { useState, useEffect, useCallback } from 'react';

export default function GalleryModal({ images, gallery, title, onClose }) {
  const items = images || gallery || [];
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePrev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    },
    [items.length]
  );

  const handleNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    },
    [items.length]
  );

  useEffect(() => {
    if (!items.length) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeIndex !== null) {
          setActiveIndex(null);
        } else {
          onClose();
        }
      } else if (activeIndex !== null && e.key === 'ArrowLeft') {
        handlePrev();
      } else if (activeIndex !== null && e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [items.length, activeIndex, onClose, handlePrev, handleNext]);

  if (!items.length) return null;

  return (
    <div className="gallery-backdrop" onClick={onClose}>
      <div className="gallery-shell" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="gallery-topbar">
          <div className="gallery-title-group">
            <span className="gallery-dot"></span>
            <span className="gallery-heading">{title || 'DOCUMENTATION GALLERY'}</span>
            <span className="gallery-count">{items.length} PHOTOS</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {activeIndex !== null && (
              <button
                type="button"
                className="gallery-back-btn"
                onClick={() => setActiveIndex(null)}
              >
                ⊞ ALL PHOTOS
              </button>
            )}
            <button
              type="button"
              className="gallery-close-btn"
              onClick={onClose}
              aria-label="Close Gallery"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Mode Lightbox (Foto Diperbesar) */}
        {activeIndex !== null ? (
          <div className="gallery-lightbox" onClick={() => setActiveIndex(null)}>
            {items.length > 1 && (
              <button
                type="button"
                className="gallery-nav-btn prev"
                onClick={handlePrev}
                aria-label="Previous Photo"
              >
                ‹
              </button>
            )}

            <div className="gallery-lightbox-stage" onClick={(e) => e.stopPropagation()}>
              <img
                src={items[activeIndex]}
                alt={`Gallery ${activeIndex + 1}`}
                className="gallery-lightbox-img"
              />
              <div className="gallery-lightbox-footer">
                <span>
                  {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
                <span style={{ opacity: 0.6 }}>Klik di luar foto atau tekan ESC untuk kembali</span>
              </div>
            </div>

            {items.length > 1 && (
              <button
                type="button"
                className="gallery-nav-btn next"
                onClick={handleNext}
                aria-label="Next Photo"
              >
                ›
              </button>
            )}
          </div>
        ) : (
          /* Mode Masonry Grid (Menyesuaikan Ukuran & Rasio Tiap Gambar) */
          <div className="gallery-scroll-area">
            <div className="gallery-masonry">
              {items.map((src, idx) => (
                <div
                  key={idx}
                  className="gallery-masonry-item"
                  style={{ '--item-delay': `${Math.min(idx * 0.045, 0.45)}s` }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img
                    src={src}
                    alt={`Documentation ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-index">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="gallery-item-zoom">⤢</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
