import React from "react";
import { motion } from "framer-motion"; // importante: instale o framer-motion
import SP from "../assets/sp-logo.png";
import SECIESP from "../assets/seciesp.png";
import ABNT from "../assets/Normas-ABNT.png";
import CREA from "../assets/crea-sp-logo-2.png";
import CETESB from "../assets/CETESB.png";

const Credentials = () => {
  const data = [
    { src: SP, alt: "Brasão do Estado de São Paulo" },
    { src: SECIESP, alt: "Logo da SECIESP" },
    { src: ABNT, alt: "Logo da ABNT" },
    { src: CREA, alt: "Logo do CREA-SP" },
    { src: CETESB, alt: "Logo da CETESB" },
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#383838] font-semibold text-md mx-auto"
        >
          A Vênus Elevadores atua dentro das normas em vigor e com todas as
          credenciais necessárias, sendo destaque no mercado pela qualidade dos
          equipamentos e serviços dos projetos realizados.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center lg:justify-around items-center gap-8 mt-10"
          role="group"
          aria-label="Logos das certificações e órgãos parceiros"
        >
          {data.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-20 md:h-24 object-contain"
              loading="lazy"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;
