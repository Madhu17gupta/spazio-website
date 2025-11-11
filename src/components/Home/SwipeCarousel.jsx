import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

import house1 from "../../assets/12.png";
import house2 from "../../assets/27.jpeg";
import house3 from "../../assets/super1.png";
import house4 from "../../assets/34.png";

const imgs = [
  { src: house1, link: "/residential", title: "Residential Interior" },
  { src: house2, link: "/commercial", title: "Commercial Design" },
  { src: house3, link: "/industrial", title: "Industrial Projects" },
  { src: house4, link: "/turnkey", title: "Turnkey Projects" },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 12;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 200,
  damping: 35,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden flex justify-center items-center py-8 mt-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Container */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex w-full"
      >
        {imgs.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-full flex justify-center items-center shrink-0"
            animate={{ scale: imgIndex === idx ? 1 : 0.96 }}
            transition={SPRING_OPTIONS}
          >
            <div className="relative w-[95%] h-[70vh] md:h-[80vh] overflow-hidden rounded-xl shadow-lg">
              <Link to={item.link}>
                <img
                  src={item.src}
                  alt={`Slide ${idx}`}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end items-start p-8 md:p-12">
                  <h2 className="text-white/95 text-3xl md:text-5xl font-light tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-1">
                    {item.title}
                  </h2>
                  <p className="text-gray-200/90 text-sm md:text-lg font-extralight max-w-md">
                    Explore our {item.title.toLowerCase()} portfolio.
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {imgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === imgIndex ? "bg-white scale-125" : "bg-gray-700 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
