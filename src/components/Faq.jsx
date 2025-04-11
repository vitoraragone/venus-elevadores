import React from "react";
import { motion } from "framer-motion";
import Accordion from "./Utils/Accordion";
import FaqBg from "../assets/faq-bg.png";

const Faq = () => {
  return (
    <section
      id="faq"
      style={{ backgroundImage: `url(${FaqBg})` }}
      className="scroll-mt-[70px] py-12 px-6 bg-cover bg-center"
      aria-labelledby="faq-heading"
      role="region"
    >
      <div className="container mx-auto">
        <motion.h1
          id="faq-heading"
          className="text-center w-full text-[#383838] font-semibold text-2xl sm:text-3xl whitespace-normal"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Principais dúvidas sobre a Vênus Elevadores?
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6"
        aria-describedby="faq-heading"
      >
        <Accordion />
      </motion.div>
    </section>
  );
};

export default Faq;
