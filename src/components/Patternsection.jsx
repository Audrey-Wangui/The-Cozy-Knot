import React from 'react'
import "../css/Patternsection.css"; 
import mainPattern from '../images/background.jpg'; 
import overlayPattern from '../images/cherryblossomstitch.png';

const Patternsection = () => {
  return (
    <section className="pattern-container">
      <div className="pattern-content">
        
        {/* Left Side: Overlapping Images */}
        <div className="image-stack">
          <div className="image-main">
            <img src={mainPattern} alt="pattern" />
          </div>
          <div className="image-overlay">
            <img src={overlayPattern} alt="pattern" />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-side">
          <h2 className="title">Crochet Patterns <br /> styles</h2>
          <p className="description">
            Unlock your creativity through rhythmic stitching, blending vibrant yarns into intricate textures. These versatile crochet patterns transform simple loops into cozy blankets, stylish apparel, and whimsical amigurumi. Perfect for handmade enthusiasts, each design offers a rewarding journey from basic chains to timeless, personalized treasures for any home.
          </p>
          
        </div>

      </div>
    </section>
  );

}

export default Patternsection;