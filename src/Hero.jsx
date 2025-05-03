import React from 'react';
import backgroundImage from '../assets/portfoliobg_1.png'; 
import profileImage from '../assets/image.PNG';
import githubIcon from '../assets/github.png'; 
import wattpadIcon from '../assets/wattpad.png'; 
import youtubeIcon from '../assets/youtube.png'; 

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        
        <img src={profileImage} alt="Profile" className="profile-picture" />
        <h1 className="highlight">Hi, I’m [Your Name]</h1>
        <h2>Full-Stack Developer & Designer</h2>
        <p>
          I’m passionate about building beautiful, functional web applications that solve real-world problems. With expertise in React, Node.js, and UI/UX design, I bring ideas to life.
        </p>
        <a href="#contact" className="cta-button">Get in Touch</a>
    
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://wattpad.com" target="_blank" rel="noopener noreferrer">
            <img src={wattpadIcon} alt="Wattpad" className="social-icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;