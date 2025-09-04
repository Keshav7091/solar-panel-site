import React, { useState } from "react";
import Banner from "../components/Banner";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import CustomButton from "../components/CustomButton";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      fullName,
      email,
      countryCode,
      phone,
      company,
      message,
    };

    toast.loading("Sending your message...");

    try {
      console.log("Attempting to send form data to server...");
      const response = await axios.post(
        "",
        // "http://localhost:8080/send-mail",
        formData
      );

      toast.dismiss(); // remove loading toast

      console.log("Response received from server:");
      if (response.status === 200) {
        // console.log("Response status is 200. Data:", response.data);
        // alert("Message sent successfully!");

        // ✅ Reset state after success
        toast.success("Message sent successfully.");
        setFullName("");
        setEmail("");
        setCountryCode("India (+91)");
        setPhone("");
        setCompany("");
        setMessage("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send message ❌");
    }
  };

  

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Banner
        title="Contacts"
        subtitle="Helping you save energy and keep the lights on"
        image="/bannerImg.webp"
      />

      <section>
        <div className="w-full">
          <div className="overflow-hidden border border-gold-accent/30 shadow-gold">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5259053188!2d76.76357451215983!3d28.64368472633456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1756929045504!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side */}
              <div>
                <div className="w-5 h-[2px] bg-[#f6a235] mb-3"></div>
                <span className="uppercase text-sm text-gray-500 tracking-wider">
                  Get in touch
                </span>
                <h2 className="text-5xl font-bold text-gray-900 mt-5 leading-snug">
                  Schedule a Quote
                </h2>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>

                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-center gap-3 border-b border-gray-200 pb-3">
                    <span className="text-[#f6a235] text-xl">📞</span>
                    (123) 456-7890
                  </li>
                  <li className="flex items-center gap-3 border-b border-gray-200 pb-3">
                    <span className="text-[#f6a235] text-xl">📧</span>
                    needhelp@company.com
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#f6a235] text-xl">📍</span>
                    60 Brooklyn Street New York. USA
                  </li>
                </ul>
              </div>

              {/* Right Side Form */}
              <div className="bg-[#faf5ef] p-8 ">
                <form
                  className="space-y-5 flex flex-col"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-[75%] bg-white text-black border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f6a235]"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[75%] bg-white text-black border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f6a235]"
                  />

                  <input
                    type="text"
                    placeholder="Your Subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-[75%] bg-white text-black border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f6a235]"
                  />

                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white text-black border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f6a235] resize-none"
                  ></textarea>


                  <CustomButton text="Send a Message" size="lg" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
