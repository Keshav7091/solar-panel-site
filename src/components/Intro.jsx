import React from "react";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="!py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side (Image + Experience Box) */}
        <div className="relative aspect-square md:aspect-auto md:h-[550px]">
          <img
            src="/intro.jpg"
            alt="Agency studio"
            className="w-full h-full object-cover shadow-text"
          />

          <div className="absolute  md:bottom-0 left-0 w-25 h-30 md:w-40 md:h-45 bg-[#f6a235] p-4 md:p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl md:text-5xl font-bold font-montserrat text-white shadow-text">
                5+
              </p>

              <p className="text-xs md:text-base text-gray-light font-roboto mt-1 md:mt-2">
                Years of Creative Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Content) */}
        <div>
          <span className="uppercase text-sm text-gray-500 tracking-wider">
            Our Introduction
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-10 leading-snug">
            Energy Source for a <br /> Better Life
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Donec
            scelerisque dolor id nunc dictum.
          </p>

          {/* List Items */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-orange-500" />
              Suspe ndisse suscipit sagittis leo.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-orange-500" />
              Lorem Ipsum generators on the tend.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-orange-500" />
              Morbi suscipit scelerisque sapien eget.
            </li>
          </ul>

          {/* Buttons & Contact */}
          <div className="mt-8 flex items-center gap-8">
            {/* Learn More Button */}
            <button className="flex bg-[#f6a235] items-center justify-center gap-2 text-white w-37 h-12 rounded-sm hover:bg-gray-800 transition font-semibold">
          <span className="text-sm">Learn More</span>
        </button>

            {/* Contact Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full">
                <FaPhoneAlt className="text-orange-500 text-lg" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Have any questions?</p>
                <p className="font-bold text-gray-900">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
