import React, { useState, useEffect } from 'react';
import {
  isSupabaseConfigured,
  uploadImageAsset,
  downloadPortfolioDataFile,
} from '../services/storageService';

export default function AdminDashboardModal({
  isOpen,
  initialTab = 'experience',
  onClose,
  content,
  session,
  onUpdateContent,
  onResetDefault,
  onLogout,
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Form State: Experience
  const [expTitle, setExpTitle] = useState('');
  const [expPeriod, setExpPeriod] = useState('');
  const [expDesc, setExpDesc] = useState('');
  const [expGalleryUrls, setExpGalleryUrls] = useState('');
  const [expFiles, setExpFiles] = useState([]);

  // Form State: Certification
  const [certName, setCertName] = useState('');
  const [certOrg, setCertOrg] = useState('');
  const [certImgUrl, setCertImgUrl] = useState('');
  const [certFile, setCertFile] = useState(null);

  // Form State: Project
  const [projTitle, setProjTitle] = useState('');
  const [projTech, setProjTech] = useState('');
  const [projDesc, setProjDesc] = useState('');

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  const notify = (msg) => {
    setStatusMsg(msg);
    setTimeout(() => setStatusMsg(''), 4000);
  };

  // === HANDLER EXPERIENCE ===
  const handleAddExperience = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const uploadedPhotos = [];
      for (const file of expFiles) {
        const url = await uploadImageAsset(file, session?.token);
        uploadedPhotos.push(url);
      }
      const manualUrls = expGalleryUrls
        .split(',')
        .map((u) => u.trim())
        .filter(Boolean);

      const newExp = {
        title: expTitle,
        period: expPeriod,
        desc: expDesc,
        gallery: [...uploadedPhotos, ...manualUrls],
      };

      await onUpdateContent({
        ...content,
        experience: [newExp, ...content.experience],
      });

      setExpTitle('');
      setExpPeriod('');
      setExpDesc('');
      setExpGalleryUrls('');
      setExpFiles([]);
      notify('Professional Experience berhasil ditambahkan!');
    } catch (err) {
      notify(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteExperience = async (index) => {
    const updated = content.experience.filter((_, i) => i !== index);
    await onUpdateContent({ ...content, experience: updated });
    notify('Experience dihapus.');
  };

  // === HANDLER CERTIFICATION ===
  const handleAddCertification = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      let finalImg = certImgUrl.trim() || '/certificate.jpg';
      if (certFile) {
        finalImg = await uploadImageAsset(certFile, session?.token);
      }

      const newCert = {
        name: certName,
        org: certOrg,
        img: finalImg,
      };

      await onUpdateContent({
        ...content,
        certifications: [newCert, ...content.certifications],
      });

      setCertName('');
      setCertOrg('');
      setCertImgUrl('');
      setCertFile(null);
      notify('Sertifikat berhasil ditambahkan!');
    } catch (err) {
      notify(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteCertification = async (index) => {
    const updated = content.certifications.filter((_, i) => i !== index);
    await onUpdateContent({ ...content, certifications: updated });
    notify('Sertifikat dihapus.');
  };

  // === HANDLER PROJECT ===
  const handleAddProject = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const newProj = {
        title: projTitle,
        tech: projTech,
        desc: projDesc,
      };
      await onUpdateContent({
        ...content,
        projects: [newProj, ...content.projects],
      });
      setProjTitle('');
      setProjTech('');
      setProjDesc('');
      notify('Project berhasil ditambahkan!');
    } catch (err) {
      notify(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProject = async (index) => {
    const updated = content.projects.filter((_, i) => i !== index);
    await onUpdateContent({ ...content, projects: updated });
    notify('Project dihapus.');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="admin-dashboard-dialog" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
          <div>
            <span style={{ color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '3px' }}>
              {isSupabaseConfigured ? '☁️ SUPABASE CLOUD SYNC AKTIF' : '💾 MODE LOKAL + EXPORT JS'}
            </span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginTop: '4px' }}>ALKYORA Admin Panel</h3>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              type="button"
              className="admin-tab"
              onClick={() => downloadPortfolioDataFile(content)}
              title="Download portfolioData.js untuk commit ke GitHub"
            >
              ⬇️ Export portfolioData.js
            </button>
            <button
              type="button"
              className="admin-tab"
              onClick={onResetDefault}
              title="Kembalikan data awal dari kode"
            >
              ↺ Reset
            </button>
            <button
              type="button"
              className="admin-tab"
              style={{ borderColor: '#ef4444', color: '#ef4444' }}
              onClick={() => {
                onLogout();
                onClose();
              }}
            >
              Logout
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.8rem', cursor: 'pointer', marginLeft: '6px' }}
            >
              ×
            </button>
          </div>
        </div>

        {statusMsg && (
          <div style={{ marginTop: '14px', padding: '10px 14px', background: 'rgba(79, 172, 254, 0.15)', borderRadius: '8px', color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem' }}>
            {statusMsg}
          </div>
        )}

        {/* TABS */}
        <div className="admin-tabs">
          <button
            type="button"
            className={`admin-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            EXPERIENCE ({content.experience.length})
          </button>
          <button
            type="button"
            className={`admin-tab ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            CERTIFICATIONS ({content.certifications.length})
          </button>
          <button
            type="button"
            className={`admin-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            PROJECTS ({content.projects.length})
          </button>
        </div>

        {/* TAB 1: PROFESSIONAL EXPERIENCE */}
        {activeTab === 'experience' && (
          <div>
            <form onSubmit={handleAddExperience} style={{ marginBottom: '28px' }}>
              <h4 style={{ marginBottom: '12px', color: 'var(--accent)' }}>+ Tambah Professional Experience</h4>
              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>JUDUL / POSISI</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Contoh: Teaching Assistant — Universitas Dehasen Bengkulu"
                value={expTitle}
                onChange={(e) => setExpTitle(e.target.value)}
                required
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>PERIODE</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Contoh: Sep 2026 - Present"
                value={expPeriod}
                onChange={(e) => setExpPeriod(e.target.value)}
                required
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>DESKRIPSI</label>
              <textarea
                rows="3"
                className="admin-textarea"
                placeholder="Jelaskan tanggung jawab, pencapaian, dan aktivitas..."
                value={expDesc}
                onChange={(e) => setExpDesc(e.target.value)}
                required
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>UPLOAD FOTO GALLERY (BISA BANYAK FILE)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                className="admin-input"
                onChange={(e) => setExpFiles(Array.from(e.target.files || []))}
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>ATAU PATH / URL GAMBAR GALLERY (PISAHKAN DENGAN KOMA)</label>
              <input
                type="text"
                className="admin-input"
                placeholder="/foto1.jpg, /foto2.jpg"
                value={expGalleryUrls}
                onChange={(e) => setExpGalleryUrls(e.target.value)}
              />

              <button type="submit" className="btn-admin-add" disabled={saving}>
                {saving ? 'MENYIMPAN...' : '+ SIMPAN EXPERIENCE'}
              </button>
            </form>

            <h4 style={{ marginBottom: '12px', opacity: 0.7 }}>Daftar Experience ({content.experience.length})</h4>
            {content.experience.map((item, idx) => (
              <div key={idx} className="admin-list-item">
                <div>
                  <div style={{ fontWeight: 800 }}>{item.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent)' }}>
                    {item.period} • {item.gallery?.length || 0} foto
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteExperience(idx)}
                  style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: CERTIFICATIONS */}
        {activeTab === 'certifications' && (
          <div>
            <form onSubmit={handleAddCertification} style={{ marginBottom: '28px' }}>
              <h4 style={{ marginBottom: '12px', color: 'var(--accent)' }}>+ Tambah Sertifikat Baru</h4>
              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>NAMA SERTIFIKAT</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Contoh: Cybersecurity Fundamentals Associate"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                required
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>ORGANISASI PENERBIT</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Contoh: OPSWAT Academy"
                value={certOrg}
                onChange={(e) => setCertOrg(e.target.value)}
                required
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>UPLOAD GAMBAR SERTIFIKAT</label>
              <input
                type="file"
                accept="image/*"
                className="admin-input"
                onChange={(e) => setCertFile(e.target.files?.[0] || null)}
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>ATAU PATH / URL GAMBAR</label>
              <input
                type="text"
                className="admin-input"
                placeholder="/opswat-cfa.jpg"
                value={certImgUrl}
                onChange={(e) => setCertImgUrl(e.target.value)}
              />

              <button type="submit" className="btn-admin-add" disabled={saving}>
                {saving ? 'MENYIMPAN...' : '+ SIMPAN SERTIFIKAT'}
              </button>
            </form>

            <h4 style={{ marginBottom: '12px', opacity: 0.7 }}>Daftar Sertifikat ({content.certifications.length})</h4>
            {content.certifications.map((item, idx) => (
              <div key={idx} className="admin-list-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: '48px', height: '36px', objectFit: 'cover', borderRadius: '4px', background: '#111' }}
                  />
                  <div>
                    <div style={{ fontWeight: 800 }}>{item.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent)' }}>{item.org}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteCertification(idx)}
                  style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: PROJECTS */}
        {activeTab === 'projects' && (
          <div>
            <form onSubmit={handleAddProject} style={{ marginBottom: '28px' }}>
              <h4 style={{ marginBottom: '12px', color: 'var(--accent)' }}>+ Tambah Project Baru</h4>
              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>NAMA PROJECT</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Contoh: KOPI AJOE BENGKULU App"
                value={projTitle}
                onChange={(e) => setProjTitle(e.target.value)}
                required
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>TECH STACK</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Contoh: Flutter / Supabase"
                value={projTech}
                onChange={(e) => setProjTech(e.target.value)}
                required
              />

              <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>DESKRIPSI PROJECT</label>
              <textarea
                rows="3"
                className="admin-textarea"
                placeholder="Deskripsi singkat fitur dan arsitektur project..."
                value={projDesc}
                onChange={(e) => setProjDesc(e.target.value)}
                required
              />

              <button type="submit" className="btn-admin-add" disabled={saving}>
                {saving ? 'MENYIMPAN...' : '+ SIMPAN PROJECT'}
              </button>
            </form>

            <h4 style={{ marginBottom: '12px', opacity: 0.7 }}>Daftar Projects ({content.projects.length})</h4>
            {content.projects.map((item, idx) => (
              <div key={idx} className="admin-list-item">
                <div>
                  <div style={{ fontWeight: 800 }}>{item.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent)' }}>{item.tech}</div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteProject(idx)}
                  style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
