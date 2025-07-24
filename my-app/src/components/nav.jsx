import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar2.css";

export default function Topnav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar2">
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <ul className={menuOpen ? "show" : ""}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/model">Models</Link></li>
      <li><Link to="/technology">Technology</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/more">More</Link></li>
    </ul>
  </nav>
  
  );
}
