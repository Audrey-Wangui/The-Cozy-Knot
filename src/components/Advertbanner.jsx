import React from 'react';
import '../css/Advert.css';

import img1 from '../images/debbby bliss wool yarn.jpg';
import img2 from '../images/plastic darning needles.jpg';
import img3 from '../images/lotus stitch.png';
import img4 from '../images/bamboo blend cotton yarn.jpg';
import img5 from '../images/cat stichmarker.jpg';
import img6 from '../images/bamboo blend cotton yarn.jpg';
import img7 from '../images/heart locking stitch markers.jpg';
import img8 from '../images/debbby bliss wool yarn.jpg';



const Advert = () => {
  return (
    <section className="photo-section">
      
      {/* Top Row: 4 Images */}
      <div className="image-grid">
        <img src={img1} alt="photo" />
        <img src={img2} alt="photo" />
        <img src={img3} alt="photo" />
        <img src={img4} alt="photo" />
      </div>

      {/* Middle Section: Dark Banner */}
      <div className="photo-banner">
        <h2 className="photo-title">Hot Deal Each Week!!</h2>
        <p className="photo-text">
          Experience this tempting offer featuring incredible savings. Unbeatable value meets premium quality, creating a truly irresistible opportunity you cannot miss.

        </p>
      </div>

      {/* Bottom Row: 4 Images */}
      <div className="image-grid">
        <img src={img5} alt="photo" />
        <img src={img6} alt="photo" />
        <img src={img7} alt="photo" />
        <img src={img8} alt="photo" />
      </div>

    </section>
  );
};

export default Advert;
