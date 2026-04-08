import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ use webp images
import img1 from "../../assets/1.webp";
import img2 from "../../assets/family.webp";
import img3 from "../../assets/3.webp";

const Execution = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-32">

      {/* LEFT CONTENT */}
      <div className="md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // ✅ important
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Your Vision, Beautifully Designed
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 leading-relaxed mb-6"
        >
          At SPAZIO, we design homes that reflect your lifestyle and taste.
          We combine elegance with comfort to create timeless living spaces.
        </motion.p>

        <Link
          to="/services"
          className="inline-block bg-black text-white px-6 py-3 rounded-sm hover:opacity-90 transition"
        >
          View Services
        </Link>
      </div>

      {/* RIGHT IMAGE COLLAGE */}
      <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center items-center">

        {/* Top-left */}
        <img
          src={img1}
          alt="Planning"
          loading="lazy"
          className="absolute -top-6 left-4 w-40 h-52 object-cover rounded shadow"
        />

        {/* Top-right */}
        <img
          src={img2}
          alt="Design"
          loading="lazy"
          className="absolute -top-12 right-4 w-40 h-52 object-cover rounded shadow"
        />

        {/* Center */}
        <img
          src={img3}
          alt="Execution"
          loading="lazy"
          className="w-48 h-64 object-cover rounded shadow-lg"
        />
      </div>

    </section>
  );
};

export default Execution;