"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const bannerImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
  "/images/banner5.jpg",
  "/images/banner6.jpg",
  "/images/banner7.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* 🎉 Welcome Banner */}
      <div className="welcome-banner">
        <h1>🎉 Welcome Members! 🎉</h1>
        <div className="confetti"></div>
      </div>

      {/* CTA Button */}
      <div className="trip-message">
        <h2>Plan Your Trip With Us!</h2>
        <Link to="/contact" className="trip-button">
          Plan Your Trip
        </Link>
      </div>

      {/* Images */}
      <div className="hero-left">
        <div className="banner-track">
          {[...bannerImages, ...bannerImages].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Banner ${idx + 1}`}
              className={`banner-image ${currentIndex === idx ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      
    </section>
  );
}
