import React, { useState } from "react";

const GallerySection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // 🔥 IMPORTANT
  const base = import.meta.env.BASE_URL;

const galleryItems = [
  {
    title: "VIDEO GALLERY",
    video: `${base}video1.mp4`,
    thumbnail: `${base}gallery/1.webp`, // ✅ FIXED
  },
  {
    title: "INTERIOR GALLERY",
    video: `${base}video2.mp4`,
    thumbnail: `${base}gallery/2.webp`, // ✅ FIXED
  },
  {
    title: "PROJECT-WISE GALLERY",
    video: `${base}video3.mp4`,
    thumbnail: `${base}gallery/3.webp`, // ✅ FIXED
  },
];

  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        ACTUAL PROJECT PHOTOGRAPHS
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => setActiveVideo(item.video)}
          >
            {/* Thumbnail */}
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Title */}
            <div className="absolute bottom-0 w-full bg-white text-black py-4 text-center">
              <p className="font-semibold text-lg">{item.title}</p>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-white/80 p-4 rounded-full">▶</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              preload="metadata"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;