import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const WhatsApp = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  // Show scroll-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp link (replace number and message)
  const whatsappLink =
    "https://wa.me/919792254987?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20services.";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">

      {/* WhatsApp popup */}
      {showPopup && (
        <div className="bg-white rounded-xl shadow-lg p-3 w-60 text-sm animate-fadeIn mb-2">
          <div className="font-semibold mb-1 flex items-center gap-1">
            Hi! <span>👋</span>
          </div>
          <p className="text-gray-700 mb-2">
            Want to chat with us on WhatsApp?
          </p>
          <button
            onClick={() => {
              window.open(whatsappLink, "_blank");
              setShowPopup(false);
            }}
            className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-green-600 transition"
          >
            Yes, Chat Now
          </button>
        </div>
      )}

      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaArrowUp size={18} />
        </button>
      )}

      {/* WhatsApp button */}
      <button
        onClick={() => window.open(whatsappLink, "_blank")}
        className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={26} color="white" />
      </button>
    </div>
  );
};

export default WhatsApp;
