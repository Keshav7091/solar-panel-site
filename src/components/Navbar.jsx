// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false); // desktop dropdown
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false); // mobile dropdown
  const location = useLocation();

  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // ⚡ Product ko array me nahi rakha, custom dropdown banega
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  const productItems = [
    { name: "Modules", path: "/product/Modules" },
    { name: "Solar Solutions", path: "/product/SolarSolutions" },
    { name: "Products", path: "/product/Products" },
  ];

  // ✅ Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setIsProductOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setIsMobileProductOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm top-0 z-50 border-b min-h-[10vh] md:h-[10vh]">
      <div className="px-10 flex justify-between h-full items-center">
        {/* Left Side: Logo + Nav Items */}
        <div className="flex items-center h-full gap-12">
          <div className="flex items-center h-full gap-3">
            <Link to="/" className="flex items-center h-full gap-3">
              <div className="p-2 h-full rounded-full">
                <img
                  src="/logo.jpeg"
                  className="h-full aspect-[1/1] object-contain"
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">
                  NextGrid
                </span>
                <span className="text-[13px] md:text-base font-semibold text-orange-500 uppercase tracking-widest">
                  Solar Energy
                </span>
              </div>
            </Link>
            <div className="h-10 border-l border-gray-400 ml-6 mr-8"></div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.name === "About") {
                return (
                  <div key={item.name} className="flex items-center gap-10">
                    {/* About Link */}
                    <Link
                      to={item.path}
                      className={`relative font-medium transition ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      } hover:text-gray-900`}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500"></span>
                      )}
                    </Link>

                    {/* Product Dropdown */}
                    <div className="relative" ref={desktopDropdownRef}>
                      <button
                        onClick={() => setIsProductOpen(!isProductOpen)}
                        className={`flex items-center gap-1 font-medium transition ${
                          location.pathname.includes("/product")
                            ? "text-gray-900"
                            : "text-gray-500"
                        } hover:text-gray-900 cursor-pointer`}
                      >
                        Product <ChevronDown size={18} />
                      </button>

                      {isProductOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg z-50">
                          {productItems.map((p) => (
                            <Link
                              key={p.name}
                              to={p.path}
                              onClick={() => setIsProductOpen(false)}
                              className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-orange-100 hover:text-gray-900"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              // Default nav links (Home, Services, Contact)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition ${
                    isActive ? "text-gray-900" : "text-gray-500"
                  } hover:text-gray-900`}
                >
                  {item.name}
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

              if (item.name === "About") {
                return (
                  <div key={item.name}>
                    {/* About link */}
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-medium transition ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      } hover:text-gray-900`}
                    >
                      {item.name}
                    </Link>

                    {/* Product Dropdown (Mobile) */}
                    <div ref={mobileDropdownRef} className="mt-2">
                      <button
                        onClick={() =>
                          setIsMobileProductOpen(!isMobileProductOpen)
                        }
                        className="flex items-center gap-2 font-medium text-gray-500 hover:text-gray-900"
                      >
                        Product <ChevronDown size={18} />
                      </button>
                      {isMobileProductOpen && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2">
                          {productItems.map((p) => (
                            <Link
                              key={p.name}
                              to={p.path}
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileProductOpen(false);
                              }}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

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
