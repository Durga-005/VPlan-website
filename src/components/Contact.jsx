import React, { useEffect } from "react";
import "./Contact.css";
import logo from "../assets/logo-removebg-preview.png";

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" id="contact">

      {/* Background Logo */}
      <img
        src={logo}
        alt=""
        className="contact-bg-logo"
      />

      <div className="contact-container">

        {/* ================= HEADER ================= */}
        <div className="contact-header contact-reveal">
          <span className="contact-small-title">CONTACT</span>

          <h1>
            LET'S <span>TALK</span>
          </h1>

          <p>
            Let's create something meaningful together.
            Tell us about your project and let's bring your
            vision to life.
          </p>
        </div>


        {/* ================= CONTACT CONTENT ================= */}
        <div className="contact-content">

          {/* ================= FOUNDER ================= */}
          <div className="founder-block contact-reveal">

            

            <h2>
              Vignesh
            </h2>

            <div className="founder-line"></div>

            <p>
              Building thoughtful spaces through
              design, precision and execution.
            </p>

          </div>


          {/* ================= CONTACT DETAILS ================= */}
          <div className="contact-details">

            {/* PHONE */}
            <a
              href="tel:+918639169498"
              className="contact-detail contact-reveal"
            >
              <div className="contact-icon">
                <i className="bx bx-phone"></i>
              </div>

              <div className="contact-info">
                <span className="contact-label">
                  PHONE
                </span>

                <span className="contact-value">
                  +91 8639169498
                </span>

                <span className="contact-action-text">
                  Tap to call
                </span>
              </div>
            </a>


            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@vplaninterior.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail contact-reveal"
                >
              <div className="contact-icon">
                <i className="bx bx-envelope"></i>
              </div>

              <div className="contact-info">
                <span className="contact-label">
                  EMAIL
                </span>

                <span className="contact-value">
                  connect@vplaninterior.com
                </span>

                <span className="contact-action-text">
                  Tap to email
                </span>
              </div>
            </a>


            {/* LOCATION */}
            {/* LOCATION */}
<a
  href="https://maps.app.goo.gl/BErqv7CWq36oe8L16"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-detail contact-reveal"
>
  <div className="contact-icon">
    <i className="bx bx-map"></i>
  </div>

  <div className="contact-info">
    <span className="contact-label">
      LOCATION
    </span>

    <span className="contact-value">
       Secunderabad, Telangana, India
    </span>

    <span className="contact-action-text">
      View location
    </span>
  </div>
</a>


            {/* SOCIAL */}
            <div className="contact-social contact-reveal">

              <span className="contact-label">
                CONNECT
              </span>

              <div className="social-links">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/yourusername/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>


                {/* WHATSAPP */}
                <a
                  href="https://wa.me/918639169498"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="bx bxl-whatsapp"></i>
                </a>

              </div>

            </div>

          </div>
        </div>


        {/* ================= CTA ================= */}
        <div className="contact-action contact-reveal">

          <span>
            READY TO BUILD SOMETHING GREAT?
          </span>

          <a
  href="#contact"
  className="contact-cta"
>
  START A PROJECT
  <i className="bx bx-right-arrow-alt"></i>
</a>

        </div>


        {/* ================= FOOTER ================= */}
        <footer className="contact-footer contact-reveal">

          <img
            src={logo}
            alt="V PLAN"
            className="footer-logo"
          />

          <p>
            design. build. deliver.
          </p>

          <span>
            © {new Date().getFullYear()} V PLAN Interiors & Contracting.
            All rights reserved.
          </span>

        </footer>

      </div>
    </section>
  );
};

export default Contact;