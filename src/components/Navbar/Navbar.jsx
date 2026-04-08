import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

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
    <nav className="bg-gray-600 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-3xl font-light tracking-widest">
          SPAZIO
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <li
                key={i}
                className="relative"
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <button className="flex items-center gap-1">
                  {link.title} <FaChevronDown size={10} />
                </button>

                {openDropdown && (
                  <div className="absolute top-full mt-2 bg-black text-white rounded shadow w-52">
                    {link.dropdown.map((d, j) => (
                      <Link
                        key={j}
                        to={d.path}
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={i}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-xl"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-black text-white px-6 py-6 space-y-4">
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <div key={i}>
                <button
                  className="flex justify-between w-full"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  {link.title}
                  <FaChevronDown />
                </button>

                {openDropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdown.map((d, j) => (
                      <Link
                        key={j}
                        to={d.path}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className="block"
              >
                {link.title}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;