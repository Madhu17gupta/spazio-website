import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import partnerImage from "../../assets/2.webp";

const About1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, margin: "-50px" });

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh]
      bg-gradient-to-br from-[#e2e5ea] to-[#cfd2da] px-6 md:px-12 lg:px-20 py-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-[20%] -left-16 w-72 h-72 bg-[#bcb8b8]/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#fff]/40 blur-3xl rounded-full"></div>

      {/* LEFT — TEXT */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="md:w-1/2 w-full px-4 md:px-8 py-8 relative z-10"
      >
        <motion.h2
          variants={textVariants}
          animate={isInView ? "visible" : "hidden"}
          className="text-xl tracking-[3px] text-gray-700 font-semibold mb-6 uppercase "
        >
          About Us – SPAZIO
        </motion.h2>

        <motion.p
          variants={textVariants}
          animate={isInView ? "visible" : "hidden"}
          className="text-gray-700 text-base md:text-lg leading-relaxed"
        >
          Established in <strong>2006</strong>, <strong>SPAZIO</strong> is a
          dynamic firm specializing in <strong>Architecture</strong>,
          <strong> Structural Design</strong>, <strong>Landscaping</strong>, and{" "}
          <strong>Interior Designing</strong>. Founded with a passion for
          crafting novel and sustainable design solutions, SPAZIO blends
          creativity with technical expertise to deliver enduring results.
          <br />
          <br />
          Our design philosophy revolves around experimentation, innovation, and
          a relentless pursuit of excellence — ensuring every project is not
          only relevant but truly transformative. Backed by over{" "}
          <strong>20 years of professional experience</strong> in design,
          management, and leadership, we bring a holistic approach from concept
          to completion. Our diverse portfolio spans{" "}
          <strong>architectural design, interior design, and furniture design</strong>,
          executed with precision and artistic flair.
          <br />
          <br />
          With a proven record of <strong>600+ successfully executed projects</strong>{" "}
          across India, SPAZIO continues to redefine modern design through
          creativity and sustainability. Partner with SPAZIO — and let us
          transform your vision into spaces that are innovative, functional, and
          timeless.
        </motion.p>
      </motion.div>

      {/* RIGHT — IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 w-full flex justify-center items-center p-4 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] w-full max-w-[550px]"
        >
          <img
            src={partnerImage}
            alt="SPAZIO Architecture and Design"
            className="w-full h-[400px] md:h-[500px] object-cover transform transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About1;
