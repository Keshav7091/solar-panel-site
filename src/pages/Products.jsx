import React from "react";
import Banner from "../components/Banner";
import CustomButton from "../components/CustomButton";

const products = [
  {
    id: 1,
    title: "Multicrystalline PV Modules",
    description: "40W – 200W",
    image: "/product1.webp",
  },
  {
    id: 2,
    title: "Mono PERC Half-Cut Modules",
    description: "450W, 500W, 550W",
    image: "/product2.webp",
  },
  {
    id: 3,
    title: "Mono PERC Half-Cut Bifacial Modules",
    description: "550W",
    image: "/product3.webp",
  },
  {
    id: 4,
    title: "N-TOPCon Bifacial Modules",
    description: "585W",
    image: "/product4.webp",
  },
  {
    id: 5,
    title: "DCR Module (Bifacial Mono PERC)",
    description: "500W – 600W",
    image: "/product5.webp",
  },
  {
    id: 6,
    title: "Off-Grid Solar Inverters",
    description: "Reliable power for independent systems",
    image: "/product6.webp",
  },
  {
    id: 7,
    title: "On-Grid Solar Inverters",
    description: "Seamless integration with grid power",
    image: "/product5.webp",
  },
  {
    id: 8,
    title: "Hybrid Solar ESS Solutions",
    description: "Integrated energy storage systems",
    image: "/product1.webp",
  },
  {
    id: 9,
    title: "Solar Street Lights",
    description: "Efficient and sustainable street lighting",
    image: "/product2.webp",
  },
  {
    id: 10,
    title: "Solar Blinkers, Studs & Delineators",
    description: "Enhanced road safety solutions",
    image: "/product3.webp",
  },
  {
    id: 11,
    title: "Solar Road Security Solutions",
    description: "Comprehensive road safety products",
    image: "/product4.webp",
  },
];

export default function Products() {
  return (
    <div>
      <Banner
        title="Products"
        subtitle="Helping you save energy and keep the lights on"
        image="/bannerImg.webp"
      />
      <div className=" text-center my-10">
        <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Remote Monitoring & Smart Solutions
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At NextGrid, we provide digital monitoring systems that allow you to
          track your solar power generation in real-time. With detailed daily
          reports, peak generation data, and graphical insights, you stay fully
          informed and in control.
        </p>
      </div>
      <section className="pb-16 px-4 md:px-8 lg:px-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="relative group overflow-hidden shadow-lg"
              >
                {/* Product Image */}
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full object-cover transition-transform duration-500  h-[250px] sm:h-[300px] md:h-[375px]"
                />
                {/* Gradient Overlay with custom CSS */}
                <div
                  className="absolute bottom-0 left-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 10%, transparent 100%)",
                  }}
                ></div>
                {/* Content with smooth slide */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] translate-y-6 gopacity-100 translate-y-0 transition-all duration-500 p-4">
                  <div className="w-6 h-[2px] bg-[#f6a235] mx-auto sm:mx-0"></div>

                  <p className="text-[rgba(255,255,255,.75)] mt-2 font-medium text-xs uppercase pt-[6px] pr-0 pl-0 tracking-[.1em] mb-4">
                    {prod.description}
                  </p>

                  <h4 className="text-2xl mb-6 font-bold text-white mb-3 lewading-tight">
                    {prod.title}
                  </h4>
                  {/* <CustomButton text="View More" to="/product" size="sm" /> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
