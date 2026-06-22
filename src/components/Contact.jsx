import { MapPin, Phone, Mail, Clock } from "lucide-react";
import cafeInterior from "../assets/cafe-interior.jpg";

function Contact() {
  return (
    <section id="contact" className="w-full bg-[#2C1810] py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN: Contact Information */}
        <div className="flex flex-col">
          {/* Accent Line & Overline Text */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#D4A373]"></div>
            <span className="text-[#D4A373] font-bold tracking-widest text-sm uppercase">
              Keep Close
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFBF2] mb-6 font-serif">
            Get In Touch
          </h2>

          <p className="text-[#E6D2B5] mb-12 max-w-md leading-relaxed text-sm">
            Whether you're looking for your morning pick-me-up or a cozy corner
            to study, we'd love to see you. Reach out with any questions about
            our sourcing, reservations, or private events.
          </p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-16">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin
                className="w-6 h-6 text-[#D4A373] shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#FFFBF2] text-sm leading-relaxed">
                  123 Espresso Lane,
                  <br />
                  Coffee District, NY 10012
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone
                className="w-6 h-6 text-[#D4A373] shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#FFFBF2] text-sm leading-relaxed">
                  (+1) 555 123 4567
                  <br />
                  (+1) 555 987 6543
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail
                className="w-6 h-6 text-[#D4A373] shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#FFFBF2] text-sm leading-relaxed">
                  hello@everydayadventure.com
                  <br />
                  events@everydayadventure.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock
                className="w-6 h-6 text-[#D4A373] shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#FFFBF2] text-sm leading-relaxed">
                  Open 07:00 am EST
                  <br />
                  Closed 09:00 pm EST
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-[#FFFBF2] font-bold mb-6 tracking-widest text-sm uppercase">
              Follow Us
            </h3>
            <div className="flex gap-6">
              {/* Facebook SVG */}
              <a
                href="#"
                className="text-[#D4A373] hover:text-[#FFFBF2] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram SVG */}
              <a
                href="#"
                className="text-[#D4A373] hover:text-[#FFFBF2] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* Twitter SVG */}
              <a
                href="#"
                className="text-[#D4A373] hover:text-[#FFFBF2] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Replacement for the Form */}
        <div className="w-full h-full min-h-100 lg:min-h-150 rounded-lg overflow-hidden relative shadow-2xl border border-white/10">
          <img
            src={cafeInterior}
            alt="Cafe Interior"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Subtle dark overlay to ensure it blends nicely with the section */}
          <div className="absolute inset-0 bg-[#2C1810]/20"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
