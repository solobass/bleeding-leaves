import { useState, useEffect } from 'react';

export const useSectionNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  const sections = ['hero', 'video', 'experience', 'photo1', 'philosophy', 'photo2', 'instagram', 'synthesis'];

  const navigateToSection = (sectionId) => {
    if (sections.includes(sectionId)) {
      setActiveSection(sectionId);
      // Update URL hash
      window.location.hash = sectionId;
    }
  };

  const navigateNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];
    navigateToSection(nextSection);
  };

  const navigatePrev = () => {
    const currentIndex = sections.indexOf(activeSection);
    const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
    const prevSection = sections[prevIndex];
    navigateToSection(prevSection);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowDown':
        case ' ':
          event.preventDefault();
          navigateNext();
          break;
        case 'ArrowUp':
          event.preventDefault();
          navigatePrev();
          break;
        case 'Home':
          event.preventDefault();
          navigateToSection('hero');
          break;
        case 'End':
          event.preventDefault();
          navigateToSection('synthesis');
          break;
      }
    };

    // Handle wheel events for trackpad/mouse scrolling
    const handleWheel = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        navigateNext();
      } else if (event.deltaY < 0) {
        navigatePrev();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection]);

  // Handle initial hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sections.includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  return {
    activeSection,
    navigateToSection,
    navigateNext,
    navigatePrev,
    sections
  };
}; 