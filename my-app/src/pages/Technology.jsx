import React from "react";
import "../css/technology.css";
import Nav from "../components/nav";

export default function Technology() {
    return (
        <div className="technology-page">
            <Nav />

            <header className="tech-hero">
                <div className="tech-hero-content">
                    <h1 className="tech-title">BMW Technology</h1>
                    <p className="tech-subtitle">
                        Experience innovation, precision, and performance through the intelligent systems that drive every BMW.
                    </p>
                </div>
            </header>

            <section className="tech-section">
                <h2 className="tech-section-title">Core Innovations</h2>
                <div className="tech-features">
                    {features.map((feature, index) => (
                        <div key={index} className="tech-feature-box">
                            <div className="tech-feature-icon-wrapper">
                                <img src={feature.icon} alt={feature.title} className="tech-icon" />
                            </div>
                            <h3 className="tech-feature-title">{feature.title}</h3>
                            <p className="tech-feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="tech-footer">
                &copy; {new Date().getFullYear()} BMW Innovation Hub — All Rights Reserved.
            </footer>
        </div>
    );
}

const features = [
    {
        title: "iDrive System",
        description: "Control entertainment, navigation, and vehicle settings with intelligent gesture and voice commands.",
        icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png"
    },
    {
        title: "Electric Drive",
        description: "BMW eDrive delivers sustainable yet powerful electric performance, backed by efficiency and range.",
        icon: "https://cdn-icons-png.flaticon.com/512/1048/1048313.png"
    },
    {
        title: "Laser Headlights",
        description: "Advanced laserlight enhances nighttime vision and creates an iconic signature look.",
        icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
    },
    {
        title: "Autonomous Driving",
        description: "Smart sensors and cameras deliver assisted driving, adaptive cruise control, and safety alerts.",
        icon: "https://cdn-icons-png.flaticon.com/512/3449/3449510.png"
    },
    {
        title: "BMW Connected",
        description: "Control your car remotely via smartphone — start engine, locate car, or manage climate.",
        icon: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
    },
    {
        title: "Carbon Core",
        description: "Reinforced carbon fiber structure that boosts strength while cutting weight for maximum performance.",
        icon: "https://cdn-icons-png.flaticon.com/512/9281/9281722.png"
    },
];
