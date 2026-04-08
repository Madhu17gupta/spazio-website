import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const GallerySection = ({ title, subtitle, projects = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const closeOnEsc = (e) => e.key === "Escape" && setSelectedIndex(null);
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // ✅ fix
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <p className="text-base mb-8 text-center text-gray-600 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            <div className="relative overflow-hidden rounded-md shadow bg-gray-100">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy" // 🔥 important
                decoding="async"
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-3 text-center sm:text-left">
              <h3 className="font-medium text-sm text-gray-900">
                {p.title}
              </h3>
              <p className="text-gray-600 text-xs mt-1">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <FaTimes />
            </button>

            {/* Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-3 text-white text-2xl"
            >
              <FaChevronLeft />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="absolute right-3 text-white text-2xl"
            >
              <FaChevronRight />
            </button>

            {/* Image */}
            <img
              src={projects[selectedIndex].img}
              alt={projects[selectedIndex].title}
              className="max-h-[85vh] w-auto object-contain rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;