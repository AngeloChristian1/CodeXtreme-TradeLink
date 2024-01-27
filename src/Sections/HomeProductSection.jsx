import React from 'react'
import { Link } from 'react-router-dom'
import people from '../assets/images/people.webp'
import people3 from '../assets/images/people3.webp'

function HomeProductSection() {
  return (
    <div className='w-full bg-darkest h-auto p-5 '>
    <div className='w-full bg-dark h-full rounded-2xl flex flex-row p-10'>
    <div className='w-[50%] flex flex-col items-start'>
    <div className='rounded-full py-[5px] px-4 bg-darkest w-auto rounded-bl-none my-2'><p className='text-white text-xs'>Welcome</p></div>

    <div className='my-2'><h3 className='text-5xl text-white  font-bold'>Let us make your business a sucess</h3></div>
    <div className='my-4'><p className='text-lg text-grey'>Trade Link is your partner in digital innovation. We fuse strategic thinking with standout design and development to deliver uniquely tailored solutions.</p></div>
    
    <div className='my-2 flex flex-row space-x-2'>
    <Link to={''} className='rounded-full py-3 px-5 font-semibold bg-white text-darkest'>Let's Get Started</Link>
    <Link to={''} className='rounded-full py-3 px-5 font-semibold bg-transparent text-white hover:text-dark hover:bg-white'>Let's Get Started</Link>
    </div>
    </div>
    <div className='w-[50%] flex flex-col items-center justify-center relative'>
    <img src={people} className='w-[80%] h-[80%] rounded-2xl object-cover'/>
    <img src={people3} className='w-[40%] h-[40%] rounded-2xl object-cover absolute bottom-0 right-0 border-dark border-[5px] '/>
    </div>
    </div>
    </div>
   
  )
}

export default HomeProductSection