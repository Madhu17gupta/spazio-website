import React, { useState } from "react";

const ADDRESS =
  "Vishwakarma Paradise, Phase 1, Ambadi Rd, Sai Nagar, Vasai West, Vasai-Virar, Maharashtra 401202";

const MapSection = () => {
  const q = encodeURIComponent(ADDRESS);
  const [loadMap, setLoadMap] = useState(false);

  return (
    <section className="py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Our Location
      </h2>

      <div className="max-w-7xl mx-auto px-4">

        {/* Map Container */}
        <div className="relative w-full rounded-lg shadow overflow-hidden">

          {/* Placeholder (fast load) */}
          {!loadMap && (
            <div className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] flex items-center justify-center bg-gray-200">
              <button
                onClick={() => setLoadMap(true)}
                className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                Load Map
              </button>
            </div>
          )}

          {/* Load iframe only when needed */}
          {loadMap && (
            <iframe
              title="SPAZIO location on Google Maps"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              loading="lazy"
              className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] border-0"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start mt-4">
          <a
            className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>

          <a
            className="bg-white text-black border border-black px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
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