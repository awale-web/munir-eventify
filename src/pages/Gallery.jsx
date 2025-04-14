import React from 'react';
import '../style/Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Our Event Gallery</h2>
      <div className="gallery-container">

        <div className="gallery-item">
          <img src="/images/baby-showering.jpg" alt="Baby Shower" />
          <p>Baby Shower</p>
        </div>

        <div className="gallery-item">
          <img src="/images/baby-shower.jpg" alt="Baby Shower" />
          <p>Baby Shower</p>
        </div>
        
        <div className="gallery-item">
          <img src="/images/Somali-wedding.jpg" alt="Wedding" />
          <p>Somali Wedding</p>
        </div>
        
        <div className="gallery-item">
          <img src="/images/wedding.jpg" alt="Wedding" />
          <p>Wedding</p>
        </div>

        <div className="gallery-item">
          <img src="/images/Anniversary- party.jpg" alt="Anniversary" />
          <p>Anniversary</p>
        </div>

        <div className="gallery-item">
          <img src="/images/birthday-party.jpg" alt="Birthday" />
          <p>Birthday</p>
        </div>

      </div>
    </section>
  );
};

export default Gallery;