import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    let lastScrollTop = 0;
    let scrollStartTime = 0;
    let isUserScrolling = false;

    const sections = [
      { id: 'hero', label: 'Home' },
      { id: 'video', label: 'Video' },
      { id: 'music-gallery', label: 'Music' },
      { id: 'philosophy', label: 'Philosophy' },
      { id: 'gallery-social', label: 'Gallery' },
      { id: 'synthesis-connect', label: 'Synthesis' }
    ];

    const getCurrentSectionIndex = () => {
      return sections.findIndex(section => section.id === currentSection);
    };

    const smoothScrollToSection = (sectionId) => {
      if (isTransitioning) return;
      
      setIsTransitioning(true);
      const element = document.getElementById(sectionId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        // Update current section after a short delay
        setTimeout(() => {
          setCurrentSection(sectionId);
          setIsTransitioning(false);
        }, 500);
      } else {
        setIsTransitioning(false);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Show navigation after scrolling past hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(scrollTop > heroHeight * 0.3);
      }

      // Determine if user is actively scrolling
      const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
      const scrollDistance = Math.abs(scrollTop - lastScrollTop);
      
      if (scrollDistance > 50) {
        isUserScrolling = true;
        scrollStartTime = Date.now();
        clearTimeout(scrollTimeout);
      }

      lastScrollTop = scrollTop;

      // Handle guided section progression
      scrollTimeout = setTimeout(() => {
        if (isUserScrolling && !isTransitioning) {
          isUserScrolling = false;
          
          const currentIndex = getCurrentSectionIndex();
          const windowHeight = window.innerHeight;
          const scrollThreshold = windowHeight * 0.3; // Much more sensitive
          
          if (scrollDirection === 'down' && scrollDistance > scrollThreshold) {
            // Move to next section
            if (currentIndex < sections.length - 1) {
              const nextSection = sections[currentIndex + 1];
              smoothScrollToSection(nextSection.id);
            }
          } else if (scrollDirection === 'up' && scrollDistance > scrollThreshold) {
            // Move to previous section
            if (currentIndex > 0) {
              const prevSection = sections[currentIndex - 1];
              smoothScrollToSection(prevSection.id);
            }
          }
        }
      }, 800); // Much longer delay for gentler experience
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection, isTransitioning]);

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