import React from "react";
import "../styles/FloatingContact.css";

export default function FloatingContact() {
     const phoneNumber = "+19496076318"; // your phone number
  const phoneLink = `tel:${phoneNumber}`;
  return (
    <div className="floating-contact">
    {/* Phone Button */}
      <a
        href={phoneLink}
        className="contact-btn phone"
        aria-label="Call us now"
      >
        📞 +1 949-607-6318
      </a>
      {/* Phone/WhatsApp */}
      <a
        href="https://wa.me/19496076318?text=Hello%2C%20I%20am%20interested%20in%20your%20party%20rentals!"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        📱 Chat on WhatsApp
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/hareramapartyrentals_dj_decor/?igsh=cXRxbXd1a3d6em5n#"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn instagram"
        aria-label="Follow on Instagram"
      >
        📸 Instagram
      </a>
    </div>
  );
}
