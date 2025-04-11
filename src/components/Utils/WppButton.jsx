import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500 text-white fixed top-[20%] right-4 z-[9999] shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Abrir conversa no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
    </a>
  );
};

export default WppButton;
