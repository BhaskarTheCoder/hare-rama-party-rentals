"use client";
import React, { useEffect, useState } from "react";
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
    }, 2000); // rotate every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
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
