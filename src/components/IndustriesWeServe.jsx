import React from "react";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaHotel,
  FaGraduationCap,
  FaTractor,
  FaCity,
} from "react-icons/fa"; // Import React Icons for improved design

const IndustriesWeServe = () => {
  const industriesData = [
    {
      icon: <FaHome className="w-8 h-8 text-[#f6a235]" />,
      title: "Residential Homes & Apartments",
    },
    {
      icon: <FaBuilding className="w-8 h-8 text-[#f6a235]" />,
      title: "Commercial Buildings & Offices",
    },
    {
      icon: <FaIndustry className="w-8 h-8 text-[#f6a235]" />,
      title: "Industrial & Manufacturing Units",
    },
    {
      icon: <FaHotel className="w-8 h-8 text-[#f6a235]" />,
      title: "Hotels & Hospitality",
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-[#f6a235]" />,
      title: "Schools, Colleges & Institutions",
    },
    {
      icon: <FaTractor className="w-8 h-8 text-[#f6a235]" />,
      title: "Agriculture & Farming (Solar Pumps)",
    },
    {
      icon: <FaCity className="w-8 h-8 text-[#f6a235]" />,
      title:
        "Urban & Rural Infrastructure (Street Lighting, Carports, Mini-Grids)",
    },
  ];

  return (
    <>


    
    <section className="py-12 container bg-white">
      <div className="text-center mb-12">
        <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
        <h4 className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">
          Our Reach
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Industries We Serve
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {industriesData.map((industry, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-lg shadow-sm flex items-center space-x-4 transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
          >
            <div className="flex-shrink-0">{industry.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {industry.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default IndustriesWeServe;
