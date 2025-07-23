import React, { useEffect, useState } from "react";
import "../css/home.css"; 
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // simulate load
    return () => clearTimeout(timeout);
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
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/model">Models</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/more">More</Link></li>
        </ul>
      </nav>
      <div className="huddle-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="https://motionbgs.com/media/5411/bmw-m5-in-dark.960x540.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
