import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import OurServices from "../components/OurServices";
import LatestProduct from "../components/LatestProduct";
import EnergySection from "../components/EnergySection";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import OurTeam from "../components/OurTeam";
import BenefitsSection from "../components/BenefitsSection";
import OurProcess from "../components/OurProcess";
import IndustriesWeServe from "../components/IndustriesWeServe";
import ScopeOfWork from "../components/ScopeOfWork";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <OurServices />
      <LatestProduct />
      <IndustriesWeServe />
      <ScopeOfWork />
      <EnergySection />
      <Stats />
      <BenefitsSection />
      <WhyChooseUs />
      <OurProcess />
      <OurTeam />
    </div>
  );
};

export default Home;
