import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section
      className="flex flex-col md:flex-row w-full max-w-2xl mx-auto select-none"
      aria-labelledby="image-slider-title"
      tabIndex={0} // torna a seção focável para capturar eventos de teclado
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        } else if (e.key === "ArrowRight") {
          setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
      }}
    >
      <h2 id="image-slider-title" className="sr-only">
        Galeria de imagens dos projetos
      </h2>

      <div
        className="flex-1 flex justify-center items-center h-[60vh] md:h-[85vh] relative"
        role="region"
        aria-label="Imagem ampliada da galeria"
      >
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-red-500 text-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          aria-label="Imagem anterior"
        >
          &#8592;
        </button>

        <button
          onClick={() =>
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-500 text-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          aria-label="Próxima imagem"
        >
          &#8594;
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Imagem ${current + 1} de ${images.length}`}
            loading="lazy"
            draggable={false}
            className="rounded-md shadow-md w-full h-full object-cover"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      <div
        className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:scroll-none md:px-2 py-2 md:py-0 md:h-[85vh]"
        role="list"
        aria-label="Lista de miniaturas da galeria"
      >
        {images.map((img, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 ${
              index === current
                ? "border-red-500"
                : "border-transparent opacity-50"
            } cursor-pointer shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500`}
            onClick={() => setCurrent(index)}
            aria-label={`Ver imagem ${index + 1} de ${images.length}`}
            aria-current={index === current ? "true" : undefined}
          >
            <img
              loading="lazy"
              src={img}
              alt={`Miniatura ${index + 1} da galeria`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
