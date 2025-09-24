import React from "react";

import Banner from "../components/Banner";

import { SlEnergy } from "react-icons/sl";

import {
  Sun,
  Lightbulb,
  Car,
  Droplet,
  Shield,
  Home,
  Star,
  Zap,
  Award,
  Bolt,
  Anchor,
  BatteryCharging,
  CloudSun,
  Wrench,
  ZapOff,
  Battery,
  Globe,
  Hammer,
  Wifi,
  MapPin,
  ThermometerSun,
  CheckSquare,
  Compass,
  CloudLightning,
  BatteryFull,
  Power,
  Rocket,
  Plug,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Solar Modules Installation",
    description:
      "Professional installation of solar modules for residential & commercial projects",
    image: "/new/0.jpg",
    icon: <Sun className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Structure for Solar Panels with Interconnection",
    description:
      "Durable mounting structures for solar panels with seamless interconnection",
    image: "/new/1.jpg",
    icon: <Car className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Erection of DC Power Cables through HDPE conduits",
    description:
      "Safe and efficient laying of DC power cables using HDPE conduits",
    image: "/new/2.jpg",
    icon: <Lightbulb className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title:
      "Erection of Solar Inverter With Individual Structure Stand and Canopy",
    description:
      "Installation of inverters with proper structural support and protective canopy",
    image: "/new/3.jpg",
    icon: <Droplet className="w-10 h-10 text-white" />,
  },
  {
    id: 5,
    title: "Erection of AC Cables",
    description: "High-quality AC cable installation for solar power systems",
    image: "/new/4.jpg",
    icon: <Shield className="w-10 h-10 text-white" />,
  },
  {
    id: 6,
    title: "Erection AC Distribution Panel",
    description:
      "Installation of AC distribution panels ensuring proper load management",
    image: "/new/5.jpg",
    icon: <Home className="w-10 h-10 text-white" />,
  },
  {
    id: 7,
    title: "Module Cleaning & UPVC Pipe Installation",
    description:
      "Maintenance of solar modules and installation of UPVC piping for safety",
    image: "/new/6.jpg",
    icon: <Star className="w-10 h-10 text-white" />,
  },
  {
    id: 8,
    title: "All Cables as per Indian Standards",
    description:
      "Supply and installation of all cables compliant with Indian standards",
    image: "/new/7.jpg",
    icon: <Zap className="w-10 h-10 text-white" />,
  },
  {
    id: 9,
    title: "Supply & Erection of Required Earthing Kit & Strip",
    description: "Installation of earthing systems to ensure electrical safety",
    image: "/new/8.jpg",
    icon: <Award className="w-10 h-10 text-white" />,
  },
  {
    id: 10,
    title: "Installation, Testing & Commissioning of Solar Power Plant",
    description:
      "Complete end-to-end installation, testing, and commissioning of solar plants",
    image: "/new/10.jpg",
    icon: <Bolt className="w-10 h-10 text-white" />,
  },
  {
    id: 11,
    title: "Preliminary Engineering",
    description:
      "Initial engineering design for effective solar power deployment",
    image: "/new/11.jpg",
    icon: <Anchor className="w-10 h-10 text-white" />,
  },
  {
    id: 12,
    title: "Basic Engineering",
    description:
      "Core engineering designs for solar system efficiency and reliability",
    image: "/new/12.jpg",
    icon: <BatteryCharging className="w-10 h-10 text-white" />,
  },
  {
    id: 13,
    title: "Detailed Engineering",
    description:
      "Comprehensive engineering plan including electrical & civil work details",
    image: "/new/13.jpg",
    icon: <CloudSun className="w-10 h-10 text-white" />,
  },
  {
    id: 14,
    title: "Installation Review Prior to Commissioning",
    description:
      "Thorough inspection of installations to ensure system readiness",
    image: "/new/14.jpg",
    icon: <Wrench  className="w-10 h-10 text-white" />,
  },
  {
    id: 15,
    title: "Construction Power",
    description:
      "Temporary power supply for construction activities at project site",
    image: "/new/15.jpg",
    icon: <ZapOff className="w-10 h-10 text-white" />,
  },
  {
    id: 16,
    title: "Construction Water for Civil Blocks (If Applicable)",
    description:
      "Provision of water supply for civil works during construction",
    image: "/new/16.jpg",
    icon: <Battery className="w-10 h-10 text-white" />,
  },
  {
    id: 17,
    title: "Internet (LAN) Access Point to Inverter Cluster",
    description:
      "Connectivity setup for remote monitoring of inverter clusters",
    image: "/new/0.jpg",
    icon: <Globe className="w-10 h-10 text-white" />,
  },
  {
    id: 18,
    title: "Access Ladder to Each Roof if Required",
    description:
      "Provision of safe roof access for maintenance and installation",
    image: "/new/1.jpg",
    icon: <Hammer className="w-10 h-10 text-white" />,
  },
  {
    id: 19,
    title: "Training at Site",
    description: "On-site training for client staff and operators",
    image: "/new/2.jpg",
    icon: <Wifi className="w-10 h-10 text-white" />,
  },
  {
    id: 20,
    title:
      "Generation Report Showing: Daily Generation Data; Peak Generation Data & Graphs",
    description:
      "Detailed reporting of energy generation with analytics and graphs",
    image: "/new/3.jpg",
    icon: <MapPin className="w-10 h-10 text-white" />,
  },
  {
    id: 21,
    title: "Provision to Monitor the Generation Data from Remote Location",
    description: "Remote monitoring system for real-time solar generation data",
    image: "/new/4.jpg",
    icon: <ThermometerSun className="w-10 h-10 text-white" />,
  },
  {
    id: 22,
    title: "Safety Equipment for Workers",
    description: "Provision of protective gear to ensure worker safety",
    image: "/new/5.jpg",
    icon: <SlEnergy  className="w-10 h-10 text-white" />,
  },
  {
    id: 23,
    title: "Transportation",
    description: "Efficient transportation of equipment and materials to site",
    image: "/new/6.jpg",
    icon: <CheckSquare className="w-10 h-10 text-white" />,
  },
  {
    id: 24,
    title: "Transit Insurance up to Site of Supply Equipment",
    description: "Insurance coverage during transit to ensure safe delivery",
    image: "/new/7.jpg",
    icon: <Compass className="w-10 h-10 text-white" />,
  },
  {
    id: 25,
    title: "Unloading at Site of Supply Equipment",
    description: "Careful unloading of equipment at project site",
    image: "/new/8.jpg",
    icon: <CloudLightning className="w-10 h-10 text-white" />,
  },
  {
    id: 26,
    title: "Erection & Commissioning Insurance",
    description: "Insurance coverage during erection and commissioning",
    image: "/new/10.jpg",
    icon: <BatteryFull className="w-10 h-10 text-white" />,
  },
  {
    id: 27,
    title:
      "Lodging, Boarding, Safety to Supplier’s Staff and Contractors at Site",
    description: "Accommodation and safety provisions for staff on-site",
    image: "/new/11.jpg",
    icon: <Power className="w-10 h-10 text-white" />,
  },
  {
    id: 28,
    title: "CEIG & Net Metering Approvals",
    description: "Obtaining necessary CEIG and net metering approvals",
    image: "/new/12.jpg",
    icon: <Rocket className="w-10 h-10 text-white" />,
  },
  {
    id: 29,
    title: "Installation of Net-Metering System",
    description: "Installation and integration of net-metering systems",
    image: "/new/13.jpg",
    icon: <Plug className="w-10 h-10 text-white" />,
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
            At NextGrid Solar, we believe in building a greener tomorrow by
            harnessing the power of the sun. With world-class technology,
            experienced engineers, and a customer-first approach, we provide
            end-to-end solar solutions that reduce electricity costs, increase
            energy independence, and promote sustainability.
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
