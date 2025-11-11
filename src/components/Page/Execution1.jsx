import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/off.jpg"; // top-left
import img2 from "../../assets/25.png"; // top-right
import img3 from "../../assets/26.png";
import img4 from "../../assets/10.png";   // bottom large

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
        className="text-2xl md:text-3xl font-bold mb-4">Designing Impactful Spaces for Modern Businesses</motion.h2>
        <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        
        className="text-gray-600 leading-relaxed mb-8">
          At SPAZIO, we craft commercial interiors that reflect your brand identity, support functionality, and enhance the customer and employee experience. Whether it’s a retail outlet, office, showroom, or hospitality space, our designs are tailored to create the perfect balance between aesthetics and purpose. With a deep understanding of layout planning, brand integration, and practical execution, we deliver spaces that are visually appealing, efficient, and built to inspire. Let Spazio transform your commercial environment into a space that works for your business and speaks to your vision.
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
            <span className="relative z-10">View Services</span>
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
        initial={{ opacity: 0, x: 100  }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img1}
          alt="Planning"
          className="absolute -top-10 right-30 w-56 h-70 object-cover rounded-sm shadow-lg "
        />

        {/* Top-right small image */}
        <motion.img
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img2}
          alt="Design"
          className="absolute -top-30 -right-30 w-56 h-60 object-cover rounded-sm shadow-lg"
        />

        {/* Center large image */}
        <motion.img
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img3}
          alt="Execution"
          className="w-[220px] h-[480px]  object-cover rounded-sm shadow-xl absolute -top-28 left-5"
        />

         <motion.img
         initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img4}
          alt="Execution"
          className="w-[220px] h-[230px]  object-cover rounded-sm shadow-xl absolute top-35 left-125 -right-20"
        />
      </div>
    </section>
  );
};

export default Execution;
