import React from 'react'
import { FaSun, FaSolarPanel } from "react-icons/fa";

const EnergySection = () => {
  return (
    <section className="py-16 container bg-white">
      <div className="px-6 lg:px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
            <div className="w-5 h-[2px] bg-[#f6a235] mb-3"></div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Ecological Way
          </p>
          <h2 className="text-4xl flex flex-col max-w-150 lg:text-5xl leading-tight font-bold text-gray-900 mb-10 gap-4">
            Reshaping Energy for the Future
          </h2>
          <p className="text-gray-600 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col items-start gap-3">
              <div className="text-orange-500 text-6xl mb-3">
                <FaSun />
              </div>
              <div>
                <h4 className="font-bold max-w-40 text-gray-900 mb-4">
                  Reduce Your Daily Energy Use
                </h4>
                <p className="text-gray-600 max-w-50 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="text-orange-500 text-6xl mb-3">
                <FaSolarPanel />
              </div>
              <div>
                <h4 className="font-bold max-w-50 text-gray-900 mb-4">
                  The Most Used Energy Systems
                </h4>
                <p className="text-gray-600 max-w-50 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -right-5 top-6 w-full h-full bg-orange-400 -z-10 rounded-sm"></div>
          <img
            src="/energy.jpg"
            alt="Solar House"
            className="w-full rounded-sm"
          />
        </div>
      </div>
    </section>
  )
}

export default EnergySection
