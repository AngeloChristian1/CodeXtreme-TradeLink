import React from 'react'
import DashboardCard from '../components/DashboardCard'
import { FaProductHunt } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
import BarChart from '../components/BarChart';
import ChartOverview from '../components/ChartOverview';


function DashBoard() {
  return (
    <div>

    <div className='flex flex-row space-x-6 items-center justify-center'>
        <DashboardCard 
        size='large'
        borderColor='green'
        heading="Total Orders"
        count="50"
        Icon={<FaProductHunt className='text-green-500 text-xl'/>}
        />
    <DashboardCard
    size='large'
    borderColor='blue'
    heading="Total Products"
    count="50"
    Icon={<FaProductHunt className='text-green-500 text-xl'/>}
    />
    <DashboardCard 
    size='large'
    borderColor='red'
    heading="Total Orders"
    count="50"
    Icon={< FcCancel className='text-green-500 text-xl'/>}
    />
    </div>

    <div className='w-full h-[50vh] flex flex-row my-3 justify-between items-center'>
    <div className='w-[45%] h-full '>
    <ChartOverview/>  
    </div>
    <div className='w-[45%] h-full '>
    <BarChart/>  
    </div>
    </div>
 
  
    </div>
  )
}

export default DashBoard