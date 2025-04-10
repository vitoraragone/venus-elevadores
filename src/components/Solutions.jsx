import React from "react";
import { motion } from "framer-motion";
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
        {data.map((item, index) => (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            key={index}
            className="bg-[#FFEEEE] flex flex-col md:flex-row lg:flex-col lg:max-w-[400px] rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div
              className="hidden md:block w-full md:w-1/2 lg:w-full h-[200px] md:h-auto lg:h-[200px] bg-cover bg-center transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={`Imagem ilustrativa para ${item.title}`}
            ></div>

            <div className="flex-1 p-8 flex flex-col justify-center">
              <p className="font-semibold text-[#2D3239] text-lg">
                {item.title}
              </p>
              <p className="text-sm text-[#586171] mt-4">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="block w-fit mx-auto my-14"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
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
