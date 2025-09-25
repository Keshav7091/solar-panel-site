// src/components/PageHeader.jsx
import React from "react";

const PageHeader = () => {
  return (
    <div className="text-center my-10 px-4 sm:px-6 md:px-0">
      {/* Yellow line */}
      <div className="w-10 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
        Remote Monitoring & Smart Solutions
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-base sm:text-lg md:text-lg max-w-2xl mx-auto leading-relaxed">
        At NextGrid, we provide digital monitoring systems that allow you to
        track your solar power generation in real-time. With detailed daily
        reports, peak generation data, and graphical insights, you stay fully
        informed and in control.
      </p>
    </div>
  );
};

export default PageHeader;
