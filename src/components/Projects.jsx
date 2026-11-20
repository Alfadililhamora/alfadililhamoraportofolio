import React from 'react';

export default function Projects({ items, isAdmin, onQuickAdd, onDelete }) {
  return (
    <section id="project" className="section reveal">
      <div className="section-header-row">
        <h2 className="fade-in">FEATURED PROJECTS</h2>
        {isAdmin && (
          <button type="button" className="btn-admin-add" onClick={onQuickAdd}>
            + ADD PROJECT
          </button>
        )}
      </div>

      <div className="grid">
        {items.map((p, i) => (
          <div key={i} className="card fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
            {isAdmin && (
              <button type="button" className="btn-card-delete" onClick={() => onDelete(i)}>
                Hapus
              </button>
            )}
            <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px' }}>
              {p.tech}
            </div>
            <h3 style={{ fontSize: '2.2rem', margin: '20px 0' }}>{p.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
