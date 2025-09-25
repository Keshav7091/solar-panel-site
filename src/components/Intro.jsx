import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Intro = () => {

  const handleLinkClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side (Image) */}
        <div className="relative w-full h-80 md:h-[550px]">
          <div className="absolute bottom-0 left-0 w-[90%] h-8 bg-gray-200 rounded-sm -z-10"></div>

          <img
            src="/new/introImg.jpg"
            alt="Agency studio"
            className="w-full h-full object-cover rounded-md"
          />

          <div className="absolute -bottom-3 left-10 transform -translate-x-1/2 md:left-0 md:translate-x-0 w-20 h-20 md:w-36 md:h-36 bg-[#f6a235] flex items-center justify-center rounded-md">
            <div className="text-center leading-none">
              <p className="text-2xl md:text-5xl font-bold font-montserrat text-white shadow-text mb-1">
                5+
              </p>
              <p className="text-xs md:text-base text-white font-roboto">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Content) */}
        <div className="text-center md:text-left">
          <div className="w-10 h-[2px] bg-[#f6a235] mb-3 mx-auto md:mx-0"></div>
          <span className="uppercase text-sm text-gray-500 tracking-wider">
            Our Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mt-6 md:mt-10 leading-snug">
            Energy Source for a <br /> Better Life
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            At NextGrid Solar, we are committed to delivering clean, reliable,
            and affordable solar energy solutions. With expertise in engineering,
            procurement, and commissioning, we design and install state-of-the-art
            solar systems tailored to homes, businesses, and industries.
          </p>

          {/* List Items */}
          <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              Our mission is simple: help you save money, protect the environment, 
              and secure long-term energy independence.
            </li>
          </ul>

          {/* Buttons & Contact */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-6 justify-center md:justify-start">
            {/* Learn More Button */}
            <Link to="/about" className="mx-auto md:mx-0" onClick={handleLinkClick}>
              <CustomButton text="Learn More" />
            </Link>

            {/* Contact Info */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full">
                <FaPhoneAlt className="text-orange-500 text-lg" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Have any questions?</p>
                <p className="font-bold text-gray-900 text-sm sm:text-base">+91 9958878741</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
