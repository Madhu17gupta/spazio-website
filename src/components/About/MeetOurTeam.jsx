import React from "react";
import { motion } from "framer-motion";

// ✅ use webp
import teamPhoto from "../../assets/team.webp";

const MeetOurTeam = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 flex flex-col items-center text-center overflow-hidden">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // ✅ important
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
      >
        Meet Our Team
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // ✅ important
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-700 text-lg max-w-3xl mb-10"
      >
        At <span className="font-semibold text-gray-900">Spazio</span>, we believe great design starts with great people.
      </motion.p>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} // ✅ important
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-2xl shadow-lg w-full max-w-5xl"
      >
        <img
          src={teamPhoto}
          alt="Spazio Team"
          loading="lazy" // 🔥 important
          decoding="async"
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Static text (no infinite animation) */}
      <p className="mt-10 text-gray-500 text-sm tracking-widest">
        — the people behind every detail —
      </p>

    </section>
  );
};

export default MeetOurTeam;