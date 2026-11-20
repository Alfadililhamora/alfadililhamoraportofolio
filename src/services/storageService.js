import {
  experience as defaultExperience,
  certifications as defaultCertifications,
  projects as defaultProjects,
  navLinks,
  softSkills,
  hardSkillIcons,
} from '../data/portfolioData';

const STORAGE_KEY = 'alkyora_portfolio_cms_v1';
const AUTH_KEY = 'alkyora_admin_session_v1';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const LOCAL_ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD || 'alkyora2026';

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

// Kompresi gambar otomatis agar aman disimpan di localStorage maupun di-upload
export function compressImageFile(file, maxWidth = 1100, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = event.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Upload ke Supabase Storage bucket "portfolio" jika Supabase aktif
export async function uploadImageAsset(file, token) {
  if (!isSupabaseConfigured || !token) {
    return await compressImageFile(file);
  }

  const ext = file.name.split('.').pop() || 'jpg';
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/portfolio/${fileName}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
      'Content-Type': file.type || 'image/jpeg',
    },
    body: file,
  });

  if (!res.ok) {
    throw new Error('Gagal mengunggah gambar ke Supabase Storage (pastikan bucket "portfolio" bersifat public).');
  }

  return `${SUPABASE_URL}/storage/v1/object/public/portfolio/${fileName}`;
}

export async function loginAdmin({ email, password }) {
  if (isSupabaseConfigured) {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error_description || data.msg || 'Email atau password Supabase salah.');
    }
    const session = { token: data.access_token, email: data.user?.email || email };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return session;
  }

  if (password !== LOCAL_ADMIN_PASS) {
    throw new Error('Password admin salah.');
  }

  const session = { token: 'local-admin-token', email: 'admin@alkyora.local' };
  localStorage.setItem(AUTH_KEY, JSON.stringify(session));
  return session;
}

export function getSavedSession() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function logoutAdmin() {
  localStorage.removeItem(AUTH_KEY);
}

export async function loadPortfolioContent() {
  if (isSupabaseConfigured) {
    try {
      const headers = { apikey: SUPABASE_ANON_KEY };
      const [expRes, certRes, projRes] = await Promise.all([
        fetch(`${SUPABASE_URL}/rest/v1/experiences?select=*&order=id.desc`, { headers }),
        fetch(`${SUPABASE_URL}/rest/v1/certifications?select=*&order=id.desc`, { headers }),
        fetch(`${SUPABASE_URL}/rest/v1/projects?select=*&order=id.desc`, { headers }),
      ]);

      if (expRes.ok && certRes.ok && projRes.ok) {
        const [expData, certData, projData] = await Promise.all([
          expRes.json(),
          certRes.json(),
          projRes.json(),
        ]);
        return {
          experience: expData.length ? expData : defaultExperience,
          certifications: certData.length ? certData : defaultCertifications,
          projects: projData.length ? projData : defaultProjects,
        };
      }
    } catch (err) {
      console.warn('Fallback ke data lokal:', err);
    }
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (err) {
    console.warn('Gagal membaca localStorage:', err);
  }

  return {
    experience: defaultExperience,
    certifications: defaultCertifications,
    projects: defaultProjects,
  };
}

export async function savePortfolioContent(content, token) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));

  if (isSupabaseConfigured && token && token !== 'local-admin-token') {
    const headers = {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    };

    // Sinkronisasi ulang tabel Supabase
    await Promise.all([
      fetch(`${SUPABASE_URL}/rest/v1/experiences?id=gt.0`, { method: 'DELETE', headers }),
      fetch(`${SUPABASE_URL}/rest/v1/certifications?id=gt.0`, { method: 'DELETE', headers }),
      fetch(`${SUPABASE_URL}/rest/v1/projects?id=gt.0`, { method: 'DELETE', headers }),
    ]);

    const cleanExp = content.experience.map(({ title, period, desc, gallery }) => ({
      title,
      period,
      desc,
      gallery: gallery || [],
    }));
    const cleanCert = content.certifications.map(({ name, org, img }) => ({ name, org, img }));
    const cleanProj = content.projects.map(({ title, tech, desc }) => ({ title, tech, desc }));

    await Promise.all([
      cleanExp.length && fetch(`${SUPABASE_URL}/rest/v1/experiences`, { method: 'POST', headers, body: JSON.stringify(cleanExp) }),
      cleanCert.length && fetch(`${SUPABASE_URL}/rest/v1/certifications`, { method: 'POST', headers, body: JSON.stringify(cleanCert) }),
      cleanProj.length && fetch(`${SUPABASE_URL}/rest/v1/projects`, { method: 'POST', headers, body: JSON.stringify(cleanProj) }),
    ]);
  }
}

export function resetLocalContent() {
  localStorage.removeItem(STORAGE_KEY);
  return {
    experience: defaultExperience,
    certifications: defaultCertifications,
    projects: defaultProjects,
  };
}

export function downloadPortfolioDataFile(content) {
  const fileBody = `export const navLinks = ${JSON.stringify(navLinks, null, 2)};

export const experience = ${JSON.stringify(content.experience, null, 2)};

export const certifications = ${JSON.stringify(content.certifications, null, 2)};

export const projects = ${JSON.stringify(content.projects, null, 2)};

export const softSkills = ${JSON.stringify(softSkills, null, 2)};

export const hardSkillIcons = ${JSON.stringify(hardSkillIcons, null, 2)};
`;

  const blob = new Blob([fileBody], { type: 'application/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolioData.js';
  a.click();
  URL.revokeObjectURL(url);
}
