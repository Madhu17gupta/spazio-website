import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Residential from "./components/Page/Residential";
import Commercial from "./components/Page/Commercial";
import Industrial from "./components/Page/Industrial";
import Turnkey from "./components/Page/TurnkeyDesignService";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Home from "./components/Home/Home";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import Footer from "./components/Footer/Footer";
import DesignHero from "./components/DesignHero";
import Cursor from "./components/Cursor/Cursor";
import Service from "./components/Services/Service";


function App() {
  return (
    <Router>
      <Navbar />
      <Cursor />

      
      <Whatsapp />
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
      <Footer />
    </Router>
  );
}

export default App;
