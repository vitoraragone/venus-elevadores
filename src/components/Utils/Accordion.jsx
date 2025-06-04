import React, { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ title, content, isOpen, onClick, index }) => {
  const buttonId = `accordion-button-${index}`;
  const contentId = `accordion-content-${index}`;

  return (
    <div className="border-b border-gray-200">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      >
        <span className="md:text-lg font-semibold text-gray-800">{title}</span>
        <span className="text-red-4 font-bold" aria-hidden="true">
          {isOpen ? "-" : "+"}
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`transition-max-height overflow-hidden duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="py-2 text-[#586171] mb-4">
          {Array.isArray(content) ? (
            <div className="space-y-2">
              <p>{content[0]}</p>
              <ul className="list-disc list-inside space-y-2">
                {content.slice(1).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "Quais são as nossas políticas de qualidade?",
      content: [
        "A Vênus elevadores busca atender as necessidades e expectativas dos clientes e colaboradores através de:",
        "Oferecer produtos e serviços a preços justos e reconhecidos pelo cliente, satisfazendo os requisitos aplicáveis.",
        "Proporcionar atendimento diferenciado ao cliente, colocando nossa responsabilidade antes do lucro.",
        "Buscar proteção segura de trabalho e de proteção tanto internamente quanto aos nossos fornecedores.",
        "Soluções inovadoras e competitivas.",
        "Melhoria contínua de seus processos, produtos e sistema de gestão e qualidade e seus requisitos aplicáveis.",
      ],
    },
    {
      title: "A contratação de uma empresa de manutenção é obrigatória?",
      content:
        "Sim, é obrigatória para todos os elevadores em funcionamento, com exceção aos de uso unifamiliar. ",
    },
    {
      title: "Por que a manutenção preventiva é importante?",
      content:
        "A manutenção preventiva ajuda a identificar problemas e a corrigi-los antes que causem acidentes ou interrupções no funcionamento do elevador. ",
    },
    {
      title: "O que fazer em caso de emergência dentro do elevador?",
      content:
        "Em caso de emergência, ligar imediatamente para a empresa de manutenção ou para o Corpo de Bombeiros.",
    },
    {
      title: "Quais as normas de segurança que regulamentam os elevadores?",
      content:
        "As principais normas são a ABNT NBR NM 207 (elevadores elétricos de passageiros), a ABNT NBR NM 267 (elevadores hidráulicos) e a ABNT NBR 16042 (elevadores sem casa de máquinas). ",
    },
    {
      title: "Como identificar se a empresa de manutenção é confiável?",
      content:
        "Buscar por empresas que tenham boa reputação, que possuam técnicos qualificados e que ofereçam um bom suporte técnico. ",
    },
    {
      title:
        "Posso contratar outra empresa de manutenção após ter contratado uma inicialmente?",
      content:
        "Sim, o síndico pode contratar outra empresa de manutenção, desde que não haja restrições na convenção do condomínio. ",
    },
    {
      title: "O que fazer se o elevador parar de funcionar?",
      content:
        "Chamar imediatamente a empresa de manutenção corretiva para que o problema seja resolvido.",
    },
    {
      title: "Como saber se o elevador precisa de modernização?",
      content:
        "A modernização pode ser necessária quando o elevador apresenta problemas recorrentes, quando os componentes estão muito desgastados ou quando o sistema de controle está obsoleto.",
    },
    {
      title: "Qual o tempo de vida útil de um elevador?",
      content:
        "O tempo de vida útil de um elevador pode variar, mas geralmente é de 20 a 30 anos.",
    },
    {
      title: "Como evitar que crianças usem o elevador sozinhas?",
      content:
        "É recomendado que crianças menores de 12 anos não usem o elevador sozinhas, e que os pais sempre acompanhem os filhos.",
    },
    {
      title: "O que fazer se um passageiro ficar preso no elevador?",
      content:
        "Não tentar abrir a porta sozinho, e ligar imediatamente para a empresa de manutenção ou para o Corpo de Bombeiros.",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white rounded-lg shadow-md p-6 my-10">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
