import React from "react";
import { motion } from "framer-motion";
import projectBg from "../../assets/41.webp";

const OurProjects = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] flex items-end overflow-hidden">

      {/* Background Image */}
      <img
        src={projectBg}
        alt="Our Projects"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 md:px-16 pb-12 md:pb-24 max-w-2xl text-white"
      >
        <h2 className="text-3xl md:text-6xl font-light tracking-wide mb-4">
          Our Projects
        </h2>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          A glimpse into{" "}
          <span className="font-semibold">SPAZIO</span>’s thoughtfully crafted interiors — 
          where elegance meets functionality and every detail tells a story.
        </p>

        {/* Optional CTA */}
        <div className="mt-6">
          <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded-full text-sm tracking-wide">
            Explore Projects →
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default OurProjects;