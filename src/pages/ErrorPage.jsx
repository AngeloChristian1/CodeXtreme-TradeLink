// import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar';
import Footer from '../Sections/Footer';
import { TbError404Off } from "react-icons/tb";


function ErrorPage() {

  let navigate = useNavigate(); 

  function handleClick() {
    navigate(-1); 
  }

  return (
    <div className='bg-darkest  p-5 h-full'>
    <Navbar />
    <div className='w-full h-full bigphone:h-[120%] pb-5 flex flex-col px-5 items-center justify-center'>
    <div className='h-[200px] w-full flex flex-col items-center justify-center'>
    <TbError404Off className='text-grey text-8xl'/>
    </div>
    <h3 className='text-xl bigphone:text-3xl text-center my-2 text-white'> Oh no, we can't seem to find your Page</h3>
    <p className='my-2 m-[80%] mx-auto text-xs bigphone:text-sm text-center text-grey'>Looks like our search algorith may have been underfit</p>

    <Link to="/" ><button onClick={handleClick} className="flex space-x-3 p-2 px-3 rounded-full items-center self-center bg-white">
<p className="text-xs font-bold text-darkest">Go Back</p>
<IoIosArrowRoundForward className="bg-grey text-darkest rounded-full w-6 h-6 -rotate-45 self-center" />
</button></Link>
    </div>
    
    <Footer/>
    </div>
  )
}

export default ErrorPage