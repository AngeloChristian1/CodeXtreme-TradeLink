import React from "react";
import compPic from "../assets/images/homebg.webp";
import { LoremIpsum } from "lorem-ipsum";
import Navbar from "../components/NavBar";
import HomeSection from "../Sections/HomeSection";
import Footer from "../Sections/Footer";

function Company({ location, phone, email }) {
  return (
    
    <div className=" bg-darkest  p-5 h-screen">
     <Navbar/>
      <div className="container flex flex-row pt-20">
        <div>
          <img src={compPic} alt="Company Picture" className="w-full h-80 rounded-lg ml-10" />
        </div>
        <div className="ml-20">
          <p className="text-grey text-base max-w-[60ch] ml-20">
            CompanyName is a 5 years experience large scale logistics company
            based in Rwanda.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
        </div>
        <div className="ml-20">
          <h2 className="font-semibold text-blue-700 ml-20 max-w-[30ch]">
            Feel free to reach out to CompanyName using the below contacts
          </h2>
          <div className="flex flex-row text-grey ml-20">
            <ul className="mt-5 space-y-4">
              <li>Location:{location}</li>
              <li>Location:{phone}</li>
              <li>Location:{email}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Company;
