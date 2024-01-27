import React, {useState} from 'react'
// import Logo from "../../assets/images/logo-black.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCross } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"
import person from '../assets/images/person.webp'

function Navbar(props) {
    const [hedersShown, setIsHeaderShown] = useState(false)
    // const [active, setActive] = useState(props.activeLink)
    const [active, setActive] = useState(props.activeLink)

    const Token = localStorage.getItem('authToken') 
    const Profile = JSON.parse(localStorage.getItem("authProfile"))
    
   return (
    <div className=' bg-transparent z-10 mb-5'>
    <div className='w-[94%] mx-auto top-5 flex flex-row justify-between items-center' style={{zIndex:props.zIndex}}>
    <div className=' items-center flex flex-row justify-center'>
    <h3 className='font-bold text-lg text-white'>Producer <span className='text-grey text-lg' >  Connect</span></h3>
    </div>
    <div className='navbar hidden tablet:flex space-x-6 justify-center  w-[60%]'>
    <Link to="/"><p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active === "Home" ? 'active' : ""} style={{display:"block"}}>Home</p></Link>
    <Link to="/services"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Services"?'active':""}> Services</p></Link>
    <Link to="/products"><p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Products"?'active':""}> Products</p></Link>
    <Link to="/contact"><p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Contact"?'active':""}> Contact</p></Link>
    <Link to="/about"><p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="About"?'active':""}> About Us</p></Link>
    </div>
   {Profile? <div className='flex flex-row'>
    <Link to="/signin" smooth><button className='hidden tablet:flex text-white text-xs p-2 px-4  rounded-full text-center items-center justify-center'>Login</button></Link>
    <Link to="/signup" smooth><button className='hidden tablet:flex text-dark text-bold text-xs p-2 px-4 bg-white rounded-full text-center items-center justify-center'>Register</button></Link>
    
    </div>:
    <div className='flex  items-center justify-between space-x-4'>
    <Link to={'/user'} className='flex flex-col items-center justify-center hover:scale-105'>
    <img src={ person} className='w-8 h-8 rounded-full object-cover p-[2px] bg-grey'/>
    <p className='text-grey text-[10px]'> {Profile?.email}</p>
    </Link>

    <Link to='/cart' className='bg-grey p-[6px] rounded-full group hover:bg-white hover:scale-105' >
    <BsCart className='text-lg text-darker group-hover:text-darker'/>
    </Link>
    </div>
}
    <button onClick={()=>setIsHeaderShown(!hedersShown)} className='tablet:hidden'>{!hedersShown? <RxHamburgerMenu className='text-3xl '/>:<RxCross2 className='text-3xl '/>}</button>
    </div>
    {hedersShown && <div className=' bg-white border border-gray-300 z-10 absolute w-full h-[70%] py-10 space-y-4 items-center flex  flex-col z-30'>
    <Link to="/"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Home"?'active':""}> Home</p></Link>
    <Link to="/services"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Service"?'active':""}> Services</p></Link>
    <Link to="/products"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Product"?'active':""}> Products</p></Link>
    <Link to="/contact"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Contact"?'active':""}> Contact</p></Link>
    <Link to="/about"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="About"?'active':""}> About Us</p></Link>
    <HashLink to="#contact" smooth><button className='text-white text-xs p-2 px-4 bg-blacky rounded-full'>Let's Talk </button></HashLink>

    </div>}
    </div>
   
  )
}

export default Navbar