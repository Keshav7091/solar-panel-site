import React from "react";
import Banner from "../components/Banner";

const products = [
  {
    id: 1,
    title: "Green Tech Education",
    description: "Installations",
    image: "/product1.webp",
  },
  {
    id: 2,
    title: "Commercial Solar Inspections",
    description: "Installations",
    image: "/product2.webp",
  },
  {
    id: 3,
    title: "Solar Research Development",
    description: "Installationse",
    image: "/product3.webp",
  },
  {
    id: 4,
    title: "Tile & Metal Roof Installations",
    description: "Installations",
    image: "/product4.webp",
  },
  {
    id: 5,
    title: "Solar Panel Installation",
    description: "Installations",
    image: "/product5.webp",
  },
  {
    id: 6,
    title: "Whole House Battery Installation",
    description: "Installations",
    image: "/product6.webp",
  },
];

export default function Products() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <Banner />
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 p-4">
              <div className="w-6 h-[2px] bg-[#f6a235] mx-auto sm:mx-0"></div>

              <p className="text-[rgba(255,255,255,.75)] mt-2 font-medium text-xs uppercase pt-[6px] pr-0 pl-0 tracking-[.1em] mb-4">
                {prod.description}
              </p>

              <h4 className="text-2xl font-bold text-white mb-3 lewading-tight">
                {prod.title}
              </h4>
              <button className="mt-3 bg-[#f6a235] text-white px-4 py-2 transition cursor-pointer">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
