import React, { useState, useRef } from "react";
import "./Gallery.css";

import project1 from "../assets/gallery/project1.jpeg";
import project2 from "../assets/gallery/project2.jpeg";

import project4 from "../assets/gallery/project4.mp4";
import project5 from "../assets/gallery/project5.mp4";
import project6 from "../assets/gallery/project6.mp4";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const media = [
    { type: "image", src: project1 },
    { type: "image", src: project2 },
    { type: "video", src: project4 },
    { type: "video", src: project5 },
    { type: "video", src: project6 },
  ];

  return (
    <section className="gallery-page">

      <div className="gallery-header">
        <p className="gallery-label">OUR WORK</p>

        <h1>Our Projects</h1>

        <p className="gallery-description">
          A glimpse of our work, spaces and designs.
        </p>
      </div>

      <div className="gallery-grid">

        {media.map((item, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`V Plan Project ${index + 1}`}
              />
            ) : (
              <video
                src={item.src}
                muted
                playsInline
                preload="metadata"
              />
            )}
          </div>
        ))}

      </div>

      {/* FULL SCREEN IMAGE / VIDEO */}

      {selectedMedia && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedMedia(null)}
          >
            ×
          </button>

          {selectedMedia.type === "image" ? (
            <img
              src={selectedMedia.src}
              alt="V Plan Project"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}

    </section>
  );
};

export default Gallery;