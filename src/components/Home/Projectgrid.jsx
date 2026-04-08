import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../../Animation/animate";

// ✅ Use webp images
import img1 from "../../assets/15.webp";
import img2 from "../../assets/26.webp";
import img3 from "../../assets/back.webp";
import img4 from "../../assets/turn.webp";

const projects = [
  { id: 1, title: "Residential Interiors", link: "/residential", img: img1 },
  { id: 2, title: "Commercial Projects", link: "/commercial", img: img2 },
  { id: 3, title: "Industrial Design", link: "/industrial", img: img3 },
  { id: 4, title: "Turnkey Solutions", link: "/turnkey", img: img4 },
];

const Projectgrid = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Title */}
        <motion.h2
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} // ✅ FIXED
          className="text-3xl font-semibold mb-4 text-gray-700"
        >
          Our Featured Projects
        </motion.h2>

        <motion.p
          variants={SlideUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} // ✅ FIXED
          className="text-gray-600 mb-8 text-base"
        >
          Explore our design portfolio across different segments.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item) => (
            <div key={item.id}>
              <Link
                to={item.link}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {/* ✅ Optimized Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy" // 🔥 IMPORTANT
                  decoding="async"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <span className="text-sm underline">
                    View Details
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projectgrid;