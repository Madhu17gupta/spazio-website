import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const journeyData = [
  {
    year: "2006",
    text: "SPAZIO Interiors was founded with a passionate vision to transform everyday spaces into timeless experiences. Starting from humble beginnings, the team began crafting personalized residential interiors with a focus on aesthetics, comfort, and functionality.",
  },
  {
    year: "2010",
    text: "With rising demand and growing expertise, SPAZIO expanded its services into the commercial sector—offering comprehensive turnkey solutions for retail outlets, offices, and showrooms. This phase marked the beginning of our evolution into a full-service interior design firm.",
  },
  {
    year: "2015",
    text: "Celebrating the completion of over 250 successful projects, SPAZIO cemented its position as a trusted name in the design industry. Our client base expanded across sectors, driven by word-of-mouth referrals and long-term relationships built on trust and creative excellence.",
  },
  {
    year: "2020",
    text: "Embracing innovation, SPAZIO incorporated modern design technologies such as 3D visualization, VR walkthroughs, and smart home automation into its workflows. Even during global disruptions, we continued to deliver seamless design experiences that adapted to new lifestyles and needs.",
  },
  {
    year: "2025",
    text: "With over 500 projects delivered across residential, commercial, and luxury segments, SPAZIO today stands as a legacy brand known for integrity, innovation, and design brilliance. Our journey is defined by a deep commitment to creating spaces worth living, working, and dreaming in.",
  },
];

const OurJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-[#d8dbe1] py-20 px-6 md:px-16 lg:px-24 flex justify-center overflow-hidden relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full relative"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12 drop-shadow-sm"
        >
          Our Journey
        </motion.h2>

        {/* Animated Timeline Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-[6px] top-0 w-[2px] bg-gray-500 origin-top"
        />

        {/* Journey Items */}
        <div className="relative pl-10 space-y-14">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Dot with Glow */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="absolute -left-[10px] top-1 w-4 h-4 bg-white border-2 border-gray-600 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              />

              {/* Content */}
              <div className="ml-4 bg-white/40 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{item.year}</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurJourney;
