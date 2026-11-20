import React, { useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  return (
    <section id="about" className="hero reveal">
      <div className="video-container">
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <div className="sub-header fade-in" style={{ animationDelay: '0.2s' }}>
          Hi there! 👋 I'm
        </div>
        <h1 className="brush-name fade-in" style={{ animationDelay: '0.4s' }}>
          Alfadil Ilhamora
        </h1>
        <p className="hero-tagline fade-in" style={{ animationDelay: '0.6s' }}>
          CYBER SECURITY | INTERNET OF THINGS | FULLSTACK DEV
        </p>
        <p className="hero-bio fade-in" style={{ animationDelay: '0.8s' }}>
          Computer Science student at Dehasen University Bengkulu, focused on Cyber Security (Ethical Hacking),
          Network Infrastructure, and secure, scalable systems. Experienced in Robotics, IoT, and Full-Stack Web Development.
        </p>
      </div>
    </section>
  );
}
