import React, { lazy, Suspense } from "react";

// ✅ Lazy load heavy components
const SwipeCarousel = lazy(() => import("./SwipeCarousel"));
const Projectgrid = lazy(() => import("./Projectgrid"));
const AboutSection = lazy(() => import("./AboutSection"));
const InfoSection = lazy(() => import("../InfoSection"));

import officeImg from "../../assets/color.webp";

const Home = () => {
  return (
    <div>

      {/* ✅ Carousel (load first) */}
      <Suspense fallback={<div className="p-5 text-center">Loading slider...</div>}>
        <SwipeCarousel />
      </Suspense>

      {/* ✅ Load below sections lazily */}
      <Suspense fallback={<div className="p-5 text-center">Loading projects...</div>}>
        <Projectgrid />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading about...</div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading info...</div>}>
        <InfoSection
          title="Designing Spaces, Crafting Experiences"
          description="At SPAZIO, we don't just decorate spaces — we design experiences. With a deep love for aesthetics and functionality, our team crafts interiors that feel personal, elegant, and timeless."
          stats={[
            { value: "500+", label: "Designed Projects" },
            { value: "200+", label: "On-site Executions" },
            { value: "20+", label: "Years of Experience" },
          ]}
          buttonText="Contact Us"
          buttonLink="/contact"
          image={officeImg}
          glowColor="bg-blue-400"
        />
      </Suspense>

    </div>
  );
};

export default Home;