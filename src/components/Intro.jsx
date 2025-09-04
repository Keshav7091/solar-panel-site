import React from "react";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import CustomButton from "./CustomButton";

const Intro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square md:aspect-auto md:h-[550px]">
          <div className="absolute bottom-0 left-0 w-[90%] h-8 bg-gray-200 rounded-sm -z-10"></div>

          <img src="/intro.jpg" alt="Agency studio" className="w-full h-full object-cover" />

          <div className="absolute bottom-0 left-0 w-22 h-25 md:w-38 md:h-40 bg-[#f6a235] flex items-center justify-center">
            <div className="text-center leading-none">
              <p className="text-3xl md:text-5xl font-bold font-montserrat text-white shadow-text mb-1">
                5+
              </p>
              <p className="text-xs md:text-base text-white font-roboto">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Content) */}
        <div>
          <div className="w-5 h-[2px] bg-[#f6a235] mb-3"></div>
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
            

            <CustomButton text="Learn More"  />

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
