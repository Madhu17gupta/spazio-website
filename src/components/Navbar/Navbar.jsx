import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const services = [
    { name: "Residential Interior", path: "/residential" },
    { name: "Commercial Interior", path: "/commercial" },
    { name: "Industrial Interior", path: "/industrial" },
    { name: "Turnkey Design Services", path: "/turnkey" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#4a5568]/90 backdrop-blur-md shadow-md">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-light tracking-[8px] text-white hover:opacity-80 transition"
        >
          SPAZIO
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-base font-light tracking-wide text-white">

          <li>
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-gray-300 transition">
              About Us
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button className="flex items-center gap-2 hover:text-gray-300 transition">
              Services <FaChevronDown size={12} />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute left-0 top-full mt-4 w-64 bg-white text-black rounded-xl shadow-2xl transition-all duration-300 z-50 ${
                openDropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="py-3">
                {services.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="block px-6 py-3 hover:bg-gray-100 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link to="/projects" className="hover:text-gray-300 transition">
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-white text-xl"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-black text-white px-6 py-6 space-y-4">

          <Link to="/" onClick={() => setIsMobileOpen(false)} className="block">
            Home
          </Link>

          <Link to="/about" onClick={() => setIsMobileOpen(false)} className="block">
            About Us
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="flex justify-between w-full"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Services <FaChevronDown />
            </button>

            {openDropdown && (
              <div className="pl-4 mt-2 space-y-2">
                {services.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className="block"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/projects" onClick={() => setIsMobileOpen(false)} className="block">
            Projects
          </Link>

          <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="block">
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;