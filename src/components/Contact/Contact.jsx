import React from 'react'
import InteriorSection from '../Page/InteriorSection'
import contactImage from "../../assets/2.webp";
import ContactUs from './ContactUs';

import MapSection from './MapSection';

const COntact = () => {
  return (
   <>
    
        <InteriorSection
        title="Contact Us"
        description="We’re always happy to answer your questions and explore the possibilities of transforming your space into a masterpiece. Don’t hesitate to reach out!"
        image={contactImage}
      />
      <ContactUs />
     <MapSection />
      </>
   
  )
}

export default COntact