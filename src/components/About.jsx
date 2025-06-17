import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/about-image.png";
import AboutFrame from "../assets/about-frame.png";

const About = () => {
  return (
    <section
      id="sobre"
      className="scroll-mt-[80px] w-full grid grid-cols-1 md:grid-cols-2"
      aria-labelledby="about-heading"
    >
      <motion.div
        className="bg-blue-100 flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[500px] px-6 py-12">
          <h1
            id="about-heading"
            className="text-[#383838] font-semibold text-3xl mb-6"
          >
            Sobre a Vênus
          </h1>
          <div className="text-[#586171] space-y-4 text-sm leading-relaxed">
            <p>
              Vênus elevadores é uma empresa tradicional que abrange desde
              assistência técnica a projetos e modernização de elevadores.
              Trabalhamos com uma equipe de profissionais treinados e
              capacitados para atendimento com agilidade e qualidade. Nossos
              Engenheiros e técnicos estão sempre atualizados com as inovações
              tecnológicas e as normativas ABNT, com eficiência e prontidão
              desenvolvem projetos inovadores e seguros, sempre aprimorando a
              qualidade, conforto e segurança dos produtos priorizando a
              qualidade e satisfação do cliente. Desde a venda de novos
              equipamentos quanto ao serviços em manutenção (preventiva e
              corretiva) e a modernização de elevadores multimarcas.
            </p>
            <ul className="list-disc my-8 flex flex-col gap-4 pl-5">
              <li>
                <strong>Nossa visão:</strong> Sempre focando em um atendimento
                de qualidade para todo o Brasil.
              </li>
              <li>
                <strong>Nossa missão:</strong> Desenvolver projetos, soluções,
                manutenções e modernizações com segurança, qualidade, visando o
                respeito e a satisfação de toda a equipe e Clientes.
              </li>
              <li>
                <strong>Nossos valores:</strong> Ética, Humanismo,
                Credibilidade, Respeito, Responsabilidade, Pioneirismo e
                Inovação, Transparência, Pontualidade, Confiança, Compromisso
                com a Segurança e Qualidade.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#1C1C1C] bg-blend-multiply flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutFrame})` }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <img
          loading="lazy"
          src={AboutImage}
          alt="Equipe da Vênus Elevadores em atendimento personalizado"
          className="w-full max-w-[700px] h-auto object-contain"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
          draggable={false}
        />
      </motion.div>
    </section>
  );
};

export default About;
