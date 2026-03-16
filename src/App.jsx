import React, { useState } from 'react';

export default function App() {
  // ==========================================
  // 1. STATE & KONFIGURASI TEMA
  // ==========================================
  const [isDark, setIsDark] = useState(true);
  const [heroKey, setHeroKey] = useState(0);

  const theme = {
    bg: isDark ? '#000000' : '#ffffff',
    text: isDark ? '#ffffff' : '#000000',
    accent: '#4facfe',
    cardBg: isDark ? '#080808' : '#f9f9f9',
    border: isDark ? '#1a1a1a' : '#e2e8f0',
  };

  // ==========================================
  // 2. DATA STATIC
  // ==========================================
  const navLinks = [
    { name: 'ABOUT', id: 'about' },
    { name: 'EXPERIENCE', id: 'exp' },
    { name: 'CERTIFICATIONS', id: 'cert' },
    { name: 'PROJECTS', id: 'project' },
    { name: 'CONTACT', id: 'contact' }
  ];

  const experience = [
    { 
      title: "Founder — Exora Robotics Club", 
      period: "Feb 2026 - Present", 
      desc: "Mentoring and teaching students about robotics and IoT. Active technology activist in Bengkulu." 
    },
    { 
      title: "President — DE CODE IT Community", 
      period: "Nov 2024 - Present", 
      desc: "Leading 60+ members at Universitas Dehasen. Mentoring in cybersecurity and IoT robotics." 
    },
    { 
      title: "Cyber Security Team Leader — De Exploitz", 
      period: "Feb 2025 - Sep 2025", 
      desc: "Directed simulations and penetration testing. 9th Place National at Permikomnas Mini CTF." 
    },
    { 
      title: "IT MCR & Multimedia — Bengkulu Ekspress", 
      period: "Oct 2023 - Feb 2024", 
      desc: "Managed Master Control Room operations and designed digital content." 
    }
  ];

  const certifications = [
    { name: "IT Specialist – Python", org: "Certiport / Pearson VUE" },
    { name: "MTCNA – MikroTik Certified Network Associate", org: "MikroTik" },
    { name: "Ethical Hacker (Cisco Certified)", org: "Cisco" },
    { name: "Certified GRC Analyst (CGRCA)", org: "Professional Certification" },
    { name: "IBM Granite AI & Data Classification", org: "IBM SkillsBuild" },
    { name: "Cybersecurity Fundamentals Specialist (CCFS)", org: "Specialist Cert" }
  ];

  const projects = [
    { title: "EXORA 1.0", tech: "IoT / C++", desc: "Advanced robot controller system with Web UI and NRF24L01 radio frequency integration." },
    { title: "AI Garbage Detection", tech: "TensorFlow / Python", desc: "Real-time waste classification using Edge AI on Raspberry Pi for smart city solutions." },
    { title: "EXORA-CAM V2.0", tech: "ESP32-CAM", desc: "Low-latency streaming system with OSD for RSSI and system metrics." },
    { title: "Anonymous Report", tech: "Supabase / WA API", desc: "Secure reporting platform with end-to-end cloud database and instant WhatsApp alerts." }
  ];

  const softSkills = ["Strategic Leadership", "Analytical Problem Solving", "Critical Thinking", "Adaptive Creativity", "DevSecOps Mindset", "Effective Communication"];

  return (
    <>
      {/* ==========================================
          3. CSS STYLING
          ========================================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Caveat:wght@700&family=Inter:wght@400;700;900&display=swap');

        * { 
          margin: 0; padding: 0; box-sizing: border-box; 
          border-left: none !important; border-right: none !important; 
        }
        
        html, body { 
          width: 100%; overflow-x: hidden;
          background-color: ${theme.bg}; color: ${theme.text};
          font-family: 'Inter', sans-serif; scroll-behavior: smooth;
        }

        nav {
          width: 100%; padding: 20px 5%;
          display: flex; justify-content: space-between; align-items: center;
          position: fixed; top: 0; z-index: 1000;
          background: ${isDark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)'};
          backdrop-filter: blur(15px); border-bottom: 1px solid ${theme.border} !important;
        }

        .nav-links { display: flex; gap: 30px; align-items: center; }
        .nav-links a { 
          color: ${theme.text}; text-decoration: none; font-size: 0.75rem; 
          font-weight: 900; letter-spacing: 2px; transition: 0.3s;
        }
        .nav-links a:hover { color: ${theme.accent}; }

        .hero {
          width: 100%; height: 100vh;
          display: flex; flex-direction: column; justify-content: center;
          align-items: center; text-align: center; padding: 0 5%;
        }

        .brush-name {
          font-family: 'Permanent Marker', cursive;
          font-size: clamp(3rem, 10vw, 8rem);
          line-height: 1.1; margin: 20px 0;
          color: ${theme.text}; font-style: italic; transform: rotate(-1deg);
          text-shadow: 4px 4px 0px ${theme.accent}44;
        }

        .section {
          width: 100%; padding: 120px 5%;
          border-top: 1px solid ${theme.border} !important;
        }

        .grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px; margin-top: 50px;
        }

        .card {
          background: ${theme.cardBg}; padding: 50px;
          border: 1px solid ${theme.border} !important; 
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card:hover { 
          border-color: ${theme.accent} !important; 
          transform: scale(1.02);
          box-shadow: 0 20px 50px ${isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.05)'};
        }

        .badge {
          display: inline-block; padding: 10px 20px; margin: 5px;
          background: ${theme.cardBg}; border: 1px solid ${theme.border} !important;
          color: ${theme.accent}; font-weight: 700; font-size: 0.75rem;
          letter-spacing: 1px;
        }

        .btn-theme {
          background: ${theme.text}; color: ${theme.bg};
          border: none !important; padding: 12px 24px; font-weight: 900;
          cursor: pointer; font-size: 0.7rem; letter-spacing: 2px;
          transition: 0.3s;
        }

        h2 { font-size: 3rem; font-weight: 900; letter-spacing: -2px; margin-bottom: 20px; }
        
        .sub-header {
          font-family: 'Caveat', cursive; font-size: 2rem; color: ${theme.accent}; margin-bottom: 10px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .fade-in { 
          opacity: 0; 
          animation: fadeInUp 0.8s ease-out forwards; 
        }
      `}</style>

      <div className="ultra-full-layout">
        {/* ==========================================
            4. COMPONENT: NAVIGATION
            ========================================== */}
        <nav>
          <div style={{ 
            fontSize: '0.9rem', 
            fontWeight: '900', 
            letterSpacing: '12px', 
            fontFamily: "'Inter', sans-serif", 
            textTransform: 'uppercase', 
            color: theme.text, 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer' 
          }}>
            ALKYORA
            <span style={{ width: '40px', height: '1px', background: theme.accent, marginLeft: '10px', opacity: 0.5 }}></span>
          </div>

          <div className="nav-links">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={() => link.id === 'about' && setHeroKey(prev => prev + 1)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-theme" onClick={() => setIsDark(!isDark)}>
              {isDark ? 'LIGHT' : 'DARK'}
            </button>
          </div>
        </nav>

        {/* ==========================================
            5. SECTION: HERO (ABOUT)
            ========================================== */}
        <section id="about" className="hero" key={heroKey}>
          <div className="sub-header fade-in" style={{ animationDelay: '0.2s' }}>
            Hi there! 👋 I'm
          </div>
          <h1 className="brush-name fade-in" style={{ animationDelay: '0.4s' }}>
            Alfadil Ilhamora
          </h1>
          <p className="fade-in" style={{ letterSpacing: '5px', color: theme.accent, fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '20px', animationDelay: '0.6s' }}>
            CYBER SECURITY | INTERNET OF THINGS | FULLSTACK DEV
          </p>
          <p className="fade-in" style={{ maxWidth: '800px', fontSize: '1.2rem', color: isDark ? '#888' : '#666', lineHeight: '1.8', animationDelay: '0.8s' }}>
            Computer Science student at Dehasen University Bengkulu, focused on Cyber Security (Ethical Hacking), Network Infrastructure, and secure, scalable systems. Experienced in Robotics, IoT, and Full-Stack Web Development.
          </p>
        </section>

        {/* ==========================================
            6. SECTION: EXPERIENCE
            ========================================== */}
        <section id="exp" className="section">
          <h2>PROFESSIONAL EXPERIENCE</h2>
          <div className="grid">
            {experience.map((exp, index) => (
              <div key={index} className="card">
                <div style={{ color: theme.accent, fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '10px' }}>{exp.period}</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{exp.title}</h3>
                <p style={{ color: isDark ? '#888' : '#555', lineHeight: '1.7' }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            7. SECTION: CERTIFICATIONS & SKILLS
            ========================================== */}
        <section id="cert" className="section" style={{ background: isDark ? '#050505' : '#fafafa' }}>
          <h2>LICENSES & SKILLS</h2>
          <div style={{ marginTop: '50px' }}>
            <h3 style={{ marginBottom: '25px', fontSize: '1.2rem', opacity: 0.7 }}>CORE CERTIFICATIONS</h3>
            <div>
              {certifications.map((c, i) => (
                <div key={i} className="badge">{c.name.toUpperCase()} — {c.org}</div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <h3 style={{ marginBottom: '25px', fontSize: '1.2rem', opacity: 0.7 }}>SOFT SKILLS</h3>
            <div>
              {softSkills.map((s, i) => (
                <div key={i} className="badge" style={{ color: theme.text, borderColor: theme.text }}>{s.toUpperCase()}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            8. SECTION: PROJECTS
            ========================================== */}
        <section id="project" className="section">
          <h2>FEATURED PROJECTS</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <div key={i} className="card">
                <div style={{ color: theme.accent, fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px' }}>{p.tech}</div>
                <h3 style={{ fontSize: '2.2rem', margin: '20px 0' }}>{p.title}</h3>
                <p style={{ color: isDark ? '#888' : '#555', lineHeight: '1.8' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            9. SECTION: CONTACT
            ========================================== */}
        <section id="contact" className="section" style={{ textAlign: 'center' }}>
          <h2>LET'S CONNECT</h2>
          <div style={{ marginTop: '60px' }}>
            <p style={{ fontSize: '2rem', fontWeight: '900', color: theme.accent }}>alfaaora11@gmail.com</p>
            <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>WhatsApp: +62 851 8051 8503</p>
            <p style={{ opacity: 0.5, marginTop: '10px' }}>Bengkulu, Indonesia</p>
          </div>
          <div style={{ marginTop: '150px', opacity: 0.05, fontWeight: '900', fontSize: '8vw', lineHeight: '1' }}>
            ALKYORA
          </div>
        </section>

      </div>
    </>
  );
}