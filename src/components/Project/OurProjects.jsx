import React from "react";
import projectBg from "../../assets/41.webp"; // ✅ use webp

const OurProjects = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-end overflow-hidden">

      {/* ✅ Image instead of background */}
      <img
        src={projectBg}
        alt="Our Projects"
        loading="eager" // 🔥 important for hero
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 pb-10 md:pb-20 max-w-2xl text-white">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Our Projects
        </h2>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          A glimpse into <span className="font-semibold">SPAZIO</span>’s thoughtfully designed interiors — 
          blending elegance, comfort, and functionality across every space.
        </p>
      </div>

    </section>
  );
};

export default OurProjects;