import React, { useState } from "react";
import RoomElevator from "../assets/room-elevator.png?react";
import { motion } from "framer-motion";

const TransformSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "Elevadores residenciais",
      description:
        "Elevadores residenciais são equipamentos de transporte vertical projetados para uso em residências, facilitando o acesso a diferentes andares para moradores.",
    },
    {
      title: "Elevadores comerciais",
      description:
        "Elevadores comerciais são sistemas de transporte vertical projetados para uso em edifícios comerciais, como escritórios, shoppings e hotéis.",
    },
    {
      title: "Elevadores maca-leito",
      description:
        "Elevadores para maca são elevadores projetados especificamente para transportar pacientes deitados em macas, garantindo um transporte seguro e confortável em hospitais e clínicas.",
    },
    {
      title: "Plataforma de acessibilidade",
      description:
        "Elevadores de acessibilidade são plataformas elevatórias projetadas para transportar pessoas com mobilidade reduzida entre diferentes níveis, garantindo inclusão e autonomia.",
    },
    {
      title: "Elevadores para carga",
      description:
        "Elevadores monta-cargas são elevadores projetados especificamente para transportar cargas de ate 5000Kg.",
    },
    {
      title: "Assistência técnica",
      description:
        "Serviço especializado de manutenção, reparo e modernização para garantir o funcionamento seguro e eficiente dos elevadores.",
    },
    {
      title: "Modernização",
      description:
        "Modernização é o processo de atualizar componentes e sistemas de um elevador existente para melhorar seu desempenho, segurança, eficiência e estética.",
    },
    {
      title: "Regulamentação",
      description:
        "Regulamentação em elevadores nas prefeituras de cada munícipio, são normas e leis que garantem a segurança, acessibilidade e o bom funcionamento dos elevadores, protegendo os usuários e técnicos.",
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
            className="flex flex-col gap-5 h-full w-full max-w-[50ch] min-w-0"
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
