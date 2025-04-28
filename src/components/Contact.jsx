import React from "react";
import { motion } from "framer-motion";
import ContactImage from "../assets/contact-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section
      id="contato"
      className="scroll-mt-[70px] py-12 px-6 bg-cover bg-center bg-red-4"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto grid grid-cols-12 !justify-between items-center">
        <motion.div
          className="text-white col-span-12 md:col-span-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            id="contact-heading"
            className="w-full max-w-[25ch] font-semibold text-2xl sm:text-3xl whitespace-normal"
          >
            Pronto para transformar a sua necessidade em realidade?
          </h1>
          <p
            className="mt-2 text-lg"
            aria-label="Mensagem de incentivo ao contato"
          >
            Fale com um de nossos especialistas.
          </p>

          <div className="flex flex-col lg:flex-row mt-10 gap-6">
            <div>
              <p className="text-white" id="contact-sales-label">
                Falar com o time de vendas
              </p>
              <motion.a
                href="https://wa.me/5511970697761?text=Ol%C3%A1,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20elevadores!"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center bg-white text-black px-6 py-2 mt-2 rounded-full w-[25ch] transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                aria-labelledby="contact-sales-label"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="mr-2"
                  aria-hidden="true"
                />
                Falar com vendas
              </motion.a>
            </div>

            <div>
              <p className="text-white" id="contact-finance-label">
                Falar sobre assuntos financeiros
              </p>
              <motion.a
                href="https://wa.me/5511945860934"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center bg-white text-black px-6 py-2 mt-2 rounded-full w-[25ch] transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                aria-labelledby="contact-finance-label"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="mr-2"
                  aria-hidden="true"
                />
                Falar com financeiro
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:block col-span-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={ContactImage}
            alt="Pessoa falando ao telefone representando atendimento ao cliente"
            className="max-w-full justify-self-stretch h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
