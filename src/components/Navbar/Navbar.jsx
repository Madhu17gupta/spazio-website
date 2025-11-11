import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    {
      title: "Services",
      dropdown: [
        { name: "Residential Interior", path: "/residential" },
        { name: "Commercial Interior", path: "/commercial" },
        { name: "Industrial Interior", path: "/industrial" },
        { name: "Turnkey Design Services", path: "/turnkey" },
      ],
    },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-600 text-white w-full fixed top-0 left-0 z-50 shadow-lg border-b border-[#2b2b2b]">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 md:py-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl md:text-5xl font-light tracking-widest text-[#f5f5f5] hover:text-[#d4af37] transition-colors duration-300"
        >
          SPAZIO
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg font-light">
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#d4af37] transition-colors duration-300">
                  {link.title} <FaChevronDown size={12} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-full mt-3 bg-[#1c1c1c] text-white rounded-md shadow-lg w-56 overflow-hidden border border-[#2e2e2e]"
                    >
                      {link.dropdown.map((drop, j) => (
                        <li key={j}>
                          <Link
                            to={drop.path}
                            className="block px-5 py-3 hover:bg-[#2c2c2c] hover:text-[#d4af37] transition-colors duration-300"
                          >
                            {drop.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={i} className="relative group">
                <Link
                  to={link.path}
                  className="px-3 py-2 hover:text-[#d4af37] transition-all duration-300"
                >
                  {link.title}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </li>
            )
          )}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl focus:outline-none text-white hover:text-[#d4af37] transition"
          onClick={toggleMobileMenu}
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-[#111111] text-white flex flex-col items-start px-8 py-10 space-y-6 md:hidden z-40 shadow-2xl"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-2xl focus:outline-none bg-[#1a1a1a] p-2 rounded-full hover:text-[#d4af37] transition"
              onClick={() => setIsMobileOpen(false)}
            >
              <FaTimes />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full"
              >
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-2 text-left text-lg font-light hover:text-[#d4af37] transition-colors"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >
                      {link.title}
                      <FaChevronDown
                        size={14}
                        className={`transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {link.dropdown.map((drop, j) => (
                          <Link
                            key={j}
                            to={drop.path}
                            className="block py-1 text-gray-300 hover:text-[#d4af37] transition"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block text-lg font-light hover:text-[#d4af37] transition"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
