import React from "react";
import { Link } from "react-router-dom";

import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-24">
      <footer className="bg-black text-white pt-0 pb-8 relative">
        {/* 🔶 Orange Top Banner */}
        <div className="relative bg-black py-15 mt-20">
          <div className="absolute left-1/2 -translate-x-1/2 -top-[90%] w-[90%] md:w-[80%]">
            <div className="bg-[#f6a235] py-10 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between shadow-lg text-center md:text-left">
              <h2 className="text-1xl md:text-3xl font-bold text-white mb-4 md:mb-0 leading-tight">
                NextGrid Solar – Lighting the Future with Clean Energy. Start
                your solar journey with us today!
              </h2>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="bg-black whitespace-nowrap text-white px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient Line */}
        <div className="absolute top-[88px] left-0 w-full h-[2px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-danger/70 to-transparent"></div>
        </div>

        {/* Footer Main Content */}
        <div className="container mx-auto px-4 md:px-6 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-left">
            {/* Brand Section */}
            <div className="flex flex-col justify-start">
              <div className="w-full mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 h-full rounded-full">
                    <img
                      src="/logo.jpeg"
                      className="h-full aspect-[1/1] object-contain"
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                      NextGrid
                    </span>
                    <span className="text-sm md:text-base font-semibold text-orange-500 uppercase tracking-widest">
                      Solar Energy
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 font-roboto mb-4">
                  We Offer a Wide Range of Quality Solar Panel Installation
                  Services.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <IoMdCall className="w-5 h-5 text-[#f6a235]" />
                  <a
                    href="tel:+919958878741"
                    className="text-gray-400 font-roboto transition-colors"
                  >
                    +919958878741
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col justify-start mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#f6a235]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", link: "/" },
                  { name: "About", link: "/about" },
                  { name: "Products", link: "/product/Products" },
                  { name: "Services", link: "/service" },
                  { name: "Contact", link: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="text-gray-400 hover:text-[#f6a235] font-roboto transition-transform hover:translate-x-1"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col justify-start mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#f6a235]">
                Services
              </h3>
              <ul className="space-y-2">
                {[
                  "Solar Technology",
                  "Solar Installation",
                  "Battery Materials",
                  "Solar Equipment",
                  "Charge Controllers",
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 font-roboto">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col justify-start mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#f6a235]">
                Contact Us
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <IoMdCall className="w-5 h-5 text-[#f6a235]" />
                <a
                  href="tel:+919958878741"
                  className="text-gray-400 font-roboto transition-colors"
                >
                  +919958878741
                </a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaLocationArrow className="w-5 h-5 text-[#f6a235]" />
                <p className="text-gray-400 font-roboto">
                  SK 38, Sector 117, Noida 201301
                </p>
              </div>
              <div className="flex space-x-4 mt-2">
                {[FiInstagram, FiFacebook, FiLinkedin, FiYoutube].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:text-black hover:bg-white transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm font-roboto">
              © 2025 NextGrid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
