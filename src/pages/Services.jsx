import React from "react";
import {
  Sun,
  Wind,
  Battery,
  Home,
  Wrench,
  Lightbulb,
  Car,
  Droplet,
  Shield,
} from "lucide-react"; // icons

import Banner from "../components/Banner";

const services = [
  {
    id: 1,
    title: "Solar Mini Grids",
    description: "Reliable off-grid power for rural & remote locations",
    image: "/service1.webp",
    icon: <Sun className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Solar Carports",
    description: "Dual-purpose parking spaces with integrated solar roofs",
    image: "/service2.webp",
    icon: <Car className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Centralized Solar & Street Lighting",
    description: "Efficient solutions for urban & rural roads",
    image: "/service3.webp",
    icon: <Lightbulb className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Solar Water Pumps",
    description: "Sustainable irrigation and water supply",
    image: "/service4.webp",
    icon: <Droplet className="w-10 h-10 text-white" />,
  },
  {
    id: 5,
    title: "Solar Home Lighting Systems",
    description: "Affordable clean energy for households",
    image: "/service5.webp",
    icon: <Home className="w-10 h-10 text-white" />,
  },
  {
    id: 6,
    title: "Solar Security Solutions",
    description: "Road safety lights, blinkers, studs, and delineators",
    image: "/service6.webp",
    icon: <Shield className="w-10 h-10 text-white" />,
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

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            NextGrid Solar – Powering Homes & Businesses with Clean Energy
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            At NextGrid Solar, we believe in building a greener tomorrow by harnessing the power of the sun. With world-class technology, experienced engineers, and a customer-first approach, we provide end-to-end solar solutions that reduce electricity costs, increase energy independence, and promote sustainability.
          </p>
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
