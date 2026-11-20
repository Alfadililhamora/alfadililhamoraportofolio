import React from 'react';

export default function GalleryModal({ images, onClose }) {
  if (!images) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>
        ×
      </button>

      <div className="modal-grid" onClick={(e) => e.stopPropagation()}>
        {images.map((foto, index) => (
          <div key={index} className="modal-img-card">
            <img src={foto} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
