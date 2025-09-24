
import React from "react";

export default function ProductCard({ image, title, description }) {
  return (
    <div className="relative group overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full object-cover transition-transform duration-500 h-[250px] sm:h-[300px] md:h-[375px]"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 10%, transparent 100%)",
        }}
      ></div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] transition-all duration-500 p-4">
        <div className="w-6 h-[2px] bg-[#f6a235] mx-auto sm:mx-0"></div>
        <p className="text-[rgba(255,255,255,.75)] mt-2 font-medium text-xs uppercase tracking-[.1em] mb-4">
          {description}
        </p>
        <h4 className="text-2xl font-bold text-white mb-3">{title}</h4>
      </div>
    </div>
  );
}
