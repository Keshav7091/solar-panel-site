import React from "react";
import { Sun, Wind, Battery, Home, Wrench, Lightbulb } from "lucide-react"; // icons
import Banner from "../components/Banner";

const services = [
  {
    id: 1,
    title: "Solar Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
    image: "/service1.webp",
    icon: <Sun className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Wind Energy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
    image: "/service2.webp",
    icon: <Wind className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Battery Storage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
    image: "/service3.webp",
    icon: <Battery className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Residential Solar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
    image: "/service4.webp",
    icon: <Home className="w-10 h-10 text-white" />,
  },
  {
    id: 5,
    title: "Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
    image: "/service5.webp",
    icon: <Wrench className="w-10 h-10 text-white" />,
  },
  {
    id: 6,
    image: "/service6.webp",
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    title: "Smart Lighting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
  },
];

export default function Services() {
  return (
    <div>
      <Banner
        title="Services"
        subtitle="Helping you save energy and keep the lights on"
        image="/bannerImg.webp"
      />
      <section className="py-12 container px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
          <h4 className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">
            What We Do
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="overflow-hidden  bg-white">
              {/* Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                {/* Icon Badge */}
                <div
                  className="absolute w-[60px] h-[60px] bottom-0 right-4 translate-y-1/2 bg-[#f6a235] shadow-md 
                flex items-center justify-center rounded-md"
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border border-b-4 border-[#E7DFD5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="w-5 h-[2px] bg-[#f6a235] mb-3"></div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
