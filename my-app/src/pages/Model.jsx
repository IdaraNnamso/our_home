import React, { useEffect, useState } from "react";
import "../css/model.css";
import Nav from "../components/nav";

const carouselImages = [
  {
    src: "https://www.bowkermotorgroup.co.uk/wp-content/uploads/2024/04/gkl-1.jpg",
    title: "THE FUTURE IS ELECTRIC",
  },
  {
    src: "https://wallpapercave.com/wp/wp11826439.jpg",
    title: "BMW PERFORMANCE REDEFINED",
  },
  {
    src: "https://wallpapercave.com/wp/wp15109013.webp",
    title: "THE ULTIMATE DRIVING MACHINE",
  },
  {
    src: "https://wallpapercave.com/wp/wp15109014.webp",
    title: "INNOVATION IN EVERY DETAIL",
  },
];

export default function Model() {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="page-loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <Nav />

      <div className="carousel">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`carousel-image-wrapper ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={img.src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              loading="lazy"
            />
            <div className="carousel-caption">{img.title}</div>
          </div>
        ))}
        <div className="carousel-indicators">
          {carouselImages.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="model-container">
        <div className="model-card">
          <span className="tag">Electric</span>
          <img src="https://i.pinimg.com/1200x/6f/f0/a4/6ff0a49488627b6cd8df22229d6e0c29.jpg" alt="BMW i8" />
          <div className="info">
            <h3>BMW i8</h3>
            <p>Plug-in hybrid sports car with futuristic design and performance.</p>
            <button className="view-more-btn">Learn More</button>
          </div>
        </div>

        <div className="model-card">
          <span className="tag">Luxury SUV</span>
          <img src="https://wallpapercave.com/wp/wp8850596.jpg" alt="BMW X6" />
          <div className="info">
            <h3>BMW X6</h3>
            <p>Luxury crossover with coupe styling and dynamic driving feel.</p>
            <button className="view-more-btn">Learn More</button>
          </div>
        </div>
     
      </div>
      <footer className="tech-footer">
                &copy; {new Date().getFullYear()} BMW Innovation Hub — All Rights Reserved.
            </footer>
    </div>
  );
}
