import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

import Plataforma1 from "../assets/plataforma-1.jpeg";
import Plataforma2 from "../assets/plataforma-2.jpg";
import Residencial1 from "../assets/residencial-1.jpg";
import Residencial2 from "../assets/residencial-2.jpg";
import Elevator4 from "../assets/elevator-4.png";
import Elevator6 from "../assets/elevator-6.png";
import Solutions1 from "../assets/solutions-1.png";

const images = [
  Plataforma1,
  Plataforma2,
  Residencial1,
  Residencial2,
  Solutions1,
  Elevator4,
  Elevator6,
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <section className="flex flex-col md:flex-row w-full max-w-2xl mx-auto select-none">
        <div className="flex-1 flex justify-center items-center h-[60vh] md:h-[85vh] relative">
          <button
            onClick={() =>
              setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-red-500 text-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
            aria-label="Imagem anterior"
          >
            &#8592;
          </button>
          <button
            onClick={() =>
              setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
            }
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-500 text-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
            aria-label="Próxima imagem"
          >
            &#8594;
          </button>
          <img
            src={images[current]}
            alt={`Imagem ${current + 1}`}
            className="rounded-md shadow-md w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:scroll-none md:px-2 py-2 md:py-0 md:h-[85vh]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 ${
                index === current
                  ? "border-red-500"
                  : "border-transparent opacity-50"
              } cursor-pointer shadow-md`}
              onClick={() => setCurrent(index)}
            >
              <img
                src={img}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
