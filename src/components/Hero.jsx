import React, { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  // Otomatis pause video saat user scroll melewati Hero untuk hemat CPU/GPU
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="hero reveal">
      <div className="video-container">
        <video ref={videoRef} autoPlay muted loop playsInline preload="metadata">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <div className="sub-header fade-in" style={{ animationDelay: '0.15s' }}>
          Hi there! 👋 I'm
        </div>
        <h1 className="brush-name fade-in" style={{ animationDelay: '0.3s' }}>
          Alfadil Ilhamora
        </h1>
        <p className="hero-tagline fade-in" style={{ animationDelay: '0.45s' }}>
          CYBER SECURITY | INTERNET OF THINGS | FULLSTACK DEV
        </p>
        <p className="hero-bio fade-in" style={{ animationDelay: '0.6s' }}>
          Computer Science student at Dehasen University Bengkulu, focused on Cyber Security (Ethical Hacking),
          Network Infrastructure, and secure, scalable systems. Experienced in Robotics, IoT, and Full-Stack Web Development.
        </p>
      </div>
    </section>
  );
}
