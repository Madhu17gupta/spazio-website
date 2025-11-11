import React from "react";
import projectBg from "../../assets/41.jpg"; // 🖼️ Replace with your actual image

const OurProjects = () => {
  return (
    <section
      className="relative w-full h-[80vh] md:h-[90vh] bg-center bg-cover flex items-end"
      style={{ backgroundImage: `url(${projectBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Text Content */}
      <div className="relative z-10 text-left px-6 md:px-16 pb-10 md:pb-20 max-w-2xl">
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-4">
          Our Projects
        </h2>
        <p className="text-gray-100 text-base md:text-lg leading-relaxed">
          A glimpse into <span className="font-semibold text-white">SPAZIO</span>’s thoughtfully designed interiors — 
          blending elegance, comfort, and functionality across every space.
        </p>
      </div>
    </section>
  );
};

export default OurProjects;
