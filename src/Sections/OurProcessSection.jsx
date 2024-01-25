import React from 'react'
import { Link } from 'react-router-dom'

import ProcessCard from '../components/ProcessCard'
import HomeSection from './HomeSection'
import { CiCoinInsert } from 'react-icons/ci'
function OurProcessSection() {
   
  return (
    <div className='w-full bg-darkest h-auto p-5 my-2'>
    
    <div className='w-full  rounded-2xl flex flex-row h-[30%]  mb-3'>
    <div className='w-full flex flex-col items-center justify-center '>
        <div className='rounded-full py-[5px] px-4 bg-dark w-auto rounded-bl-none my-2'><p className='text-white text-xs'>How we work</p></div>   
        <div className='my-2 w-[50%]'><h3 className='text-4xl text-white text-center font-bold'>Experience our simple design process</h3></div>
        <div className='my-4 w-[50%]'><p className='text-base text-grey text-center'>Trade Link is your partner in digital innovation. We fuse strategic thinking with standout design and development to deliver uniquely tailored solutions.</p></div>

    </div>
    </div>

   
    <div className='w-full flex flex-row items-center justify-center relative'>
    <ProcessCard 
    Icon={<CiCoinInsert className='text-grey text-2xl'/ >}
    title="1. Investing"
    text="We craft visually stunning, unforgettable experiences with responsive design at the forefront."
    />
    <ProcessCard 
    Icon={<CiCoinInsert className='text-grey text-2xl'/ >}
    title="2. Investing"
    text="We craft visually stunning, unforgettable experiences with responsive design at the forefront."
    />
    <ProcessCard 
    Icon={<CiCoinInsert className='text-grey text-2xl'/ >}
    title="3. Investing"
    text="We craft visually stunning, unforgettable experiences with responsive design at the forefront."
    />
    </div>

    </div>

   
  )
}

export default OurProcessSection