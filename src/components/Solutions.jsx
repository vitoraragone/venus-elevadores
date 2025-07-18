import React from "react";
import { motion } from "framer-motion";
import Elevator1 from "../assets/elevator-1.png";
import Elevator2 from "../assets/elevator-2.png";
import Elevator3 from "../assets/elevator-3.png";
import Elevator4 from "../assets/elevator-4.png";
import Elevator5 from "../assets/elevator-5.png";

import ImageSlider from "./Slider";
import Button from "./Utils/Button";

const Solutions = () => {
  const data = [
    {
      url: Elevator1,
      title: "Elevadores Residenciais",
      description:
        "Elevadores residenciais “Home lift” são uma solução inteligente para quem busca acessibilidade, conforto e valorização do imóvel. Ao escolher o modelo ideal consideramos o espaço, as normas técnicas, o orçamento e as necessidades específicas dos usuários.",
    },
    {
      url: Elevator2,
      title: "Elevadores Comerciais",
      description:
        "Elevadores comerciais são sistemas de transporte vertical projetados para uso em edifícios comerciais, como escritórios, shoppings, hotéis e hospitais. São diferentes dos elevadores residenciais em termos de capacidade, velocidade, durabilidade e requisitos de segurança.",
    },
    {
      url: Elevator3,
      title: "Elevadores Monta Carga",
      description:
        "Os elevadores monta-cargas são equipamentos projetados para transportar cargas, e não pessoas, entre diferentes níveis de um edifício. Eles são menores e mais simples do que os elevadores de passageiros, focados na funcionalidade e eficiência no transporte de materiais.",
    },
    {
      url: Elevator4,
      title: "Plataforma de Acessibilidade ",
      description:
        "Uma plataforma elevatória é um equipamento mecânico projetado para transportar pessoas ou cargas entre diferentes níveis. Ela é uma alternativa aos elevadores convencionais, especialmente em situações onde a instalação de um elevador tradicional não é viável ou economicamente vantajosa.",
    },
    {
      url: Elevator5,
      title: "Elevadores de maca-leito",
      description:
        "Os elevadores de maca, também conhecidos como elevadores de leito, são elevadores projetados especificamente para transportar pacientes em macas ou camas, juntamente com a equipe médica, em hospitais, clínicas e outras instalações de saúde. Eles são maiores e mais robustos do que os elevadores de passageiros comuns, e possuem características que garantem um transporte seguro e confortável para os pacientes.",
    },
  ];

  return (
    <section
      className="container mx-auto py-12 px-4"
      aria-labelledby="solution-heading"
    >
      <h1
        id="solution-heading"
        className="text-center w-full text-[#383838] font-semibold text-2xl sm:text-3xl whitespace-normal"
      >
        A solução perfeita para qualquer empresa, residência ou indústria
      </h1>

      <div
        className="mt-8 flex flex-col lg:justify-center lg:flex-row lg:flex-wrap gap-8"
        role="list"
        aria-label="Lista de soluções disponíveis"
      >
        {data.map((item, index) => (
          <article
            key={index}
            className="bg-[#FFEEEE] flex flex-col md:flex-row lg:flex-col lg:max-w-[400px] rounded-xl shadow-md overflow-hidden"
            aria-label={`Solução ${item.title}`}
          >
            <div className="hidden md:block w-full md:w-1/2 lg:w-full h-[200px] md:h-auto lg:h-[200px] overflow-hidden">
              <img
                loading="lazy"
                src={item.url}
                alt={`Imagem ilustrativa do projeto ${item.title}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 p-8 flex flex-col justify-center">
              <h2 className="font-semibold text-[#2D3239] text-lg">
                {item.title}
              </h2>
              <p className="text-sm text-[#586171] mt-4">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="block w-fit mx-auto mt-14">
        <a
          href="https://wa.me/5511970697761?text=Ol%C3%A1,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20elevadores!"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Abrir conversa no WhatsApp para solicitar um projeto"
        >
          <Button bgColor="red-4" color="white">
            Quero um projeto!
          </Button>
        </a>
      </div>

      <div className="container mx-auto my-10">
        <motion.h1
          id="gallery-heading"
          className="text-center w-full text-[#383838] font-semibold text-2xl sm:text-3xl whitespace-normal my-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Veja a galeria de fotos dos nossos projetos
        </motion.h1>

        <motion.p
          aria-labelledby="gallery-heading"
          className="text-center md:w-8/12 mx-auto text-[#586171] text-md whitespace-normal my-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Veja fotos dos projetos que foram criados do zero especialmente para
          nossos clientes, contando com personalizações e detalhes escolhidos
          por cada um, ajustando o formato, modelo e características, tornando o
          projeto único.
        </motion.p>
      </div>

      <ImageSlider />
    </section>
  );
};

export default Solutions;
