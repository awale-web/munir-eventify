import React from 'react';
import '../style/Gallery.css';

const Gallery = () => {
  const base = import.meta.env.BASE_URL;

  const galleryItems = [
    { src: 'eventdecor.jpg', label: 'Event Decoration' },
    { src: 'birthday-fun.jpg', label: 'Birthday Celebration' },
    { src: 'wedding-moment.jpg', label: 'Wedding Moment' },
    { src: 'conference-hall.jpg', label: 'Conference Setup' },
    { src: 'evening-party.jpg', label: 'Evening Party' },
    { src: 'baby-shower.jpg', label: 'Baby shower' },
  ];

  return (
    <section className="gallery">
      <h2>Our Event Gallery</h2>
      <div className="gallery-container">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={`${base}images/${item.src}`} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
