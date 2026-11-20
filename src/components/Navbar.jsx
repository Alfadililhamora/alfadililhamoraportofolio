import React from 'react';
import { navLinks } from '../data/portfolioData';

export default function Navbar({ isDark, onToggleTheme, isAdmin, onBrandClick }) {
  return (
    <nav className="navbar">
      <button
        type="button"
        className="nav-brand-btn"
        onClick={onBrandClick}
        title={isAdmin ? 'Buka Panel Admin' : 'Admin Login'}
      >
        ALKYORA
        <span className="nav-brand-line"></span>
        {isAdmin && <span className="admin-pill">ADMIN</span>}
      </button>

      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.name}
          </a>
        ))}
        <button className="btn-theme" onClick={onToggleTheme}>
          {isDark ? 'LIGHT' : 'DARK'}
        </button>
      </div>
    </nav>
  );
}
