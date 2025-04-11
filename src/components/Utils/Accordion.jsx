import React, { useState } from "react";

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
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <span className="text-lg font-semibold text-gray-800">{title}</span>
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
        <div className="py-2 text-[#586171]">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "O que é a Vênus?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum. Duis pellentesque urna quis mauris aliquam, quis aliquam purus volutpat. Suspendisse potenti. Sed viverra rhoncus quam.",
    },
    {
      title: "Quais são os tipos de elevadores que a Vênus trabalha?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum. Duis pellentesque urna quis mauris aliquam, quis aliquam purus volutpat. Suspendisse potenti. Sed viverra rhoncus quam.",
    },
    {
      title: "Os projetos são personalizados para cada cliente?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum. Duis pellentesque urna quis mauris aliquam, quis aliquam purus volutpat. Suspendisse potenti. Sed viverra rhoncus quam.",
    },
    {
      title: "Como funciona o atendimento?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum. Duis pellentesque urna quis mauris aliquam, quis aliquam purus volutpat. Suspendisse potenti. Sed viverra rhoncus quam.",
    },
    {
      title: "Quais são os diferenciais da Vênus?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum. Duis pellentesque urna quis mauris aliquam, quis aliquam purus volutpat. Suspendisse potenti. Sed viverra rhoncus quam.",
    },
    {
      title: "A Vênus atende clientes de todo o Brasil?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum. Duis pellentesque urna quis mauris aliquam, quis aliquam purus volutpat. Suspendisse potenti. Sed viverra rhoncus quam.",
    },
    {
      title: "As visitas também podem ser feitas de forma virtual?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor suscipit mi at vestibulum. Duis pellentesque urna quis mauris aliquam, quis aliquam purus volutpat. Suspendisse potenti. Sed viverra rhoncus quam.",
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
