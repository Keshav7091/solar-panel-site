// src/components/CustomButton.jsx
import React from "react";
import { Link } from "react-router-dom";

const sizeClasses = {
  sm: "w-28 h-9 text-xs",
  md: "w-36 h-11 text-sm",
  lg: "w-44 h-12 text-base",
};

const CustomButton = ({ text, icon: Icon, onClick, to, size = "md" }) => {
  const baseClasses =
    "flex items-center justify-center gap-2 bg-[#f6a235] text-white rounded-sm hover:bg-black transition font-semibold cursor-pointer";

  const content = (
    <>
      {Icon && <Icon size={18} />}
      <span>{text}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${sizeClasses[size]}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]}`}
    >
      {content}
    </button>
  );
};

export default CustomButton;
