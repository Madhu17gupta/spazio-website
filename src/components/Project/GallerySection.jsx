import React, { useState } from "react";

const GallerySection = () => {
  const [activeVideo, setActiveVideo] = useState(null); // store selected video

  const galleryItems = [
    { title: "VIDEO GALLERY", video: "/video1.mp4" },
    { title: "INTERIOR GALLERY", video: "/video2.mp4" },
    { title: "PROJECT-WISE GALLERY", video: "/video3.mp4" },
  ];

  return (
    <section className="py-26 ">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        ACTUAL PROJECT PHOTOGRAPHS
      </h2>

      {/* ✅ Video Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => setActiveVideo(item.video)} // open modal
          >
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-white text-black py-4 text-center">
              <p className="font-semibold text-lg">{item.title}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-white/80 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Fullscreen Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveVideo(null)} // close on background click
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-light"
            >
              ✕
            </button>

            {/* Video player */}
            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
