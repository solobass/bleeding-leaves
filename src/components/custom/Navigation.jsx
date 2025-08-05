import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'video', label: 'Video' },
    { id: 'music-gallery', label: 'Music' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'gallery-social', label: 'Gallery' },
    { id: 'synthesis-connect', label: 'Synthesis' }
  ];

  const navigateToSection = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
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
                onClick={() => navigateToSection(section.id)}
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