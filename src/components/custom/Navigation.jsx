import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'video', label: 'Video' },
    { id: 'music-gallery', label: 'Music' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'gallery-social', label: 'Gallery' },
    { id: 'synthesis-connect', label: 'Synthesis' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show navigation after scrolling past hero section
      setIsVisible(scrollY > windowHeight * 0.5);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        
        if (scrollY >= sectionTop - windowHeight * 0.3 && 
            scrollY < sectionTop + sectionHeight - windowHeight * 0.3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`navigation ${isVisible ? 'visible' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span className="nav-logo">BL</span>
        </div>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 