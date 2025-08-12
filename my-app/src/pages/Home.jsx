import React, { useEffect, useState } from "react";
import "../css/home.css";
import Topnav from "../components/topnav";
import { Link } from "react-router-dom";
import FuzzyText from "../components/fuzzytext";
import video from "../video/vid.mp4";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const hoverIntensity = 0.5;
  const enableHover = true;

  useEffect(() => {
    const hasHash = window.location.hash;
    if (!hasHash) {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="page-loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-wrapper">
      <Topnav />

      <video autoPlay loop muted playsInline className="background-video">
        <source src={video} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>

      <div className="huddle-container">
        <div className="hero-content">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={hoverIntensity}
            enableHover={enableHover}
          >
          </FuzzyText>
        </div>
      </div>

      <div className="split-section">
        <div className="split-video">
          <video autoPlay loop muted playsInline>
            <source
              src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/panoramic/panoramic-00-teaser-hd.mp4"
              type="video/mp4"
            />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
        <div className="split-text">
          <h2>THE BMW PANORAMIC iDRIVE</h2>
          <p>
            BMW redefines innovation and driving precision. Witness our next-generation designs that
            blend technology with power.
          </p>
        </div>
      </div>

      <div className="models-section">
        <div className="models-header">
          <h2>ALL BMW MODELS</h2>
          <p className="find-your-bmw">Find your BMW</p>
        </div>

        <div className="models-grid">
          <Link to="/model" className="model-card featured">
            <video autoPlay loop muted playsInline className="model-video-bg">
              <source
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/bmw-intelligence/bi-01-stage-hd.mp4"
                type="video/mp4"
              />
              <p>Your browser does not support the video tag.</p>
            </video>
            <div className="model-info">
              <h3>BMW Intelligence</h3>
              <span className="model-tag">Smart Tech</span>
              <p className="model-description">
                Discover cutting-edge technology inside every BMW model.
              </p>
            </div>
          </Link>

          <Link to="/model" className="model-card featured">
            <video autoPlay loop muted playsInline className="model-video-preview">
              <source
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/hoj/hoj-01-stage-hd.mp4"
                type="video/mp4"
              />
              <p>Your browser does not support the video tag.</p>
            </video>
            <div className="model-info">
              <h3>Joy of Driving</h3>
              <span className="model-tag">Performance</span>
              <p className="model-description">
                Pure adrenaline, crafted in Germany's finest engineering.
              </p>
            </div>
          </Link>
        </div>

        <div className="bmw-intelligence">
          <p>BMW Intelligence</p>
        </div>
      </div>

      <div className="split-section2">
        <div className="split-video2">
          <video autoPlay loop muted playsInline>
            <source
              src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/bmw-explained-logo/exl-01-stage-hd9.mp4"
              type="video/mp4"
            />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
        <div className="split-text2">
          <h2>BECOME A BMW EXPERT</h2>
          <button className="view-more-btn" aria-label="Learn more about BMW">BMW EXPLAINED</button>
        </div>
      </div>

      <div className="about-section" id="about">
        <h2>About BMW</h2>
        <p>
          At BMW, we are driven by innovation, performance, and a relentless pursuit of excellence.
          Our legacy spans over a century, crafting luxury vehicles that combine art, engineering,
          and technology into a unique driving experience.
        </p>
        <div className="about-highlights">
          <div className="highlight-box">
            <h4>Legacy</h4>
            <p>Over 100 years of automotive innovation and passion.</p>
          </div>
          <div className="highlight-box">
            <h4>Technology</h4>
            <p>Integrating AI, iDrive, and sustainable performance.</p>
          </div>
          <div className="highlight-box">
            <h4>Design</h4>
            <p>Iconic designs that define luxury and sportiness.</p>
          </div>
        </div>
      </div>

      <div className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or want to connect? Reach out below.</p>
        <form className="contact-form" aria-label="Contact Form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" aria-label="Send Message">Send Message</button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="javascript:void(0);">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="javascript:void(0);">Blog</a></li>
              <li><a href="javascript:void(0);">Showroom</a></li>
              <li><a href="javascript:void(0);">Dealer Locator</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="javascript:void(0);">Privacy Policy</a></li>
              <li><a href="javascript:void(0);">Terms of Service</a></li>
              <li><a href="javascript:void(0);">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BMW Experience. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
