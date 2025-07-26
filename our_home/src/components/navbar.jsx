import React, { useState } from 'react';
import '../../css/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">OURHOME🐾</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#gallery">Shop now</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#adoption">Adopt</a></li>
      </ul>
    </nav>
  );
}
