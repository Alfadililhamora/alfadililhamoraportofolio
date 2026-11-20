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

function GithubNavButton() {
  return (
    <a
      href="https://github.com/Alfadililhamora"
      target="_blank"
      rel="noreferrer"
      className="nav-github-btn"
      aria-label="GitHub Alfadililhamora"
      title="GitHub — Alfadililhamora"
    >
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    </a>
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
        <div className="nav-action-cluster">
          <ThemeToggleButton isDark={isDark} onToggleTheme={onToggleTheme} />
          <GithubNavButton />
        </div>
      </div>

      {/* Tombol Aksi Mobile Portrait */}
      <div className="mobile-nav-actions">
        <ThemeToggleButton isDark={isDark} onToggleTheme={onToggleTheme} />
        <GithubNavButton />
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
