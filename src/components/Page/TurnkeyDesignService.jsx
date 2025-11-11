import React from "react";
import InteriorSection from "./InteriorSection";
import GallerySection from "../GallerySection.jsx/GallerySection";
import InfoSection from "../InfoSection";
import Execution3 from "./Execution3";

import turnkeyImage from "../../assets/41.jpg";
import turnkeyProcess from "../../assets/ba3.jpg"; // ✅ image for InfoSection

import img1 from "../../assets/ba.jpg";
import img2 from "../../assets/ba1.jpg";
import img3 from "../../assets/3.png";
import img4 from "../../assets/image15.png";
import img5 from "../../assets/image16.png";
import img6 from "../../assets/ba2.jpg";

const turnkeyProjects = [
  {
    img: img1,
    title: "End-to-End Design Projects",
    desc: "Complete project management from concept to handover.",
  },
  {
    img: img2,
    title: "Residential Turnkey Projects",
    desc: "Fully managed luxury homes, delivered ready to move in.",
  },
  {
    img: img3,
    title: "Corporate Office Execution",
    desc: "Precision-built office interiors with timely delivery.",
  },
  {
    img: img4,
    title: "Retail & Hospitality Projects",
    desc: "Bringing brand experiences to life through design and execution.",
  },
  {
    img: img5,
    title: "Luxury Villa Design",
    desc: "A seamless transformation experience — from dream to reality.",
  },
  {
    img: img6,
    title: "Modular Fit-Out Projects",
    desc: "Custom furniture and modular systems for fast-track interiors.",
  },
];

const TurnkeyDesignService = () => {
  return (
    <>
      {/* 1️⃣ Hero Section */}
      <InteriorSection
        title="Turnkey Interior Solutions"
        description="From vision to execution, SPAZIO provides end-to-end interior design and build services for hassle-free transformations."
        image={turnkeyImage}
      />

      {/* 2️⃣ Execution Section */}
      <Execution3 />

      {/* 3️⃣ Gallery Section */}
      <GallerySection
        title="Turnkey Projects — From Concept to Completion"
        subtitle="Every project is handled with precision, commitment, and creative collaboration for seamless delivery."
        projects={turnkeyProjects}
      />

      {/* 4️⃣ Info Section */}
      <InfoSection
        title="Designed for Delivery – Built for Excellence"
        description="At SPAZIO, our Turnkey Solutions bring design, execution, and delivery together under one roof. From concept development and material selection to construction, furnishing, and final handover — we take full ownership of your project. Whether it’s a residence, office, or commercial space, our team ensures precision, transparency, and timeliness at every stage. Each turnkey project is engineered for beauty, functionality, and peace of mind — so you can simply step in and start living your vision."
        
        buttonText="Start Your Project"
        buttonLink="/contact"
        image={turnkeyProcess}
        glowColor="bg-orange-400"
      />
    </>
  );
};

export default TurnkeyDesignService;
