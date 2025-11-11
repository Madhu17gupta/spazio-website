import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SlideUp } from "../Animation/animate";

const DesignHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      {/* Subheading */}
      <motion.h3
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-700 font-medium tracking-wide text-lg md:text-xl mb-2"
      >
        We Don’t Just Design Spaces — We Design Dreams
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        variants={SlideUp(0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-10 max-w-4xl leading-snug"
      >
        We design interiors that bring your dreams to life.
      </motion.h1>

      {/* CTA Button */}
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          to="/contact"
          className="bg-[#7a7575]/60 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-lg border border-white/40 
                     hover:bg-[#7a7575]/80 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-center gap-2"
        >
          <span className="font-semibold tracking-wide">
            Plan Your Space with Us
          </span>
          <span className="text-xl">🗓️</span>
        </Link>
      </motion.div>

      {/* Ambient shadow / vignette for depth */}
      <div className="absolute inset-0 pointer-events-none rounded-xl"></div>
    </section>
  );
};

export default DesignHero;
