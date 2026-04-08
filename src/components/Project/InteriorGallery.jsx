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

  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedImage]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, allImages.length));
  };

  return (
    <section className="py-16 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Interior <span className="font-bold">Gallery</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 max-w-7xl mx-auto">
        {allImages.slice(0, visibleCount).map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden cursor-pointer group rounded-md shadow-md bg-[#f2f2f2]"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`interior-${idx}`}
              loading="lazy"
              decoding="async"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <div className="bg-white/80 p-3 rounded-full text-xl">+</div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allImages.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
          >
            Load More ▼
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white/80 text-black text-xl rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="interior"
              className="w-full max-h-[90vh] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default InteriorGallery;