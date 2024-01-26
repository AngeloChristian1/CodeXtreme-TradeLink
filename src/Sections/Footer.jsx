import React from "react";
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const date= new Date()
let year = date.getFullYear()
function Footer() {
  return (
    <div className='bg-dark rounded-xl mt-10 w-full p-5 px-10 flex flex-row flex-wrap justify-between flex-1'>
  
      <div className='items-start justify-center flex flex-col w-[90%] mb-5 tablet:mb-0 tablet:w-[30%] space-y-2'>
    
    <p className='text-sm text-gray-400 text-start w-[70%]'>Building Your AI Ideas Into Reality</p>
    <p className='text-sm text-gray-400'>&copy; Copyright {year}</p>
    </div>
    <div className='items-start justify-center flex flex-col w-[40%] bigphone:w-[15%] space-y-2 mb-5 phone:mb-0'>
   <p className='text-gray-200 font-semibold text-sm'>Main</p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/">Home</Link></p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Services</Link></p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Products</Link></p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Media</Link></p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Contact</Link></p>
    </div>
    <div className='items-start justify-center flex flex-col w-[40%] bigphone:w-[15%] space-y-2 mb-5 phone:mb-0'>
    <p className='text-gray-200 font-semibold text-sm'>Information</p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">FAQ</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">About Us</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Resources</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Terms</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Privacy Policy</Link></p>
     </div>

    <div className='items-start justify-center flex flex-col w-[80%] bigphone:w-[20%] mt-4 bigphone:mt-1 space-y-2 mb-5 phone:mb-0'>
   
<div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Email:</p><p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to={"mailto:team@theartemisai.com"}>trade@gmail.com</Link></p></div>
<div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Phone:</p><p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="tel:+250 798 971 331"> +250 7432 971 571</Link></p></div>

<div className='flex flex-col mt-3 space-y-1'>

<p className='text-sm text-gray-400 text-start'>Kigali, Rwanda</p>
</div>
<div className='flex flex-row space-x-2'>
<Link to="" className="bg-darkest p-2 rounded-full"><FaLinkedinIn className='text-gray-200'/></Link>
<Link to="" className="bg-darkest p-2 rounded-full"><FaFacebookF className='text-gray-200'/></Link>
</div> 
    </div>

    
    </div>
  )
}

export default Footer