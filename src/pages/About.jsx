import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1>Inspire. Create. Celebrate.</h1>
        <h2>Elevate Your Events with Hare Rama</h2>
        <p>
          Welcome to <strong>Hare Rama Events</strong>, where we transform your special moments into unforgettable experiences. 
          With a passion for creativity and commitment to excellence, we are your trusted event planning partners, dedicated to making every celebration truly extraordinary.
        </p>
      </div>

      <div className="about-mission">
        <h3>Our Mission</h3>
        <p>
          At Hare Rama Events, every event is an opportunity to tell a story that reflects your personality and style. 
          We go beyond the ordinary to create experiences that leave a lasting impression. Each detail is curated with precision and creativity to ensure flawless execution that exceeds your expectations.
        </p>
      </div>

      <div className="about-philosophy">
        <h3>Where Joy Meets Celebration</h3>
        <p>
          We are passionate about celebrating life’s most precious moments. Our philosophy blends timeless elegance with modern sophistication 
          to create events that are both classic and contemporary. Your happiness is our ultimate reward.
        </p>
      </div>
    </section>
  );
}
