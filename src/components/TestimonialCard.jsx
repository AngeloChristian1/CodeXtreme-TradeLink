import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


function TestimonialCard(props) {
  return (
    <div className='bg-dark rounded-2xl p-6 m-2 flex flex-col items-center justify-center space-y-4 relative'>
    <div className='absolute left-5 top-5 -rotate-45'><FaQuoteLeft className='text-7xl text-darker'/></div>
    
    <div className='flex flex-col items-center justify-center space-y-2 z-10' >

    <p className='text-sm text-grey text-center '>{props.text}</p>
    <div className='bg-darkest p-[2px] rounded-full'><img src={props.Image} alt={props.Image}className='w-6 h-6 rounded-full object-cover'/></div>
    <p className='text-xs font-semibold text-white '>{props.name}</p>
    <p className='text-sm font-semibold text-grey '>{props.title}</p>
    </div>
    </div>
  )
}

export default TestimonialCard