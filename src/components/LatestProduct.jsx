import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Green Tech Education",
    description: "Installations",
    image: "/new/7.jpg",
  },
  {
    id: 2,
    title: "Commercial Solar Inspections",
    description: "Installations",
    image: "/new/8.jpg",
  },
  {
    id: 3,
    title: "Solar Research Development",
    description: "Installations",
    image: "/new/0.jpg",
  },
  {
    id: 4,
    title: "Tile & Metal Roof Installations",
    description: "Installations",
    image: "/new/10.jpg",
  },
];

const LatestProduct = () => {

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-[#faf5ef]">
      {/* Heading Section */}
      <div className="container !mb-15">
        <div className="w-8 h-[2px] bg-[#f6a235] mb-3"></div>
        <h4 className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-3">
          Recent Projects
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Case Studies
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="relative group overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Product Image */}
            <img
              src={prod.image}
              alt={prod.title}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.3)] to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 transform translate-y-0 group-hover:opacity-100">
              <div className="w-6 h-[2px] bg-[#f6a235] mb-2"></div>
              <p className="text-xs uppercase tracking-widest text-[rgba(255,255,255,.7)] mb-2">
                {prod.description}
              </p>
              <h4 className="text-xl font-bold text-white leading-snug mb-4">
                {prod.title}
              </h4>

              {/* Link Button */}
              <Link
                to="/product/SolarSolutions"
                className="bg-[#f6a235] text-white px-4 py-2 text-sm font-medium inline-block transition hover:bg-yellow-500"
                onClick={handleLinkClick}
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProduct;
