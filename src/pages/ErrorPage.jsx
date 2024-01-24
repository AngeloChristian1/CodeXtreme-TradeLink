// import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar';
import Footer from '../Sections/Footer';

function ErrorPage() {

  let navigate = useNavigate(); 

  function handleClick() {
    navigate(-1); 
  }

  return (
    <div>
    <Navbar />
    <div className='w-full h-full bigphone:h-[120%] pb-5 flex flex-col px-5 items-center justify-center'>
    <div className='h-[200px] w-full '></div>
    <h3 className='text-xl bigphone:text-3xl text-center my-2'> Oh no, we can't seem to find your Page</h3>
    <p className='my-2 m-[80%] mx-auto text-xs bigphone:text-sm text-center'>Looks like our search algorith may have been underfit</p>

    <Link to="/the-Artemis-Website-V2" ><button onClick={handleClick} className="flex space-x-3 p-2 px-3 rounded-full items-center self-center bg-blacky">
<p className="text-xs font-bold text-white">Go Back</p>
<IoIosArrowRoundForward className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full w-6 h-6 -rotate-45 self-center" />
</button></Link>
    </div>
    
    <Footer/>
    </div>
  )
}

export default ErrorPage