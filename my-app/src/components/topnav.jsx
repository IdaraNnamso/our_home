import React from "react";
import "../css/topnav.css";

export default function Topnav() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/model">Models</a></li>
          <li><a href="/technology">Technology</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </div>
  );
}
