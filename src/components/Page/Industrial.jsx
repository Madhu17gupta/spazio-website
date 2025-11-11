import React from "react";
import InteriorSection from "./InteriorSection";
import GallerySection from "../GallerySection.jsx/GallerySection";  // ✅ corrected import path
import InfoSection from "../InfoSection"; // ✅ add this for the last section
import Execution2 from "./Execution2";

import industrialImage from "../../assets/super.png";
import factoryImg from "../../assets/supermarket.png"; // ✅ new image for InfoSection

// 👇 Project images
import img1 from "../../assets/fac.png";
import img2 from "../../assets/whare.png";
import img3 from "../../assets/image11.png";

const industrialProjects = [
  {
    img: img1,
    title: "Factory Floor Design",
    desc: "Smart layouts maximizing efficiency and workflow.",
  },
  {
    img: img2,
    title: "Warehouse Planning",
    desc: "Strategic storage design for space optimization.",
  },
  {
    img: img3,
    title: "Production Unit Design",
    desc: "Industrial-grade infrastructure with ergonomic planning.",
  },
 
];

const Industrial = () => {
  return (
    <>
      {/* 1️⃣ Hero Section */}
      <InteriorSection
        title="Industrial Interiors"
        description="SPAZIO creates smart, functional industrial interiors that blend brand identity with efficient, modern workspaces."
        image={industrialImage}
      />

      {/* 2️⃣ Execution Section */}
      <Execution2 />

      {/* 3️⃣ Gallery Section */}
      <GallerySection
        title="Efficient & Aesthetic Industrial Spaces"
        subtitle="Our designs focus on workflow efficiency, safety, and modern visual appeal across large-scale environments."
        projects={industrialProjects}
      />

      {/* 4️⃣ Info Section */}
      <InfoSection
        title="Designed for Industry –
Built for Performance–"
        description="At SPAZIO , we craft industrial environments that align with your brand, workflow, and operational goals. From warehouses and manufacturing units to R&D labs and logistics hubs, our team blends utility with smart design to create spaces that boost efficiency, ensure safety, and support scalable growth. From concept to execution, every detail is engineered to optimize performance and elevate your industrial presence."
       
        buttonText="Contact Us"
        buttonLink="/contact"
        image={factoryImg}
        glowColor="bg-green-400"
      />
    </>
  );
};

export default Industrial;
