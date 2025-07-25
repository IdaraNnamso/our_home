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

const modelCategories = [
  {
    category: "Electric",
    cars: [
      {
        name: "BMW i8",
        image: "https://i.pinimg.com/1200x/6f/f0/a4/6ff0a49488627b6cd8df22229d6e0c29.jpg",
        description: "Plug-in hybrid sports car with futuristic design and performance.",
        tag: "Electric",
      },
    ],
  },
  {
    category: "Luxury SUV",
    cars: [
      {
        name: "Luxury crossover with coupe styling and dynamic driving feel.",
        image: "https://wallpapercave.com/wp/wp8850596.jpg",
        description:"",
        tag: "Luxury SUV",
      },
    ],
  },
  {
    category: "Sports",
    cars: [
      {
        name: "BMW M4",
        image: "https://cdn.bmwblog.com/wp-content/uploads/2020/09/2021-bmw-m4-coupe-competition-g82-02.jpg",
        description: "High-performance sports coupe engineered for ultimate thrills.",
        tag: "Sports",
      },
    ],
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
        {modelCategories.map((group, idx) => (
          <div key={idx}>
            <h2 className="category-heading">{group.category}</h2>
            <div className="category-cards">
              {group.cars.map((car, index) => (
                <div key={index} className="model-card">
                  <span className="tag">{car.tag}</span>
                  <img src={car.image} alt={car.name} />
                  <div className="info">
                    <h3>{car.name}</h3>
                    <p>{car.description}</p>
                    <button className="view-more-btn">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="tech-footer">
        &copy; {new Date().getFullYear()} BMW Innovation Hub — All Rights Reserved.
      </footer>
    </div>
  );
}
