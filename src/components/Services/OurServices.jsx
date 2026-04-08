import React from "react";
import { motion } from "framer-motion";

// ✅ Use simple emoji/icons (NO heavy library)
const services = [
  { icon: "🛠️", title: "Civil Work" },
  { icon: "🔨", title: "Carpentry" },
  { icon: "💡", title: "Lighting Design" },
  { icon: "🛋️", title: "Customized Furniture" },
  { icon: "🍳", title: "Modular Kitchen" },
  { icon: "⚡", title: "Electrical Services" },
  { icon: "🚿", title: "Plumbing" },
  { icon: "🎨", title: "Painting" },
  { icon: "🚪", title: "Fenestration" },
  { icon: "✨", title: "Decor & Styling" },
  { icon: "🏗️", title: "False Ceiling" },
  { icon: "🧾", title: "Wallpaper" },
];

const OurServices = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        OUR SERVICES
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // ✅ removed delay
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="bg-gray-900 w-16 h-16 flex items-center justify-center rounded-full mb-3 text-2xl transition-transform duration-300 group-hover:scale-105">
              {service.icon}
            </div>
            <p className="text-sm md:text-base font-light">
              {service.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;