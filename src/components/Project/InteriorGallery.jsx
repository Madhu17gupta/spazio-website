import React, { useState, useEffect } from "react";

const InteriorGallery = () => {
  const base = import.meta.env.BASE_URL;

  const allImages = [
    `${base}gallery/1.webp`,
    `${base}gallery/2.webp`,
    `${base}gallery/3.webp`,
    `${base}gallery/4.webp`,
    `${base}gallery/5.webp`,
    `${base}gallery/6.webp`,
    `${base}gallery/7.webp`,
    `${base}gallery/9.webp`,
    `${base}gallery/10.webp`,
    `${base}gallery/11.webp`,
    `${base}gallery/12.webp`,
    `${base}gallery/13.webp`,
    `${base}gallery/14.webp`,
    `${base}gallery/15.webp`,
    `${base}gallery/16.webp`,
    `${base}gallery/17.webp`,
    `${base}gallery/18.webp`,
    `${base}gallery/19.webp`,
    `${base}gallery/20.webp`,
    `${base}gallery/22.webp`,
    `${base}gallery/23.webp`,
    `${base}gallery/24.webp`,
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // 🔥 Disable scroll on modal
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";
  }, [selectedIndex]);

  // 🔥 Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) => (prev + 1) % allImages.length);
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev === 0 ? allImages.length - 1 : prev - 1
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, allImages.length));
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen">

      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide">
          Interior Gallery
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Explore our thoughtfully designed interiors crafted with precision and elegance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {allImages.slice(0, visibleCount).map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden cursor-pointer group rounded-xl shadow-lg"
            onClick={() => setSelectedIndex(idx)}
          >
            <img
              src={img}
              alt={`interior-${idx}`}
              loading="lazy"
              className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="bg-white text-black px-4 py-2 rounded-full shadow-md text-sm font-medium">
                View
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < allImages.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="px-10 py-3 bg-black text-white rounded-full font-medium tracking-wide hover:bg-gray-800 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 text-white text-3xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={allImages[selectedIndex]}
              alt="interior"
              className="w-full max-h-[90vh] object-contain rounded-xl"
            />

            {/* Navigation */}
            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === 0
                    ? allImages.length - 1
                    : selectedIndex - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % allImages.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default InteriorGallery;