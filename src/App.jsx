import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import ScrollToTop from "./components/ScrollToTop"; // ✅ correct import

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Residential = lazy(() => import("./components/Page/Residential"));
const Commercial = lazy(() => import("./components/Page/Commercial"));
const Industrial = lazy(() => import("./components/Page/Industrial"));
const Turnkey = lazy(() => import("./components/Page/TurnkeyDesignService"));
const Project = lazy(() => import("./components/Project/Project"));
const Service = lazy(() => import("./components/Services/Service"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const DesignHero = lazy(() => import("./components/DesignHero"));

function App() {
  return (
    <Router basename="/spazio-website">

      <ScrollToTop /> {/* 🔥 CORRECT PLACE */}

      <Navbar />
      <Whatsapp />

      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>

        <div className="pt-[46px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/industrial" element={<Industrial />} />
            <Route path="/turnkey" element={<Turnkey />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <DesignHero />
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;