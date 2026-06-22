import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "MENU", href: "#menu" },
    { name: "CONTACT", href: "#contact" },
    { name: "ABOUT US", href: "#about" },
  ];

  return (
    <header className="w-full bg-transparent absolute top-0 z-50">
      <nav className="flex max-w-7xl mx-auto justify-between items-center relative z-20 px-8 py-4">
        <div className="w-16 shrink-0 h-16 bg-[#3E2723] text-[#FFFBF2] border-[#3E2723]  rounded-full flex items-center justify-center text-xs font-bold border">
          LOGO
        </div>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-[#3E2723] whitespace-nowrap font-bold tracking-wider text-sm cursor-pointer hover:text-[#FFFBF2] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!isOpen)}
            className="text-gray-900 hover:text-[#B38B5D]"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </Button>
        </div>
      </nav>
      <div
        className={`md:hidden absolute z-10 w-full left-0 top-0 pt-24 bg-[#FFFBF2] shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 border-b-4 border-[#3E2723]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center pb-8 gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                // Automatically close the menu when they click a link
                onClick={() => setOpen(false)}
                className="text-[#3E2723] whitespace-nowrap font-bold tracking-widest text-lg cursor-pointer hover:text-[#C18A58] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
