import React from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Robert Smith",
    role: "Director",
    image: "/new/15.jpg",
  },
  {
    id: 2,
    name: "John Albert",
    role: "Engineer",
    image: "/new/16.jpg",
  },
  {
    id: 3,
    name: "Mike Hardson",
    role: "Installer",
    image: "/new/0.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 pb-30  bg-white">
      <div className="text-center mb-12">
        <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
        <h4 className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">
          Quality Professionals
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Team
        </h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white overflow-hidden group"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover"
              />

              {/* Content */}
              <div className="relative bg-white -mt-12 mx-6 p-6 text-center rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#f6a235] hover:text-white transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#f6a235] hover:text-white transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#f6a235] hover:text-white transition"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
