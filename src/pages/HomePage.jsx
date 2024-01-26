import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/NavBar';
import HomeSection from '../Sections/HomeSection';
import WhatWeDoSection from '../Sections/WhatWeDoSection';
import Footer from '../Sections/Footer';
import OurProcessSection from '../Sections/OurProcessSection';
import TestimonialSection from '../Sections/TestimonialSection';
import CompanyCard from '../components/CompanyCard';
import axios from 'axios';


function HomePage() {
   

const [companyData, setCompanyData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchCompany = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://sp-gas-api.onrender.com/api/v1/product");
      setCompanyData(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products homepage:", error);
      setIsLoading(false);
    }
  };
  fetchCompany();  // Call the fetchCompany function
}, []);


  

    
  return (
    <div className="bg-darkest  p-5 h-full">
      <Navbar/>
      <HomeSection/>
      <WhatWeDoSection/>
      <OurProcessSection/>
      <TestimonialSection/>
      {companyData.map((company) => (
  <CompanyCard
    key={company.id}
    name={company.name}
    descript={company.descript}
    category={company.category}
  />
))}

      
      <div className='flex flex-row bg-dark rounded-2xl p-10 justify-between' >
      <h3 className='text-white text-4xl w-[40%] font-bold'>Let's Build the future together .</h3>
      <Link to={''} className='px-5 py-3 rounded-full bg-white text-darkest self-center text-bold'>Let's build</Link>
      </div>

  <Footer/>
    </div>
  );
}

export default HomePage;