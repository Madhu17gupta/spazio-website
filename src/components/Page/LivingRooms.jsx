import React from "react";
import livingRoom from "../../assets/20.png"; // replace with your illustration
import { Link } from "react-router-dom";

const LivingRooms = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center  px-6 md:px-16 lg:px-24 md:py-20">
      {/* Left Text Section */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Simple way to make stylish <br className="hidden md:block" /> living room
        </h2>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          earum accusantium tempore nam adipisci elit. Suscipit earum
          accusantium tempore nam aliquid.
        </p>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-10 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">15</h3>
            <p className="text-gray-500 text-sm">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">350</h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">34</h3>
            <p className="text-gray-500 text-sm">Awards Gained</p>
          </div>
        </div>

        {/* Contact Button */}
     <Link
  to="/contact"
  className="inline-block bg-black text-white px-6 py-3 font-medium rounded-sm 
             shadow-[4px_4px_0px_#333] hover:shadow-[2px_2px_0px_#000] 
             active:scale-95 transition-all duration-200"
>
  Contact Us
</Link>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 w-full flex justify-center relative">
    
          <img
            src={livingRoom}
            alt="Living room sketch"
            className="w-full max-w-[550px] rounded-lg object-contain"
          />
          {/* Glowing lamp effect (enhanced) */}
          <div className="absolute top-[35%] left-[60%] w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>
    
    </section>
  );
};

export default LivingRooms;
