import React from "react";
import { Link } from "react-router-dom";

import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { IoMdMail, IoMdCall } from "react-icons/io";

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
        <div className="absolute left-1/2 -translate-x-1/2 -top-[90%] w-[80%]">
          <div className="bg-[#f6a235] py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between shadow-lg">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-150 mb-4 md:mb-0">
              Smartest Way to Generate Electricity
            </h2>
            <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition mr-25">
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
              <div className="flex items-center gap-2 mb-5">
                <div className="text-[#f6a235] text-3xl">☀️</div>
                <span className="text-2xl font-extrabold text-white">
                  Solam
                </span>
              </div>
              <p className="text-gray-400 font-roboto mb-6">
                We Offer a Wide Range of Quality Solar Panel Installation
                Services.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start group">
                  <IoMdMail className="w-5 h-5 text-[#f6a235] mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href="mailto:peswanipixels@gmail.com"
                    className="text-gray-400 font-roboto transition-colors"
                  >
                    companyEmail@gmail.com
                  </a>
                </li>
                <li className="flex items-start group">
                  <IoMdCall className="w-5 h-5 text-[#f6a235] mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href="tel:+919468500300"
                    className="text-gray-400 font-roboto transition-colors"
                  >
                    +91 123456789
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

              <p className="text-gray-400 font-roboto mb-5">
                60 Brooklyn Golden Street New York 8800 United States
              </p>

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
            © 2025 Solar panel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
