import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ convert all to webp
import img1 from "../../assets/1.webp";
import img2 from "../../assets/kids.webp";
import img3 from "../../assets/kitchen.webp";

const images = [img1, img2, img3];

const TeamBelief = () => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [hovered]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#d8dbe1] px-6 md:px-16 lg:px-24 py-12 md:py-20 gap-10">

      {/* LEFT — IMAGE */}
      <div
        className="relative md:w-[50%] w-full overflow-hidden rounded-2xl shadow-lg h-[340px] sm:h-[400px] md:h-[460px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={images[index]}
          alt="Interior"
          loading="lazy" // 🔥 important
          decoding="async"
          className="w-full h-full object-cover transition-opacity duration-500"
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
        viewport={{ once: true }} // ✅ important
        transition={{ duration: 0.6 }}
        className="md:w-[45%] w-full text-center md:text-left space-y-5"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Our Design Philosophy
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          At <span className="font-semibold">SPAZIO Interiors</span>, design is about emotion and function.
        </p>

        <p className="text-gray-600 text-base md:text-lg">
          We understand your lifestyle and create spaces that feel natural and timeless.
        </p>

        <p className="text-gray-600 text-base md:text-lg">
          Our work blends elegance with innovation for future-ready interiors.
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

export default TeamBelief;