import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const GallerySection = ({ title, subtitle, projects = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Close on ESC
  useEffect(() => {
    const closeOnEsc = (e) => e.key === "Escape" && setSelectedIndex(null);
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
   <section className="relative max-w-7xl mx-auto px-6 py-16 md:px-10 overflow-hidden">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-lg md:text-xl mb-10 text-center text-gray-600 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Grid Section */}
      <motion.div
        variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-md shadow-lg bg-gray-100">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <p className="text-white font-medium text-sm tracking-wide">
                  View Project →
                </p>
              </div>
            </div>

            {/* Text Info */}
            <div className="mt-4 text-center sm:text-left">
              <h3 className="font-semibold text-base text-gray-900 group-hover:text-black transition-colors duration-300">
                {p.title}
              </h3>
              <div className="flex justify-center sm:justify-start items-center mt-2 space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Prevent click-through on image area */}
            <div
              className="relative w-full max-w-5xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white text-3xl bg-white/20 hover:bg-white/30 p-2 rounded-full"
              >
                <FaTimes />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 md:left-8 text-white text-3xl bg-white/10 hover:bg-white/20 p-3 rounded-full"
              >
                <FaChevronLeft />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 md:right-8 text-white text-3xl bg-white/10 hover:bg-white/20 p-3 rounded-full"
              >
                <FaChevronRight />
              </button>

              {/* Image */}
              <motion.img
                key={selectedIndex}
                src={projects[selectedIndex].img}
                alt={projects[selectedIndex].title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-h-[90vh] w-auto rounded-md shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
