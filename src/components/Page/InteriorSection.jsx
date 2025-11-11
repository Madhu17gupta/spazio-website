import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const InteriorSection = ({ title, description, image }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🎬 Parallax background zoom
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] flex items-end justify-start overflow-hidden"
    >
      {/* Background Image with Parallax Zoom */}
      <motion.img
        src={image}
        alt={title}
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full object-cover brightness-75 transition-transform duration-1000 ease-out"
      />

      {/* Gradient Overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative z-10 text-left text-white px-6 md:px-16 pb-10 md:pb-20 max-w-3xl"
      >
        {/* Title — Smooth Letter Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg tracking-tight"
        >
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-lg md:text-2xl font-light leading-relaxed drop-shadow-md"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default InteriorSection;
