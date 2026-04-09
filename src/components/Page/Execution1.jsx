import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ convert to webp
import img1 from "../../assets/off.webp";
import img2 from "../../assets/25.webp";
import img3 from "../../assets/26.webp";
import img4 from "../../assets/10.webp";

const Execution = () => {
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
          Designing Impactful Spaces for Modern Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mb-6"
        >
         At SPAZIO, we craft commercial interiors that reflect your brand identity, support functionality, and enhance the customer and employee experience. Whether it’s a retail outlet, office, showroom, or hospitality space, our designs are tailored to create the perfect balance between aesthetics and purpose. With a deep understanding of layout planning, brand integration, and practical execution, we deliver spaces that are visually appealing, efficient, and built to inspire. Let Spazio transform your commercial environment into a space that works for your business and speaks to your vision.
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
        initial={{ opacity: 0, x: 100  }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img1}
          alt="Planning"
          className="absolute -top-10 right-30 w-56 h-70 object-cover rounded-sm shadow-lg "
        />

        {/* img2 */}
         <motion.img
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img2}
          alt="Design"
          className="absolute -top-30 -right-30 w-56 h-60 object-cover rounded-sm shadow-lg"
        />

        {/* img3 */}
        <motion.img
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
          src={img3}
          alt="Execution"
          className="w-[220px] h-[480px]  object-cover rounded-sm shadow-xl absolute -top-28 left-5"
        />


        {/* img4 */}
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