import React, { useRef, useEffect, useState } from "react";
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

  const containerRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const cardsRefs = useRef([]);
  const [dragLimit, setDragLimit] = useState({ left: 0, right: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((prev, curr) =>
          prev.intersectionRatio > curr.intersectionRatio ? prev : curr
        );
        const index = parseInt(mostVisible.target.dataset.index);
        setVisibleIndex(index);
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    cardsRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  useEffect(() => {
    const updateDragLimits = () => {
      const container = containerRef.current;
      const content = container?.firstChild;

      if (container && content) {
        const containerWidth = container.offsetWidth;
        const contentWidth = content.scrollWidth;
        const maxDrag = contentWidth - containerWidth;

        setDragLimit({ left: -maxDrag, right: 0 });
      }
    };

    updateDragLimits();
    window.addEventListener("resize", updateDragLimits);
    return () => window.removeEventListener("resize", updateDragLimits);
  }, []);

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
          className={`py-10 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing ${
            isMobile ? "snap-x snap-mandatory" : ""
          }`}
          ref={containerRef}
          role="region"
          aria-label="Depoimentos de clientes"
        >
          <motion.div
            className="flex gap-6 px-6 w-max"
            drag={isMobile ? false : "x"}
            dragConstraints={isMobile ? undefined : dragLimit}
            dragElastic={0.1}
          >
            {data.map((item, index) => (
              <motion.article
                key={index}
                data-index={index}
                ref={(el) => (cardsRefs.current[index] = el)}
                className="bg-white snap-center w-[calc(100vw-3rem)] sm:w-[45ch] max-w-[50ch] rounded-md shadow-sm"
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
          </motion.div>
        </div>

        <div className="md:hidden flex justify-center mt-6 gap-2">
          {data.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === visibleIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
