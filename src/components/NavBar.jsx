import React, {useState} from 'react'
// import Logo from "../../assets/images/logo-black.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCross } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';


function Navbar(props) {
    const [hedersShown, setIsHeaderShown] = useState(false)
    // const [active, setActive] = useState(props.activeLink)
    const [active, setActive] = useState('Home')
   return (
    <div className=' bg-transparent z-10 mb-5'>
    <div className='w-[94%] mx-auto top-5 flex flex-row justify-between items-center' style={{zIndex:props.zIndex}}>
    <div className=' items-center flex flex-row justify-center'>
    <h3 className='font-bold text-lg text-white'>Trade<span className='text-grey text-lg' > Link</span></h3>
    </div>
    <div className='navbar hidden tablet:flex space-x-6 justify-center  w-[60%]'>
    <Link to="/"><p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active === "Home" ? 'active' : ""} style={{display:"block"}}>Home</p></Link>
    <Link to="/services"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Services"?'active':""}> Services</p></Link>
    <Link to="/products"><p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Products"?'active':""}> Products</p></Link>
    <Link to="/contact"><p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Contact"?'active':""}> Contact</p></Link>
    <Link to="/about"><p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="About"?'active':""}> About Us</p></Link>
    </div>
    <div className='flex flex-row'>
    <Link to="/signin"><button className='hidden tablet:flex text-white text-xs p-2 px-4  rounded-full text-center items-center justify-center'>Login</button></Link>
    <Link to="/signup"><button className='hidden tablet:flex text-dark text-bold text-xs p-2 px-4 bg-white rounded-full text-center items-center justify-center'>Register</button></Link>
    
    </div>
    <button onClick={()=>setIsHeaderShown(!hedersShown)} className='tablet:hidden'>{!hedersShown? <RxHamburgerMenu className='text-3xl '/>:<RxCross2 className='text-3xl '/>}</button>
    </div>
    {hedersShown && <div className=' bg-white border border-gray-300 z-10 absolute w-full h-[70%] py-10 space-y-4 items-center flex  flex-col z-30'>
    <Link to="/"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Home"?'active':""}> Home</p></Link>
    <Link to="/services"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Service"?'active':""}> Services</p></Link>
    <Link to="/products"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Product"?'active':""}> Products</p></Link>
    <Link to="/contact"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="Contact"?'active':""}> Contact</p></Link>
    <Link to="/about"> <p className='text-sm cursor-pointer  rounded-full py-[3px] px-3 text-white' id={active ==="About"?'active':""}> About Us</p></Link>
    <Link to="/contact"><button className='text-white text-xs p-2 px-4 bg-blacky rounded-full'>Let's Talk </button></Link>

    </div>}
    </div>
   
  )
}

export default Navbar