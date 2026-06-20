import React, { useState, useEffect, useCallback } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import CustomCursor from '../components/CustomCursor';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    // Section tracking
    const scrollPosition = window.scrollY + 100;
    for (const section of SECTIONS) {
      const el = document.getElementById(section);
      if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
        setCurrentSection(section);
        break;
      }
    }
    // Scroll progress
    const total = document.body.scrollHeight - window.innerHeight;
    setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <CustomCursor />

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Right-side HUD section dots */}
      <div className="hud-dots">
        {SECTIONS.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`hud-dot ${currentSection === id ? 'active' : ''}`}
            title={id.toUpperCase()}
          />
        ))}
      </div>

      <div className="min-h-screen bg-squid-black text-squid-white w-full overflow-x-hidden">
        <Navigation currentSection={currentSection} />

        <section id="home" className="w-full">
          <HeroSection />
        </section>

        <div className="section-divider" />

        <section id="about" className="w-full">
          <AboutSection />
        </section>

        <div className="section-divider" />

        <section id="skills" className="w-full">
          <SkillsSection />
        </section>

        <div className="section-divider" />

        <section id="projects" className="w-full">
          <ProjectsSection />
        </section>

        <div className="section-divider" />

        <section id="contact" className="w-full">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default Index;
