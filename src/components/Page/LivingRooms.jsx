import React from "react";
import { Link } from "react-router-dom";

// ✅ convert to webp
import livingRoom from "../../assets/20.webp";

const LivingRooms = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 md:py-20 gap-10">

      {/* LEFT */}
      <div className="md:w-1/2 space-y-5 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Simple way to make stylish living room
        </h2>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Create a modern and comfortable space with elegant design and smart layouts.
        </p>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-8">
          <div>
            <h3 className="text-2xl font-bold">15</h3>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">350</h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">34</h3>
            <p className="text-gray-500 text-sm">Awards</p>
          </div>
        </div>

        <Link
          to="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-sm hover:opacity-90 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 flex justify-center relative">
        <img
          src={livingRoom}
          alt="Living room design"
          loading="lazy" // 🔥 important
          decoding="async"
          className="w-full max-w-[500px] object-contain"
        />

        {/* subtle glow (no animation) */}
        <div className="absolute top-[35%] left-[60%] w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
      </div>

    </section>
  );
};

export default LivingRooms;