import "./Services.css";

// =====================================================
// SERVICE IMAGES
// =====================================================

import residential from "../assets/residential.jpg";
import commercial from "../assets/commercial.jpg";
import office from "../assets/office.jpg";
import renovation from "../assets/renovation.jpg";
import contracting from "../assets/contract.jpg";

// =====================================================
// PROCESS IMAGES
// =====================================================

import clientBrief from "../assets/clientbrief.jpg";
import siteVisit from "../assets/sitevisit.jpg";
import spacePlanning from "../assets/spaceplaning.jpg";
import moodboard from "../assets/Moodboard.jpeg";
import technicalDrawing from "../assets/Technicaldrawing.jpeg";
import materials from "../assets/materisl.png";
import budget from "../assets/budgetplaning.png";
import execution from "../assets/execution.png";
import qualityCheck from "../assets/qc.png";
import styling from "../assets/styling.png";

// =====================================================
// SERVICES DATA
// =====================================================

const services = [
  {
    number: "1",
    title: "Residential Interiors",
    description:
      "Thoughtfully designed homes that balance comfort, functionality, personality, and timeless aesthetics.",
    image: residential,
  },

  {
    number: "2",
    title: "Commercial Interiors",
    description:
      "Purpose-driven commercial spaces designed to create strong experiences while supporting business goals.",
    image: commercial,
  },

  {
    number: "3",
    title: "Office Interiors",
    description:
      "Modern and productive workspaces designed around people, collaboration, efficiency, and brand identity.",
    image: office,
  },

  {
    number: "4",
    title: "Renovation & Remodeling",
    description:
      "We transform existing spaces with intelligent planning, refined finishes, and carefully coordinated execution.",
    image: renovation,
  },

  {
    number: "5",
    title: "Civil & Contracting Works",
    description:
      "Reliable execution of civil, structural, and contracting works with attention to quality and detail.",
    image: contracting,
  },
];

// =====================================================
// PROCESS DATA
// =====================================================

const processSteps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Client Brief",
    description:
      "We understand your lifestyle, requirements, vision, preferences, and project goals.",
    image: clientBrief,
  },

  {
    number: "02",
    label: "OBSERVE",
    title: "Site Visit",
    description:
      "We study the site, measurements, existing conditions, possibilities, and practical constraints.",
    image: siteVisit,
  },

  {
    number: "03",
    label: "PLAN",
    title: "Space Planning",
    description:
      "Every space is carefully planned for movement, functionality, proportion, and everyday comfort.",
    image: spacePlanning,
  },

  {
    number: "04",
    label: "DEFINE",
    title: "Concept Moodboard",
    description:
      "We establish the visual direction through materials, textures, colours, forms, and design references.",
    image: moodboard,
  },

  {
    number: "05",
    label: "VISUALIZE",
    title: "3D + Technical Drawing",
    description:
      "Your concept becomes a detailed visual and technical plan ready for accurate execution.",
    image: technicalDrawing,
  },

  {
    number: "06",
    label: "SELECT",
    title: "Materials + Sourcing",
    description:
      "We carefully select finishes, fixtures, furniture, materials, and trusted vendors.",
    image: materials,
  },

  {
    number: "07",
    label: "CONTROL",
    title: "BOQ + Budget Lock",
    description:
      "A transparent BOQ and finalized budget help keep the project financially controlled.",
    image: budget,
  },

  {
    number: "08",
    label: "EXECUTE",
    title: "Site Execute",
    description:
      "Our team brings the design to life through coordinated construction and on-site execution.",
    image: execution,
  },

  {
    number: "09",
    label: "REFINE",
    title: "QC + Snagging",
    description:
      "Every detail is inspected, refined, and checked against the expected quality standards.",
    image: qualityCheck,
  },

  {
    number: "10",
    label: "COMPLETE",
    title: "Styling",
    description:
      "The final layer brings everything together, creating a space that feels complete and yours.",
    image: styling,
  },
];

// =====================================================
// SERVICES COMPONENT
// =====================================================

function Services() {
  return (
    <>
      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}

      <section className="services-section" id="services">

        <div className="services-grid-bg"></div>

        <div className="services-container">

          {/* SERVICES HEADER */}

          <div className="services-header">

            <div>

              <p className="services-label">
                OUR SERVICES
              </p>

              <h2>
                Spaces
                <br />
                <span>with purpose.</span>
              </h2>

            </div>

            <div className="services-intro">

              <span className="services-intro-line"></span>

              <p>
                From thoughtful interiors to complete construction,
                we bring design and execution together under one roof.
              </p>

            </div>

          </div>


          {/* =====================================================
              SERVICE CARDS
          ====================================================== */}

          <div className="services-list">

            {services.map((service) => (

              <article
                className={`service-card service-card-${service.number}`}
                key={service.title}
              >

                {/* SERVICE IMAGE */}

                <div className="service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="service-image-overlay"></div>

                  <span className="service-big-number">
                    {service.number}
                  </span>

                </div>


                {/* SERVICE CONTENT */}

                <div className="service-card-content">

                  <div className="service-card-top">

                    <span>
                      {service.number}
                    </span>

                    <span className="service-arrow">
                      ↗
                    </span>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <div className="service-line"></div>

                </div>

              </article>

            ))}

          </div>


          {/* SERVICES BOTTOM */}

          <div className="services-bottom">

            <span></span>

            <p>
              DESIGN • BUILD • DELIVER
            </p>

            <span></span>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS SECTION
      ====================================================== */}

      <section
        className="process-section"
        id="process"
      >

        <div className="blueprint-grid"></div>

        <div className="process-container">

          {/* =====================================================
              PROCESS HEADER
          ====================================================== */}

          <div className="process-header">

            <div>

              <p className="process-label">
                OUR PROCESS
              </p>

              <h2>
                From idea
                <br />
                <span>to reality.</span>
              </h2>

            </div>


            <div className="process-intro">

              <span className="intro-line"></span>

              <p>
                A carefully structured journey where every
                stage is thoughtfully planned, designed,
                executed, and refined.
              </p>

            </div>

          </div>


          {/* =====================================================
              PROCESS CARDS
          ====================================================== */}

          <div className="process-scroll">

            <div className="process-track">

              {processSteps.map((step) => (

                <article
                  className="process-card"
                  key={step.number}
                >

                  {/* =================================================
                      PROCESS CARD IMAGE
                  ================================================= */}

                  <div className="process-card-image">

                    <img
                      src={step.image}
                      alt={step.title}
                    />

                    <div className="process-image-overlay"></div>

                    <span className="process-big-number">
                      {step.number}
                    </span>

                  </div>


                  {/* =================================================
                      PROCESS CARD CONTENT
                  ================================================= */}

                  <div className="process-card-content">

                    {/* TOP */}

                    <div className="process-card-top">

                      <span className="process-number">
                        {step.number}
                      </span>

                      <span className="process-label-small">
                        {step.label}
                      </span>

                    </div>


                    {/* LINE */}

                    <div className="process-card-line"></div>


                    {/* TITLE */}

                    <h3>
                      {step.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p>
                      {step.description}
                    </p>


                    {/* FOOTER */}

                    <div className="process-card-footer">

                      <span></span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>


          {/* =====================================================
              SCROLL INDICATOR
          ====================================================== */}

          <div className="process-scroll-indicator">

            <span className="process-scroll-line"></span>

            <span>
              SCROLL TO EXPLORE
            </span>

            <span className="process-arrow">
              →
            </span>

          </div>

        </div>

      </section>
    </>
  );
}

// =====================================================
// EXPORT
// =====================================================

export default Services;