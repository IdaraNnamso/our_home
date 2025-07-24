import React, { useEffect, useState } from "react";
import "../css/topnav.css"; 
import { Link } from "react-router-dom";

export default function Topnav() {


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
    </div>
  );
}