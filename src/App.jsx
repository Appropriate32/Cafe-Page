import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6D2B5] via-[#D4A373] to-[#C18A58] items-center justify-center">
      <Navbar />
      <Hero />
      <Menu />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
