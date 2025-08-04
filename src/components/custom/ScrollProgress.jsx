import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  console.log('ScrollProgress component mounted, current section:', currentSection);


  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Find which section is most visible in the viewport
      const sections = document.querySelectorAll('section[id]');
      const windowHeight = window.innerHeight;
      let mostVisibleSection = 'hero';
      let maxVisibility = 0;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibility = visibleHeight / windowHeight;
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = section.id;
        }
      });
      
      console.log('Most visible section:', mostVisibleSection, 'Visibility:', maxVisibility);
      setCurrentSection(mostVisibleSection);
      
      // Hide navigation on hero section
      setIsVisible(mostVisibleSection !== 'hero');
    };

    // Check scroll position every 100ms instead of using scroll events
    const interval = setInterval(checkScrollPosition, 100);
    return () => {
      clearInterval(interval);
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
          {sections.map((section) => (
            <div 
              key={section.id}
              className={`scroll-section-dot ${currentSection === section.id ? 'active' : ''}`}
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'instant', block: 'start' });
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