import { Button } from "./ui/button";
import coffeeImage from "../assets/beans.png";

function Hero() {
  return (
    <div className="w-full bg-linear-to-br from-[#FFFBF2] to-[#F5E6D3] min-h-screen flex justify-center items-center">
      <main className="max-w-7xl gap-8 w-full mx-auto px-8 flex flex-col md:flex-row">
        <div className="p-2 flex flex-col justify-center gap-6 py-12 md:py-0 w-full md:w-1/2">
          <h1 className="text-4xl text-gray-500 italic">Coffee For</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#B38B5D]">
            Everyday Adventure
          </h1>
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            deleniti voluptatum dolores iure, exercitationem culpa suscipit,
            perferendis tempora obcaecati nam accusantium libero neque impedit
            sint nobis officiis, quidem ad ea.
          </p>
          <div className="flex gap-4 items-baseline">
            <Button
              variant="outline"
              className="text-amber-800 hover:bg-amber-800 hover:text-white bg-transparent border border-amber-800"
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
            className="w-full max-w-xs md:max-w-md lg:max-w-full drop-shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
      </main>
    </div>
  );
}

export default Hero;
