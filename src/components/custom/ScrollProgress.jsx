import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;
    let lastScrollDirection = 'down';
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Determine scroll direction
      const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop;

      // Show navigation after scrolling past hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(scrollTop > heroHeight * 0.3);
      }

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

      // Handle scroll snapping with direction awareness
      if (!isScrolling) {
        isScrolling = true;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          
          const sections = document.querySelectorAll('section[id]');
          const windowHeight = window.innerHeight;
          let targetSection = null;
          
          if (scrollDirection === 'down') {
            // Find next section when scrolling down
            for (let i = 0; i < sections.length; i++) {
              const rect = sections[i].getBoundingClientRect();
              if (rect.top > windowHeight * 0.2) {
                targetSection = sections[i];
                break;
              }
            }
          } else {
            // Find previous section when scrolling up
            for (let i = sections.length - 1; i >= 0; i--) {
              const rect = sections[i].getBoundingClientRect();
              if (rect.top < -windowHeight * 0.2) {
                targetSection = sections[i];
                break;
              }
            }
          }
          
          if (targetSection) {
            targetSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
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
    <div className={`scroll-progress-container ${isVisible ? 'visible' : ''}`}>
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