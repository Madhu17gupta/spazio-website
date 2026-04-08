import React, { lazy, Suspense } from "react";

// 🔥 Lazy load components
const InteriorSection = lazy(() => import("./InteriorSection"));
const Execution = lazy(() => import("./Execution"));
const GallerySection = lazy(() => import("../GallerySection.jsx/GallerySection"));
const InfoSection = lazy(() => import("../InfoSection"));

// ✅ Import ALL images properly (NO require ❌)
import residentialImage from "../../assets/rr.webp";
import livingRoomImg from "../../assets/image6.webp";

import img1 from "../../assets/14.webp";
import img2 from "../../assets/17.webp";
import img3 from "../../assets/18.webp";
import img4 from "../../assets/19.webp";
import img5 from "../../assets/22.webp";
import img6 from "../../assets/image2.webp";
import img7 from "../../assets/image3.webp";
import img8 from "../../assets/image4.webp";
import img9 from "../../assets/image5.webp";

// 👇 Clean data (no require)
const residentialProjects = [
  {
    img: img1,
    title: "Modern Living Room",
    desc: "Elegant space designed to balance comfort and contemporary style.",
  },
  {
    img: img2,
    title: "Luxury Bedroom Design",
    desc: "Warm textures and lighting that elevate relaxation and aesthetics.",
  },
  {
    img: img3,
    title: "Modern Minimalist",
    desc: "Minimal closet with warm wood and clean lines.",
  },
  {
    img: img4,
    title: "Room Partition",
    desc: "Stylish divider with functional design.",
  },
  {
    img: img5,
    title: "Study Area",
    desc: "Modern workspace with natural light.",
  },
  {
    img: img6,
    title: "Wardrobe",
    desc: "Modern sliding wardrobe design.",
  },
  {
    img: img7,
    title: "Rattan Wardrobe",
    desc: "Wood + woven panel styling.",
  },
  {
    img: img8,
    title: "Tropical Bedroom",
    desc: "Minimal design with nature vibes.",
  },
  {
    img: img9,
    title: "Entryway",
    desc: "Premium wooden entrance design.",
  },
];

const Residential = () => {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      
      {/* 1️⃣ Hero Section */}
      <InteriorSection
        title="Residential Interiors"
        description="SPAZIO creates personalized residential interiors that combine elegance, comfort, and smart functionality for every home."
        image={residentialImage}
      />

      {/* 2️⃣ Execution Section */}
      <Execution />

      {/* 3️⃣ Gallery Section */}
      <GallerySection
        title="Elegant & Personalized Residential Interiors"
        subtitle="Each project reflects a balance between beauty, functionality, and timeless appeal."
        projects={residentialProjects}
      />

      {/* 4️⃣ Info Section */}
      <InfoSection
        title="Your Life, Beautifully Designed"
        description="At SPAZIO, we craft homes that reflect your personality and lifestyle."
        buttonText="Contact Us"
        buttonLink="/contact"
        image={livingRoomImg}
        glowColor="bg-yellow-300"
      />

    </Suspense>
  );
};

export default Residential;