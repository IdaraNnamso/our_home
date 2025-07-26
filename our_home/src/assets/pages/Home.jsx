import React from 'react';
import '../../css/home.css';
import Navbar from '../../components/navbar.jsx';

export default function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <h1 className="site-title">OURHOME</h1>
        <p className="tagline">Where Pets Feel at Home</p>
        <a href="#categories" className="cta-button">Explore Categories</a>
      </header>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2>Our Lovely Pets</h2>
        <div className="gallery">
          <div className="gallery-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg" alt="Kitten" />
            <p>Fluffy the Kitten</p>
          </div>
          <div className="gallery-card">
            <img src="https://placedog.net/250/200?id=1" alt="Puppy" />
            <p>Bingo the Puppy</p>
          </div>
          <div className="gallery-card">
            <img src="https://animalcorner.org/wp-content/uploads/2015/02/british-wild-cat-1.jpg" alt="Cat" />
            <p>Luna the Cat</p>
          </div>
          <div className="gallery-card">
            <img src="https://placedog.net/251/200?id=2" alt="Dog" />
            <p>Max the Dog</p>
          </div>
        </div>
      </section>

      {/* Pet Categories Section */}
      <section id="categories" className="categories-section">
        <h2>Pet Categories</h2>
        <div className="category-cards">
          <div className="category-item">
            <video
              src="https://cdn.pixabay.com/video/2021/11/24/98821-650523129_large.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="overlay">
              <h3>Dogs</h3>
            </div>
          </div>

          <div className="category-item">
            <video
              src="https://cdn.pixabay.com/video/2023/06/13/167029-835960468_large.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="overlay">
              <h3>Cats</h3>
            </div>
          </div>

          <div className="category-item">
            <video
              src="https://cdn.pixabay.com/video/2021/06/15/77785-564423245_large.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="overlay">
              <h3>Birds</h3>
            </div>
          </div>

          <div className="category-item">
            <video
              src="https://cdn.pixabay.com/video/2024/02/10/200082-911902222_large.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="overlay">
              <h3>Rabbits</h3>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
      <div className="footer-content">
        {/* About */}
        <div className="footer-section about">
          <h2>OURHOME</h2>
          <p>Your trusted destination for finding and adopting pets. We connect loving homes with lovable animals.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#adoption">Adopt</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@ourhomepets.com</p>
          <p>Phone: +234 812 345 6789</p>
          <p>Location: Lagos, Nigeria</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OURHOME. All rights reserved.</p>
      </div>
    </footer>
    </div>

    
  );
}
