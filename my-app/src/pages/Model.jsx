import React, { useEffect, useState } from "react";
import "../css/model.css";
import Nav from "../components/nav";
import { Link } from "react-router-dom";

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
    route: "/electric",
    category: "Electric",
    cars: [
      {
        name: "Plug-in hybrid sports car with futuristic design and performance.",
        image: "https://i.pinimg.com/1200x/6f/f0/a4/6ff0a49488627b6cd8df22229d6e0c29.jpg",
        description: "",
        tag: "Electric",
      },
    ],
  },
  {
    route: "/suv",
    category: "Luxury SUV",
    cars: [
      {
        name: "Luxury crossover with coupe styling and dynamic driving feel.",
        image: "https://wallpapercave.com/wp/wp8850596.jpg",
        description: "",
        tag: "Luxury SUV",
      },
    ],
  },
  {
    route: "/sports",
    category: "Sports",
    cars: [
      {
        name: "High-performance sports coupe engineered for ultimate thrills.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m4-coupe-front-three-quarters-motion-65b935ea5dde6.jpg?crop=0.888xw:0.752xh;0.0881xw,0.0865xh&resize=2048:*",
        description: "",
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
              <p>{car.description || "Discover the features and performance."}</p>
              <Link to={group.route}>
                <button className="view-more-btn">View</button>
              </Link>
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
