import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-100 py-16 md:py-20 px-6 md:px-20">
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

          {/* 🔥 Added location */}
          <p className="text-xs text-gray-300 mb-4">
            Mumbai | Pune | Pan India
          </p>

          <p className="text-sm font-semibold text-white">
            +91 9730026919
          </p>
          <p className="text-xs text-gray-200 mb-4">Around the clock</p>

          {/* Social */}
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a
              href="https://www.instagram.com/sagar_raut_spazio"
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
          <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
            ABOUT US
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/projects">Interior Projects Across India</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
            EXPLORE
          </h3>
          <ul className="space-y-3 text-gray-200 text-sm">

            {/* 🔥 Highlighted WhatsApp */}
            <li>
              <a
                href="https://wa.me/919792254987?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-semibold hover:underline"
              >
                Chat on WhatsApp →
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:your@email.com"
                className="hover:text-blue-300 transition"
              >
                Email Us
              </a>
            </li>

            <li><Link to="/projects">Where We Work</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
       <div>
  <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
    QUICK LINKS
  </h3>
  <ul className="space-y-2 text-gray-200 text-sm">

    <li>
      <Link
        to="/privacy-policy"
        className="hover:text-white transition duration-300"
      >
        Privacy Policy
      </Link>
    </li>

    <li>
      <Link
        to="/terms-conditions"
        className="hover:text-white transition duration-300"
      >
        Terms & Conditions
      </Link>
    </li>

  </ul>
</div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-400 mt-12 pt-8 text-center">
        
        <p className="font-semibold text-white mb-2 text-lg">
          Be the First to See What’s New at{" "}
          <span className="text-[#f5f5f5]">SPAZIO</span>
        </p>

        <p className="text-sm text-gray-300 mb-6 max-w-xl mx-auto">
          Stay ahead with curated interior ideas, expert tips, and SPAZIO’s latest creations.
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-200 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">SPAZIO</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;