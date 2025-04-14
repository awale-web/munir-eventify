import React from 'react';
import '../style/Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <p className="services-intro">
        At <strong>MunirEventify</strong>, we specialize in turning your vision into unforgettable memories.
        Whether it's a luxurious wedding, a stylish baby shower, a vibrant birthday party, or a classy corporate gala — we've got you covered.
      </p>

      <div className="services-list">
        <div className="service-item">
          <h3>🌟 Event Planning</h3>
          <p>
            From concept to completion, we plan every detail to perfection. We handle scheduling, logistics,
            theme development, guest management, and vendor coordination to make your event seamless and stress-free.
          </p>
        </div>

        <div className="service-item">
          <h3>🎀 Venue Decoration</h3>
          <p>
            Our decoration team brings charm and elegance to any space. From floral arrangements to lighting,
            backdrops, and table settings — we ensure your event looks as stunning as you imagined.
          </p>
        </div>

        <div className="service-item">
          <h3>🍽️ Catering Services</h3>
          <p>
            Impress your guests with delicious dishes, custom menus, and beautiful presentations.
            Our catering team provides a culinary experience tailored to your taste and event theme.
          </p>
        </div>

        <div className="service-item">
          <h3>📸 Photography & Videography</h3>
          <p>
            Capture every moment with our professional photo and video services.
            From candid shots to cinematic highlights, we’ll preserve the magic forever.
          </p>
        </div>

        <div className="service-item">
          <h3>🎤 Entertainment & Hosting</h3>
          <p>
            We offer MCs, DJs, live bands, and dancers to energize your event.
            Whether formal or festive, we create an atmosphere your guests will never forget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;