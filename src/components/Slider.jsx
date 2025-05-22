import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Plataforma1 from "../assets/plataforma-1.jpeg";
import Plataforma2 from "../assets/plataforma-2.jpg";
import Residencial1 from "../assets/residencial-1.jpg";
import Residencial2 from "../assets/residencial-2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const images = [Plataforma1, Plataforma2, Residencial1, Residencial2];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [modalImage, setModalImage] = useState(null);
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

  // Helpers para indexes da imagem anterior e próxima
  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  return (
    <>
      <section className="relative w-full max-w-5xl mx-auto md:px-4 select-none">
        <div
          className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Preview esquerda */}
          <img
            src={images[prevIndex]}
            alt={`Preview anterior`}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-[60%] w-auto opacity-60  rounded-lg shadow-md select-none"
            style={{ maxWidth: "20%", objectFit: "cover" }}
            draggable={false}
          />

          {/* Preview direita */}
          <img
            src={images[nextIndex]}
            alt={`Preview próximo`}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-[60%] w-auto  opacity-60  rounded-lg shadow-md select-none"
            style={{ maxWidth: "20%", objectFit: "cover" }}
            draggable={false}
          />

          <AnimatePresence initial={false} custom={current}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="absolute object-cover rounded-xl shadow-lg w-full h-full md:w-[60%] md:h-[80%] select-none cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              draggable={false}
              onClick={() => setModalImage(images[current])}
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
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed grid place-content-center inset-0 bg-black bg-opacity-80 z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 z-10"
                aria-label="Fechar modal"
              >
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
              <img
                src={modalImage}
                alt="Imagem ampliada"
                className="max-w-full max-h-full rounded-lg shadow-lg"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
