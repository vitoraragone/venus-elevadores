import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Solutions1 from "../assets/solutions-1.png";
import Solutions2 from "../assets/solutions-2.png";
import Solutions3 from "../assets/solutions-3.png";
import ImageSlider from "./Slider";
import Button from "./Utils/Button";

const Solutions = () => {
  const data = [
    {
      url: Solutions1,
      title: "Plataformas",
      description:
        "Simplificamos o processo de projetar um elevador residencial, podendo adaptar para a função necessária e no espaço disponível no seu local.",
    },
    {
      url: Solutions2,
      title: "Elevadores para prédios",
      description:
        "Evoluímos o conceito de elevadores utilizados em prédios residenciais e comerciais, trazendo a agilidade e capacidade de carga necessárias.",
    },
    {
      url: Solutions3,
      title: "Elevadores para empresas",
      description:
        "Trabalhamos com projetos diversos, desde elevadores de carga que suportam até 5 toneladas, até elevadores voltados para restaurantes como monta pratos. A melhor opção de criar um projeto único, exclusivo e facilitado.",
    },
    {
      url: Solutions1,
      title: "Item 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum.",
    },
    {
      url: Solutions2,
      title: "Item 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum.",
    },
    {
      url: Solutions3,
      title: "Item 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum.",
    },
  ];

  return (
    <section className="container mx-auto py-12 px-6">
      <h1 className="text-center w-full text-[#383838] font-semibold text-2xl sm:text-3xl whitespace-normal">
        A solução perfeita para qualquer empresa, residência ou indústria
      </h1>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4 md:gap-y-8">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, amount: 0.3 });

          return (
            <motion.article
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#FFEEEE] flex flex-col md:flex-row lg:flex-col lg:max-w-[400px] rounded-xl shadow-md overflow-hidden"
            >
              <div className="hidden md:block w-full md:w-1/2 lg:w-full h-[200px] md:h-auto lg:h-[200px] overflow-hidden">
                <img
                  src={item.url}
                  alt={`Imagem ilustrativa para ${item.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-8 flex flex-col justify-center">
                <p className="font-semibold text-[#2D3239] text-lg">
                  {item.title}
                </p>
                <p className="text-sm text-[#586171] mt-4">
                  {item.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="block w-fit mx-auto my-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <Button bgColor="red-4" color="white">
          Quero um projeto!
        </Button>
      </motion.div>

      <ImageSlider />
    </section>
  );
};

export default Solutions;
