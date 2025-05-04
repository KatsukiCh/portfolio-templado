import React, { useState, useEffect } from 'react';
import art1 from '../assets/art1.png';
import art2 from '../assets/art2.png';
import art3 from '../assets/art3.png';
import art4 from '../assets/art4.png';
import art5 from '../assets/art5.png';
import art6 from '../assets/art6.png';
import art7 from '../assets/art7.png';
import art8 from '../assets/art8.png';
import art9 from '../assets/art9.png';
import art10 from '../assets/art10.png';

const Projects = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const projects = [
    { id: 1, title: 'Commissioned Art #1', image: art1 },
    { id: 2, title: 'Blue Archive Fan Project', image: art2 },
    { id: 3, title: 'gift to my beloved', image: art3 },
    { id: 4, title: 'Commissioned Art #2', image: art4 },
    { id: 5, title: 'Izayoi Nonomi', image: art5 },
    { id: 6, title: 'A very angy Ayane', image: art6 },
    { id: 7, title: 'Prince Ichika', image: art7 },
    { id: 8, title: 'Miyu the angel', image: art8 },
    { id: 9, title: 'Natsuki Mizuha', image: art9 },
    { id: 10, title: 'What if we were teachers?', image: art10 },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedImageIndex(null), 600); 
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Just an Art Gallery.</h2>
      <div className="gallery">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="gallery-image"
            />
            <div className="overlay">
              <p>{project.title}</p>
            </div>
            <div className="border-overlay"></div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className={`modal-overlay ${isModalVisible ? 'modal-transition' : ''}`}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-nav-button modal-nav-left" onClick={handlePrevImage}>
            ◁
            </button>
            <img
              key={selectedImageIndex} 
              src={projects[selectedImageIndex].image}
              alt={projects[selectedImageIndex].title}
              className={`modal-image ${isModalVisible ? 'fade-in' : ''}`}
            />
            <button className="modal-nav-button modal-nav-right" onClick={handleNextImage}>
            ▷
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;