import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialCard from '../components/TestimonialCard'
import HomeSection from './HomeSection'
import { CiCoinInsert } from 'react-icons/ci'
import person from '../assets/images/person.webp'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

function TestimonialSection() {
   
  return (
    <div className='w-full bg-darkest h-auto p-5 my-2'>
    
    <div className='w-full  rounded-2xl flex flex-row h-[30%]  mb-3'>
    <div className='w-full flex flex-col items-center justify-center '>
        <div className='rounded-full py-[5px] px-4 bg-dark w-auto rounded-bl-none my-2'><p className='text-white text-xs'>Testimonials</p></div>   
        <div className='my-2 w-[50%]'><h3 className='text-4xl text-white text-center font-bold'>What they say about us</h3></div>
        <div className='my-4 w-[50%]'><p className='text-base text-grey text-center'>Discover first-hand accounts from our clients, who experienced the transformative power of our creative solutions.</p></div>

    </div>
    </div>

    <div className='w-full flex flex-row items-center justify-center relative'>
<div className='w-[50%] rounded-2xl bg-dark  p-5 flex flex-col justify-center items-center '>
<div className='my-2 w-[80%]'><h3 className='text-4xl text-white text-center font-bold'>Why companies trust us</h3></div>
<div className='my-4 w-[80%]'><p className='text-base text-grey text-center'>Discover first-hand accounts from our clients, who experienced the transformative power of our creative solutions.</p></div>

<div className='my-3 flex flex-col justify-center items-center '>
<h3 className='text-4xl text-white text-center font-bold'>10+</h3>
<p className='text-base text-grey text-center'>Companies</p>
</div>
<div className='my-3 flex flex-col justify-center items-center '>
<h3 className='text-4xl text-white text-center font-bold'>10+</h3>
<p className='text-base text-grey text-center'>Happy clients</p>
</div>

</div>

    <div className='w-[45%] flex flex-col items-center justify-center relative'>
    <TestimonialCard
    Icon={<CiCoinInsert className='text-grey text-2xl'/ >}
    Image= {person}
    name='John Kennedy'
    title="CEO, Publink"
    text="We craft visually stunning, unforgettable experiences with responsive design at the forefront."
    />
    <TestimonialCard
    Icon={<CiCoinInsert className='text-grey text-2xl'/ >}
    Image= {person}
    name='John Kennedy'
    title="CEO, Publink"
    text="We craft visually stunning, unforgettable experiences with responsive design at the forefront."
    />

    <div className='absolute bottom-1 right-1 p-1 bg-darkest rounded'>
    <MdKeyboardArrowUp className='text-xl bg-dark rounded text-grey '/>
    <MdKeyboardArrowDown className='text-xl bg-dark rounded text-grey mt-1'/>
    </div>
    </div>
   </div>


    </div>

   
  )
}

export default TestimonialSection