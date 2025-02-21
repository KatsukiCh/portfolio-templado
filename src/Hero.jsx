import React from 'react';
import creatorImage from './assets/image.PNG';

const Hero = ({ name, description }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={creatorImage} alt={name} className="creator-image" />
        <div className="creator-info">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;