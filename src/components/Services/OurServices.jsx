import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaCouch, FaHammer, FaLightbulb, FaPaintRoller, FaWrench, FaRulerCombined, FaDoorOpen, FaSink, FaPalette } from "react-icons/fa";

const services = [
  { icon: <FaTools size={28} />, title: "Civil Work" },
  { icon: <FaHammer size={28} />, title: "Carpentry" },
  { icon: <FaLightbulb size={28} />, title: "Lighting Design" },
  { icon: <FaCouch size={28} />, title: "Customized Furniture" },
  { icon: <FaRulerCombined size={28} />, title: "Modular Kitchen" },
  { icon: <FaWrench size={28} />, title: "Electrical Services" },
  { icon: <FaSink size={28} />, title: "Plumbing" },
  { icon: <FaPaintRoller size={28} />, title: "Painting" },
  { icon: <FaDoorOpen size={28} />, title: "Fenestration" },
  { icon: <FaPalette size={28} />, title: "Decor & Styling" },
  { icon: <FaRulerCombined size={28} />, title: "False Ceiling" },
  { icon: <FaPaintRoller size={28} />, title: "Wallpaper" },
];

const OurServices = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-wide"
      >
        OUR SERVICES
      </motion.h2>

      {/* Service Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="bg-gray-900 w-20 h-20 flex items-center justify-center rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </div>
            <p className="text-base font-light">{service.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
