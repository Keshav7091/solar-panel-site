// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";

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
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-orange-500 text-3xl">☀️</div>
            <span className="text-2xl font-extrabold text-gray-900">Solam</span>
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
          <button className="flex items-center justify-center gap-2 btn-primary text-white w-44 h-12 rounded-sm hover:bg-black transition font-semibold">
            <FaEnvelope size={18} />
            <span className="text-sm">Get a Quote</span>
          </button>
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
