import React from "react";
import { motion } from "framer-motion";
import teamPhoto from "../../assets/team.jpg"; // 🖼️ Replace with your actual team image

const MeetOurTeam = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 flex flex-col items-center text-center overflow-hidden ">
      {/* Soft background glow */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight"
      >
        Meet Our Team
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-gray-700 text-lg max-w-3xl mb-12 leading-relaxed"
      >
        At <span className="font-semibold text-gray-900">Spazio</span>, we believe great design starts with great people.{" "}
        Here’s the team that brings heart, style, and innovation to every space we create.
      </motion.p>

      {/* Animated Border Frame (subtle floating effect) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-6xl group"
      >
        {/* Floating glow behind the image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute inset-0  blur-2xl rounded-3xl"
        ></motion.div>

        {/* Team image */}
        <motion.img
          src={teamPhoto}
          alt="Spazio Team"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative z-10 w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
        />

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>
      </motion.div>

      {/* Floating subtle motion below image */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mt-12 text-gray-500 text-sm tracking-widest"
      >
        — the people behind every detail —
      </motion.div>
    </section>
  );
};

export default MeetOurTeam;
