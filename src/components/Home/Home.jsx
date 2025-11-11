import React from 'react'
import { SwipeCarousel } from './SwipeCarousel'
import Projectgrid from './Projectgrid'
import AboutSection from './AboutSection'
import InfoSection from '../InfoSection'
import officeImg from "../../assets/color.png";




const Home = () => {
  return (
    <div>
      <SwipeCarousel />
      <Projectgrid />
      <AboutSection />
     
    
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
   
    </div>
    
   
  )
}

export default Home