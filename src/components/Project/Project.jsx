import React, { lazy, Suspense } from "react";

// 🔥 Lazy load all heavy sections
const OurProjects = lazy(() => import("./OurProjects"));
const GallerySection = lazy(() => import("./GallerySection"));
const InteriorGallery = lazy(() => import("./InteriorGallery"));

const Project = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-lg">
          Loading...
        </div>
      }
    >
      <OurProjects />
      <GallerySection />
      <InteriorGallery />
    </Suspense>
  );
};

export default Project;