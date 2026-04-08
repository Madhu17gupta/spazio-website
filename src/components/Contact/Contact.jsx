import React, { lazy, Suspense } from "react";
import InteriorSection from "../Page/InteriorSection";
import contactImage from "../../assets/2.webp";

// ✅ Lazy load heavy components
const ContactUs = lazy(() => import("./ContactUs"));
const MapSection = lazy(() => import("./MapSection"));

const Contact = () => {
  return (
    <>
      <InteriorSection
        title="Contact Us"
        description="We’re always happy to answer your questions and explore the possibilities of transforming your space into a masterpiece. Don’t hesitate to reach out!"
        image={contactImage}
      />

      {/* Contact Form */}
      <Suspense fallback={<div className="p-5 text-center">Loading contact...</div>}>
        <ContactUs />
      </Suspense>

      {/* Map (heavy) */}
      <Suspense fallback={<div className="p-5 text-center">Loading map...</div>}>
        <MapSection />
      </Suspense>
    </>
  );
};

export default Contact;