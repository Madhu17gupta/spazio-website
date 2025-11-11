// src/components/MapSection.jsx
import React from "react";

const ADDRESS =
  "Vishwakarma Paradise, Phase 1, Ambadi Rd, Sai Nagar, Vasai West, Vasai-Virar, Maharashtra 401202";

const MapSection = () => {
  const q = encodeURIComponent(ADDRESS);

  return (
    <section className="py-15">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Our Location
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        {/* Map */}
        <div className="relative w-full overflow-hidden rounded-lg shadow">
          <iframe
            title="SPAZIO location on Google Maps"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] border-0"
          />
        </div>

        {/* Helpful links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start mt-4">
          <a
            className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
          <a
            className="inline-block bg-white text-black border border-black px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
            href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
