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
  reverse = false,
}) => {
  return (
    <section
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center py-12 px-6 md:px-16 lg:px-24 gap-10`}
    >
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} // ✅ fix
        className="md:w-1/2 text-center md:text-left space-y-5"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          {description}
        </p>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        <Link
          to={buttonLink}
          className="inline-block bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition"
        >
          {buttonText}
        </Link>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex justify-center relative"
      >
        <img
          src={image}
          alt={title}
          loading="lazy" // 🔥 important
          decoding="async"
          className="w-full max-w-[500px] object-contain"
        />

        {/* subtle glow (no animation) */}
        <div
          className={`absolute top-[35%] left-[60%] w-32 h-32 ${glowColor} rounded-full blur-2xl opacity-40`}
        ></div>
      </motion.div>
    </section>
  );
};

export default InfoSection;