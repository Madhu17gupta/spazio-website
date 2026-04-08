import React, { lazy, Suspense } from "react";
import InteriorSection from "./InteriorSection";

// 🔥 Lazy load heavy components
const GallerySection = lazy(() => import("../GallerySection.jsx/GallerySection"));
const InfoSection = lazy(() => import("../InfoSection"));
const Execution1 = lazy(() => import("./Execution1"));

// ✅ use webp images
import commercialImage from "../../assets/6.webp";
import officeImg from "../../assets/29.webp";

// gallery images (webp)
import img1 from "../../assets/image7.webp";
import img2 from "../../assets/image8.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/image9.webp";
import img5 from "../../assets/image10.webp";
import img6 from "../../assets/6.webp";

const commercialProjects = [
  {
    img: img1,
    title: "Modern Office Design",
    desc: "A sleek workspace designed for productivity.",
  },
  {
    img: img2,
    title: "Retail Store Interior",
    desc: "Strategic layout with immersive design.",
  },
  {
    img: img3,
    title: "Corporate Reception",
    desc: "Minimal yet welcoming space.",
  },
  {
    img: img4,
    title: "Restaurant Lounge",
    desc: "Warm and elegant ambiance.",
  },
  {
    img: img5,
    title: "Showroom Setup",
    desc: "High-impact product display.",
  },
  {
    img: img6,
    title: "Coworking Hub",
    desc: "Collaborative workspace design.",
  },
];

const Commercial = () => {
  return (
    <>
      {/* Hero */}
      <InteriorSection
        title="Commercial Interiors"
        description="Smart, functional, and brand-aligned commercial spaces."
        image={commercialImage}
      />

      {/* Execution */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Execution1 />
      </Suspense>

      {/* Gallery */}
      <Suspense fallback={<div className="text-center py-10">Loading gallery...</div>}>
        <GallerySection
          title="Elegant Commercial Spaces"
          subtitle="Where aesthetics meet business functionality."
          projects={commercialProjects}
        />
      </Suspense>

      {/* Info */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <InfoSection
          title="Designed for Business"
          description="We create spaces that boost productivity and customer experience."
          buttonText="Contact Us"
          buttonLink="/contact"
          image={officeImg}
          glowColor="bg-blue-400"
        />
      </Suspense>
    </>
  );
};

export default Commercial;