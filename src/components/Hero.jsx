import { Button } from "./ui/button";
import coffeeImage from "../assets/beans.png";

function Hero() {
  return (
    <div className="w-full pt-32 pb-12 flex justify-center items-center">
      <main className="max-w-7xl gap-8 w-full mx-auto px-8 flex flex-col py-14 md:flex-row">
        <div className="p-2 flex flex-col justify-center gap-6 py-12 md:py-0 w-full md:w-1/2">
          <h1 className="text-4xl text-[#5D4037] italic">Coffee For</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810]">
            Everyday Adventure
          </h1>
          <p className="text-[#4A3022] max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            deleniti voluptatum dolores iure, exercitationem culpa suscipit,
            perferendis tempora obcaecati nam accusantium libero neque impedit
            sint nobis officiis, quidem ad ea.
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
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center ">
          <img
            src={coffeeImage}
            alt="beans"
            className="w-full max-w-xs md:max-w-md lg:max-w-full drop-shadow-[0_10px_20px_rgba(60,30,0,0.6)] object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
      </main>
    </div>
  );
}

export default Hero;
