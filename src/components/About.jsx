import React, { useState } from 'react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about-details" className="section section-alt reveal">
      <div className={`about-container ${isExpanded ? 'expanded' : ''}`}>
        <h2 className="fade-in about-title">ABOUT ME!</h2>

        <div className="about-grid">
          <div className="slide-in-left about-bio">
            <p style={{ marginBottom: '20px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>I'm Alfadil Ilhamora,</span> an Informatics
              student at Dehasen University, Bengkulu (Indonesia) specializing as an{' '}
              <span style={{ color: 'var(--text)', fontWeight: 'bold' }}>Offensive Security Engineer for Web & IoT.</span>
            </p>

            <p>
              My journey with technology started early. At around six years old, I was already deeply familiar with
              computers. I explored educational games installed from CDs my parents provided, and back then, a simple
              question kept coming to mind—how did these games even appear on my PC? That curiosity became the spark.
            </p>

            <p style={{ marginTop: '20px' }}>
              In elementary school, I took my first real step into the world of IT. Using my older sibling’s laptop—who
              was studying computer and network engineering—I began experimenting, even learning how to break into WiFi
              networks. The moment I successfully cracked my first password, I was hooked. That was the point where
              curiosity turned into genuine passion for technology.
            </p>

            <p style={{ marginTop: '20px' }}>
              I’ve always been the kind of person who enjoys taking things apart and fixing them, as if engineering was
              something I was naturally drawn to.
            </p>

            <div
              style={{
                maxHeight: isExpanded ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isExpanded ? 1 : 0,
              }}
            >
              <p style={{ marginTop: '20px' }}>
                During my junior high years, I spent time in a more religious-focused environment, which limited my direct
                access to technology. However, that didn’t stop me—I kept learning through books and continued nurturing
                my interest in science and technology.
              </p>

              <p style={{ marginTop: '20px' }}>
                After graduating, I initially aimed to pursue computer networking, but due to educational limitations, I
                entered Visual Communication Design instead. Even so, I stayed active and driven—I became a lab assistant,
                an outstanding student, and joined the student organization focusing on publication and documentation. At
                the same time, I independently explored the technical side of things, including understanding online game
                systems, which brought me back deeper into the IT world.
              </p>

              <p style={{ marginTop: '20px' }}>
                During my internship at a major company in my region, I had the opportunity to observe and interact with
                a cybersecurity team. Seeing how they worked left a strong impression on me—and that’s when I made a
                clear decision to pursue Informatics.
              </p>

              <p style={{ marginTop: '20px' }}>
                In university, I became highly active. By my second semester, I was entrusted as Vice President of a
                student technology community. Under my leadership, the community grew significantly and eventually became
                an official organization (DE CODE), where I served across three periods. Within this space, I contributed
                as a mentor, teaching cybersecurity and robotics IoT.
              </p>

              <p style={{ marginTop: '20px' }}>
                Additionally, I founded a robotics club called Exora Robotics Club as a platform for students to learn,
                innovate, and develop their skills in robotics and the Internet of Things (IoT).
              </p>

              <p style={{ marginTop: '20px' }}>
                Today, my main focus is Ethical Hacking, supported by skills in Full-Stack Development and IoT Security. I
                see technology not just as a skillset, but as a tool to create impact, solve real problems, and empower
                others.
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent)',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0',
              }}
            >
              {isExpanded ? 'Show Less ↑' : 'Read Full Story ↓'}
            </button>
          </div>

          <div className="slide-in-right about-photo-col">
            <div className="about-photo-glow"></div>
            <img src="/alfadil.png" alt="Alfadil" className="about-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
