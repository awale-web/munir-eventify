import React from 'react';
import '../style/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="home-content">
        <h1>Welcome to MunirEventify</h1>
        <p>We bring your dream events to life.</p>
       
      </div>
    </div>
  );
};

export default Home;