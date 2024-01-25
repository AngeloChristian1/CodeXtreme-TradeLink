import React from 'react'

function ProcessCard(props) {
  return (
    <div className='bg-dark rounded-2xl p-6 m-2 flex flex-col items-center justify-center space-y-4'>
    <div className='bg-darkest p-4 rounded-xl'>{props.Icon}</div>
    <div className='flex flex-col items-center justify-center space-y-2' >
    <h3 className='font-semibold text-white text-center'>{props.title}</h3>
    <p className='text-sm text-grey text-center '>{props.text}</p>
    </div>
    </div>
  )
}

export default ProcessCard