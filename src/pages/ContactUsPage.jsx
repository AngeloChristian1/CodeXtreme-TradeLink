import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import HomeSection from '../Sections/HomeSection';
import WhatWeDoSection from '../Sections/WhatWeDoSection';
import Footer from '../Sections/Footer';
import OurProcessSection from '../Sections/OurProcessSection';
import TestimonialSection from '../Sections/TestimonialSection';

function ContactUsPage() {

  return (
    <div className="bg-darkest  p-5 h-full">
      <Navbar activeLink='Contact'/>
      <HomeSection/>
      <WhatWeDoSection/>
      <OurProcessSection/>
      <TestimonialSection/>

      <div className='flex flex-row bg-dark rounded-2xl p-10 justify-between' >
      <h3 className='text-white text-4xl w-[40%] font-bold'>Let's Build the future together .</h3>

      <Link to={''} className='px-5 py-3 rounded-full bg-white text-darkest self-center text-bold'>Let's build</Link>
      </div>

  <Footer/>
    </div>
  );
}

export default ContactUsPage;