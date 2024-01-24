import React, {useState} from 'react'
// import Logo from "../../assets/images/logo-black.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCross } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"

function Navbar(props) {
    const [hedersShown, setIsHeaderShown] = useState(false)
    const [active, setActive] = useState(props.activeLink)
   return (
    <div className=' bg-transparent z-10'>
    <div className='w-[85%]  mx-auto top-5 flex flex-row justify-between items-center' style={{zIndex:props.zIndex}}>
    <div className='w-20 h-20'>
    
    </div>
    <div className='navbar hidden tablet:flex space-x-6 justify-center  w-[60%]'>
    <Link to="/"><p className='text-sm cursor-pointer' id={active === "Home" ? 'active' : ""} style={{display:"block"}}>Home</p></Link>
    <Link to="/services"> <p className='text-sm cursor-pointer' id={active ==="Services"?'active':""}> Services</p></Link>
    <Link to="/products"><p className='text-sm cursor-pointer' id={active ==="Products"?'active':""}> Products</p></Link>
    <Link to="/media"><p className='text-sm cursor-pointer' id={active ==="Media"?'active':""}> Media</p></Link>
    <Link to="/contact"><p className='text-sm cursor-pointer' id={active ==="Contact"?'active':""}> Contact</p></Link>
    <Link to="/about"><p className='text-sm cursor-pointer' id={active ==="About"?'active':""}> About Us</p></Link>
    </div>
    <div className='flex flex-row'>
    <Link to="/signin" smooth><button className='hidden tablet:flex text-indigo-600 text-xs p-2 px-4  rounded-full text-center items-center justify-center'>Login</button></Link>
    <Link to="/signup" smooth><button className='hidden tablet:flex text-white text-xs p-2 px-4 bg-indigo-600 rounded-full text-center items-center justify-center'>Register</button></Link>
    
    </div>
    <button onClick={()=>setIsHeaderShown(!hedersShown)} className='tablet:hidden'>{!hedersShown? <RxHamburgerMenu className='text-3xl '/>:<RxCross2 className='text-3xl '/>}</button>
    </div>
    {hedersShown && <div className=' bg-white border border-gray-300 z-10 absolute w-full h-[70%] py-10 space-y-4 items-center flex  flex-col z-30'>
    <Link to="/"> <p className='text-sm cursor-pointer' id={active ==="Home"?'active':""}> Home</p></Link>
    <Link to="/services"> <p className='text-sm cursor-pointer' id={active ==="Service"?'active':""}> Services</p></Link>
    <Link to="/products"> <p className='text-sm cursor-pointer' id={active ==="Product"?'active':""}> Products</p></Link>
    <Link to="/media"> <p className='text-sm cursor-pointer' id={active ==="Media"?'active':""}> Media</p></Link>
    <Link to="/contact"> <p className='text-sm cursor-pointer' id={active ==="Contact"?'active':""}> Contact</p></Link>
    <Link to="/about"> <p className='text-sm cursor-pointer' id={active ==="About"?'active':""}> About Us</p></Link>
    <HashLink to="#contact" smooth><button className='text-white text-xs p-2 px-4 bg-blacky rounded-full'>Let's Talk </button></HashLink>

    </div>}
    </div>
   
  )
}

export default Navbar