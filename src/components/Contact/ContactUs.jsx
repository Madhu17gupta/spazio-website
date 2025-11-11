import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import bgImage from "../../assets/41.jpg";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d5d5bb10-fc47-472e-a8ab-eef9511fde96");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message sent successfully!");
      event.target.reset();
    } else {
      alert("❌ Failed to send. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-stretch justify-center">
      {/* LEFT SIDE - Contact Form */}
      <div className="md:w-1/2 w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-lg m-4 md:m-8 p-6 md:p-10 shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center md:text-left">
          Get in Touch
        </h2>

        <form onSubmit={onSubmit} className="space-y-6">
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            required
            className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email Address"
            required
            className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <input
            name="project_type"
            type="text"
            placeholder="Type of Project (e.g. Residential / Commercial)"
            className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <textarea
            name="message"
            placeholder="Tell us about your project or query..."
            rows="4"
            required
            className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-auto px-10 py-3 bg-black text-white rounded-full font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 shadow-[4px_4px_0px_#333] hover:shadow-[2px_2px_0px_#000] active:scale-95"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* RIGHT SIDE - Info + Background */}
      <div
        className="md:w-1/2 w-full relative rounded-lg m-4 md:m-8 bg-cover bg-center flex flex-col justify-center text-white px-6 md:px-10 py-16 min-h-[400px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

        <div className="relative z-10 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-light">SPAZIO</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let's Start a Project
          </h2>
          <p className="max-w-lg text-gray-200 leading-relaxed mx-auto md:mx-0 text-sm md:text-base">
            Feel free to reach out or visit us — our team is committed to
            responding to all inquiries within 24 hours on working days.
          </p>

          <div className="space-y-4 text-gray-200 text-sm md:text-base">
            <p className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="inline text-white text-lg" />
              <span>info@spaziointerior.in</span>
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="inline text-white text-lg" />
              <span>+91 97300 26919</span>
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-2 max-w-sm mx-auto md:mx-0">
              <FaMapMarkerAlt className="inline text-white text-lg" />
              <span>
                Vishwakarma Paradise, Phase 1, Ambadi Rd, Sai Nagar, Vasai West,
                Maharashtra 401202
              </span>
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <a href="#" className="text-white text-xl hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="#" className="text-white text-xl hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
