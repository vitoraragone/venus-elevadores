import React from "react";
import { motion } from "framer-motion";

const CustomerService = () => {
  const data = [
    {
      title: "O cliente solicita um atendimento",
      description:
        "Você entra em contato com a gente e solicita um orçamento. Após algumas perguntas podemos iniciar seu orçamento.",
    },
    {
      title: "Entendemos qual é a necessidade do projeto",
      description:
        "Você entra em contato com a gente e solicita um orçamento. Após algumas perguntas podemos iniciar seu orçamento.",
    },
    {
      title: "Em até 7 dias realizamos uma visita",
      description:
        "Fazemos uma visita física ou virtual para personalizar a sua proposta.",
    },
    {
      title: "Daqui pra frente é com a gente!",
      description:
        "Agora é onde o nosso talento entra em prática e trazemos o projeto para a realidade.",
    },
  ];

  return (
    <section
      className="py-12 bg-[#322D2D]"
      aria-labelledby="customer-service-heading"
      role="region"
    >
      <div className="container mx-auto px-4">
        <h1
          id="customer-service-heading"
          className="text-center text-white font-semibold text-2xl lg:text-3xl"
        >
          Nosso processo de atendimento e personalização
        </h1>

        <div
          className="flex flex-col xl:flex-row gap-6 mt-12 flex-wrap justify-center"
          role="list"
        >
          {data.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex-1 flex items-start gap-4 bg-white rounded-xl shadow-sm p-6 w-full"
              aria-label={`Passo ${index + 1}: ${item.title}`}
            >
              <div
                className="w-10 h-10 bg-[#910000] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                aria-hidden="true"
              >
                {index + 1}
              </div>
              <div>
                <h2 className="text-[#3D3D3D] font-semibold text-lg mb-1 leading-tight">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 font-medium">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
