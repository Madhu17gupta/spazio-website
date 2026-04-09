import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import house1 from "../../assets/12.webp";
import house2 from "../../assets/27.webp";
import house3 from "../../assets/super1.webp";
import house4 from "../../assets/34.webp";

// 🔥 Add more images if needed (but keep 4–6 ideal)
const imgs = [
  { src: house1, link: "/residential", title: "Residential Interior" },
  { src: house2, link: "/commercial", title: "Commercial Design" },
  { src: house3, link: "/industrial", title: "Industrial Projects" },
  { src: house4, link: "/turnkey", title: "Turnkey Projects" },

  // Optional extra slides (same images reuse or new ones)
  { src: house1, link: "/residential", title: "Modern Living Space" },
  { src: house2, link: "/commercial", title: "Office Interiors" },
];

const AUTO_DELAY = 5000;

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Slide
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden flex justify-center items-center pt-15 pb-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={{ duration: 0.6 }}
        className="flex w-full"
      >
        {imgs.map((item, idx) => (
          <div
            key={idx}
            className="w-full flex justify-center items-center shrink-0"
          >
            <div className="relative w-[95%] h-[70vh] md:h-[85vh] overflow-hidden rounded-2xl shadow-xl">

              <Link to={item.link}>
                <img
                  src={item.src}
                  alt={item.title}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                  <h2 className="text-white text-2xl md:text-4xl font-light mb-1">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base">
                    Explore our {item.title.toLowerCase()} portfolio.
                  </p>
                </div>
              </Link>

            </div>
          </div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {imgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              idx === imgIndex
                ? "bg-white scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeCarousel;