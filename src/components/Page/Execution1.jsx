import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ convert to webp
import img1 from "../../assets/off.webp";
import img2 from "../../assets/25.webp";
import img3 from "../../assets/26.webp";
import img4 from "../../assets/10.webp";

const Execution = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-32">

      {/* LEFT */}
      <div className="md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // ✅ FIX
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Designing Impactful Spaces for Modern Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mb-6"
        >
          At SPAZIO, we craft commercial interiors that reflect your brand and improve functionality.
        </motion.p>

        <Link
          to="/services"
          className="inline-block bg-black text-white px-6 py-3 rounded-sm hover:opacity-90 transition"
        >
          View Services
        </Link>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center items-center">

        {/* img1 */}
        <img
          src={img1}
          loading="lazy"
          alt="Planning"
          className="absolute -top-6 left-4 w-36 h-48 object-cover rounded shadow"
        />

        {/* img2 */}
        <img
          src={img2}
          loading="lazy"
          alt="Design"
          className="absolute -top-10 right-4 w-36 h-44 object-cover rounded shadow"
        />

        {/* img3 */}
        <img
          src={img3}
          loading="lazy"
          alt="Execution"
          className="w-40 h-72 object-cover rounded shadow-lg"
        />

        {/* img4 */}
        <img
          src={img4}
          loading="lazy"
          alt="Execution"
          className="absolute bottom-0 right-6 w-36 h-32 object-cover rounded shadow"
        />
      </div>

    </section>
  );
};

export default Execution;