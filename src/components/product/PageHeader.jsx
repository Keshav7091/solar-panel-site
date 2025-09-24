// src/components/PageHeader.jsx
import React from "react";

const PageHeader = () => {
  return (
    <div className="text-center my-10">
      <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Remote Monitoring & Smart Solutions
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        At NextGrid, we provide digital monitoring systems that allow you to
        track your solar power generation in real-time. With detailed daily
        reports, peak generation data, and graphical insights, you stay fully
        informed and in control.
      </p>
    </div>
  );
};

export default PageHeader;
