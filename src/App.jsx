import React, { useState, useEffect } from 'react';
import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import {
  experience as defaultExperience,
  certifications as defaultCertifications,
  projects as defaultProjects,
} from './data/portfolioData';
import {
  getSavedSession,
  logoutAdmin,
  loadPortfolioContent,
  savePortfolioContent,
  resetLocalContent,
} from './services/storageService';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import GalleryModal from './components/GalleryModal';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AdminLoginModal from './components/AdminLoginModal';
import AdminDashboardModal from './components/AdminDashboardModal';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const [session, setSession] = useState(() => getSavedSession());
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminTab, setAdminTab] = useState('experience');

  const [content, setContent] = useState({
    experience: defaultExperience,
    certifications: defaultCertifications,
    projects: defaultProjects,
  });

  useScrollReveal();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    loadPortfolioContent().then((loaded) => setContent(loaded));
  }, []);

  const isAdmin = Boolean(session);

  const handleBrandClick = () => {
    if (isAdmin) {
      setShowAdminPanel(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleUpdateContent = async (nextContent) => {
    setContent(nextContent);
    await savePortfolioContent(nextContent, session?.token);
  };

  const handleResetDefault = () => {
    const restored = resetLocalContent();
    setContent(restored);
  };

  const handleLogout = () => {
    logoutAdmin();
    setSession(null);
  };

  const openPanelOnTab = (tab) => {
    setAdminTab(tab);
    setShowAdminPanel(true);
  };

  return (
    <div className="ultra-full-layout">
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        isAdmin={isAdmin}
        onBrandClick={handleBrandClick}
      />
      <Hero />
      <About />
      <Experience
        items={content.experience}
        onOpenGallery={setSelectedGallery}
        isAdmin={isAdmin}
        onQuickAdd={() => openPanelOnTab('experience')}
        onDelete={(idx) =>
          handleUpdateContent({
            ...content,
            experience: content.experience.filter((_, i) => i !== idx),
          })
        }
      />
      <GalleryModal images={selectedGallery} onClose={() => setSelectedGallery(null)} />
      <Certifications
        items={content.certifications}
        isAdmin={isAdmin}
        onQuickAdd={() => openPanelOnTab('certifications')}
        onDelete={(idx) =>
          handleUpdateContent({
            ...content,
            certifications: content.certifications.filter((_, i) => i !== idx),
          })
        }
      />
      <Projects
        items={content.projects}
        isAdmin={isAdmin}
        onQuickAdd={() => openPanelOnTab('projects')}
        onDelete={(idx) =>
          handleUpdateContent({
            ...content,
            projects: content.projects.filter((_, i) => i !== idx),
          })
        }
      />
      <Contact />

      <AdminLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={(newSession) => {
          setSession(newSession);
          setShowAdminPanel(true);
        }}
      />

      <AdminDashboardModal
        isOpen={showAdminPanel}
        initialTab={adminTab}
        onClose={() => setShowAdminPanel(false)}
        content={content}
        session={session}
        onUpdateContent={handleUpdateContent}
        onResetDefault={handleResetDefault}
        onLogout={handleLogout}
      />
    </div>
  );
}
