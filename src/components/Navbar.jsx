import React, { useState } from 'react';
import { navLinks } from '../data/portfolioData';

export default function Navbar({ isDark, onToggleTheme, isAdmin, onBrandClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Navigasi Desktop & Landscape */}
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

      {/* Tombol Aksi Mobile Portrait */}
      <div className="mobile-nav-actions">
        <button className="btn-theme" onClick={onToggleTheme}>
          {isDark ? 'LIGHT' : 'DARK'}
        </button>
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu Dropdown Mobile Portrait */}
      {menuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
