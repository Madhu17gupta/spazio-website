import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/1.webp"; // top-left
import img2 from "../../assets/family.JPG"; // top-right
import img3 from "../../assets/3.png";  // bottom large

const Execution = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-44">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2">
        <motion.h2
         initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
         className="text-2xl md:text-3xl font-bold mb-4">Your Vision, Beautifully Designed</motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="text-gray-600 leading-relaxed mb-8">
          At SPAZIO, we design homes that reflect your lifestyle and taste. Our residential interior solutions blend elegance with everyday comfort. From compact apartments to luxurious villas, we turn your vision into reality. Our designers focus on smart layouts, refined details, and quality materials to craft spaces that feel both stylish and personal. With expert guidance and a passion for design, we create homes that are warm, practical, and timeless. A skilled interior designer can truly elevate your space and add a distinct charm that sets it apart.
        </motion.p>
  <motion.div 
       initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
  className="flex justify-center md:justify-start">
          <Link
            to="/services"
            className="inline-block bg-black text-white px-6 py-3 font-medium rounded-sm 
             shadow-[4px_4px_0px_#333] hover:shadow-[2px_2px_0px_#000] 
             active:scale-95 transition-all duration-200"
          >
            <motion.span
                initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
            className="relative z-10">View Services</motion.span>
            {/* Decorative corners */}
         
      
          </Link>
        </motion.div>
         </div>

      {/* RIGHT IMAGE COLLAGE */}
      <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center items-center">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white/80 to-transparent blur-3xl -z-10"></div>

        {/* Top-left small image */}
        <motion.img
             initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img1}
          alt="Planning"
          className="absolute -top-10 right-30 w-56 h-70 object-cover rounded-sm shadow-lg "
        />

        {/* Top-right small image */}
        <motion.img
             initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
          src={img2}
          alt="Design"
          className="absolute -top-30 -right-30 w-56 h-70 object-cover rounded-sm shadow-lg"
        />

        {/* Center large image */}
        <motion.img
             initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8}}
          src={img3}
          alt="Execution"
          className="w-[220px] h-[300px]  object-cover rounded-sm shadow-xl absolute top-15 left-5"
        />
      </div>
    </section>
  );
};

export default Execution;
