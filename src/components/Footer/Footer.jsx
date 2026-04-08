import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-100 py-12 md:py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2 className="text-4xl font-light tracking-widest mb-1">
            SPAZIO
          </h2>
          <p className="text-lg font-semibold text-white mb-4">
            spaces worth creating
          </p>

          <p className="text-sm text-gray-200 mb-2 font-medium">
            Architectural & Interior Designing
          </p>

          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            A passionate interior designer offering one-stop solutions with
            over 20 years of experience in residential and commercial projects.
          </p>

          <p className="text-sm font-semibold text-white">
            +91 9730026919
          </p>
          <p className="text-xs text-gray-200 mb-4">Around the clock</p>

          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">ABOUT US</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/projects">Interior Projects Across India</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">EXPLORE</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link to="/contact">WhatsApp</Link></li>
            <li><Link to="/contact">Email</Link></li>
            <li><Link to="/projects">Where We Work</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/contact">Email</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-400 mt-10 pt-6 text-center">
        <p className="font-semibold text-white mb-1">
          Be the First to See What’s New at{" "}
          <span className="text-[#f5f5f5]">SPAZIO</span>
        </p>

        <p className="text-sm text-gray-300 mb-6">
          Stay ahead with curated interior ideas, tips, and SPAZIO’s latest creations.
        </p>

        <p className="text-xs text-gray-200 tracking-wide">
          © Copyright 2025 <span className="font-semibold">SPAZIO</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;