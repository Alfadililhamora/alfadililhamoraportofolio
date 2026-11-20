import React, { useState } from 'react';
import { isSupabaseConfigured, loginAdmin } from '../services/storageService';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const session = await loginAdmin({ email, password });
      setPassword('');
      onLoginSuccess(session);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="admin-dialog" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '3px' }}>
            ALKYORA SYSTEM
          </span>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.5rem', cursor: 'pointer' }}
          >
            ×
          </button>
        </div>

        <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '8px' }}>Admin Login</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
          {isSupabaseConfigured
            ? 'Masuk dengan akun Supabase Auth untuk mengelola konten live.'
            : 'Mode Lokal aktif (default password: alkyora2026 atau atur VITE_ADMIN_PASSWORD di .env).'}
        </p>

        <form onSubmit={handleSubmit}>
          {isSupabaseConfigured && (
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px' }}>EMAIL</label>
              <input
                type="email"
                className="admin-input"
                placeholder="admin@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px' }}>PASSWORD</label>
            <input
              type="password"
              className="admin-input"
              placeholder="Masukkan password admin..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
          </div>

          {error && (
            <div style={{ color: '#ef4444', fontSize: '0.82rem', marginBottom: '14px', fontWeight: 600 }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-admin-add"
            disabled={loading}
            style={{ width: '100%', padding: '14px', fontSize: '0.8rem' }}
          >
            {loading ? 'MEMVERIFIKASI...' : 'MASUK KE MODE ADMIN'}
          </button>
        </form>
      </div>
    </div>
  );
}
