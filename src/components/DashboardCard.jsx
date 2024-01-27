import React from 'react'

function DashboardCard(props) {
  return (
    <div className={`bg-white rounded-2xl p-5 border-t-8 flex flex-col items-center justify-center ${props.size =="large"? 'w-48 h-48': props.size == 'medium'? 'w-32 h-32': 'w-24 h-24'}`}style={{borderColor:props.borderColor}}>
    <h3 className={`text-dark font-semibold  ${props.size =="large"? 'text-lg': props.size == 'medium'? 'text-base': 'text-xs'}`}>{props.heading}</h3>
    <div className='flex flex-row space-x-3 items-center justify-center'>
    <div>{props.Icon}</div>
    <p className={`flex text-center   m-4 ${props.size =="large"? 'text-5xl': props.size == 'medium'? 'text-3xl': 'text-xl'}`}>{props.count}</p>
    
    </div>
    </div>
  )
}

export default DashboardCard