import React, { lazy, Suspense } from "react";

// ✅ Lazy load all sections
const About1 = lazy(() => import("./About1"));
const MeetTheFounder = lazy(() => import("./MeetTheFounder"));
const OurJourney = lazy(() => import("./OurJourney"));
const TeamBelief = lazy(() => import("./TeamBelief"));
const MeetOurTeam = lazy(() => import("./MeetOurTeam"));

const About = () => {
  return (
    <div>

      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <About1 />
      </Suspense>

      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <MeetTheFounder />
      </Suspense>

      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <OurJourney />
      </Suspense>

      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <TeamBelief />
      </Suspense>

      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <MeetOurTeam />
      </Suspense>

    </div>
  );
};

export default About;