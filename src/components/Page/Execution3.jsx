import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ convert to webp
import img1 from "../../assets/image13.webp";
import img2 from "../../assets/image14.webp";
import img3 from "../../assets/image12.webp";

const Execution3 = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-32">

      {/* LEFT */}
      <div className="md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // ✅ FIX
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Complete Confidence, One Key Away
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mb-6"
        >
          At SPAZIO, our Turnkey Interior Solutions are designed for clients who value simplicity, precision, and trust. From concept to completion, we manage every detail — design, execution, materials, and finishing — so you can enjoy a smooth, stress-free experience. Our integrated team of architects, engineers, and designers work in perfect sync to deliver spaces that reflect your vision with flawless craftsmanship. With transparent costing, quality assurance, and on-time delivery, we transform your ideas into ready-to-live environments. Just turn the key — and step into a space that’s beautifully complete, inside and out.
        </motion.p>

        <Link
          to="/services"
          className="inline-block bg-black text-white px-6 py-3 rounded-sm hover:opacity-90 transition"
        >
          View Services
        </Link>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center items-center">

        {/* img1 */}
         <motion.img
           initial={{ opacity: 0, y: 80 }}
           whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img1}
          alt="Planning"
          className="absolute -top-10 right-30 w-66 h-70 object-cover rounded-sm shadow-lg "
        />

        {/* img2 */}
        <motion.img
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
          src={img2}
          alt="Design"
          className="absolute -top-30 -right-30 w-66 h-60 object-cover rounded-sm shadow-lg"
        />


        {/* img3 */}
        <motion.img
           initial={{ opacity: 0, y: 120 }}
           whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img4}
          alt="Execution"
          className="w-[280px] h-[230px]  object-cover rounded-sm shadow-xl absolute top-35 left-5 -right-20"
        />

      </div>
    </section>
  );
};

export default Execution3;