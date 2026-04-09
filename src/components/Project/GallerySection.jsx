import React, { useState } from "react";

const GallerySection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const base = import.meta.env.BASE_URL;

  const galleryItems = [
    {
      title: "Video Gallery",
      video: `${base}video1.mp4`,
      thumbnail: `${base}gallery/1.webp`,
    },
    {
      title: "Interior Gallery",
      video: `${base}video2.mp4`,
      thumbnail: `${base}gallery/2.webp`,
    },
    {
      title: "Project Showcase",
      video: `${base}video3.mp4`,
      thumbnail: `${base}gallery/3.webp`,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide">
          Actual Project Photographs
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          A glimpse into our thoughtfully designed spaces and real project executions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setActiveVideo(item.video)}
          >
            {/* Image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

            {/* Title */}
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-xl font-semibold tracking-wide">
                {item.title}
              </p>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                ▶ Play
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:scale-110 transition"
            >
              ✕
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;