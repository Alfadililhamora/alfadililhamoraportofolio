import React from 'react';

export default function Experience({ items, onOpenGallery, isAdmin, onQuickAdd, onDelete }) {
  return (
    <section id="exp" className="section reveal">
      <div className="section-header-row">
        <h2 className="fade-in">PROFESSIONAL EXPERIENCE</h2>
        {isAdmin && (
          <button type="button" className="btn-admin-add" onClick={onQuickAdd}>
            + ADD EXPERIENCE
          </button>
        )}
      </div>

      <div className="grid">
        {items.map((exp, index) => (
          <div
            key={index}
            className="card exp-card fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {isAdmin && (
              <button type="button" className="btn-card-delete" onClick={() => onDelete(index)}>
                Hapus
              </button>
            )}

            <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '10px' }}>
              {exp.period}
            </div>

            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{exp.title}</h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
              {exp.desc}
            </p>

            {exp.gallery && exp.gallery.length > 0 && (
              <button className="btn-gallery" onClick={() => onOpenGallery(exp.gallery)}>
                📷 See Gallery
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
