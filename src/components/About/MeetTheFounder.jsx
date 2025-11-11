import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import founderImg from "../../assets/sagar Raut.png"; // 🖼️ replace with actual image

const MeetTheFounder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  // Text animation (staggered fade + rise)
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative bg-[#d8dbe1] flex justify-center items-center py-20 px-4 md:px-12 lg:px-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gray-400/20 blur-3xl rounded-full"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center overflow-hidden relative z-10"
      >
        {/* LEFT — IMAGE with parallax hover */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative md:w-1/3 w-full flex justify-center items-center bg-white"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden w-full h-full"
          >
            <img
              src={founderImg}
              alt="Sagar Raut"
              className="w-full h-full object-cover md:rounded-l-3xl rounded-t-3xl md:rounded-t-none transition-transform duration-700 ease-in-out hover:scale-105"
            />
            {/* Overlay fade effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-40"></div>
          </motion.div>

          {/* Subtle backlight glow */}
          <div className="absolute inset-0 bg-[#bdbdbd]/20 blur-2xl rounded-full scale-110"></div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-2/3 w-full p-8 md:p-12 text-gray-700"
        >
          <motion.h2
            variants={textVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 drop-shadow-sm"
          >
            Meet the Founder
          </motion.h2>

          <motion.p
            variants={textVariants}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-lg leading-relaxed mb-4"
          >
            <span className="font-semibold text-gray-800">Sagar Raut</span>, the visionary behind{" "}
            <span className="font-semibold text-gray-800">SPAZIO Interiors</span>, brings over{" "}
            <span className="font-semibold text-gray-800">20 years of experience</span> in interior
            design and architectural innovation. His passion for detail, functionality, and aesthetic
            brilliance has shaped over{" "}
            <span className="font-semibold text-gray-800">500+</span> residential and commercial
            projects.
          </motion.p>

          <motion.p
            variants={textVariants}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-lg leading-relaxed"
          >
            With a deep understanding of modern trends blended with timeless elegance, Sagar
            continues to lead <span className="font-semibold text-gray-800">SPAZIO</span> with
            integrity, creativity, and a commitment to excellence.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MeetTheFounder;
