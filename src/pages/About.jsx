import React from "react";
import Banner from "../components/Banner";
import AboutService from "../components/about/AboutService";
import EnergySection from "../components/EnergySection";
import Stats from "../components/Stats";
import OurTeam from "../components/OurTeam";
import TeamWork from "../components/about/TeamWork";
import Testimonials from "../components/about/Testimonials";

const About = () => {
  return (
    <div>
      <Banner
        title="About"
        subtitle="Helping you save energy and keep the lights on"
        image="/bannerImg.webp"
      />
      <AboutService />
      <EnergySection />
      <Stats />
      <Testimonials />
      <TeamWork />
      <OurTeam />
    </div>
  );
};

export default About;
