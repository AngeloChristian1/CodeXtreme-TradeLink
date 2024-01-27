import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import person from '../assets/images/person.webp'
import { useZustandStore } from '../zustand_store/ZustandStore';
import { IoLogOut } from 'react-icons/io5';
import { IoLogOutOutline } from 'react-icons/io5';


function SideBar() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [logoutLoading, isLogoutLoading] = useState(false)
    const authToken = useZustandStore((state) => state.authToken);
    const authProfile = useZustandStore((state) => state.authProfile);
    const setAuthProfile = useZustandStore((state) => state.setAuthProfile);
    const setAuthToken = useZustandStore((state) => state.setAuthToken);

    const Token = localStorage.getItem('authToken') 
    const Profile = JSON.parse(localStorage.getItem("authProfile"))

    const HandleLogout = ()=>{
        localStorage.removeItem("authProfile");
        localStorage.removeItem("authToken");
        setAuthToken(null)
        setAuthProfile('')
        console.log('Logged out')
    }
  return (
    <div className="bg-dark text-gray-100 p-4 m-1 rounded-xl flex flex-col justify-between">
    <div className="mb-6 flex flex-col items-center justify-center ">
    <Link to={'/'} className='font-bold text-lg text-white'>Trade<span className='text-grey text-lg' > Link</span></Link>
    </div>

    <div className='flex flex-col space-y-5'>
    <Link 
    to=""
    className={`flex flex-row space-x-2 items-center justify-start rounded-full  p-2 ${activeTab === 'dashboard' && 'bg-grey'}`}
    onClick={() => setActiveTab('dashboard')}
  >
  <MdDashboard/>
  <p className={`text-xs text-white ${activeTab === 'dashboard' && 'text-darkest'}`}>Dashboard</p>
    
  </Link>
  <Link 
    to="products"
    className={`flex flex-row space-x-2 items-center justify-start rounded-full  p-2  ${activeTab === 'settings' && 'bg-grey'}`}
    onClick={() => setActiveTab('settings')}  
  >   
   <FaProductHunt/>
  <p className='text-xs text-white'>Products</p>
  </Link>
  <Link
    to="orders"
    className={`flex flex-row space-x-2 items-center justify-start rounded-full  p-2  ${activeTab === 'profile' && 'bg-grey'}`}
    onClick={() => setActiveTab('profile')}
  >
  <IoCartOutline/>
  <p className='text-xs text-white'>Orders</p>
  </Link>
  <Link
    to="profile"
    className={`flex flex-row space-x-2 items-center justify-start rounded-full  p-2  ${activeTab === 'products' && 'bg-grey'}`}
    onClick={() => setActiveTab('products')}
  >
  <RxAvatar/>
  <p className='text-xs text-white'>Profile</p>
  
  </Link>
    </div>

    <div className='flex flex-col items-center justify-center'>
    <img src={person} alt='profile' className='w-12 h-12 rounded-full border-darkest border-[2px] object-cover'/>
    <p className='text-grey text-[10px]'> {Profile?.email}</p>
    <button 
    onClick={()=> setTimeout(() => {
        HandleLogout();
      }, 1500)}
    className='flex flex-row space-x-2 items-center justify-center bg-darkest px-2 rounded-2xl my-3 group hover:bg-grey'>
   
   <div className='flex items-center justify-center '>
   <p className='text-xs text-white my-2 group-hover:text-dark group-hover:font-semibold mx-1'>Logout</p>
    <IoLogOutOutline className='group-hover:text-dark mx-1 group-hover:font-semibold'/>
   </div>
    
    </button>
    
    </div>
   
  </div>
   
  )
}

export default SideBar