import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SlideUp } from "../Animation/animate";

const DesignHero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6">

      {/* Subheading */}
      <motion.h3
        variants={SlideUp(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} // ✅ only once
        className="text-gray-700 text-base md:text-lg mb-2"
      >
        We Don’t Just Design Spaces — We Design Dreams
      </motion.h3>

      {/* Heading */}
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-semibold text-gray-800 mb-8 max-w-3xl leading-snug"
      >
        We design interiors that bring your dreams to life.
      </motion.h1>

      {/* CTA */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          to="/contact"
          className="bg-black text-white px-6 py-3 rounded-full 
                     hover:bg-gray-800 transition flex items-center gap-2"
        >
          <span className="font-medium">
            Plan Your Space
          </span>
          <span>🗓️</span>
        </Link>
      </motion.div>

    </section>
  );
};

export default DesignHero;