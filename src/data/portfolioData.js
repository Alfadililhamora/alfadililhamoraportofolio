export const navLinks = [
  { name: 'HOME', id: 'about' },
  { name: 'ABOUT ME', id: 'about-details' },
  { name: 'EXPERIENCE', id: 'exp' },
  { name: 'CERTIFICATIONS', id: 'cert' },
  { name: 'PROJECTS', id: 'project' },
  { name: 'CONTACT', id: 'contact' },
];

export const experience = [
  {
    title: 'Founder — Exora Robotics Club',
    period: 'Feb 2026 - Present',
    desc: 'Mentoring and teaching students about robotics and IoT. Active technology activist in Bengkulu.',
    gallery: [
      '/robotik3.jpg', '/robotik2.jpg', '/robotik1.jpg', '/robotik5.jpg',
      '/robotik6.jpg', '/robotik7.jpg', '/robotik8.jpg', '/robotik9.jpg',
      '/robotik10.jpg', '/robotik11.jpg', '/robotik12.jpg', '/robotik13.jpg',
    ],
  },
  {
    title: 'President — DE CODE IT Community',
    period: 'Nov 2024 - Present',
    desc: 'Leading 60+ active members at Dehasen University. Mentoring in cybersecurity and IoT robotics.',
    gallery: ['/decode.jpg', '/decode2.jpg', '/decode3.jpg', '/decode4.jpg'],
  },
  {
    title: 'Journalist — APKASINDO Bengkulu',
    period: 'Nov 2024 - Present',
    desc: 'Covering agricultural technology developments and regional news. Managing digital publications and media relations.',
    gallery: [
      '/apkasindo.jpeg', '/apkasindo1.jpeg', '/apkasindo2.jpeg', '/apkasindo3.jpeg',
      '/apkasindo4.jpeg', '/apkasindo5.jpeg', '/apkasindo6.jpeg', '/apkasindo7.jpeg',
      '/apkasindo8.jpeg', '/apkasindo9.jpeg', '/apkasindo10.jpeg', '/apkasindo11.jpeg',
      '/apkasindo12.jpeg', '/apkasindo13.jpeg',
    ],
  },
  {
    title: 'Cyber Security Team Leader — De Exploitz',
    period: 'Feb 2025 - Sep 2025',
    desc: 'Directed simulations and penetration testing. 9th Place National at Permikomnas Mini CTF.',
    gallery: [
      '/cyber2.jpeg', '/cyber3.jpeg', '/cyber4.jpeg', '/cyber5.jpeg',
      '/cyber6.jpeg', '/cyber7.jpeg', '/cyber8.jpeg', '/cyber9.jpeg',
      '/cyber10.jpeg', '/cyber.jpeg',
    ],
  },
  {
    title: 'IT MCR & Multimedia — Bengkulu Ekspress',
    period: 'Oct 2023 - Feb 2024',
    desc: 'Staff IT Network, Managed Master Control Room operations and designed digital content.',
    gallery: ['/be.jpg', '/be2.jpg', '/be3.jpg', '/be4.jpg', '/be5.jpg', '/be6.jpg', '/be7.jpg'],
  },
];

export const certifications = [
  { name: 'IT Specialist – Python', org: 'Certiport / Pearson VUE', img: '/itspecialist.jpg' },
  { name: 'IBM Granite AI & Data Classification', org: 'IBM SkillsBuild', img: '/ibm.jpg' },
  { name: 'MTCNA – MikroTik Certified Network Associate', org: 'MikroTik', img: '/mtcna.jpg' },
  { name: 'Ethical Hacker (Cisco Certified)', org: 'Cisco', img: '/ethical.jpg' },
  { name: 'Python Essentials 1', org: 'Cisco Networking Academy', img: '/pythonins.jpg' },
  { name: 'Certified GRC Analyst (CGRCA)', org: 'Professional Certification', img: '/cgrca.jpg' },
  { name: 'Cybersecurity Fundamentals Specialist (CCFS)', org: 'Specialist Cert', img: '/CCFS.jpg' },
  { name: 'Top 1000 9th IndonesiaNEXT Digital Talent', org: 'Telkomsel', img: '/Telkom.jpg' },
  { name: 'Certified Phishing Prevention Specialist (CPPS)', org: 'Hack & Fix Academy', img: '/cpps.jpg' },
  { name: 'Cybersecurity Career Starter Certification (CCSC)', org: 'Hack & Fix Academy', img: '/ccsc.jpg' },
  { name: 'Digital Awareness', org: 'Cisco Networking Academy', img: '/digital.jpg' },
  { name: 'Introduction to Cybersecurity (Course Completion)', org: 'Cisco Networking Academy', img: '/intro.jpg' },
  { name: 'Mini Capture The Flag (CTF) Participant', org: 'Permikomnas Wilayah VIII', img: '/permikomnas.jpeg' },
  { name: 'Introduction to Critical Infrastructure Protection (ICIP)', org: 'OPSWAT Academy', img: '/opswat.jpg' },
  { name: 'Kecerdasan Buatan (AI) untuk Pemula', org: 'HP LIFE / HP Foundation', img: '/ai.jpg' },
  { name: 'Pengantar Keterampilan Bisnis Digital', org: 'HP LIFE / HP Foundation', img: '/bisdig.jpg' },
  { name: 'Perencanaan Strategis', org: 'HP LIFE / HP Foundation', img: '/certificate.jpg' },
  { name: 'Pemasaran Media Sosial', org: 'HP LIFE / HP Foundation', img: '/pemasaran.jpg' },
  { name: 'Introduction to Cybersecurity', org: 'Cisco Networking Academy / BPPTIK', img: '/cyb.jpg' },
  { name: 'Digital Awareness (Cisco)', org: 'Cisco Networking Academy / BPPTIK', img: '/dig.jpg' },
  { name: 'Introduction to Modern AI', org: 'Cisco Networking Academy / BPPTIK', img: '/modern.jpg' },
  { name: 'Praktik Kerja Lapangan (IT Staff/MCR)', org: 'Bengkulu Ekspress.com', img: '/be.jpeg' },
  { name: 'Juara II Lomba Film Pendek Fiksi (FLS2N)', org: 'Dikbud Provinsi Bengkulu', img: '/fls2n.jpeg' },
];

export const projects = [
  {
    title: 'EXORA 1.0',
    tech: 'IoT / C++',
    desc: 'Exora Robot is a web server-based robot that can be controlled in real-time via smartphone or laptop over WiFi, as a simple implementation of IoT in robotics.',
  },
  {
    title: 'AI Garbage Detection',
    tech: 'TensorFlow / Python',
    desc: 'A simple AI that learns from data to recognize and differentiate objects, then executes complex commands on a robot. For example, an automatic waste-detection robot that can identify trash, move toward it, and clean it autonomously.',
  },
  {
    title: 'EXORA NRF-CAM 2.0',
    tech: 'ESP32-CAM / NRF24l01',
    desc: 'A ground robot controlled using a 2.4 GHz radio frequency system, equipped with a camera for real-time remote control and monitoring.',
  },
  {
    title: 'Anonymous Report',
    tech: 'Supabase / WA API',
    desc: 'A secure, encrypted reporting web platform that allows both users and administrators to remain anonymous. It features a confidential messaging dashboard and integrates with the WhatsApp API for real-time notifications.',
  },
];

export const softSkills = [
  'Strategic Leadership',
  'Mentorship & Teaching',
  'Analytical Problem Solving',
  'Critical Thinking',
  'Adaptive Creativity',
  'DevSecOps Mindset',
  'Effective Communication',
  'Stakeholder Management',
];

export const hardSkillIcons = [
  'kali', 'linux', 'vscode', 'react', 'html', 'css', 'js', 'php', 'mysql',
  'python', 'cpp', 'flutter', 'figma', 'photoshop', 'illustrator', 'premiere', 'aftereffects',
];
