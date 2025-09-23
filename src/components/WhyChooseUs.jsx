import React from "react";
import { FaCheck } from "react-icons/fa"; // Changed icon from FaCog to FaCheck

const WhyChooseUs = () => {
  const benefits = [
    "End-to-end EPC services",
    "Reliable engineering & world-class components",
    "Safe, professional, and timely project execution",
    "Advanced monitoring & reporting systems",
    "Commitment to sustainability and customer satisfaction",
  ];

  return (
    <>
      <section className="bg-[#1a1a1a] w-full py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[550px]">
          {/* Left Content */}
          <div className="text-white flex items-center">
            <div className="px-6 sm:px-10 lg:px-16 max-w-xl mx-auto py-10 md:py-0">
              {/* Small Heading */}
              <div className="mb-4">
                <div className="w-8 h-[2px] bg-[#f6a235] mb-3"></div>
                <p className="uppercase text-sm font-semibold tracking-widest">
                  Our Benefits
                </p>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6">
                Why Choose NextGrid Solar? {/* Updated title */}
              </h2>

              {/* Description */}
              <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheck className="text-orange-400 text-lg" />{" "}
                    {/* Changed icon */}
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Images (hidden on small screens) */}
          <div className="hidden md:grid grid-cols-2 h-full">
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
      
    </>
  );
};

export default WhyChooseUs;
