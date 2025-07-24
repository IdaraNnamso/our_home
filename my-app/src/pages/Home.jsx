import React, { useEffect, useState } from "react";
import "../css/home.css"; 
import { Link } from "react-router-dom";
import Topnav from "../components/topnav";

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
      <Topnav />
      <div className="huddle-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="https://motionbgs.com/media/5411/bmw-m5-in-dark.960x540.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
