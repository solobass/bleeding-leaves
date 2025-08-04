import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'video', label: 'Video' },
    { id: 'experience', label: 'Experience' },
    { id: 'photo1', label: 'Photo 1' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'photo2', label: 'Photo 2' },
    { id: 'instagram', label: 'Insta' },
    { id: 'synthesis', label: 'Synthesis' }
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