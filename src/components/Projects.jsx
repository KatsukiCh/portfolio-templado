import React, { useState } from 'react';
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
  const galleryImages = [
    { src: art1, alt: 'Commissioned Art #1' },
    { src: art2, alt: 'Blue Archive Fan Project' },
    { src: art3, alt: 'Gift to my GF' },
    { src: art4, alt: 'Commissioned Art #2' },
    { src: art5, alt: 'Izayoi Nonomi' },
    { src: art6, alt: 'A Very Angy Ayane' },
    { src: art7, alt: 'Prince Ichika' },
    { src: art8, alt: 'Sakurada Miyu' },
    { src: art9, alt: 'Natsuki Mizuha' },
    { src: art10, alt: 'What if we were actually teachers?' },
  ];

 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };


  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Woosh! You are now in my art Gallery!</h2>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(image)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="overlay">
              <p>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;