// src/components/Products.jsx
import React from "react";

export default function Banner() {
  return (
    <section
      className="relative h-[300px] md:h-[380px] w-full bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('public/BannerImg.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Products</h1>
        <p className="mt-3 text-lg md:text-xl text-gray-200">
          Helping you save energy and keep the lights on
        </p>
      </div>
    </section>
  );
}
