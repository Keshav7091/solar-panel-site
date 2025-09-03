import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import OurServices from '../components/OurServices'
import LatestProduct from '../components/LatestProduct'
import EnergySection from '../components/EnergySection'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import OurTeam from '../components/OurTeam'

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <OurServices />
      <LatestProduct />
      <EnergySection />
      <Stats />
      <WhyChooseUs />
      <OurTeam />
    </div>
  )
}

export default Home
