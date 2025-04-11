import React, { useState } from "react";
import RoomElevator from "../assets/room-elevator.png?react";
import { motion } from "framer-motion";

const TransformSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "Elevadores residenciais",
      description:
        "Projetos específicos para residências, trazendo conforto, praticidade e mobilidade para cada espaço. Os elevadores residenciais são ideais para pessoas com pouca mobilidade que necessitam de mais acessibilidade em casa.",
    },
    {
      title: "Elevadores para prédios de pequeno e médio porte",
      description:
        "Projetos específicos para residências, trazendo conforto, praticidade e mobilidade para cada espaço. Os elevadores residenciais são ideais para pessoas com pouca mobilidade que necessitam de mais acessibilidade em casa.",
    },
    {
      title: "Elevadores para prédios comerciais",
      description:
        "Projetos específicos para residências, trazendo conforto, praticidade e mobilidade para cada espaço. Os elevadores residenciais são ideais para pessoas com pouca mobilidade que necessitam de mais acessibilidade em casa.",
    },
    {
      title: "Elevadores de carga",
      description:
        "Projetos específicos para residências, trazendo conforto, praticidade e mobilidade para cada espaço. Os elevadores residenciais são ideais para pessoas com pouca mobilidade que necessitam de mais acessibilidade em casa.",
    },
    {
      title: "Elevadores monta pratos",
      description:
        "Projetos específicos para residências, trazendo conforto, praticidade e mobilidade para cada espaço. Os elevadores residenciais são ideais para pessoas com pouca mobilidade que necessitam de mais acessibilidade em casa.",
    },
    {
      title: "Manutenção em elevadores",
      description:
        "Projetos específicos para residências, trazendo conforto, praticidade e mobilidade para cada espaço. Os elevadores residenciais são ideais para pessoas com pouca mobilidade que necessitam de mais acessibilidade em casa.",
    },
  ];

  return (
    <motion.section
      id="produtos"
      className="scroll-mt-[40px] md:scroll-mt-[70px] bg-red-4/90 py-12 px-6"
      aria-labelledby="transform-section-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto box-content h-[600px] overflow-y-hidden">
        <motion.h1
          id="transform-section-title"
          className="text-center w-full text-white font-semibold text-[20px] sm:text-3xl whitespace-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Transforme sua vida ou sua empresa com os projetos da Vênus
        </motion.h1>

        <motion.div
          className="flex items-start justify-center gap-8 p-10 mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <motion.ul
            className="flex flex-col gap-10 h-full w-full max-w-[50ch] min-w-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            {data.map((item, index) => {
              const isActive = activeIndex === index;
              const contentId = `description-${index}`;
              const buttonId = `toggle-${index}`;
              return (
                <motion.li
                  key={item.title}
                  className="w-full relative"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <button
                    id={buttonId}
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className={`relative w-full text-left cursor-pointer font-semibold transition-colors duration-300 hover:text-white ${
                      isActive ? "text-white" : "text-white/90"
                    }`}
                    aria-expanded={isActive}
                    aria-controls={contentId}
                  >
                    <span className="mr-2">0{index + 1}</span>
                    {item.title}
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isActive
                        ? "opacity-100 mt-2 max-h-[300px]"
                        : "opacity-0 max-h-0"
                    }`}
                  >
                    <p className="font-normal text-white/70 mb-4">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            className="hidden md:block h-full p-[2px] bg-gradient-to-br from-white to-red-3 rounded-xl max-w-[400px] lg:max-w-[500px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <img
              className="block h-full object-cover rounded-xl shadow-md"
              src={RoomElevator}
              alt="Elevador residencial instalado em uma sala de estar moderna"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TransformSection;
