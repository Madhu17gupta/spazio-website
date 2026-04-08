import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ convert to webp
import img1 from "../../assets/rack1.webp";
import img2 from "../../assets/rack2.webp";
import img3 from "../../assets/rack3.webp";

const Execution2 = () => {
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
          Designing Efficient Spaces for Modern Industry
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mb-6"
        >
          At SPAZIO, we design industrial interiors focused on workflow,
          safety, and scalability—creating smart and efficient environments.
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
          alt="Industrial"
          className="absolute -top-6 left-4 w-40 h-52 object-cover rounded shadow"
        />

        {/* img2 */}
        <img
          src={img2}
          loading="lazy"
          alt="Industrial"
          className="absolute -top-10 right-4 w-40 h-48 object-cover rounded shadow"
        />

        {/* img3 */}
        <img
          src={img3}
          loading="lazy"
          alt="Industrial"
          className="w-48 h-40 object-cover rounded shadow-lg"
        />

      </div>
    </section>
  );
};

export default Execution2;