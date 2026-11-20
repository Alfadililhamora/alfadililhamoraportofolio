import React, { useState } from 'react';
import { navLinks } from '../data/portfolioData';

function ThemeToggleButton({ isDark, onToggleTheme }) {
  return (
    <button
      type="button"
      className={`btn-theme ${isDark ? 'mode-dark' : 'mode-light'}`}
      onClick={onToggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <span className="theme-icon-wrap" aria-hidden="true">
        {/* Ikon Matahari (muncul saat Dark Mode aktif untuk beralih ke Light) */}
        <svg
          className={`theme-icon sun-icon ${isDark ? 'active-icon' : ''}`}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>

        {/* Ikon Bulan (muncul saat Light Mode aktif untuk beralih ke Dark) */}
        <svg
          className={`theme-icon moon-icon ${!isDark ? 'active-icon' : ''}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>

      <span key={isDark ? 'light' : 'dark'} className="theme-label-swap">
        {isDark ? 'LIGHT' : 'DARK'}
      </span>
    </button>
  );
}

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
        <ThemeToggleButton isDark={isDark} onToggleTheme={onToggleTheme} />
      </div>

      {/* Tombol Aksi Mobile Portrait */}
      <div className="mobile-nav-actions">
        <ThemeToggleButton isDark={isDark} onToggleTheme={onToggleTheme} />
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
