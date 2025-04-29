import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WppButton = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="flex">
      <a
        href="https://wa.me/5511970697761?text=Ol%C3%A1,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20elevadores!"
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500 text-white fixed bottom-[10%] right-4 z-[9999] shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Abrir conversa no WhatsApp"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
      </a>

      {visible ? (
        <p className="hidden lg:block bg-black text-white fixed bottom-[20%] right-[4%] z-[9999] shadow-lg p-3 rounded-md">
          Fale conosco!
        </p>
      ) : null}
    </div>
  );
};

export default WppButton;
