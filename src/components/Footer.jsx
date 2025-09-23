import React from "react";
import { Link } from "react-router-dom";

import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { GiSolarPower } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white pt-0 pb-8 relative">
      {/* 🔶 Orange Top Banner */}
      <div className="relative bg-black py-15 mt-20">
        {/* CTA Box */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[90%] w-[90%] md:w-[80%]">
          <div className="bg-[#f6a235] py-10 px-6 md:px-10 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between shadow-lg text-center md:text-left">
            <h2 className="text-1xl md:text-3xl font-bold text-white mb-4 md:mb-0 leading-tight">
              NextGrid Solar – Lighting the Future with Clean Energy. Start your
              solar journey with us today!
            </h2>
            <button className="bg-black whitespace-nowrap text-white px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="absolute top-[88px] left-0 w-full h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-danger/70 to-transparent "></div>
      </div>

      {/* Footer Main Content */}
      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex justify-center">
            <div className="w-fit">
              <div className="flex items-center gap-3 mb-9">
                {/* Icon */}
                <div className="bg-orange-100 p-2 rounded-full">
                  <GiSolarPower className="text-orange-500 text-4xl" />
                </div>

                {/* Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                    Next Grid
                  </span>
                  <span className="text-sm md:text-base font-semibold text-orange-500 uppercase tracking-widest">
                    Solar Energy
                  </span>
                </div>
              </div>
              <p className="text-gray-400 font-roboto mb-6">
                We Offer a Wide Range of Quality Solar Panel Installation
                Services.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start group  ">
                  <IoMdMail className="w-5 h-5 text-[#f6a235] mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href="mailto:peswanipixels@gmail.com"
                    className="text-gray-400 font-roboto transition-colors"
                  >
                    companyEmail@gmail.com
                  </a>
                </li>
                <li className="flex items-start group ">
                  <IoMdCall className="w-5 h-5 text-[#f6a235] mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href="tel:+919958878741"
                    className="text-gray-400 font-roboto transition-colors"
                  >
                    +919958878741
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-start md:justify-center">
            <div className="w-fit">
              <h3 className="text-lg font-semibold mb-6 text-[#f6a235] inline-flex items-center">
                <span className="w-6 h-px bg-[#f6a235] mr-2"></span>
                Quick Links
              </h3>

              <ul className="space-y-3">
                {[
                  { name: "Home", link: "/" },
                  { name: "About", link: "/about" },
                  { name: "Products", link: "/product" },
                  { name: "Services", link: "/service" },
                  { name: "Contact", link: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="text-gray-400 hover:text-[#f6a235] font-roboto hover:translate-x-1 inline-block transition-transform"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="flex justify-start md:justify-center">
            <div className="w-fit">
              <h3 className="text-lg font-semibold mb-6 text-[#f6a235] inline-flex items-center">
                <span className="w-6 h-px bg-[#f6a235] mr-2"></span>
                Services
              </h3>

              <ul className="space-y-3">
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
          </div>

          {/* Contact */}
          <div className="flex justify-center">
            <div className="w-fit">
              <h3 className="text-lg font-semibold mb-6 text-[#f6a235] inline-flex items-center">
                <span className="w-6 h-px bg-[#f6a235] mr-2"></span>
                Contact Us
              </h3>

              <div className="flex items-start group mb-2 ">
                <IoMdMail className="w-5 h-5 text-[#f6a235] mr-3 mt-0.5 group-hover:animate-pulse" />
                <a
                  href="mailto:peswanipixels@gmail.com"
                  className="text-gray-400 font-roboto transition-colors"
                >
                  companyEmail@gmail.com
                </a>
              </div>
              <div className="flex items-start group mb-2 ">
                <IoMdCall className="w-5 h-5 text-[#f6a235] mr-3 mt-0.5 group-hover:animate-pulse" />
                <a
                  href="tel:+919958878741"
                  className="text-gray-400 font-roboto transition-colors"
                >
                  +919958878741
                </a>
              </div>

              <div className="flex items-start group mb-2 ">
                <FaLocationArrow className="w-5 h-5 text-[#f6a235] mr-3 mt-0.5 group-hover:animate-pulse" />
                <p className="text-gray-400 font-roboto">
                  SK 38, Sector 117 , Noida 201301
                </p>
              </div>

              <div className="flex space-x-4">
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm font-roboto">
            © 2025 NextGrid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
