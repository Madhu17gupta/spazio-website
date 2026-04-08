import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Use webp images
import img1 from "../../assets/16.webp";
import img2 from "../../assets/18.webp";
import img3 from "../../assets/20.webp";

const images = [img1, img2, img3];

const AboutSection = () => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 🔥 faster + smoother

    return () => clearInterval(timer);
  }, [hovered]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#d8dbe1] px-6 md:px-16 lg:px-24 py-12 md:py-20 gap-10">

      {/* LEFT — IMAGE */}
      <div
        className="relative md:w-[50%] w-full flex justify-center md:justify-start overflow-hidden rounded-2xl shadow-lg h-[340px] sm:h-[400px] md:h-[460px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={images[index]}
          alt="Interior design"
          loading="lazy" // 🔥 IMPORTANT
          decoding="async"
          className="w-full h-full object-cover rounded-2xl transition-opacity duration-500"
        />

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT — TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // ✅ FIXED
        transition={{ duration: 0.6 }}
        className="md:w-[45%] w-full flex flex-col items-center md:items-start text-center md:text-left space-y-3"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-700">
          SPACES WORTH CREATING
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
          ARCHITECTURAL & INTERIOR DESIGNING
        </p>

        <p className="text-gray-700 max-w-md text-base sm:text-lg leading-relaxed">
          At SPAZIO, we believe great design is not just seen – it's felt. Every space we craft begins with your story and evolves into an environment that’s both functional and emotionally resonant.
        </p>

        <Link
          to="/projects"
          className="inline-block bg-black text-white px-6 py-3 rounded-sm hover:opacity-90 transition"
        >
          Discover Now
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSection;