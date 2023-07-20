import React from 'react';
import './HomePage.css';
import ITfieldImage from '../../assets/images/ITfield.jpg';
import ITfield1Image from '../../assets/images/ITfield1.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="section">
        <div className="column">
          <img src={ITfieldImage} alt="IT Field 1" />
          <h2>IT Company</h2>
          <p>IT Company that we own serves the best results.</p>
        </div>
        <div className="column">
          <img src={ITfield1Image} alt="IT Field 2" />
          <h2>IT Expertise</h2>
          <p>Content for all the IT Expertise with Hands on experience.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
