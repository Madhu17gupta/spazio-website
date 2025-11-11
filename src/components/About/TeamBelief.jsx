import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// 🖼️ Import multiple images
import img1 from "../../assets/1.webp";
import img2 from "../../assets/Kids.jpg";
import img3 from "../../assets/kitchen.png";

const images = [img1, img2, img3];

const TeamBelief = () => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto-change every 6s (pause on hover)
  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [hovered]);

  // Animation variants (smooth fade + slide blend)
  const variants = {
    enter: { opacity: 0, x: 80, scale: 1.02 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -80, scale: 0.98 },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#d8dbe1] px-6 md:px-16 lg:px-24 py-12 md:py-20 gap-10 overflow-hidden">
      {/* LEFT — IMAGE SLIDER */}
      <div
        className="relative md:w-[50%] w-full flex justify-center md:justify-start overflow-hidden rounded-2xl shadow-2xl h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Interior design view ${index + 1}`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 50, damping: 20 },
              opacity: { duration: 0.6 },
            }}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl select-none"
            draggable="false"
          />
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-white scale-125 shadow-md"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* RIGHT — TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="md:w-[45%] w-full flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Our Design Philosophy
        </h2>

        <p className="text-gray-600 max-w-md text-base sm:text-lg leading-relaxed">
          At <span className="font-semibold text-gray-900">SPAZIO Interiors</span>, 
          design is more than beauty — it's about emotion, balance, and soul. 
          We craft interiors that resonate with those who live in them.
        </p>

        <p className="text-gray-600 max-w-md text-base sm:text-lg leading-relaxed">
          Every project starts by listening. We decode your lifestyle, 
          aspirations, and daily rhythm — then design spaces that breathe warmth, 
          utility, and timelessness.
        </p>

        <p className="text-gray-600 max-w-md text-base sm:text-lg leading-relaxed">
          Our philosophy blends elegance with innovation, ensuring your interiors 
          evolve with time — graceful, functional, and future-ready.
        </p>

        <Link
          to="/projects"
          className="inline-block bg-black text-white px-6 py-3 font-medium rounded-sm 
             shadow-[4px_4px_0px_#333] hover:shadow-[2px_2px_0px_#000] 
             active:scale-95 transition-all duration-300"
        >
          Discover Now
        </Link>
      </motion.div>
    </section>
  );
};

export default TeamBelief;
