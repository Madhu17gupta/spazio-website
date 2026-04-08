import React from "react";
import { motion } from "framer-motion";

// ✅ convert image to webp
import founderImg from "../../assets/sagar-raut.webp";

const MeetTheFounder = () => {
  return (
    <section className="relative bg-[#d8dbe1] flex justify-center items-center py-16 px-4 md:px-12 lg:px-20">

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // ✅ important
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden"
      >

        {/* LEFT — IMAGE */}
        <div className="md:w-1/3 w-full">
          <img
            src={founderImg}
            alt="Sagar Raut"
            loading="lazy" // 🔥 important
            decoding="async"
            className="w-full h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="md:w-2/3 w-full p-6 md:p-10 text-gray-700">

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Meet the Founder
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            <span className="font-semibold">Sagar Raut</span>, founder of{" "}
            <span className="font-semibold">SPAZIO Interiors</span>, brings{" "}
            <span className="font-semibold">20+ years of experience</span> in design and architecture.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            With <span className="font-semibold">500+ projects</span>, he leads SPAZIO with creativity,
            precision, and a strong design vision.
          </p>

        </div>
      </motion.div>
    </section>
  );
};

export default MeetTheFounder;