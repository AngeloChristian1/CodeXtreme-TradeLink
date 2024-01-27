import React, { useState } from 'react'
import { orderData } from '../data/OrderData'
import { useParams } from 'react-router-dom'

function SingleOrder() {
    const { id } = useParams();

    console.log('id',id)
    let order = orderData.filter((item)=> item.id == id)
    
    order = order[0]


  return (
    <div>

    <div className='flex flex-col items-center justify-center'>
    <h3 className="px-4 py-2 text-center  border-none  text-white p-2 bg-green-500 rounded-full self-center max-w-36">{order.status}</h3>
    <p className="text-xs text-white my-2">Date ordered: {order.dateOrdered}</p>
    </div>
   
    <div>

    <div className='p-5 rounded-2xl bg-darkest w-[50%] my-3'>
    
    <div className="flex flex-row items-center my-3">
    <p className="text-base text-grey">Name:</p>
    <p className="text-base text-white ml-2">{order.name}</p>
  </div>
    <div className="flex flex-row items-center my-3">
    <p className="text-base text-grey">Phone:</p>
    <p className="text-base text-white ml-2">{order.phoneNumber}</p>
  </div>
    <div className="flex flex-row items-center my-3">
    <p className="text-base text-grey">Location:</p>
    <p className="text-base text-white ml-2">{order.location}</p>
  </div>
    <div className="flex flex-row items-center my-3">
    <p className="text-base text-grey">Street:</p>
    <p className="text-base text-white ml-2">{order.street}</p>
  </div>
    <div className="flex flex-row items-center my-3">
    <p className="text-base text-grey">Email:</p>
    <p className="text-base text-white ml-2">{order.email}</p>
  </div>
    <div className="flex flex-row items-center my-3">
    <p className="text-base text-grey">Items Bought:</p>
    <p className="text-base text-white ml-2">{order.itemName}</p>
  </div>
    <div className="flex flex-row items-center my-3">
    <p className="text-base text-grey">Bought Quantity:</p>
    <p className="text-base text-white ml-2">{order.itemsOrdered}</p>
  </div>
    </div>


    </div>
    </div>
  )
}

export default SingleOrder