import React from "react";

export default function Banner({ title, subtitle, image }) {
  return (
    <section
      className="relative h-[300px] md:h-[380px] w-full bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image || "/BannerImg.webp"})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {title || "Default Title"}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg md:text-xl text-gray-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
