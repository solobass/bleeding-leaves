import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update current section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const windowHeight = window.innerHeight;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        
        if (scrollTop >= sectionTop - windowHeight * 0.5 && 
            scrollTop < sectionTop + sectionHeight - windowHeight * 0.5) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'video', label: 'Video' },
    { id: 'music-gallery', label: 'Music' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'gallery-social', label: 'Gallery' },
    { id: 'synthesis-connect', label: 'Synthesis' }
  ];

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="scroll-sections">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className={`scroll-section-dot ${currentSection === section.id ? 'active' : ''}`}
            onClick={() => {
              const element = document.getElementById(section.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            title={section.label}
          >
            <span className="dot"></span>
            <span className="section-label">{section.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgress; 