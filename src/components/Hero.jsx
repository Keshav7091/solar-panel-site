import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/solar-panel-roof-house_158595-6112.jpg')", // apni image ka link yaha dalna
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative container !px-10 text-white">
        <p className="uppercase font-Roboto font-bold text-md tracking-widest mb-5">
          Solar Panel Installation Solution
        </p>
        <h1 className="text-5xl md:text-7xl font-bold !text-white leading-tight mb-10">
          Powering Homes <br /> With Solar Panels
        </h1>
        <button className="flex bg-[#f6a235] items-center justify-center cursor-pointer gap-2 text-white w-44 h-14 rounded-sm hover:bg-gray-600 transition font-semibold">
          <span className="text-sm">Discover More</span>
        </button>
      </div>

      {/* Transparent big ENERGY text */}
      <h1 className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] font-bold text-transparent select-text outline-text tracking-[3rem]">
        ENERGY
      </h1>
    </section>
  );
};

export default Hero;
