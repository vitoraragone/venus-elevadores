import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import mobileLogo from "../../assets/mobile-logo-1.svg";

import { Link } from "react-router-dom";
import Button from "../../components/Utils/Button";

export default function MobileNavbar() {
  const navOptions = [
    { option: "Produtos e serviços" },
    { option: "Diferenciais" },
    { option: "Sobre nós" },
    { option: "Perguntas frequentes" },
    { option: "Contato" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed z-[9999] w-full bg-white h-[72px]  border-b-2">
      <div className="container mx-auto flex justify-between items-center py-4 px-8 relative z-50">
        <img
          src={mobileLogo}
          alt="Logo Venus Elevadores"
          width={130}
          height={39}
        />
        <ul className="hidden lg:flex gap-6 items-center font-semibold text-[#6e7a89]">
          {navOptions.map((option, index) => (
            <li
              className="pb-px relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#6e7a89] after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 w-fit"
              key={index}
            >
              <Link to="#produtos">{option.option}</Link>
            </li>
          ))}
          <button className="bg-red-4 text-white rounded-full py-2 px-6">
            Solicitar orçamento
          </button>
        </ul>
        <button onClick={() => setOpen(!open)} className="z-50 lg:hidden">
          <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            size="lg"
            style={{ color: "#292929" }}
          />
        </button>
        {/* MENU MOBILE */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-sm flex items-center justify-center sm:items-start transition-all duration-300 text-center ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <nav className="lg:hidden flex flex-col gap-6 p-8 pt-20">
            <a href="#home" className="text-lg font-medium text-gray-800">
              Produtos e serviços
            </a>
            <a href="#sobre" className="text-lg font-medium text-gray-800">
              Diferenciais
            </a>
            <a href="#servicos" className="text-lg font-medium text-gray-800">
              Sobre nós
            </a>
            <a href="#contato" className="text-lg font-medium text-gray-800">
              Perguntas frequentes
            </a>
            <a href="#contato" className="text-lg font-medium text-gray-800">
              Contato
            </a>
            <Button>Solicitar Orçamento</Button>
          </nav>
        </div>
      </div>
    </section>
  );
}
