import React from "react";
import TestmonialsBg from "../assets/testmonials-bg-2.png";
import { motion } from "framer-motion";

const Testmonials = () => {
  const data = [
    {
      name: "Carlos Gomes",
      company: "Empresa ABC",
      testmonial:
        "Conhecemos a Vênus através de uma empresa parceira. Solicitamos um orçamento e fomos rapidamente atendidos por um especialista que veio fazer uma visita presencial, entendeu as necessidades do projeto e as capacidades que a nossa estrutura tinha. O projeto foi rápido, terminaram e o serviço foi excelente.",
    },
    {
      name: "Alexandre Faria Lima",
      company: "Empresa DEF",
      testmonial:
        "Conhecemos a Vênus através de uma empresa parceira. Solicitamos um orçamento e fomos rapidamente atendidos por um especialista que veio fazer uma visita presencial, entendeu as necessidades do projeto e as capacidades que a nossa estrutura tinha. O projeto foi rápido, terminaram e o serviço foi excelente.",
    },
    {
      name: "Miguel Marlotto",
      company: "Empresa GHI",
      testmonial:
        "Conhecemos a Vênus através de uma empresa parceira. Solicitamos um orçamento e fomos rapidamente atendidos por um especialista que veio fazer uma visita presencial, entendeu as necessidades do projeto e as capacidades que a nossa estrutura tinha. O projeto foi rápido, terminaram e o serviço foi excelente.",
    },
    {
      name: "Gabriel Rodrigues",
      company: "Empresa JKL",
      testmonial:
        "Conhecemos a Vênus através de uma empresa parceira. Solicitamos um orçamento e fomos rapidamente atendidos por um especialista que veio fazer uma visita presencial, entendeu as necessidades do projeto e as capacidades que a nossa estrutura tinha. O projeto foi rápido, terminaram e o serviço foi excelente.",
    },
  ];

  return (
    <section
      className="py-12 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${TestmonialsBg})` }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto">
        <h1
          id="testimonials-heading"
          className="text-center w-full text-white font-semibold text-2xl sm:text-3xl whitespace-normal"
        >
          O que dizem sobre a Vênus Elevadores
        </h1>

        <div
          className="py-10 overflow-x-auto no-scrollbar"
          role="region"
          aria-label="Depoimentos de clientes"
        >
          <div className="flex gap-6 px-6 w-max">
            {data.map((item, index) => (
              <motion.article
                key={index}
                className="bg-white min-w-[45ch] max-w-[50ch] rounded-md shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                aria-label={`Depoimento de ${item.name}, da ${item.company}`}
              >
                <blockquote className="p-6 text-[#586171] text-sm">
                  {item.testmonial}
                </blockquote>
                <footer className="flex flex-col bg-[#F2F7FC] font-semibold text-[#24272D] p-6 rounded-b-md text-base">
                  <cite className="not-italic">{item.name}</cite>
                  <span className="text-[#586171] font-medium text-sm">
                    {item.company}
                  </span>
                </footer>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
