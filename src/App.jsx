import React, { useState, useEffect } from 'react';

export default function App() {
  // ==========================================
  // 1. STATE & KONFIGURASI TEMA
  // ==========================================
  const [isDark, setIsDark] = useState(true);

  // LOGIKA OBSERVER (Tetap sama, ini mesin utamanya)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    { name: 'HOME', id: 'about' }, 
    { name: 'ABOUT ME', id: 'about-details' }, 
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
    { name: "IT Specialist – Python", org: "Certiport / Pearson VUE", img: "/itspecialist.jpg" },
    { name: "IBM Granite AI & Data Classification", org: "IBM SkillsBuild", img: "/ibm.jpg" },
    { name: "MTCNA – MikroTik Certified Network Associate", org: "MikroTik", img: "/mtcna.jpg" },
    { name: "Ethical Hacker (Cisco Certified)", org: "Cisco", img: "/ethical.jpg" },
    { name: "Python Essentials 1", org: "Cisco Networking Academy", img: "/pythonins.jpg" },
    { name: "Certified GRC Analyst (CGRCA)", org: "Professional Certification", img: "/cgrca.jpg" },
    { name: "Cybersecurity Fundamentals Specialist (CCFS)", org: "Specialist Cert", img: "/CCFS.jpg" },
    { name: "Certified Phishing Prevention Specialist (CPPS)", org: "Hack & Fix Academy", img: "/cpps.jpg" },
    { name: "Cybersecurity Career Starter Certification (CCSC)", org: "Hack & Fix Academy", img: "/ccsc.jpg" },
    { name: "Digital Awareness", org: "Cisco Networking Academy", img: "/digital.jpg" },
    { name: "Mini Capture The Flag (CTF) Participant", org: "Permikomnas Wilayah VIII", img: "/permikomnas.jpeg" },
    { name: "Top 1000 9th IndonesiaNEXT Digital Talent", org: "Telkomsel", img: "/Telkom.jpg" },
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Caveat:wght@700&family=Inter:wght@400;700;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; border-left: none !important; border-right: none !important; }
        
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

        @keyframes menyembulKiri {
          from { opacity: 0; transform: translateX(-100px); filter: blur(10px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }

        @keyframes menyembulKanan {
          from { opacity: 0; transform: translateX(100px); filter: blur(10px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }

        .fade-in, .slide-in-left, .slide-in-right { 
           opacity: 0; 
           filter: blur(10px); 
           transition: all 0.8s ease-out;
        }

        .active .fade-in { animation: fadeInUp 0.8s ease-out forwards; }
        .active .slide-in-left { animation: menyembulKiri 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .active .slide-in-right { animation: menyembulKanan 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
      `}</style>

      <div className="ultra-full-layout">
        {/* NAVIGATION: Perbaikan pada onClick (Hapus setKey) */}
        <nav>
          <div style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '12px', color: theme.text, display: 'flex', alignItems: 'center' }}>
            ALKYORA
            <span style={{ width: '40px', height: '1px', background: theme.accent, marginLeft: '10px', opacity: 0.5 }}></span>
          </div>

          <div className="nav-links">
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`}>
                {link.name}
              </a>
            ))}
            <button className="btn-theme" onClick={() => setIsDark(!isDark)}>
              {isDark ? 'LIGHT' : 'DARK'}
            </button>
          </div>
        </nav>

        {/* SECTION 1: HERO (HOME) - Perbaikan: Hapus atribut 'key' */}
        <section id="about" className="hero reveal">
          <div className="sub-header fade-in" style={{ animationDelay: '0.2s' }}>Hi there! 👋 I'm</div>
          <h1 className="brush-name fade-in" style={{ animationDelay: '0.4s' }}>Alfadil Ilhamora</h1>
          <p className="fade-in" style={{ letterSpacing: '5px', color: theme.accent, fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '20px', animationDelay: '0.6s' }}>
            CYBER SECURITY | INTERNET OF THINGS | FULLSTACK DEV
          </p>
          <p className="fade-in" style={{ maxWidth: '800px', fontSize: '1.2rem', color: isDark ? '#888' : '#666', lineHeight: '1.8', animationDelay: '0.8s' }}>
            Computer Science student at Dehasen University Bengkulu, focused on Cyber Security (Ethical Hacking), Network Infrastructure, and secure, scalable systems. Experienced in Robotics, IoT, and Full-Stack Web Development.
          </p>
        </section>

        {/* SECTION 2: ABOUT DETAILS - Perbaikan: Hapus atribut 'key' */}
        <section id="about-details" className="section reveal" style={{ background: isDark ? '#050505' : '#fafafa' }}>
          <h2 className="fade-in" style={{ marginBottom: '40px' }}>ABOUT ME!</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div className="slide-in-left" style={{ fontSize: '1.1rem', color: isDark ? '#888' : '#666', lineHeight: '1.9', textAlign: 'justify' }}>
              <p style={{ marginBottom: '20px' }}>
                <span style={{ color: theme.accent, fontWeight: 'bold' }}>I'm Alfadil Ilhamora,</span> an Informatics student at Dehasen University. I specialize in <span style={{ color: theme.text, fontWeight: 'bold' }}>Cyber Security and IoT.</span>
              </p>
              <p>
                My journey began in design, but I soon realized my strength lies in understanding how systems work, how they are built, and how they can be secured.
                Since childhood, computers have been more than just tools—they’ve been my space for exploration. What started as curiosity grew into a strong passion for cybersecurity and technology.
                This passion led me to pursue Informatics, where I continue to develop my skills in cybersecurity, web development, and robotics. I also take part in leadership roles and founded Exora Robotics Club to create a space for innovation and growth.
                I believe technology is not just about skills, but about creating impact—especially in empowering people and building a stronger tech community in my region.
              </p>
            </div>
            <div className="slide-in-right" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', background: theme.accent, filter: 'blur(50px)', opacity: 0.2 }}></div>
              <img 
                src="/alfadil.png" 
                alt="Alfadil" 
                style={{ width: '320px', height: '320px', borderRadius: '50%', objectFit: 'cover', border: `4px solid ${theme.accent}`, zIndex: 1, transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(3deg)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: EXPERIENCE */}
        <section id="exp" className="section reveal">
          <h2 className="fade-in">PROFESSIONAL EXPERIENCE</h2>
          <div className="grid">
            {experience.map((exp, index) => (
              <div key={index} className="card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div style={{ color: theme.accent, fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '10px' }}>{exp.period}</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{exp.title}</h3>
                <p style={{ color: isDark ? '#888' : '#555', lineHeight: '1.7' }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CERTIFICATIONS */}
        <section id="cert" className="section reveal" style={{ background: isDark ? '#050505' : '#fafafa' }}>
          <h2 className="fade-in">LICENSES & SKILLS</h2>
          <div style={{ marginTop: '50px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
              {certifications.map((c, i) => (
                <div key={i} className="fade-in" style={{ background: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden', animationDelay: `${i * 0.1}s` }}>
                  <div style={{ width: '100%', height: '200px', background: '#111' }}>
                    <img src={c.img} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.src = "https://via.placeholder.com/400x250?text=Cert"; }} />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <div style={{ color: theme.accent, fontSize: '0.7rem', fontWeight: '900', marginBottom: '8px' }}>{c.org.toUpperCase()}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{c.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '70px' }}>
            <h3 className="fade-in" style={{ marginBottom: '25px', fontSize: '1.2rem', opacity: 0.7 }}>SOFT SKILLS</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {softSkills.map((s, i) => (
                <div key={i} className="badge fade-in" style={{ color: theme.text, borderColor: theme.text, border: `1px solid ${theme.text}`, animationDelay: `${i * 0.1}s` }}>{s.toUpperCase()}</div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PROJECTS */}
        <section id="project" className="section reveal">
          <h2 className="fade-in">FEATURED PROJECTS</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <div key={i} className="card fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <div style={{ color: theme.accent, fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px' }}>{p.tech}</div>
                <h3 style={{ fontSize: '2.2rem', margin: '20px 0' }}>{p.title}</h3>
                <p style={{ color: isDark ? '#888' : '#555', lineHeight: '1.8' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: CONTACT */}
        <section id="contact" className="section reveal" style={{ textAlign: 'center' }}>
          <h2 className="fade-in">LET'S CONNECT</h2>
          <div className="fade-in" style={{ marginTop: '60px' }}>
            <p style={{ fontSize: '2rem', fontWeight: '900', color: theme.accent }}>alfaaora11@gmail.com</p>
            <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>WhatsApp: +62 851 8051 8503</p>
            <p style={{ opacity: 0.5, marginTop: '10px' }}>Bengkulu, Indonesia</p>
          </div>
          <div style={{ marginTop: '150px', opacity: 0.05, fontWeight: '900', fontSize: '8vw', lineHeight: '1' }}>ALKYORA</div>
        </section>
      </div>
    </>
  );
}