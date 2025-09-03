import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Albert",
    role: "Customer",
    feedback:
      "I was very impressed by the new company service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    image: "/about/profile-1.webp",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Customer",
    feedback:
      "I was very impressed by the new company service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    image: "/about/profile-2.webp",
  },
  {
    id: 3,
    name: "Lilly Rowe",
    role: "Customer",
    feedback:
      "I was very impressed by the new company service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    image: "/about/profile-3.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fdf7f1] py-16 !pb-20 px-8 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm uppercase flex-col tracking-widest text-gray-500 flex items-center justify-center gap-2">
          <span className="w-8 h-[2px] bg-orange-400"></span> Our Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Customer Feedback
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-sm p-6 relative flex flex-col justify-between"
          >
            {/* Quote Icon */}
            <Quote
              size={40}
              strokeWidth={2}
              className="text-orange-400 absolute -top-4 left-6 bg-white"
            />

            {/* Feedback */}
            <p className="text-gray-600 mt-6 mb-6">{t.feedback}</p>

            {/* User Info */}
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-orange-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
