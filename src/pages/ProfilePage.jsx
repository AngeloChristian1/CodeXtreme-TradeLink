import React, { useState } from "react";
import person from "../assets/images/person.webp";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function ProfilePage() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
  return (
    <div className="flex flex-row justify-between" >
    <div className="flex flex-col w-[45%]">
    <div className="flex flex-row space-x-5 my-2 mb-4">
    <img
      src={person}
      alt="person"
      className="rounded-2xl w-36 h-36 object-cover"
    />
    <div className="flex flex-col ">
      <div className="flex flex-row items-center my-2">
        <p className="text-xs text-grey">Name:</p>
        <p className="text-xs text-white ml-2">Jonathan Bana</p>
      </div>
      <div className="flex flex-row items-center my-2">
        <p className="text-xs text-grey">Email:</p>
        <p className="text-xs text-white ml-2">banajohn@gmail.com</p>
      </div>
      <div className="flex flex-row items-center my-2">
        <p className="text-xs text-grey">Telephone:</p>
        <p className="text-xs text-white ml-2">+2509876634</p>
      </div>
      <div>
      <button className="text-xs bg-green-500 p-2 px-3 rounded-xl my-2 self-end">Edit Profile</button>
      </div>
    </div>
  </div>

  <div className="my-3 p-5 bg-darkest rounded-2xl">
  <div className="flex flex-row items-center my-2">
  <p className="text-xs text-grey">Company Name</p>
  <p className=" text-white ml-2 text-base">CIMERWA</p>
</div>
  <div className="flex flex-col items-start my-2">
  <p className="text-xs text-grey my-2">Description</p>
  <p className=" text-white ml-2 text-xs">Cimerwa Cement Limited (CCL) 
  is a manufacturer of cement in Rwanda with capacity of approximately 600,000 tones per year.
   The main factory of the company is located in Muganza Sector, in the town of Bugarama, 
   in Rusizi District, in the Western Province of Rwanda.This location is approximately 33.5
    kilometres (20.8 mi), by road, south-east of the city of Cyangugu, the largest urban center in Rusizi District, 
    and the location of the district headquarters.The main factory of the company is located in Muganza Sector.</p>
</div>
  </div>
    </div>
    
     <div className="flex flex-col w-[45%]  h-auto items-center justify-center">
     <div className="h-auto p-5  w-full bg-darkest rounded-2xl">
  <p className="text-xs text-white text-center my-4">Change Password</p>

  <p className="text-xs text-white text-start my-1 ">Old Password</p>

     <div 
     className="flex flex-row items-center  justify-between "
     >
     
     <input
     type={!showPassword? "password":"text"}
     name="password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     placeholder="Password"
     onBlur={''}
     className="rounded-2xl shadow-sm px-4 bg-dark text-white py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
   />

    
     </div>
     <div className="flex flex-row justify-between items-center" >
     <p className="text-xs text-red-600">{passwordError}</p>
     
     <div>{
       !showPassword?
       <div className="flex flex-row space-x-3 my-1 cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}}>
       <FaRegEye  className="text-grey "/>
       <p className="text-grey text-xs">Show Password</p></div>

       :
       <div className="flex flex-row space-x-3 my-1 cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}} >
       <FaRegEyeSlash className="text-grey "/>
       <p className="text-grey text-xs">Hide Password</p></div>
     }
       </div>
     </div>
     <p className="text-xs text-white text-start my-1 ">New Password</p>

     <div 
     className="flex flex-row items-center  justify-between "
     >
     
     <input
     type={!showPassword? "password":"text"}
     name="password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     placeholder="Password"
     onBlur={''}
     className="rounded-2xl shadow-sm px-4 bg-dark text-white py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
   />

    
     </div>
     <button
     type="submit"
     className="rounded-2xl font-bold shadow-sm px-4 bg-white text-darkest  py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm my-3 mt-7"
   >
    {isLoading?"Loading..." :'Change'}
   </button>
     </div>

     
  
     </div>

    </div>
  );
}

export default ProfilePage;
