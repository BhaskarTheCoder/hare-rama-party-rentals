import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingContact from "./components/FloatingContact";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Packages from "./pages/Packages";
// import Catering from "./pages/Catering";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/catering" element={<Catering/>} /> */}
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
      {/* Floating contact buttons */}
      <ContactForm />
      <FloatingContact />
    </>
  );
}

export default App;
