import React from "react";
import { motion } from "framer-motion";
import partnerImage from "../../assets/2.webp";

const About1 = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh]
      bg-gradient-to-br from-[#e2e5ea] to-[#cfd2da] px-6 md:px-12 lg:px-20 py-16 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-[20%] -left-16 w-72 h-72 bg-[#bcb8b8]/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#fff]/40 blur-3xl rounded-full"></div>

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} // ✅ important
        transition={{ duration: 0.6 }}
        className="md:w-1/2 w-full px-4 md:px-8 py-8 relative z-10"
      >
        <h2 className="text-xl tracking-[3px] text-gray-700 font-semibold mb-6 uppercase">
          About Us – SPAZIO
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Established in <strong>2006</strong>, <strong>SPAZIO</strong> is a
          dynamic firm specializing in <strong>Architecture</strong>,
          <strong> Structural Design</strong>, <strong>Landscaping</strong>, and{" "}
          <strong>Interior Designing</strong>.
          <br /><br />
          With over <strong>20 years of experience</strong>, we deliver innovative,
          functional, and timeless design solutions across India.
          <br /><br />
          With <strong>600+ successful projects</strong>, SPAZIO continues to
          redefine modern design.
        </p>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} // ✅ important
        transition={{ duration: 0.6 }}
        className="md:w-1/2 w-full flex justify-center items-center p-4 relative z-10"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[550px]">
          <img
            src={partnerImage}
            alt="SPAZIO Architecture"
            loading="lazy" // 🔥 important
            decoding="async"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About1;