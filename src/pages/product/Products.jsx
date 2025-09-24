import React from 'react'
import Banner from "../../components/Banner";
import ProductCard from "../../components/product/ProductCard";
import PageHeader from '../../components/product/PageHeader';

const solarPanels = [
  {
    id: 1,
    title: "Solar PV Modules",
    // description: "40W – 200W",
    image: "/new/5.jpg",
  },
  {
    id: 2,
    title: "Solar Inverters ( Off Grid, On Grid ) ",
    // description: "450W, 500W, 550W",
    image: "/new/6.jpg",
  },
  {
    id: 3,
    title: "Solar LED Lighting",
    // description: "550W",
    image: "/new/7.jpg",
  },
  {
    id: 4,
    title: "Solar Water pumps",
    // description: "585W",
    image: "/new/8.jpg",
  },
  {
    id: 5,
    title: "Solar Home Lighting Solutions",
    // description: "500W – 600W",
    image: "/new/10.jpg",
  },
  {
    id: 6,
    title: "Solar road security solutions",
    // description: "500W – 600W",
    image: "/new/11.jpg",
  },
  {
    id: 7,
    title: "Solar  Delineaters",
    // description: "500W – 600W",
    image: "/new/12.jpg",
  },
  {
    id: 8,
    title: "Solar Studs",
    // description: "500W – 600W",
    image: "/new/13.jpg",
  },
  {
    id: 9,
    title: "Solar Blinkers",
    // description: "500W – 600W",
    image: "/new/14.jpg",
  },
  {
    id: 10,
    title: "Solar Water Heaters",
    // description: "500W – 600W",
    image: "/new/15.jpg",
  },
];

const Products = () => {
  return (
    <div>
      <Banner
        title="Products"
        subtitle="High efficiency & reliable solar panels"
        image="/bannerImg.webp"
      />

      <PageHeader />
      <section className="pb-16 px-4 md:px-8 lg:px-16">
        <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Products
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

export default Products
