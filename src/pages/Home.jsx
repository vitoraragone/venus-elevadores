import React from "react";
import HeroSection from "../components/HeroSection";
import TransformSection from "../components/TransformSection";
import Solutions from "../components/Solutions";
import Testmonials from "../components/Testmonials";
import Competition from "../components/Competition";
import CustomerService from "../components/CustomerService";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TransformSection />
      <Solutions />
      <Testmonials />
      <Competition />
      <CustomerService />
      <About />
    </>
  );
};

export default Home;
