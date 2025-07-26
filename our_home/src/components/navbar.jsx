import React from 'react'
import '../../css/navbar.css';

export default function Navbar() {
    return (
<nav className="navbar">
<div className="logo">OURHOME</div>
<ul className="nav-links">
  <li><a href="#gallery">Gallery</a></li>
  <li><a href="#categories">Categories</a></li>
  <li><a href="#adoption">Adopt</a></li>
</ul>
</nav>
)
}