import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const startX = useRef(null);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) {
      nextSlide();
    } else if (endX - startX.current > 50) {
      prevSlide();
    }
    startX.current = null;
  };

  return (
    <section className="relative w-full max-w-5xl mx-auto md:px-4">
      <div
        className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={current}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="absolute object-cover rounded-xl shadow-lg w-full h-full md:w-[60%] md:h-[80%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="z-50 absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-md transition-all duration-200"
          aria-label="Slide anterior"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={nextSlide}
          className="z-50 absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-md transition-all duration-200"
          aria-label="Próximo slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-6 md:mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-100 ${
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
