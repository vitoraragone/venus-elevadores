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
      title: "Elevadores Residenciais",
      description:
        "Elevadores residenciais “Home lift” são uma solução inteligente para quem busca acessibilidade, conforto e valorização do imóvel. Ao escolher o modelo ideal consideramos o espaço, as normas técnicas, o orçamento e as necessidades específicas dos usuários.",
    },
    {
      url: Solutions2,
      title: "Elevadores Comerciais",
      description:
        "Elevadores comerciais são sistemas de transporte vertical projetados para uso em edifícios comerciais, como escritórios, shoppings, hotéis e hospitais. São diferentes dos elevadores residenciais em termos de capacidade, velocidade, durabilidade e requisitos de segurança.",
    },
    {
      url: Solutions3,
      title: "Elevadores Monta Carga",
      description:
        "Os elevadores monta-cargas são equipamentos projetados para transportar cargas, e não pessoas, entre diferentes níveis de um edifício. Eles são menores e mais simples do que os elevadores de passageiros, focados na funcionalidade e eficiência no transporte de materiais.",
    },
    {
      url: Solutions1,
      title: "Plataforma de Acessibilidade ",
      description:
        "Uma plataforma elevatória é um equipamento mecânico projetado para transportar pessoas ou cargas entre diferentes níveis. Ela é uma alternativa aos elevadores convencionais, especialmente em situações onde a instalação de um elevador tradicional não é viável ou economicamente vantajosa.",
    },
    {
      url: Solutions2,
      title: "Elevadores de maca-leito",
      description:
        "Os elevadores de maca, também conhecidos como elevadores de leito, são elevadores projetados especificamente para transportar pacientes em macas ou camas, juntamente com a equipe médica, em hospitais, clínicas e outras instalações de saúde. Eles são maiores e mais robustos do que os elevadores de passageiros comuns, e possuem características que garantem um transporte seguro e confortável para os pacientes.",
    },
  ];

  return (
    <section className="container mx-auto py-12 px-6">
      <h1 className="text-center w-full text-[#383838] font-semibold text-2xl sm:text-3xl whitespace-normal">
        A solução perfeita para qualquer empresa, residência ou indústria
      </h1>

      <div className="mt-8 flex flex-col lg:justify-center lg:flex-row lg:flex-wrap gap-8">
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
        <a
          href="https://wa.me/5511970697761?text=Ol%C3%A1,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20elevadores!"
          target="_blank"
        >
          <Button bgColor="red-4" color="white">
            Quero um projeto!
          </Button>
        </a>
      </motion.div>

      <ImageSlider />
    </section>
  );
};

export default Solutions;
