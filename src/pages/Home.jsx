import React, { useEffect, useState } from "react";
import "../styles/Home.css";

// Example images/video links
const banners = [
  "/banners/banner1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.jpg",
  // add video if you want: "/banners/banner1.mp4"
];

const items = [
  { name: "Chairs", img: "/items/chairs.png" },
  { name: "Rectangular Tables", img: "/items/rect_table.png" },
  { name: "Round Tables", img: "/items/round_table.png" },
  { name: "DJ", img: "/items/dj.png" },
  { name: "Dance Floor 3D", img: "/items/dancefloor.png" },
  { name: "Tents 10x10", img: "/items/tent10x10.png" },
  { name: "Tents 10x20", img: "/items/tent10x20.png" },
  { name: "Stage 4x4", img: "/items/stage4x4.png" },
  { name: "Decorations", img: "/items/decorations.png" },
];

export default function Home() {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticle() {
    return {
      x: random(0, canvas.width),
      y: canvas.height + 10,
      radius: random(1, 3),
      speedY: random(1, 4),
      color: `hsl(${Math.floor(Math.random() * 360)},100%,50%)`,
    };
  }

  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p, i) => {
      p.y -= p.speedY;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      if (p.y < 0) particles[i] = createParticle();
    });
    requestAnimationFrame(animate);
  }

  // initialize particles
  for (let i = 0; i < 80; i++) particles.push(createParticle());
  animate();
}, []);


  return (
    <div className="home-page">
      {/* Banner Section */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${banners[bannerIndex]})` }}
      >
        <div className="banner-overlay">
          <h1 className="banner-title">ONE STOP SHOP</h1>
          <p className="banner-subtitle">Making every celebration unforgettable</p>
        </div>
        <canvas id="fireworks" className="fireworks"></canvas>
      </div>

      {/* Items Section */}
      <section className="items-section">
        <h2>Our Party Rentals</h2>
        <div className="items-grid">
          {items.map((item, i) => (
            <div key={i} className="item-card">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  
}

