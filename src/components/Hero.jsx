import React from 'react';
import backgroundImage from '../assets/portfoliobg_1.png';
import profileImage from '../assets/pfp.jpg';
import githubIcon from '../assets/github.png';
import wattpadIcon from '../assets/wattpad.png';
import youtubeIcon from '../assets/youtube.png';

const Hero = () => {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="profile-picture-container">
          <img src={profileImage} alt="Profile" className="profile-picture" />
          <div className="tooltip">face of an irregular</div>
        </div>
        <div className="text-content">
          <h1>My name is Rafael Templado!</h1>
          <h2>Free-lance Artist</h2>
          <p>
          Welcome to my porfolio! While I am not an expert at coding or debugging, I am fairly good at  doing graphic designs! I also take commissions as a way to earn and further improve my skills!
          Also github links are down there-               
          </p>
          <div className="social-links">
            <div className="social-icon-container">
              <a href="https://github.com/KatsukiCh" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="social-icon" />
              </a>
              <div className="social-tooltip">My Github Profile!</div>
            </div>
            <div className="social-icon-container">
              <a href="https://github.com/powiepow/Todo" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Wattpad" className="social-icon" />
              </a>
              <div className="social-tooltip">To do list Repository!</div>
            </div>
            <div className="social-icon-container">
              <a href="https://github.com/powiepow/pokeapi" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="YouTube" className="social-icon" />
              </a>
              <div className="social-tooltip">Pokemon Simulator Repository!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;