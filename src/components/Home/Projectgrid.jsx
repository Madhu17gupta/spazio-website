import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../../Animation/animate";

import img1 from "../../assets/15.png";
import img2 from "../../assets/26.png";
import img3 from "../../assets/back.png";
import img4 from "../../assets/turn.png";

const projects = [
  { id: 1, title: "Residential Interiors", link: "/residential", img: img1 },
  { id: 2, title: "Commercial Projects", link: "/commercial", img: img2 },
  { id: 3, title: "Industrial Design", link: "/industrial", img: img3 },
  { id: 4, title: "Turnkey Solutions", link: "/turnkey", img: img4 },
];

const Projectgrid = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }} // 👈 triggers every scroll in/out
          className="text-4xl font-semibold mb-4 text-gray-700"
        >
          Our Featured Projects
        </motion.h2>

        <motion.p
          variants={SlideUp(0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-600 mb-10 text-lg"
        >
          Explore our design portfolio across different segments.
        </motion.p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              variants={SlideUp(index * 0.3 + 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link
                to={item.link}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <span className="underline text-sm tracking-wide">
                    View Details
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projectgrid;
