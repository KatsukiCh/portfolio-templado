import React from 'react';
import backgroundImage from '../assets/portfoliobg_1.png';
import profileImage from '../assets/pfp.jpg';
import githubIcon from '../assets/github.png';
import wattpadIcon from '../assets/wattpad.png';
import youtubeIcon from '../assets/youtube.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="profile-picture-container">
          <img src={profileImage} alt="Profile" className="profile-picture" />
          <div className="tooltip">This goofy looking goober needs commissions</div>
        </div>
        <div className="text-content">
          <h1>My name is Rafael Templado!</h1>
          <h2>Free-lance Artist who probably needs sleep</h2>
          <p>
           Welcome to my porfolio! What? You expect something more out of me?
          </p>
          <div className="social-links">
            <div className="social-icon-container">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="social-icon" />
              </a>
              <div className="social-tooltip">Le Github</div>
            </div>
            <div className="social-icon-container">
              <a href="https://wattpad.com" target="_blank" rel="noopener noreferrer">
                <img src={wattpadIcon} alt="Wattpad" className="social-icon" />
              </a>
              <div className="social-tooltip">I write fanfics.</div>
            </div>
            <div className="social-icon-container">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="social-icon" />
              </a>
              <div className="social-tooltip">I have a Youtube Channel! Care to Sub? :D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;