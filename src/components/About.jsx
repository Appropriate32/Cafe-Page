import { Coffee, Leaf } from "lucide-react";
import wideCafe from "../assets/wide-cafe.jpg";
import beansRoasting from "../assets/beans-roasting.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="w-full bg-[#FFFBF2] py-24 text-[#2C1810]">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-100 sm:h-125"
        >
          <img
            src={wideCafe}
            alt="Barista brewing coffee"
            className="w-4/5 h-4/5 object-cover rounded-lg shadow-xl absolute top-0 left-0"
          />
          {/* Secondary smaller front image */}
          <img
            src={beansRoasting}
            alt="Coffee beans roasting"
            className="w-[55%] h-[55%] object-cover rounded-lg shadow-2xl absolute bottom-0 right-0 border-8 border-[#FFFBF2]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#C18A58]"></div>
            <span className="text-[#C18A58] font-bold tracking-widest text-sm uppercase">
              Our Story
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-6 font-serif">
            Brewing More Than Just Coffee.
          </h2>

          <p className="text-[#4A3022] mb-6 leading-relaxed">
            What started as a small cart in the heart of the district has grown
            into a sanctuary for early risers, deep thinkers, and everyday
            adventurers. We believe that a great cup of coffee is the catalyst
            for great ideas.
          </p>

          <p className="text-[#4A3022] mb-10 leading-relaxed">
            Every bean we roast is ethically sourced, carefully profiled, and
            brewed with an obsessive attention to detail. But at our core, we
            aren't just in the coffee business—we're in the people business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2 pt-8 border-t border-[#E6D2B5]/50">
            <div className="flex items-start gap-4">
              <div className="bg-[#E6D2B5] p-3 rounded-full shrink-0">
                <Leaf className="w-5 h-5 text-[#2C1810]" />
              </div>
              <div>
                <h4 className="font-bold text-[#2C1810] mb-1">
                  Ethical Sourcing
                </h4>
                <p className="text-sm text-[#4A3022]">
                  Direct trade with local farmers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#E6D2B5] p-3 rounded-full shrink-0">
                <Coffee className="w-5 h-5 text-[#2C1810]" />
              </div>
              <div>
                <h4 className="font-bold text-[#2C1810] mb-1">
                  Expert Roasting
                </h4>
                <p className="text-sm text-[#4A3022]">
                  Small batches, zero compromises.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
