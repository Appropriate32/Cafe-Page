import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] items-center justify-center">
      <Navbar />
      <Hero />
      <Menu />
    </div>
  );
}

export default App;
