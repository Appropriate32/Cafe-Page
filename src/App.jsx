import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] items-center justify-center">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
