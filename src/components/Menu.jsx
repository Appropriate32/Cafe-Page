import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import espressoImg from "../assets/classic-espresso.jpg";
import macchiatoImg from "../assets/caramel-macchiato.jpg";
import flatWhite from "../assets/velvet-white.jpg";
import coldBrew from "../assets/cold-brew.jpg";
import mochaCoffee from "../assets/mocha-coffee.jpg";
import icedAmericano from "../assets/iced-americano.jpg";

function Menu() {
  const coffeeMenu = [
    {
      id: 1,
      name: "Classic Espresso",
      description: "Rich, full-bodied espresso with a velvety crema.",
      price: "$3.50",
      tag: "Popular", // Optional, good for little UI badges
      image: espressoImg,
    },
    {
      id: 2,
      name: "Caramel Macchiato",
      description: "Espresso combined with vanilla-flavored syrup and milk.",
      price: "$4.50",
      image: macchiatoImg,
    },
    {
      id: 3,
      name: "Velvet Flat White",
      description:
        "Smooth ristretto shots blended with perfectly micro-foamed milk.",
      price: "$4.25",
      image: flatWhite,
    },
    {
      id: 4,
      name: "24-Hour Cold Brew",
      description:
        "Slow-steeped in cool water for a super smooth, less acidic finish.",
      price: "$4.00",
      tag: "Refreshing",
      image: coldBrew,
    },
    {
      id: 5,
      name: "Dark Roast Mocha",
      description:
        "Espresso layered with rich dark chocolate ganache and warm milk.",
      price: "$4.75",
      image: mochaCoffee,
    },
    {
      id: 6,
      name: "Iced Americano",
      description:
        "Crisp, bold espresso poured directly over filtered water and ice.",
      price: "$3.00",
      image: icedAmericano,
    },
  ];

  return (
    <section id="menu" className="w-full bg-transparent py-12">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-[#2C1810] font-bold text-4xl mb-16 tracking-tight">
          Our Menu
        </h2>

        {/* Adjusted gap to give the larger cards breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {coffeeMenu.map((item) => (
            <Card
              key={item.id}
              className="border-white/40 bg-[#FFFBF2]/60 backdrop-blur-md hover:bg-[#FFFBF2]/80 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container - Top Centered */}
              <div className="pt-8 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  // w-28 h-28 forces a perfect circle, object-cover prevents stretching
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#FFFBF2] shadow-md"
                />
              </div>

              {/* Text Content - Center Aligned */}
              <CardHeader className="pb-3 text-center">
                <CardTitle className="text-2xl font-bold text-[#2C1810] mb-3">
                  {item.name}
                </CardTitle>
                <div className="flex justify-center">
                  <span className="bg-[#2C1810] text-[#FFFBF2] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-sm">
                    {item.price}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="text-center pb-8">
                <CardDescription className="text-[#4A3022] text-sm font-medium leading-relaxed px-2">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
