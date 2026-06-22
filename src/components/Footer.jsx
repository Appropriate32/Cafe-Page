function Footer() {
  return (
    <footer className="w-full bg-[#1A0F0A] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[#E6D2B5]/80 text-sm text-center md:text-left tracking-wide">
          © {new Date().getFullYear()} Everyday Adventure. All rights reserved.
        </div>

        <div className="flex gap-8 text-sm text-[#D4A373]">
          <a
            href="#"
            className="hover:text-[#FFFBF2] transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-[#FFFBF2] transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
