import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

// ✅ Background image
import bgImage from "../../assets/41.webp";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.target);

    // 🔐 Secure ENV usage
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORM_KEY
    );

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setMessage("❌ Failed to send. Try again.");
      }
    } catch {
      setMessage("⚠️ Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-100">

      {/* LEFT - FORM */}
      <div className="md:w-1/2 w-full bg-white/90 backdrop-blur-md border rounded-lg m-4 p-6 md:p-10 shadow-lg">
        
        <h2 className="text-3xl font-semibold mb-8">
          Get in Touch
        </h2>

        <form onSubmit={onSubmit} className="space-y-6">

          {/* First Name */}
          <input
            name="first_name"
            placeholder="First Name"
            required
            className="w-full border-b border-gray-400 py-3 bg-transparent focus:outline-none focus:border-black transition-all duration-300"
          />

          {/* Last Name */}
          <input
            name="last_name"
            placeholder="Last Name"
            className="w-full border-b border-gray-400 py-3 bg-transparent focus:outline-none focus:border-black transition-all duration-300"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border-b border-gray-400 py-3 bg-transparent focus:outline-none focus:border-black transition-all duration-300"
          />

          {/* Project Type */}
          <input
            name="project_type"
            placeholder="Project Type"
            className="w-full border-b border-gray-400 py-3 bg-transparent focus:outline-none focus:border-black transition-all duration-300"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows="4"
            className="w-full border-b border-gray-400 py-3 bg-transparent focus:outline-none focus:border-black resize-none transition-all duration-300"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-sm 
            shadow-[4px_4px_0px_#333] hover:shadow-[2px_2px_0px_#000] 
            active:scale-95 transition-all duration-200 disabled:opacity-60"
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>

          {/* Message */}
          {message && (
            <p className="text-sm text-center mt-2 font-medium text-green-600">
              {message}
            </p>
          )}
        </form>
      </div>

      {/* RIGHT - IMAGE + INFO */}
      <div className="md:w-1/2 w-full relative m-4 rounded-lg overflow-hidden min-h-[400px] group">

        {/* Background Image */}
        <img
          src={bgImage}
          alt="office"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-6 md:p-10 space-y-5">
          
          <h1 className="text-3xl font-light">SPAZIO</h1>
          <h2 className="text-2xl font-semibold">
            Let's Start a Project
          </h2>

          <p className="text-gray-200 text-sm">
            Feel free to reach out — we respond within 24 hours.
          </p>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@spaziointerior.in
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 97300 26919
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt />
              Vasai West, Maharashtra
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4 text-lg">
            <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;