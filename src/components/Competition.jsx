import React from "react";
import { motion } from "framer-motion";
import Table from "./Utils/Table";

const Competition = () => {
  return (
    <section
      id="diferenciais"
      className="scroll-mt-[70px] container mx-auto py-12 bg-cover bg-center"
      aria-labelledby="competition-heading"
      role="region"
    >
      <motion.h1
        id="competition-heading"
        className="block text-center w-full text-[#383838] font-semibold text-2xl sm:text-3xl whitespace-normal px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Vênus Elevadores vs Concorrência
      </motion.h1>

      <p className="sr-only" id="competition-description">
        Tabela comparativa entre os diferenciais da Vênus Elevadores e de seus
        concorrentes.
      </p>

      <div role="table" aria-describedby="competition-description">
        <Table />
      </div>
    </section>
  );
};

export default Competition;
