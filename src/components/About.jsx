import React, { useState } from 'react';

// Efek per huruf khusus judul (mendukung arah scroll turun & naik)
function MagicLetters({ text, baseDelay = 0.04, revBaseDelay = 0.65, step = 0.035 }) {
  const chars = Array.from(text);
  const total = chars.length;

  return (
    <>
      {chars.map((char, idx) =>
        char === ' ' ? (
          ' '
        ) : (
          <span
            key={idx}
            className="magic-letter"
            style={{
              '--d': `${(baseDelay + idx * step).toFixed(3)}s`,
              '--dr': `${(revBaseDelay + (total - 1 - idx) * step).toFixed(3)}s`,
            }}
          >
            {char}
          </span>
        )
      )}
    </>
  );
}

// Efek gelombang cepat per kata (otomatis terbalik saat scroll ke atas)
function MagicWords({ text, baseDelay = 0.08, revBaseDelay = 0.08, step = 0.013 }) {
  const words = text.split(' ');
  const total = words.length;

  return (
    <>
      {words.map((word, idx) => {
        const d = (baseDelay + idx * step).toFixed(3);
        const dr = (revBaseDelay + (total - 1 - idx) * step).toFixed(3);

        return (
          <React.Fragment key={idx}>
            <span
              className="magic-word-unit"
              style={{ '--d': `${d}s`, '--dr': `${dr}s` }}
            >
              {word}
            </span>
            {idx < total - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about-details" className="section section-alt reveal">
      <div className={`about-container ${isExpanded ? 'expanded' : ''}`}>
        <h2 className="about-title">
          <MagicLetters text="ABOUT ME!" baseDelay={0.04} revBaseDelay={0.62} step={0.035} />
        </h2>

        <div className="about-grid">
          <div className="about-bio">
            <p style={{ marginBottom: '20px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
                <MagicWords text="I'm Alfadil Ilhamora," baseDelay={0.12} revBaseDelay={0.56} step={0.02} />
              </span>{' '}
              <MagicWords
                text="an Informatics student at Dehasen University, Bengkulu (Indonesia) specializing as an"
                baseDelay={0.18}
                revBaseDelay={0.44}
                step={0.015}
              />{' '}
              <span style={{ color: 'var(--text)', fontWeight: 'bold' }}>
                <MagicWords
                  text="Offensive Security Engineer for Web & IoT."
                  baseDelay={0.35}
                  revBaseDelay={0.34}
                  step={0.02}
                />
              </span>
            </p>

            <p>
              <MagicWords
                text="My journey with technology started early. At around six years old, I was already deeply familiar with computers. I explored educational games installed from CDs my parents provided, and back then, a simple question kept coming to mind—how did these games even appear on my PC? That curiosity became the spark."
                baseDelay={0.28}
                revBaseDelay={0.22}
                step={0.012}
              />
            </p>

            <p style={{ marginTop: '20px' }}>
              <MagicWords
                text="In elementary school, I took my first real step into the world of IT. Using my older sibling’s laptop—who was studying computer and network engineering—I began experimenting, even learning how to break into WiFi networks. The moment I successfully cracked my first password, I was hooked. That was the point where curiosity turned into genuine passion for technology."
                baseDelay={0.52}
                revBaseDelay={0.1}
                step={0.011}
              />
            </p>

            <p style={{ marginTop: '20px' }}>
              <MagicWords
                text="I’ve always been the kind of person who enjoys taking things apart and fixing them, as if engineering was something I was naturally drawn to."
                baseDelay={0.76}
                revBaseDelay={0.02}
                step={0.013}
              />
            </p>

            {isExpanded && (
              <div className="magic-run">
                <p style={{ marginTop: '20px' }}>
                  <MagicWords
                    text="During my junior high years, I spent time in a more religious-focused environment, which limited my direct access to technology. However, that didn’t stop me—I kept learning through books and continued nurturing my interest in science and technology."
                    baseDelay={0.03}
                    revBaseDelay={0.72}
                    step={0.011}
                  />
                </p>

                <p style={{ marginTop: '20px' }}>
                  <MagicWords
                    text="After graduating, I initially aimed to pursue computer networking, but due to educational limitations, I entered Visual Communication Design instead. Even so, I stayed active and driven—I became a lab assistant, an outstanding student, and joined the student organization focusing on publication and documentation. At the same time, I independently explored the technical side of things, including understanding online game systems, which brought me back deeper into the IT world."
                    baseDelay={0.2}
                    revBaseDelay={0.5}
                    step={0.009}
                  />
                </p>

                <p style={{ marginTop: '20px' }}>
                  <MagicWords
                    text="During my internship at a major company in my region, I had the opportunity to observe and interact with a cybersecurity team. Seeing how they worked left a strong impression on me—and that’s when I made a clear decision to pursue Informatics."
                    baseDelay={0.44}
                    revBaseDelay={0.38}
                    step={0.011}
                  />
                </p>

                <p style={{ marginTop: '20px' }}>
                  <MagicWords
                    text="In university, I became highly active. By my second semester, I was entrusted as Vice President of a student technology community. Under my leadership, the community grew significantly and eventually became an official organization (DE CODE), where I served across three periods. Within this space, I contributed as a mentor, teaching cybersecurity and robotics IoT."
                    baseDelay={0.62}
                    revBaseDelay={0.22}
                    step={0.009}
                  />
                </p>

                <p style={{ marginTop: '20px' }}>
                  <MagicWords
                    text="Additionally, I founded a robotics club called Exora Robotics Club as a platform for students to learn, innovate, and develop their skills in robotics and the Internet of Things (IoT)."
                    baseDelay={0.82}
                    revBaseDelay={0.12}
                    step={0.011}
                  />
                </p>

                <p style={{ marginTop: '20px' }}>
                  <MagicWords
                    text="Today, my main focus is Ethical Hacking, supported by skills in Full-Stack Development and IoT Security. I see technology not just as a skillset, but as a tool to create impact, solve real problems, and empower others."
                    baseDelay={0.98}
                    revBaseDelay={0.02}
                    step={0.011}
                  />
                </p>
              </div>
            )}

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
            <img src="/alfadil.png" alt="Alfadil" loading="lazy" decoding="async" className="about-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
