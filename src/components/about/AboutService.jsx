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
      <div className="text-center mb-12">
        <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
        <h4 className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">
          Who We Are
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About NextGrid Solar
        </h2>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          Founded with a vision to make solar energy accessible and affordable,
          NextGrid Solar has quickly grown into a trusted solar EPC company in
          India. From residential rooftop installations to large-scale
          commercial and industrial projects, we deliver reliable solar systems
          backed by quality components and professional service.
        </p>
        <p className="text-gray-600 text-base leading-relaxed">
          Our team ensures that every project is designed, engineered, and
          installed to maximize energy output and provide long-term value for
          our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-[#f9f2e7] overflow-hidden">
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
