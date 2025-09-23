import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import a professional checkmark icon

const ScopeOfWork = () => {
  const scopeOfWorkItems = [
    "Solar Modules Installation",
    "Mounting Structures & Interconnections",
    "DC/AC Cable Erection (as per Indian Standards)",
    "Solar Inverter Installation with Canopy",
    "AC Distribution Panel Installation",
    "Module Cleaning Pipe Network",
    "Earthing Kit & Strip Supply and Erection",
    "Installation, Testing & Commissioning",
    "Preliminary, Basic & Detailed Engineering",
    "Training & Generation Reports",
    "Remote Monitoring Provisions",
    "Safety Equipment for Workers",
    "Transportation, Insurance & Site Unloading",
    "CEIG & Net Metering Approvals",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Scope of Work – Our Promise of Quality
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide end-to-end solutions for solar projects, ensuring smooth
            execution at every stage:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopeOfWorkItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-5 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            >
              {/* Replaced generic checkmark with a React Icon for better design */}
              <FaCheckCircle className="w-6 h-6 text-[#f6a235] flex-shrink-0" />
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeOfWork;
