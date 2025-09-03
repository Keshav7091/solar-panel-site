import React from "react";
import { FaCog } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-full h-[550px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left Content */}
        <div className="bg-[#1a1a1a] text-white flex items-center">
          <div className="container px-15 pl-30 max-w-lg">
            {/* Small Heading */}
            <p className="text-white uppercase text-sm font-semibold tracking-widest mb-4 relative">
              <div className="w-5 h-[2px] bg-[#f6a235] mb-3"></div>
              Our Benefits
            </p>

            {/* Main Title */}
            <h2 className="text-5xl font-bold leading-snug mb-6">
              Why Choose Solar Panel Solution?
            </h2>

            {/* Description */}
            <p className="text-gray-300 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaCog className="text-orange-400 text-lg" />
                <span className="font-semibold">
                  Suspe ndisse suscipit sagittis leo.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaCog className="text-orange-400 text-lg" />
                <span className="font-semibold">
                  Lorem Ipsum generators on the tend.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaCog className="text-orange-400 text-lg" />
                <span className="font-semibold">
                  Morbi suscipit scelerisque sapien eget.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 h-full">
          <img
            src="/product1.webp"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <img
            src="/product2.webp"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
