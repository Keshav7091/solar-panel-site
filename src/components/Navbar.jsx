// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { GiSolarPower } from "react-icons/gi";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white  shadow-sm top-0 z-50 border-b">
      <div className="px-10 flex justify-between items-center h-20">
        {/* Left Side: Logo + Nav Items */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              {/* Icon */}
              <div className="bg-orange-100 p-2 rounded-full">
                <GiSolarPower className="text-orange-500 text-4xl" />
              </div>

              {/* Text */}
              <div className="flex flex-col leading-tight">
                <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">
                  Next Grid
                </span>
                <span className="text-sm md:text-base font-semibold text-orange-500 uppercase tracking-widest">
                  Solar Energy
                </span>
              </div>
            </Link>

            {/* Vertical line */}
            <div className="h-10 border-l border-gray-400 ml-4"></div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition ${
                    isActive ? "text-gray-900" : "text-gray-500"
                  } hover:text-gray-900`}
                >
                  {item.name}
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500"></span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Side: Button */}
        <div className="hidden md:block">
          <CustomButton text="Get a Quote" icon={FaEnvelope} to="/contact" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition ${
                    isActive ? "text-gray-900" : "text-gray-500"
                  } hover:text-gray-900`}
                >
                  {item.name}
                </Link>
              );
            })}
            <button className="flex items-center justify-center gap-2 btn-primary text-white w-44 h-12 rounded-sm hover:bg-black transition font-semibold">
              <FaEnvelope size={18} />
              <span className="text-sm">Get a Quote</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
