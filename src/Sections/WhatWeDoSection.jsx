import React from 'react'
import { Link } from 'react-router-dom'
import people from '../assets/images/people.webp'
import people3 from '../assets/images/people3.webp'
import ServiceCard from '../components/ServiceCard'
import HomeSection from './HomeSection'
import { CiCoinInsert } from 'react-icons/ci'
function WhatWeDoSection() {
   
  return (
    <div className='w-full bg-darkest h-auto p-5 my-5'>
    
    <div className='w-full  rounded-2xl flex flex-row h-[30%]  mb-3'>
    <div className='w-full flex flex-col items-start '>
    <div className='rounded-full py-[5px] px-4 bg-dark w-auto rounded-bl-none my-2'><p className='text-white text-xs'>What we do</p></div>

    <div className='flex flex-row'>
    <div className='my-2 w-[50%]'><h3 className='text-4xl text-white  font-bold'>Let us make your business a sucess</h3></div>
    <div className='my-4 w-[50%]'><p className='text-base text-grey'>Producer Connect is your partner in digital innovation. We fuse strategic thinking with standout design and development to deliver uniquely tailored solutions.</p></div>

    </div>

    </div>
    </div>

    <div className='flex flex-row h-[70%] mt-4 justify-between'>
    <div className='w-[45%] flex flex-col items-center justify-center relative'>
    <ServiceCard 
    Icon={<CiCoinInsert className='text-grey text-2xl'/ >}
    title="Investing"
    text="We craft visually stunning, unforgettable experiences with responsive design at the forefront."
    />
    <ServiceCard 
    Icon={<CiCoinInsert className='text-grey text-2xl'/ >}
    title="Investing"
    text="We craft visually stunning, unforgettable experiences with responsive design at the forefront."
    />
    <ServiceCard 
    Icon={<CiCoinInsert className='text-grey text-2xl'/ >}
    title="Investing"
    text="We craft visually stunning, unforgettable experiences with responsive design at the forefront."
    />
    </div>

    <div className='w-[50%] flex flex-row items-center justify-center relative'>
    <img src={people} className='w-[50%] h-[100%] rounded-2xl object-cover m-1'/>
    <div className='w-[50%] h-full flex flex-col'>
    <img src={people} className='w-[100%] m-1 h-[50%] rounded-2xl object-cover'/>

    <img src={people3} className='w-[100%] m-1 h-[50%] rounded-2xl object-cover  '/>
    
    </div>
    </div>
    </div>
 
  

    </div>
   
  )
}

export default WhatWeDoSection