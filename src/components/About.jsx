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
      role="region"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor suscipit mi at vestibulum. Duis pellentesque urna quis
              mauris aliquam, quis aliquam purus volutpat. Suspendisse potenti.
            </p>
            <p>
              Sed viverra rhoncus quam. Vestibulum aliquet sed magna id auctor.
              Etiam vestibulum lorem lectus, at lacinia arcu ullamcorper quis.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <p>
              Donec pulvinar nisi a sodales elementum. Etiam mauris arcu,
              vestibulum nec venenatis et, pulvinar non ante. Sed at ultricies
              arcu, non hendrerit urna. Nunc enim quam, sodales sit amet metus
              eu, finibus aliquet sem. In interdum massa neque, sit amet
              imperdiet augue scelerisque id.
            </p>
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
          src={AboutImage}
          alt="Equipe da Vênus Elevadores em atendimento personalizado"
          className="w-full max-w-[700px] h-auto object-contain"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default About;
