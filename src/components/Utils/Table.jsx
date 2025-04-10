import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const Table = () => {
  const rows = [
    {
      label: "Projetos personalizados",
      icons: {
        venus: faCheck,
        concorrencia: faXmark,
      },
    },
    {
      label: "Atendimento especializado",
      icons: {
        venus: faCheck,
        concorrencia: faCheck,
      },
    },
    {
      label: "Personalização do projeto",
      icons: {
        venus: faCheck,
        concorrencia: faXmark,
      },
    },
    {
      label: "Cumprimento das normas ABNT ISO",
      icons: {
        venus: faCheck,
        concorrencia: faXmark,
      },
    },
    {
      label: "Visitas físicas ou virtuais",
      icons: {
        venus: faCheck,
        concorrencia: faXmark,
      },
    },
    {
      label: "Serviço de manutenção de elevadores",
      icons: {
        venus: faCheck,
        concorrencia: faXmark,
      },
    },
    {
      label: "Atendimento para todo o Brasil",
      icons: {
        venus: faCheck,
        concorrencia: faXmark,
      },
    },
  ];

  return (
    <motion.div
      role="table"
      aria-labelledby="competition-heading"
      aria-describedby="comparison-description"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p id="comparison-description" className="sr-only">
        Comparativo entre os principais diferenciais da Vênus Elevadores e de
        empresas concorrentes.
      </p>

      <table className="table-auto mx-auto w-[200px] md:w-full lg:w-[1000px] border-collapse border border-gray-300 text-sm text-left my-10 shadow-lg">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="border border-gray-300 px-4 py-2">
              Principais diferenciais
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-center"
            >
              Vênus
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-center"
            >
              Concorrência
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              <th
                scope="row"
                className="border border-gray-300 px-4 py-2 text-[#24272D] font-semibold text-left"
              >
                {item.label}
              </th>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <FontAwesomeIcon
                  icon={item.icons.venus}
                  style={{ color: "#910000" }}
                  aria-label="Disponível pela Vênus"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <FontAwesomeIcon
                  icon={item.icons.concorrencia}
                  style={{
                    color:
                      item.icons.concorrencia === faCheck
                        ? "#910000"
                        : "#c0c0c0",
                  }}
                  aria-label={
                    item.icons.concorrencia === faCheck
                      ? "Disponível pela concorrência"
                      : "Indisponível na concorrência"
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;
