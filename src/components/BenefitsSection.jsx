import React from "react";
import {
  Wallet,
  Leaf,
  BatteryCharging,
  Home,
  ShieldCheck,
  Wrench,
} from "lucide-react"; // Import Lucide icons for better design

const benefitsData = [
  {
    title: "Cost Savings",
    description:
      "Drastically reduce your monthly electricity bills and save money in the long run.",
    icon: <Wallet className="w-8 h-8 text-[#f6a235] flex-shrink-0" />,
  },
  {
    title: "Eco-Friendly",
    description:
      "Cut down carbon emissions, reduce your carbon footprint, and support a sustainable future.",
    icon: <Leaf className="w-8 h-8 text-[#f6a235] flex-shrink-0" />,
  },
  {
    title: "Energy Independence",
    description:
      "Generate your own power, reduce reliance on the grid, and gain energy security.",
    icon: <BatteryCharging className="w-8 h-8 text-[#f6a235] flex-shrink-0" />,
  },
  {
    title: "Increase Property Value",
    description:
      "Solar-ready properties are more attractive to buyers and can increase resale value.",
    icon: <Home className="w-8 h-8 text-[#f6a235] flex-shrink-0" />,
  },
  {
    title: "Reliable Power Supply",
    description:
      "Advanced technology ensures consistent performance and a stable power supply.",
    icon: <ShieldCheck className="w-8 h-8 text-[#f6a235] flex-shrink-0" />,
  },
  {
    title: "Low Maintenance",
    description:
      "Durable solar modules are designed to last 25+ years with minimal maintenance.",
    icon: <Wrench className="w-8 h-8 text-[#f6a235] flex-shrink-0" />,
  },
];



const BenefitsSection = () => {
  return (
    <>
      <section className="py-12 container bg-white">
        <div className="text-center mb-12">
          <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
          <h4 className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">
            Why Choose Solar?
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Benefits of Going Solar with NextGrid
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-sm flex items-start space-x-4"
            >
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

 
    </>
  );
};

export default BenefitsSection;
