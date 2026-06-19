import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import coffeeImage from "../assets/beans.jpg";

function Navbar() {
  const navLinks = ["HOME", "MENU", "CONTACT", "ABOUT US"];

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <nav className="flex max-w-7xl mx-auto justify-between items-center px-8 py-4">
        <div className="w-16 shrink-0 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold border border-black">
          LOGO
        </div>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-gray-900 whitespace-nowrap font-bold tracking-wider text-sm cursor-pointer hover:text-[#B38B5D] transition-colors"
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-900 hover:text-[#B38B5D]"
          >
            <Menu className="w-12 h-12" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
