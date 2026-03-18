import React, { useState, useEffect } from 'react';

export default function App() {
  // ==========================================
  // 1. STATE & KONFIGURASI TEMA
  // ==========================================
  const [isDark, setIsDark] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);

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
      desc: "Mentoring and teaching students about robotics and IoT. Active technology activist in Bengkulu.",
      gallery: ["/robotik3.jpg", "/robotik2.jpg", "/robotik1.jpg", "/robotik5.jpg", "/robotik6.jpg", "/robotik7.jpg", "/robotik8.jpg", "/robotik9.jpg", "/robotik10.jpg", "/robotik11.jpg", "/robotik12.jpg", "/robotik13.jpg" ] // Masukkan nama file fotomu di sini
    },
    { 
      title: "President — DE CODE IT Community", 
      period: "Nov 2024 - Present", 
      desc: "Leading 60+ active members at Dehasen University. Mentoring in cybersecurity and IoT robotics.",
      gallery: ["/decode.jpg", "/decode2.jpg", "/decode3.jpg", "/decode4.jpg"] 
    },
    { 
      title: "Journalist — APKASINDO Bengkulu", 
      period: "Nov 2024 - Present", 
      desc: "Covering agricultural technology developments and regional news. Managing digital publications and media relations.",
      gallery: ["/apkasindo.jpeg", "/apkasindo1.jpeg", "/apkasindo2.jpeg", "/apkasindo3.jpeg", "/apkasindo4.jpeg", "/apkasindo5.jpeg", "/apkasindo6.jpeg", "/apkasindo7.jpeg", "/apkasindo8.jpeg", "/apkasindo9.jpeg", "/apkasindo10.jpeg", "/apkasindo11.jpeg", "/apkasindo12.jpeg", "/apkasindo13.jpeg"]
    },
    { 
      title: "Cyber Security Team Leader — De Exploitz", 
      period: "Feb 2025 - Sep 2025", 
      desc: "Directed simulations and penetration testing. 9th Place National at Permikomnas Mini CTF.",
      gallery: ["/cyber2.jpeg", "/cyber3.jpeg", "/cyber4.jpeg", "/cyber5.jpeg", "/cyber6.jpeg", "/cyber7.jpeg", "/cyber8.jpeg", "/cyber9.jpeg", "/cyber10.jpeg", "/cyber.jpeg"]
    },
    { 
      title: "IT MCR & Multimedia — Bengkulu Ekspress", 
      period: "Oct 2023 - Feb 2024", 
      desc: "Staff IT Network, Managed Master Control Room operations and designed digital content.",
      gallery: ["/be.jpg","/be2.jpg", "/be3.jpg", "/be4.jpg", "/be5.jpg", "/be6.jpg", "/be7.jpg"]
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
    { name: "Top 1000 9th IndonesiaNEXT Digital Talent", org: "Telkomsel", img: "/Telkom.jpg" },
    { name: "Certified Phishing Prevention Specialist (CPPS)", org: "Hack & Fix Academy", img: "/cpps.jpg" },
    { name: "Cybersecurity Career Starter Certification (CCSC)", org: "Hack & Fix Academy", img: "/ccsc.jpg" },
    { name: "Digital Awareness", org: "Cisco Networking Academy", img: "/digital.jpg" },
    { name: "Introduction to Cybersecurity (Course Completion)", org: "Cisco Networking Academy", img: "/intro.jpg" },
    { name: "Mini Capture The Flag (CTF) Participant", org: "Permikomnas Wilayah VIII", img: "/permikomnas.jpeg" },
    { name: "Introduction to Critical Infrastructure Protection (ICIP)", org: "OPSWAT Academy", img: "/opswat.jpg" },
    { name: "Introduction to Cybersecurity (Course Completion)", org: "Cisco Networking Academy", img: "/intro.jpg" },
    { name: "Kecerdasan Buatan (AI) untuk Pemula", org: "HP LIFE / HP Foundation", img: "/ai.jpg" },
    { name: "Pengantar Keterampilan Bisnis Digital", org: "HP LIFE / HP Foundation", img: "/bisdig.jpg" },
    { name: "Perencanaan Strategis", org: "HP LIFE / HP Foundation", img: "/certificate.jpg" },
    { name: "Pemasaran Media Sosial", org: "HP LIFE / HP Foundation", img: "/pemasaran.jpg" },
    { name: "Introduction to Cybersecurity", org: "Cisco Networking Academy / BPPTIK", img: "/cyb.jpg" },
    { name: "Digital Awareness (Cisco)", org: "Cisco Networking Academy / BPPTIK", img: "/dig.jpg" },
    { name: "Introduction to Modern AI", org: "Cisco Networking Academy / BPPTIK", img: "/modern.jpg" },
    { name: "Praktik Kerja Lapangan (IT Staff/MCR)", org: "Bengkulu Ekspress.com", img: "/be.jpeg" },
    { name: "Juara II Lomba Film Pendek Fiksi (FLS2N)", org: "Dikbud Provinsi Bengkulu", img: "/fls2n.jpeg" },
  ];

  const projects = [
    { title: "EXORA 1.0", tech: "IoT / C++", desc: "Exora Robot is a web server-based robot that can be controlled in real-time via smartphone or laptop over WiFi, as a simple implementation of IoT in robotics." },
    { title: "AI Garbage Detection", tech: "TensorFlow / Python", desc: "A simple AI that learns from data to recognize and differentiate objects, then executes complex commands on a robot. For example, an automatic waste-detection robot that can identify trash, move toward it, and clean it autonomously." },
    { title: "EXORA NRF-CAM 2.0", tech: "ESP32-CAM / NRF24l01", desc: "A ground robot controlled using a 2.4 GHz radio frequency system, equipped with a camera for real-time remote control and monitoring." },
    { title: "Anonymous Report", tech: "Supabase / WA API", desc: "A secure, encrypted reporting web platform that allows both users and administrators to remain anonymous. It features a confidential messaging dashboard and integrates with the WhatsApp API for real-time notifications." }
  ];

  // ==========================================
// 2. DATA STATIC
// ==========================================

// --- Bagian Soft Skills ---
const softSkills = [
  "Strategic Leadership", 
  "Mentorship & Teaching", 
  "Analytical Problem Solving", 
  "Critical Thinking", 
  "Adaptive Creativity", 
  "DevSecOps Mindset", 
  "Effective Communication", 
  "Stakeholder Management"
];

// --- Bagian Hard Skills (Tambahan) ---
const hardSkills = (
  <p align="left">
    <img src="https://skillicons.dev/icons?i=kali,linux,vscode,react,html,css,js,php,mysql,python,cpp,flutter,figma,photoshop,illustrator,premiere,aftereffects" alt="My Skills" />
  </p>
);

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

{/* SECTION 2: ABOUT DETAILS */}
<section id="about-details" className="section reveal" style={{ background: isDark ? '#050505' : '#fafafa', transition: 'all 0.5s ease' }}>
  
  {/* Pembungkus Tambahan - Padding kanan menyesuaikan saat mode baca aktif */}
  <div style={{ paddingLeft: '8%', paddingRight: isExpanded ? '8%' : '0%', transition: 'all 0.5s ease' }}> 
    
    {/* JUDUL: Ikut bergeser ke tengah saat isExpanded true */}
    <h2 className="fade-in" style={{ 
      marginBottom: '40px', 
      textAlign: isExpanded ? 'center' : 'left', 
      transition: 'all 0.6s ease' 
    }}>
      ABOUT ME!
    </h2>
    
    <div style={{ 
      display: 'grid', 
      // Grid berubah menjadi 1 kolom saat expanded, 2 kolom saat normal
      gridTemplateColumns: isExpanded ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: isExpanded ? '0' : '80px', 
      alignItems: 'center',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' 
    }}>
      
      {/* SISI KIRI: TEXT STORY */}
      <div className="slide-in-left" style={{ 
        fontSize: '1.1rem', 
        color: isDark ? '#888' : '#666', 
        lineHeight: '1.9', 
        textAlign: 'justify',
        // Saat expanded, teks berada di tengah dengan lebar maksimal yang nyaman dibaca
        maxWidth: isExpanded ? '900px' : '100%',
        margin: isExpanded ? '0 auto' : '0',
        transition: 'all 0.6s ease'
      }}>
        
        {/* --- BAGIAN YANG SELALU TERLIHAT --- */}
        <p style={{ marginBottom: '20px' }}>
          <span style={{ color: theme.accent, fontWeight: 'bold' }}>I'm Alfadil Ilhamora,</span> an Informatics student at Dehasen University, Bengkulu (Indonesia) specializing as an <span style={{ color: theme.text, fontWeight: 'bold' }}>Offensive Security Engineer for Web & IoT.</span>
        </p>
        
        <p>
          My journey with technology started early. At around six years old, I was already deeply familiar with computers. I explored educational games installed from CDs my parents provided, and back then, a simple question kept coming to mind—how did these games even appear on my PC? That curiosity became the spark.
        </p>

        <p style={{ marginTop: '20px' }}>
          In elementary school, I took my first real step into the world of IT. Using my older sibling’s laptop—who was studying computer and network engineering—I began experimenting, even learning how to break into WiFi networks. The moment I successfully cracked my first password, I was hooked. That was the point where curiosity turned into genuine passion for technology.
        </p>

        <p style={{ marginTop: '20px' }}>
          I’ve always been the kind of person who enjoys taking things apart and fixing them, as if engineering was something I was naturally drawn to.
        </p>

        {/* --- BAGIAN "READ MORE" --- */}
        <div style={{ 
          maxHeight: isExpanded ? '3000px' : '0px', 
          overflow: 'hidden', 
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isExpanded ? 1 : 0
        }}>
          <p style={{ marginTop: '20px' }}>
            During my junior high years, I spent time in a more religious-focused environment, which limited my direct access to technology. However, that didn’t stop me—I kept learning through books and continued nurturing my interest in science and technology.
          </p>

          <p style={{ marginTop: '20px' }}>
            After graduating, I initially aimed to pursue computer networking, but due to educational limitations, I entered Visual Communication Design instead. Even so, I stayed active and driven—I became a lab assistant, an outstanding student, and joined the student organization focusing on publication and documentation. At the same time, I independently explored the technical side of things, including understanding online game systems, which brought me back deeper into the IT world.
          </p>

          <p style={{ marginTop: '20px' }}>
            During my internship at a major company in my region, I had the opportunity to observe and interact with a cybersecurity team. Seeing how they worked left a strong impression on me—and that’s ketika I made a clear decision to pursue Informatics.
          </p>

          <p style={{ marginTop: '20px' }}>
            In university, I became highly active. By my second semester, I was entrusted as Vice President of a student technology community. Under my leadership, the community grew significantly and eventually became an official organization (DE CODE), where I served across three periods. Within this space, I contributed as a mentor, teaching cybersecurity and robotics IoT.
          </p>
          
          <p style={{ marginTop: '20px' }}>
            Additionally, I founded a robotics club called Exora Robotics Club as a platform for students to learn, innovate, and develop their skills in robotics and the Internet of Things (IoT).
          </p>

          <p style={{ marginTop: '20px' }}>
            Today, my main focus is Ethical Hacking, supported by skills in Full-Stack Development and IoT Security. I see technology not just as a skillset, but as a tool to create impact, solve real problems, and empower others.
          </p>
        </div>

        {/* TOMBOL TOGGLE */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none', border: 'none', color: theme.accent,
            fontWeight: 'bold', cursor: 'pointer', marginTop: '20px',
            fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px', padding: '0'
          }}
        >
          {isExpanded ? 'Show Less ↑' : 'Read Full Story ↓'}
        </button>
      </div>

      {/* SISI KANAN: GAMBAR (Menghilang saat Expanded) */}
      <div className="slide-in-right" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        position: 'relative',
        opacity: isExpanded ? 0 : 1,
        visibility: isExpanded ? 'hidden' : 'visible',
        maxHeight: isExpanded ? '0px' : '500px',
        transform: isExpanded ? 'scale(0.8) translateY(20px)' : 'scale(1) translateY(0)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isExpanded ? 'none' : 'auto'
      }}>
        <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', background: theme.accent, filter: 'blur(50px)', opacity: 0.2 }}></div>
        <img 
          src="/alfadil.png" 
          alt="Alfadil" 
          style={{ 
            width: '320px', 
            height: '320px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            border: `4px solid ${theme.accent}`, 
            zIndex: 1, 
            transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(3deg)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
        />
      </div>

    </div>
  </div>
</section>

{/* =============================================================== */}
{/* SECTION 3: EXPERIENCE (Gantikan section lamamu dengan ini)      */}
{/* =============================================================== */}
<section id="exp" className="section reveal">
  <h2 className="fade-in">PROFESSIONAL EXPERIENCE</h2>
  <div className="grid">
    {experience.map((exp, index) => (
      <div 
        key={index} 
        className="card fade-in" 
        style={{ 
          animationDelay: `${index * 0.2}s`,
          display: 'flex',           // Mengaktifkan flexbox
          flexDirection: 'column',   // Menyusun konten ke bawah
          minHeight: '300px',        // Memastikan tinggi kartu cukup seragam
          position: 'relative'
        }}
      >
        <div style={{ color: theme.accent, fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '10px' }}>
          {exp.period}
        </div>
        
        <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
          {exp.title}
        </h3>
        
        <p style={{ color: isDark ? '#888' : '#555', lineHeight: '1.7', marginBottom: '20px' }}>
          {exp.desc}
        </p>
        
        {/* Tombol dipaksa ke kanan bawah menggunakan marginTop: auto & alignSelf */}
        {exp.gallery && exp.gallery.length > 0 && (
          <button 
            onClick={() => setSelectedGallery(exp.gallery)}
            style={{
              marginTop: 'auto',      // Mendorong tombol ke dasar kartu
              alignSelf: 'flex-end',  // Menggeser tombol ke kanan
              padding: '8px 16px',
              backgroundColor: 'transparent',
              border: `1.5px solid ${theme.accent}`,
              color: theme.accent,
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: '0.3s all ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent;
              e.currentTarget.style.color = isDark ? '#000' : '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.accent;
            }}
          >
            📷 See Gallery
          </button>
        )}
      </div>
    ))}
  </div>
</section>

{/* =============================================================== */}
{/* NOMOR 4: POP-UP MODAL (Letakkan tepat SEBELUM penutup </div> utama) */}
{/* =============================================================== */}
{selectedGallery && (
  <div 
    style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 9999,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backdropFilter: 'blur(8px)', padding: '20px'
    }}
    onClick={() => setSelectedGallery(null)} 
  >
    {/* Tombol Close (X) */}
    <button 
      onClick={() => setSelectedGallery(null)}
      style={{
        position: 'absolute', top: '30px', right: '30px',
        background: 'none', border: 'none', color: '#fff',
        fontSize: '40px', cursor: 'pointer', zIndex: 10000
      }}
    >
      &times;
    </button>

    {/* Wadah Foto dalam Grid */}
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1100px',
        maxHeight: '85vh',
        overflowY: 'auto', 
        padding: '20px',
        animation: 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      onClick={(e) => e.stopPropagation()} // Mencegah klik foto menutup modal
    >
      {selectedGallery.map((foto, index) => (
        <div key={index} style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <img 
            src={foto} 
            alt={`Gallery ${index}`} 
            style={{ 
              width: '100%', height: 'auto', display: 'block',
              transition: '0.5s transform ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      ))}
    </div>

    {/* Gaya Animasi */}
    <style>{`
      @keyframes popIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
    `}</style>
  </div>
)}
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

  <div style={{ marginTop: '70px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
    
    {/* --- SOFT SKILLS COLUMN --- */}
    <div>
      <h3 className="fade-in" style={{ marginBottom: '25px', fontSize: '1.2rem', opacity: 0.7 }}>SOFT SKILLS</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {softSkills.map((s, i) => (
          <div key={i} className="badge fade-in" style={{ color: theme.text, borderColor: theme.text, border: `1px solid ${theme.text}`, animationDelay: `${i * 0.1}s` }}>
            {s.toUpperCase()}
          </div>
        ))}
      </div>
    </div>

    {/* --- HARD SKILLS COLUMN (FIXED RESPONSIVE) --- */}
    <div style={{ minWidth: 0 }}>
      <h3 className="fade-in" style={{ marginBottom: '25px', fontSize: '1.2rem', opacity: 0.7 }}>HARD SKILLS</h3>
      <div className="fade-in" style={{ 
        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', 
        padding: '20px', 
        borderRadius: '15px', 
        border: `1px solid ${theme.border}`,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img 
          src="https://skillicons.dev/icons?i=kali,linux,vscode,react,html,css,js,php,mysql,python,cpp,flutter,figma,photoshop,illustrator,premiere,aftereffects&perline=8" 
          alt="My Skills" 
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            display: 'block'
          }} 
        />
      </div>
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
          <h2 className="fade-in">MY SOCIAL MEDIA</h2>
          
          <div className="fade-in" style={{ marginTop: '60px' }}>
            <p style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', fontWeight: '900', color: theme.accent }}>alfaaora11@gmail.com</p>
            <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>WhatsApp: +62 851 8051 8503</p>
            
{/* SOSIAL MEDIA ICONS (SVG INTERNAL - ANTI GAGAL) */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              
              {/* GITHUB */}
              <a href="https://github.com/Alfadililhamora" target="_blank" rel="noreferrer" style={{ color: theme.text }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
              </a>

              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/alfadililhamora/" target="_blank" rel="noreferrer" style={{ color: '#0077b5' }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
              </a>

              {/* YOUTUBE */}
              <a href="https://www.youtube.com/@Alkyora/videos" target="_blank" rel="noreferrer" style={{ color: '#ff0000' }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>
              </a>

              {/* INSTAGRAM */}
              <a href="https://www.instagram.com/alkyora_?igsh=bWI3ODFpNnE1c2Zp" target="_blank" rel="noreferrer" style={{ color: '#e4405f' }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
              </a>

              {/* TELEGRAM */}
              <a href="https://t.me/Alkyoraaa" target="_blank" rel="noreferrer" style={{ color: '#0088cc' }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM12.166 5.02a.75.75 0 0 0-.712.074l-7.466 4.67a.75.75 0 0 0 .192 1.35l3.012.989.4 1.194a.75.75 0 0 0 1.381.041l1.99-3.274 2.048.673a.75.75 0 0 0 .93-.934l-1.39-4.717z"/></svg>
              </a>

              {/* TIKTOK */}
              <a href="https://www.tiktok.com/@alfadililhamora?_t=ZS-8yd7jNefWEC&_r=1" target="_blank" rel="noreferrer" style={{ color: theme.text }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg>
              </a>
              
              {/* SPOTIFY */}
              <a href="https://open.spotify.com/user/31v6jf36etcmgvpckr7n3ytuhhtq?si=6b7cbb1fb6be417b" target="_blank" rel="noreferrer" style={{ color: '#1DB954' }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.269C10.154 5.56 5.145 5.414 2.246 6.294a.75.75 0 1 1-.444-1.434c3.332-1.01 8.874-.832 12.039 1.046a.75.75 0 0 1-.768 1.287z"/>
                </svg>
              </a>

            </div>

            <p style={{ opacity: 0.5, marginTop: '30px' }}>Bengkulu, Indonesia</p>
          </div>
          
          <div style={{ marginTop: '150px', opacity: 0.05, fontWeight: '900', fontSize: '8vw', lineHeight: '1' }}>Let's Connect!</div>
        </section>
      </div>
    </>
  );
}