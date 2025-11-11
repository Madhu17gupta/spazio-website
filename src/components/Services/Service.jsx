import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/image16.png"; // background image
import OurServices from "./OurServices";

const Services = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-end justify-start">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img1}
          alt="Residential Interiors"
          className="w-full h-full object-cover"
        />
        {/* dark overlay */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Bottom Text Content */}
      <div className="relative z-10 w-full px-6 md:px-16 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>

          <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl">
            End-to-end interior services that blend creativity, functionality, and timeless style.
          </p>
        </motion.div>
      </div>
    </section>
    <OurServices />
    </>
  );
};

export default Services;
