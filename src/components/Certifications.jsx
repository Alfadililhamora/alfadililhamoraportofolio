import React from 'react';
import { softSkills, hardSkillIcons } from '../data/portfolioData';

const FALLBACK_ICONS = [
  'html', 'css', 'js', 'react', 'php', 'mysql', 'supabase',
  'python', 'cpp', 'linux', 'bash', 'git', 'github', 'arduino', 'kalilinux'
];

export default function Certifications({ items, isAdmin, onQuickAdd, onDelete }) {
  const iconsList = Array.isArray(hardSkillIcons) && hardSkillIcons.length > 0
    ? hardSkillIcons
    : FALLBACK_ICONS;

  return (
    <section id="cert" className="section section-alt reveal">
      <div className="section-header-row">
        <h2 className="fade-in">LICENSES & SKILLS</h2>
        {isAdmin && (
          <button type="button" className="btn-admin-add" onClick={onQuickAdd}>
            + ADD CERTIFICATE
          </button>
        )}
      </div>

      <div style={{ marginTop: '40px' }}>
        <div className="cert-grid">
          {items.map((c, i) => (
            <div
              key={i}
              className="cert-card fade-in"
              style={{ animationDelay: `${Math.min(i * 0.04, 0.5)}s` }}
            >
              {isAdmin && (
                <button type="button" className="btn-card-delete" onClick={() => onDelete(i)}>
                  Hapus
                </button>
              )}
              <div className="cert-img-wrapper">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250?text=Cert';
                  }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: '900', marginBottom: '8px' }}>
                  {c.org.toUpperCase()}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{c.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        <div>
          <h3 className="fade-in" style={{ marginBottom: '25px', fontSize: '1.2rem', opacity: 0.7 }}>
            SOFT SKILLS
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {softSkills.map((s, i) => (
              <div
                key={i}
                className="badge fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {s.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        <div style={{ minWidth: 0 }}>
          <h3 className="fade-in" style={{ marginBottom: '25px', fontSize: '1.2rem', opacity: 0.7 }}>
            HARD SKILLS
          </h3>
          <div className="hard-skills-box fade-in">
            {iconsList.map((icon, index) => (
              <img
                key={icon + index}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={icon}
                width="50"
                height="50"
                decoding="async"
                className={`floating-icon delay-${(index % 4) + 1}`}
                onError={(e) => {
                  if (!e.currentTarget.dataset.retried) {
                    e.currentTarget.dataset.retried = '1';
                    e.currentTarget.src = `https://go-skill-icons.vercel.app/api/icons?i=${icon}`;
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
