import React from "react";
import bgImage from "/about/banner-b.webp";

// React Icons
import { FaUserTie, FaSolarPanel, FaBatteryFull, FaHome } from "react-icons/fa";

const steps = [
  {
    id: 1,
    step: "01.",
    title: "Meet Consultant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <FaUserTie size={40} />,
  },
  {
    id: 2,
    step: "02.",
    title: "Generate Power",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <FaSolarPanel size={40} />,
  },
  {
    id: 3,
    step: "03.",
    title: "Save the Energy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <FaBatteryFull size={40} />,
  },
  {
    id: 4,
    step: "04.",
    title: "Use the Power",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <FaHome size={40} />,
  },
];

export default function TeamWork() {
  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: `url("/new/2.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Orange Top Bar with Triangle */}
      <div className="bg-[#F6A235] text-center py-6 relative">
        <h2 className="text-lg md:text-xl font-semibold text-white uppercase">
          How Our Solar Team Works
        </h2>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 
                        border-l-[20px] border-r-[20px] border-t-[20px] 
                        border-l-transparent border-r-transparent border-t-[#F6A235]"
        ></div>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 px-6 md:px-12 lg:px-20">
        {steps.map((s) => (
          <div key={s.id} className="text-left">
            {/* Icon Box */}
            <div className="flex items-center justify-start bg-gray-800 w-20 h-20 mb-6 rounded">
              <div className="text-white mx-auto">{s.icon}</div>
            </div>
            {/* Step */}
            <p className="text-sm text-gray-300">STEP</p>
            <h4 className="text-[#F6A235] font-bold text-lg">{s.step}</h4>
            {/* Title */}
            <h3 className="font-bold text-xl mt-2 mb-4">{s.title}</h3>
             <span className="block w-6 h-[2px] bg-[#F6A235] mb-4"></span>
            {/* Description */}
            <p className="text-white text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
