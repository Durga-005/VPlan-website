import { useEffect, useState } from "react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const heroImages = [
  hero1,
  hero2,
  hero3,
  hero4,
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">

      {/* Background Images */}

      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`hero-background ${
            index === currentImage ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Overlay */}

      <div className="hero-overlay"></div>


      {/* Content */}

      <div className="hero-content">

        <h1>
          Spaces That
          <br />
          <span>Speak.</span>
        </h1>

        <p className="hero-description">
          We design and build sophisticated spaces that blend
          functionality, elegance, and timeless design.
        </p>

        <div className="hero-buttons">
          <a
            href="#contact"
            className="hero-btn secondary"
          >
            Let's connect
          </a>

        </div>

      </div>


      {/* V PLAN */}

      <div className="hero-brand">
  <div className="hero-brand-name">
    V PLAN
  </div>

  <div className="hero-brand-subtitle">
    INTERIORS & CONTRACTING
  </div>
</div>


      {/* Bottom */}

      <div className="hero-bottom">

        <span>SCROLL TO EXPLORE ↑</span>

        <div className="scroll-line"></div>

      </div>

    </section>
  );
}

export default Hero;