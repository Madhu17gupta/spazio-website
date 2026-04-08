import React, { lazy, Suspense } from "react";
import InteriorSection from "./InteriorSection";

// 🔥 Lazy load components
const GallerySection = lazy(() => import("../GallerySection.jsx/GallerySection"));
const InfoSection = lazy(() => import("../InfoSection"));
const Execution2 = lazy(() => import("./Execution2"));

// ✅ use webp images
import industrialImage from "../../assets/super.webp";
import factoryImg from "../../assets/supermarket.webp";

import img1 from "../../assets/fac.webp";
import img2 from "../../assets/whare.webp";
import img3 from "../../assets/image11.webp";

const industrialProjects = [
  {
    img: img1,
    title: "Factory Floor Design",
    desc: "Efficient layout planning.",
  },
  {
    img: img2,
    title: "Warehouse Planning",
    desc: "Optimized storage solutions.",
  },
  {
    img: img3,
    title: "Production Unit",
    desc: "Ergonomic industrial setup.",
  },
];

const Industrial = () => {
  return (
    <>
      {/* Hero */}
      <InteriorSection
        title="Industrial Interiors"
        description="Smart, functional industrial spaces designed for performance."
        image={industrialImage}
      />

      {/* Execution */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Execution2 />
      </Suspense>

      {/* Gallery */}
      <Suspense fallback={<div className="text-center py-10">Loading gallery...</div>}>
        <GallerySection
          title="Efficient Industrial Spaces"
          subtitle="Built for workflow, safety, and scalability."
          projects={industrialProjects}
        />
      </Suspense>

      {/* Info */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <InfoSection
          title="Designed for Industry"
          description="We create industrial environments that enhance productivity and growth."
          buttonText="Contact Us"
          buttonLink="/contact"
          image={factoryImg}
          glowColor="bg-green-400"
        />
      </Suspense>
    </>
  );
};

export default Industrial;