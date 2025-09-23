import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('/new/Banner0.jpg')",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative container !px-10 text-white z-1">
        <p className="uppercase font-Roboto font-bold text-md tracking-widest mb-5">
          NextGrid Solar
        </p>
        <h1 className="text-5xl md:text-7xl font-bold !text-white leading-tight mb-10">
          Powering a <br /> Sustainable Future
        </h1>
        <Link
          to="/about"
          className="flex bg-[#f6a235] items-center justify-center cursor-pointer gap-2 text-white w-44 h-14 rounded-sm hover:bg-gray-600 transition font-semibold"
        >
          <span className="text-sm">Discover More</span>
        </Link>
      </div>

      {/* Transparent big ENERGY text */}
      <h1 className="absolute  left-1/2 -translate-x-1/2 font-bold text-transparent select-none outline-text tracking-widest text-[20vw] sm:text-[18vw] md:text-[17vw] lg:text-[15vw] -bottom-10 md:-bottom-22 lg:-bottom-32 z-0">
        ENERGY
      </h1>
    </section>
  );
};

export default Hero;
