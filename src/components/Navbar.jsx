import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [displayedText, setDisplayedText] = useState('Projects');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleScroll = () => {
    const heroSection = document.getElementById('hero');
    const projectsSection = document.getElementById('projects');

    const heroPosition = heroSection.getBoundingClientRect();
    const projectsPosition = projectsSection.getBoundingClientRect();

    if (projectsPosition.top <= 100 && projectsPosition.bottom >= 100) {
      setActiveSection('projects');
      if (!isTransitioning) {
        setDisplayedText('Home');
      }
    } else if (heroPosition.top <= 100 && heroPosition.bottom >= 100) {
      setActiveSection('hero');
      if (!isTransitioning) {
        setDisplayedText('Projects');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    const newSection = section === 'hero' ? 'projects' : 'hero';
    
    setIsTransitioning(true);

    setTimeout(() => {
      setDisplayedText(newSection === 'hero' ? 'Projects' : 'Home');
      setActiveSection(newSection);
      setIsTransitioning(false);
    }, 400);

    const targetSection = document.getElementById(newSection);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Rafael's very very nice portfolio</div>
        <div className="nav-links">
          <a
            href={activeSection === 'hero' ? '#projects' : '#hero'}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(activeSection);
            }}
          >
            <span className={`nav-text ${isTransitioning ? 'fade' : ''}`}>
              {displayedText}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;