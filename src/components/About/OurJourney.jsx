import React from "react";
import { motion } from "framer-motion";

const journeyData = [
  {
    year: "2006",
    text: "SPAZIO Interiors was founded with a vision to transform spaces into timeless experiences.",
  },
  {
    year: "2010",
    text: "Expanded into commercial sector with turnkey solutions.",
  },
  {
    year: "2015",
    text: "Completed 250+ projects and became a trusted design brand.",
  },
  {
    year: "2020",
    text: "Adopted 3D visualization and modern design technologies.",
  },
  {
    year: "2025",
    text: "500+ projects delivered across India with excellence.",
  },
];

const OurJourney = () => {
  return (
    <section className="bg-[#d8dbe1] py-16 px-6 md:px-16 lg:px-24 flex justify-center">

      <div className="max-w-5xl w-full relative">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // ✅ important
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        >
          Our Journey
        </motion.h2>

        {/* Timeline line (static) */}
        <div className="absolute left-[6px] top-0 bottom-0 w-[2px] bg-gray-500"></div>

        {/* Items */}
        <div className="relative pl-10 space-y-10">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // ✅ important
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[10px] top-1 w-3 h-3 bg-gray-700 rounded-full"></div>

              {/* Content */}
              <div className="ml-4 bg-white/60 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.year}
                </h3>
                <p className="text-gray-700 mt-1 text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurJourney;