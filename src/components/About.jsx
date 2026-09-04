import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT — 3 OVAL IMAGES */}
        <div className="about-gallery">

          <div className="about-image image-one">
            <img src={about1} alt="V PLAN Interior" />
          </div>

          <div className="about-image image-two">
            <img src={about2} alt="V PLAN Interior" />
          </div>

          <div className="about-image image-three">
            <img src={about3} alt="V PLAN Interior" />
          </div>

        </div>

        {/* RIGHT — CONTENT */}
        <div className="about-content">
          <h1 className="section-label">ABOUT V PLAN</h1>

          <h2>
            We create spaces
            <br />
            <span>with purpose.</span>
          </h2>

          <p className="about-text">
            V PLAN Interiors & Contracting is a design and construction
            company focused on creating thoughtful, functional, and
            timeless spaces.
          </p>

          <p className="about-text">
            From concept to completion, we bring together design,
            craftsmanship, and execution to transform ideas into
            spaces that truly belong to you.
          </p>

          <a href="#services" className="about-link">
            Discover Our Approach
            <span>↗</span>
          </a>
        </div>

      </div>

      {/* STATS */}
      <div className="about-stats">

        <div className="stat">
          <h3>100+</h3>
          <p>PROJECTS DELIVERED</p>
        </div>

        <div className="stat">
          <h3>10+</h3>
          <p>YEARS EXPERIENCE</p>
        </div>

        <div className="stat">
          <h3>100%</h3>
          <p>COMMITMENT</p>
        </div>

      </div>
    </section>
  );
}

export default About;