import React from "react";

const OurProcess = () => {
  const processSteps = [
    {
      title: "Consultation & Site Survey",
      description: "Understanding your energy needs",
    },
    {
      title: "System Design & Engineering",
      description: "Customized solar solutions for maximum efficiency",
    },
    {
      title: "Installation & Commissioning",
      description: "Safe, professional, and timely execution",
    },
    {
      title: "Monitoring & Training",
      description: "Generation reports and remote monitoring systems",
    },
    {
      title: "After-Sales Support",
      description: "Reliable maintenance & technical assistance",
    },
  ];

  return (
    <section className="py-12 container bg-white">
      <div className="text-center mb-12">
        <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
        <h4 className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">
          Our Process
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Simple & Transparent
        </h2>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-gray-600 text-lg">
          We make the shift to solar easy and hassle-free:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f6a235] text-white text-xl font-bold mb-4 flex-shrink-0">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
