// src/components/InfoSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InfoSection = ({
  title,
  description,
  stats = [],
  buttonText = "Contact Us",
  buttonLink = "/contact",
  image,
  glowColor = "bg-yellow-300",
  reverse = false, // 👈 to flip layout easily
}) => {
  return (
    <section
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center py-10 px-6 md:px-16 lg:px-24 md:py-20 gap-10 overflow-hidden`}
    >
      {/* LEFT — TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/2 w-full text-center md:text-left space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          {title}
        </h2>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
          {description}
        </p>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="flex justify-center md:justify-start flex-wrap gap-8 text-center md:text-left">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to={buttonLink}
            className="inline-block bg-black text-white px-8 py-3 font-medium rounded-sm 
              shadow-[4px_4px_0px_#333] hover:shadow-[2px_2px_0px_#000] 
              active:scale-95 transition-all duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </motion.div>

      {/* RIGHT — IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="md:w-1/2 w-full flex justify-center relative"
      >
        <img
          src={image}
          alt={title}
          className="w-full max-w-[550px] rounded-lg object-contain z-10"
        />

        {/* Optional glow effect */}
        <div
          className={`absolute top-[35%] left-[60%] w-40 h-40 ${glowColor} rounded-full blur-3xl opacity-50 animate-pulse`}
        ></div>
      </motion.div>
    </section>
  );
};

export default InfoSection;
