import React, { useState, useRef, useEffect } from "react";

const InteriorGallery = () => {
  const allImages = [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.png",
    "/gallery/4.png", 
    "/gallery/5.png",
    "/gallery/6.png",
    "/gallery/7.png",
    "/gallery/9.png",
    "/gallery/10.png",
    "/gallery/11.png",
    "/gallery/12.png",
    "/gallery/13.png",
     "/gallery/14.png",
    "/gallery/15.png",
    "/gallery/16.png",
    "/gallery/17.png",
    "/gallery/18.png",
    "/gallery/19.png",
    "/gallery/20.png",
    "/gallery/22.png",
    "/gallery/23.png",
    "/gallery/24.png",
    "/gallery/25.png",
    "/gallery/26.png",
    "/gallery/27.jpeg",
    "/gallery/28.jpeg",
    "/gallery/29.png",
    "/gallery/30.png", // or "/gallery/4.jpg" if renamed
    "/gallery/31.png",
    "/gallery/33.png",
    "/gallery/34.png",
    "/gallery/35.png",
    "/gallery/36.png",
    "/gallery/37.png",
    "/gallery/38.png",
    "/gallery/39.png",
    "/gallery/40.png",
    "/gallery/41.jpg",
    "/gallery/42.png",
    "/gallery/43.png",
    "/gallery/44.png",
    "/gallery/45.png",
    "/gallery/46.png",
    "/gallery/ba.jpg",
    "/gallery/ba1.jpg",
    "/gallery/ba2.jpg",
    "/gallery/ba3.jpg",
    "/gallery/bedroom.jpeg",
    "/gallery/Dining.jpeg",
    "/gallery/family.JPG",
    "/gallery/image.png",
    "/gallery/image1.png",
    "/gallery/image2.png",
      "/gallery/image3.png",
    "/gallery/image4.png",
    "/gallery/image5.png",
      "/gallery/image6.png",
    "/gallery/image7.png",
    "/gallery/image8.png",
      "/gallery/image9.png",
    "/gallery/image10.png",
    "/gallery/image11.png",
      "/gallery/image12.png",
    "/gallery/image13.png",
    "/gallery/image14.png",
      "/gallery/image15.png",
    "/gallery/image16.png",
    "/gallery/kitchen.png",
       "/gallery/image12.png",
    "/gallery/Kids.jpg",
    

  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);
  const gridRef = useRef(null);

  // Disable page scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [selectedImage]);

  // Smooth scroll to bottom when loading more
  useEffect(() => {
    if (gridRef.current && visibleCount > 8) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, allImages.length));
  };

  return (
    <section className="py-16 min-h-screen">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Interior <span className="font-bold">Gallery</span>
      </h2>

      {/* Image Grid */}
      <div
        ref={gridRef}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 max-w-7xl mx-auto"
      >
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
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <div className="bg-white/80 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                >
                  <path d="M12 5v14m-7-7h14" stroke="black" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allImages.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="w-full md:w-auto px-10 py-3 bg-black text-white rounded-full font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 shadow-[4px_4px_0px_#333] hover:shadow-[2px_2px_0px_#000] active:scale-95"
          >
            Load More ▼
          </button>
        </div>
      )}

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white/70 hover:bg-white text-black text-2xl rounded-full w-10 h-10 flex items-center justify-center transition"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="interior"
              className="w-full max-h-[90vh] object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default InteriorGallery;
