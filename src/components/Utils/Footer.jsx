import React from "react";
import FooterLogo from "../../assets/footer-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Nossos produtos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Perguntas frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  return (
    <section
      className="pt-12 px-6 bg-cover bg-center bg-[#F6F6F6]"
      aria-labelledby="footer-heading"
      role="contentinfo"
    >
      <div className="container mx-auto flex flex-col">
        <motion.img
          src={FooterLogo}
          className="block grid-row-1 w-[70%] mx-auto md:m-0 md:w-fit"
          width={325}
          height={96}
          alt="Logo da Vênus Elevadores"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between text-sm mt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-bold uppercase" id="footer-heading">
              site vênus elevadores
            </p>
            <ul className="text-dark-1 mt-4">
              {navLinks.map(({ label, href }, i) => (
                <li key={i}>
                  <a href={href} className="hover:underline focus:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-bold uppercase">redes sociais</p>
            <button
              className="flex items-center gap-4 bg-white px-6 py-2 rounded-full border-2 border-red-4 text-red-4 font-semibold mt-4 hover:bg-red-4 hover:text-white transition-colors"
              aria-label="Avalie-nos no Google"
            >
              <FontAwesomeIcon icon={faGoogle} />
              Avalie-nos no Google
            </button>
            <button
              className="flex items-center gap-4 bg-white px-6 py-2 rounded-full border-2 border-red-4 text-red-4 font-semibold mt-4 hover:bg-red-4 hover:text-white transition-colors"
              aria-label="Avalie-nos no Google"
            >
              <FontAwesomeIcon icon={faInstagram} />
              Siga-nos no Instagram
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-bold uppercase">Contatos</p>

            <div className="mt-4">
              <p className="font-semibold text-dark-1">Comercial</p>
              <a
                href="https://wa.me/5511970697761?text=Ol%C3%A1,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20elevadores!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-1 hover:underline focus:underline"
                aria-label="Conversar no WhatsApp"
                title="Conversar no WhatsApp"
              >
                (11) 97069-7761
              </a>
            </div>

            <div className="mt-2">
              <p className="font-semibold text-dark-1">Financeiro</p>
              <a
                href="https://wa.me/5511945860934"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-1 hover:underline focus:underline"
                aria-label="Conversar no WhatsApp"
                title="Conversar no WhatsApp"
              >
                (11) 94586-0934
              </a>
            </div>

            <a
              href="mailto:contato@venuselevadores.com.br"
              className="text-dark-1 hover:underline focus:underline block mt-2"
              aria-label="Enviar e-mail para Vênus Elevadores"
              title="Enviar e-mail para Vênus Elevadores"
            >
              comercial.venuselevadores@gmail.com
            </a>

            <p className="text-dark-1">
              Av. Ordem e Progresso, 157, Barra Funda. São Paulo-SP <b>CEP:</b>{" "}
              01141-030
            </p>
          </motion.div>
        </div>
      </div>
      <p className="text-center text-sm text-dark-1 mt-10 pb-2">
        Copyright &copy; {new Date().getFullYear()} - Vênus Elevadores
      </p>
    </section>
  );
};

export default Footer;
