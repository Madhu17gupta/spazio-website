import React from "react";
import { motion } from "framer-motion";

const InteriorSection = ({ title, description, image }) => {
  return (
    <section className="relative w-full h-[80vh] flex items-end overflow-hidden">

      {/* Background Image */}
      <img
        src={image}
        alt={title}
        loading="eager" // hero image
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }} // ✅ no repeat
        transition={{ duration: 0.6 }}
        className="relative z-10 text-white px-6 md:px-16 pb-10 md:pb-16 max-w-3xl"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl font-light leading-relaxed">
          {description}
        </p>
      </motion.div>

    </section>
  );
};

export default InteriorSection;