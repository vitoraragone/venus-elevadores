import React from "react";
import Button from "../components/Utils/Button";
import GrayLogo from "../assets/single-logo-gray.svg?react";
import RedLogo from "../assets/single-logo-red.svg?react";
import FullLogo from "../assets/logo-gray.svg?react";
import heroImage from "../assets/hero-image.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const cards = [
    {
      title: "+ de 300 clientes atendidos",
      description:
        "Sempre focando em um atendimento de qualidade para todo o Brasil.",
    },
    {
      title: "+ de 30 projetos realizados",
      description:
        "Todos os projetos feitos com qualidade e excelência, seguindo as normas ABNT NBR ISO 8100-2 e ABNT NBR ISO 9386-1.",
    },
    {
      title: "Projetos personalizados",
      description:
        "Adaptamos o projeto de acordo com sua necessidade e espaço disponível, tornando possível ter um elevador ideal para sua realidade.",
    },
  ];
  const logos = [GrayLogo, RedLogo, FullLogo];

  return (
    <section
      className="pt-[135px]"
      role="region"
      aria-labelledby="hero-section-title"
    >
      {/* hero */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 items-center px-4 gap-10 text-center lg:text-left">
        <motion.div
          className="col-span-6 flex flex-col items-center lg:items-start justify-center px-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            id="hero-section-title"
            className="bg-gradient-to-r from-red-4 to-red-1 inline-block text-transparent bg-clip-text text-3xl sm:text-4xl font-semibold leading-tight"
          >
            Transforme a sua qualidade de vida e sua operação empresarial
          </h1>

          <p className="mt-5 text-lg text-[#586171] font-normal leading-relaxed max-w-[60ch]">
            A Vênus Elevadores é conceituada em transporte vertical, incluindo
            elevadores residenciais, comerciais, monta carga, elevadores para
            macas, plataformas de acessibilidade, manutenção, modernização e
            assistência técnica.
          </p>
          <p className="mt-5 text-lg text-[#586171] font-normal leading-relaxed max-w-[60ch]">
            Oferecemos o que há de mais moderno em mobilidade vertical, com uma
            estrutura de profissionais, entre eles engenheiros técnicos para
            garantir eficiência, segurança, tecnologia, design e inovação para o
            cada projeto personalizando. Somos credenciados aos órgãos
            competentes a qual regulamentam as atividades em seu ramo de
            elevadores, juntamente as prefeituras de origem.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5511970697761?text=Ol%C3%A1,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20elevadores!"
              target="_blank"
              rel="noreferrer"
            >
              <Button bgColor="red-4" color="white">
                Veja como funciona
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="col-span-6 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            className="w-full max-w-[500px]"
            src={heroImage}
            alt="Desenho de uma pessoa ao lado de um elevador personalizado"
            width={535}
            height={528}
          />
        </motion.div>
      </div>

      {/* marquee */}
      <div
        className="bg-gray-1/60 w-full mt-7 py-8 overflow-hidden"
        aria-hidden="true"
      >
        <p className="text-center text-dark-3 font-semibold">
          Junte-se a <span className="text-red-4">+ de 300 clientes</span> que
          já usaram os serviços e projetos da Vênus
        </p>

        <div
          className="slider mt-8"
          style={{
            "--width": "100px",
            "--height": "48px",
            "--quantity": 12,
          }}
        >
          <div className="list">
            {[...Array(12)].map((_, i) => {
              const LogoComponent = logos[i % logos.length];
              return (
                <div className="item" key={i} style={{ "--position": i + 1 }}>
                  <LogoComponent
                    className="opacity-60 w-full h-full"
                    width={undefined}
                    height={undefined}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* cards */}
      <div
        className="container mx-auto px-4 sm:px-1 py-16 flex flex-col sm:flex-row gap-6"
        role="list"
        aria-label="Destaques de resultados e diferenciais"
      >
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            role="listitem"
            aria-label={card.title}
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="sm:flex-1 bg-[#F2F7FC] rounded-2xl text-center px-6 py-6 min-h-[240px] flex flex-col justify-center gap-4 shadow-md hover:scale-[1.03] hover:bg-[#E6EFF8] transition-all duration-300"
          >
            <p className="text-red-4 font-semibold text-xl">{card.title}</p>
            <span className="text-sm text-dark-1 leading-relaxed">
              {card.description}
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
