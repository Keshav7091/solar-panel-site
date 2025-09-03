import React from "react";

const services = [
  {
    id: 1,
    title: "Renewable Source",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, dapibus leo.",
    image: "/about/AboutS1.webp", // Replace with your actual image
  },
  {
    id: 2,
    title: "Easy Installation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, dapibus leo.",
    image: "/about/AboutS2.webp", // Replace with your actual image
  },
  {
    id: 3,
    title: "Low Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, dapibus leo.",
    image: "/about/AboutS3.webp", // Replace with your actual image
  },
];

const AboutService = () => {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-[#fff]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#f9f2e7] overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutService;
