import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Home from "../pages/Home";
/**
 * Navbar component
 * - Uses NavLink for active link styling
 * - Responsive hamburger menu
 * - Accessible toggle button (aria-expanded)
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside (desktop + mobile)
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Close menu when a nav link is clicked
  const handleLinkClick = () => setOpen(false);

  return (
    <header>
      <nav className="navbar" ref={navRef}>
        <div className="nav-inner">
          {/* Logo (can be replaced by <img src="/logo.png" ... /> ) */}
          <NavLink
            to="/"
            className="logo"
            onClick={handleLinkClick}
            aria-label="Hare Rama Party Rentals Home"
          >
            <div className="logo">
              <img
                src="/logo.png"
                alt="Hare Rama Party Rentals Logo"
                className="logo-image"
              />
            </div>
            {/* <span className="logo-text">Hare Rama Party Rentals</span> */}
          </NavLink>

          {/* Hamburger toggle (visible on small screens) */}
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          {/* Links */}
          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packages"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
