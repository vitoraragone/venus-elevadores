import { useState } from "react";
import { motion } from "framer-motion";
import Solutions1 from "../assets/solutions-1.png";
import Solutions2 from "../assets/solutions-2.png";
import Solutions3 from "../assets/solutions-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const images = [Solutions1, Solutions2, Solutions3];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4">
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {images.map((src, index) => {
          const isActive = index === current;
          const isPrev = index === prevIndex;
          const isNext = index === nextIndex;

          return (
            <motion.img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="absolute w-[60%] h-[80%] object-cover rounded-xl shadow-lg transition-all duration-500"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? 1 : 0.85,
                x: isActive ? 0 : isPrev ? "-50%" : isNext ? "50%" : 0,
                zIndex: isActive ? 3 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          );
        })}

        <button
          onClick={prevSlide}
          className="z-50 absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200"
          aria-label="Slide anterior"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={nextSlide}
          className="z-50 absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200"
          aria-label="Próximo slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-red-500 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
