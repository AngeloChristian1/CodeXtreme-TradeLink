import React from 'react'
import { CiCoinInsert } from "react-icons/ci";

function ServiceCard(props) {
  return (
    <div className='bg-dark rounded-2xl p-5 m-2 flex flex-row items-start justify-between space-x-4'>
    <div className='bg-darkest p-2 rounded-lg'>{props.Icon}</div>
    <div className='flex flex-col space-y-1'>
    <h3 className='font-semibold text-white'>{props.title}</h3>
    <p className='text-sm text-grey'>{props.text}</p>
    </div>
    </div>
  )
}

export default ServiceCard