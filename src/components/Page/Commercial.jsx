import React from "react";
import InteriorSection from "./InteriorSection";
import GallerySection from "../GallerySection.jsx/GallerySection";  // ✅ corrected path
import InfoSection from "../InfoSection"; // ✅ add this import
import commercialImage from "../../assets/6.png";
import officeImg from "../../assets/29.png"; // ✅ image for InfoSection (replace with real one)
import Execution1 from "./Execution1";

// 👇 Define your projects for the gallery
import img1 from "../../assets/image7.png";
import img2 from "../../assets/image8.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/image9.png";
import img5 from "../../assets/image10.png";
import img6 from "../../assets/6.png";

const commercialProjects = [
  {
    img: img1,
    title: "Modern Office Design",
    desc: "A sleek, brand-centric workspace designed to enhance productivity.",
  },
  {
    img: img2,
    title: "Retail Store Interior",
    desc: "An immersive shopping environment with strategic layout and lighting.",
  },
  {
    img: img3,
    title: "Corporate Reception Area",
    desc: "Minimalist yet welcoming front desk concept for client engagement.",
  },
  {
    img: img4,
    title: "Restaurant Lounge",
    desc: "Sophisticated ambiance with elegant textures and warm tones.",
  },
  {
    img: img5,
    title: "Showroom Setup",
    desc: "High-impact display design to highlight brand products effectively.",
  },
  {
    img: img6,
    title: "Coworking Hub",
    desc: "Dynamic open-plan workspace that encourages collaboration.",
  },
];

const Commercial = () => {
  return (
    <>
      {/* 1️⃣ Hero Section */}
      <InteriorSection
        title="Commercial Interiors"
        description="SPAZIO delivers smart, functional, and brand-aligned commercial interiors that elevate workspaces and customer experiences alike."
        image={commercialImage}
      />

      {/* 2️⃣ Execution Process */}
      <Execution1 />

      {/* 3️⃣ Gallery Section */}
      <GallerySection
        title="Elegant & Functional Commercial Spaces"
        subtitle="Our projects reflect strategic design thinking—where aesthetics meet business functionality."
        projects={commercialProjects}
      />

      {/* 4️⃣ Info Section (same layout, new content) */}
      <InfoSection
        title="Designed for Business –
Built for Impact-"
        description="At SPAZIO, we design commercial environments that align with your brand, purpose, and operational needs. Whether it's offices, retail spaces, showrooms, salons, or studios—our team merges style with functionality to create spaces that inspire productivity, enhance customer experience, and leave a lasting impression. From concept to completion, every detail is crafted to elevate your business presence."
        
        buttonText="Contact Us"
        buttonLink="/contact"
        image={officeImg}
        glowColor="bg-blue-400"
      />
    </>
  );
};

export default Commercial;
