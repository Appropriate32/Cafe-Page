import { Button } from "./ui/button";
import coffeeImage from "../assets/beans.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      id="home"
      className="w-full pt-32 pb-12 flex justify-center items-center overflow-hidden"
    >
      <main className="max-w-7xl gap-8 w-full mx-auto px-8 flex flex-col py-14 md:flex-row">
        <motion.div
          className="p-2 flex flex-col justify-center gap-6 py-12 md:py-0 w-full md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl text-[#5D4037] italic font-serif">
            Coffee For
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810]">
            Everyday Adventure
          </h1>
          <p className="text-[#4A3022] max-w-md leading-relaxed">
            Whether you're conquering a mountain of emails or exploring new city
            streets, every great journey starts with the perfect cup. We roast
            bold, ethically sourced beans to fuel your daily grind and awaken
            your next big idea.
          </p>
          <div className="flex gap-4 items-baseline">
            <Button
              variant="outline"
              className="text-[#2C1810] hover:bg-[#2C1810] hover:text-[#FDF8EE] bg-transparent border border-[#2C1810]"
            >
              Get yours now
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#EBDABB] hover:text-amber-900 hover:transform hover:scale-110"
            >
              Get reservation &rarr;
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src={coffeeImage}
            alt="beans"
            className="w-full max-w-xs md:max-w-md lg:max-w-full drop-shadow-[0_10px_20px_rgba(60,30,0,0.6)] object-contain hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </main>
    </div>
  );
}

export default Hero;
