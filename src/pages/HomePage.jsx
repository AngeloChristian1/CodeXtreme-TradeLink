import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import HomeSection from '../Sections/HomeSection';
import WhatWeDoSection from '../Sections/WhatWeDoSection';
import Footer from '../Sections/Footer';

function HomePage() {

    let name = localStorage.getItem('name')
  return (
    <div className="bg-darkest  p-5 h-full">
      <Navbar/>
      <HomeSection/>
      <WhatWeDoSection/>


  <Footer/>
    </div>
  );
}

export default HomePage;