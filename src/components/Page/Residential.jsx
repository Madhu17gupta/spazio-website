import React from "react";
import InteriorSection from "./InteriorSection";
import Execution from "./Execution";
 import GallerySection from "../GallerySection.jsx/GallerySection"; 
import InfoSection from "../InfoSection"; // ✅ New import
import residentialImage from "../../assets/rr.png";

import img1 from "../../assets/14.png";
import img2 from "../../assets/17.png";
import img3 from "../../assets/18.png";
import img4 from "../../assets/19.png";
import img5 from "../../assets/22.png";
import img6 from "../../assets/image2.png";
import img7 from "../../assets/image3.png";
import img8 from "../../assets/image4.png";
import img9 from "../../assets/image5.png";
import livingRoomImg from "../../assets/image6.png"; // ✅ for InfoSection image

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
    title: " Modern minimalist ",
    desc: "This is a modern and minimalist walk-in closet with warm wood paneling, clean lines, and soft, hidden lighting.",
  },
  {
    img: img4,
    title: "Room partition",
    desc: "This is a stylish wooden wall unit that also works as a room divider.",
  },
  {
    img: img5,
    title: "Modern Built-in Study Area",
    desc: "This is a modern room with warm wooden shelves, cabinets, and a desk near a large window.",
  },
  {
    img: img6,
    title: "Modern sliding-door wardrobe ",
    desc: "Modern beige built-in wardrobe in a walk-in closet.",
  },
   {
    img: img7,
    title: "Modern Rattan-Paneled Wardrobe",
    desc: "Modern built-in wooden wardrobe with woven panels.",
  },
   {
    img: img8,
    title: "Modern Tropical Minimalist Bedroom",
    desc: "This room is a modern bedroom that blends simple style with a large plant-themed wall picture.",
  },
   {
    img: img9,
    title: "Formal Wooden Entryway",
    desc: "Large wooden front door set in a formal stone entryway.",
  },
];

const Residential = () => {
  return (
    <>
      {/* 1️⃣ Hero Section */}
      <InteriorSection
        title="Residential Interiors"
        description="SPAZIO creates personalized residential interiors that combine elegance, comfort, and smart functionality for every home."
        image={residentialImage}
      />

      {/* 2️⃣ Execution Process */}
      <Execution />

      {/* 3️⃣ Project Gallery */}
      <GallerySection
        title="Elegant & Personalized Residential Interiors"
        subtitle="Each project reflects a balance between beauty, functionality, and timeless appeal."
        projects={residentialProjects}
      />

      {/* 4️⃣ Info Section */}
     <InfoSection
  title="Your Life, Beautifully Designed"
  description="At SPAZIO, we craft homes that reflect your personality and lifestyle. Our expert designers blend aesthetics with functionality to create spaces that feel elegant, comfortable, and truly yours. From compact apartments to luxury villas, we transform every square foot into timeless living experiences — designed thoughtfully, executed flawlessly."
 
  buttonText="Contact Us"
  buttonLink="/contact"
  image={livingRoomImg}
  glowColor="bg-yellow-300"
/>

    </>
  );
};

export default Residential;
