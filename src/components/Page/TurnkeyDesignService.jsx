import React, { lazy, Suspense } from "react";

// 🔥 Lazy load components
const InteriorSection = lazy(() => import("./InteriorSection"));
const GallerySection = lazy(() => import("../GallerySection.jsx/GallerySection"));
const InfoSection = lazy(() => import("../InfoSection"));
const Execution3 = lazy(() => import("./Execution3"));

// ✅ Import images properly (NO require ❌)
import turnkeyImage from "../../assets/41.webp";
import turnkeyProcess from "../../assets/ba3.webp";

import img1 from "../../assets/ba.webp";
import img2 from "../../assets/ba1.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/image15.webp";
import img5 from "../../assets/image16.webp";
import img6 from "../../assets/ba2.webp";

// 👇 Clean data
const turnkeyProjects = [
  {
    img: img1,
    title: "End-to-End Design Projects",
    desc: "Complete project management from concept to handover.",
  },
  {
    img: img2,
    title: "Residential Turnkey Projects",
    desc: "Fully managed luxury homes.",
  },
  {
    img: img3,
    title: "Corporate Office Execution",
    desc: "Precision-built office interiors.",
  },
  {
    img: img4,
    title: "Retail & Hospitality",
    desc: "Brand-driven design execution.",
  },
  {
    img: img5,
    title: "Luxury Villa Design",
    desc: "Dream to reality transformation.",
  },
  {
    img: img6,
    title: "Modular Fit-Out",
    desc: "Custom fast-track interiors.",
  },
];

const TurnkeyDesignService = () => {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>

      {/* 1️⃣ Hero */}
      <InteriorSection
        title="Turnkey Interior Solutions"
        description="From vision to execution, SPAZIO provides end-to-end interior design and build services."
        image={turnkeyImage}
      />

      {/* 2️⃣ Execution */}
      <Execution3 />

      {/* 3️⃣ Gallery */}
      <GallerySection
        title="Turnkey Projects — From Concept to Completion"
        subtitle="Handled with precision and creativity."
        projects={turnkeyProjects}
      />

      {/* 4️⃣ Info */}
      <InfoSection
        title="Designed for Delivery – Built for Excellence"
        description="Complete ownership from concept to handover with precision and transparency."
        buttonText="Start Your Project"
        buttonLink="/contact"
        image={turnkeyProcess}
        glowColor="bg-orange-400"
      />

    </Suspense>
  );
};

export default TurnkeyDesignService;