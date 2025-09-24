import React from 'react'
import Banner from "../../components/Banner";
import ProductCard from "../../components/product/ProductCard";
import PageHeader from '../../components/product/PageHeader';

const solarPanels = [
  {
    id: 1,
    title: "Solar Off Grid",
    // description: "40W – 200W",
    image: "/new/0.jpg",
  },
  {
    id: 2,
    title: "Solar On Grid",
    // description: "450W, 500W, 550W",
    image: "/new/1.jpg",
  },
  {
    id: 3,
    title: "Solar ESS ",
    // description: "550W",
    image: "/new/2.jpg",
  },
  {
    id: 4,
    title: "Solar Mini Grid ",
    // description: "585W",
    image: "/new/3.jpg",
  },
  {
    id: 5,
    title: "Solar Carpot",
    // description: "500W – 600W",
    image: "/new/4.jpg",
  },
  {
    id: 6,
    title: "Centralised Soar & Street lightng ",
    // description: "500W – 600W",
    image: "/new/16.jpg",
  },
];

const SolarSolutions = () => {
  return (
    <div>
      <Banner
        title="Solar Solutions"
        subtitle="Reliable & high-performance solar solutions for your energy needs"
        image="/bannerImg.webp"
      />

      <PageHeader />
      <section className="pb-16 px-4 md:px-8 lg:px-16">
        <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Solar Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solarPanels.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default SolarSolutions
