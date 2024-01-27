import React, { useState } from 'react'
import { orderData } from '../data/OrderData'
import { Link } from 'react-router-dom'

function OrdersPage() {


  return (
    <div>

    <div className='flex flex-row '>
    <div className="m-2  w-[29%] rounded-2xl p-2 border-[1px] border-green-200 flex flex-col items-center " style={{elevation:0}}>
    <p  className="text-xl text-white">Completed</p>
    <p  className="text-xl  text-green-500">4</p>
    </div>
    <div className="m-2  w-[28%] rounded-2xl p-2 border-[1px] border-orange-200 flex flex-col items-center " style={{elevation:0}}>
    <p  className="text-xl text-white">New</p>
    <p  className="text-xl  text-yellow-500">5</p>
    </div>
    <div className="m-2  w-[28%] rounded-2xl p-2 border-[1px] border-red-200 flex flex-col items-center " style={{elevation:0}}>
    <p  className="text-xl text-white">Canceled</p>
    <p   className="text-xl  text-red-500">44</p>
    </div>
    </div>
   
    <div>
    <h3 className='my-3 text-white'>New Order</h3>

    <div className='bg-dark p-2 rounded-xl m-1 my-2 w-full'>
    <table className="table-auto w-full  border-none my-3 border-spacing-y-4 border-separate">
    <thead>
      <tr className='bg-dark'>
        <th className="px-4 py-2 text-xs border-none text-start text-white p-2">Name</th>
        <th className="px-4 py-2 text-xs border-none text-start text-white p-2">Telephone</th>
        <th className="px-4 py-2 text-xs border-none text-start text-white p-2">Date Ordered</th>
        <th className="px-4 py-2 text-xs border-none text-start text-white p-2 ">Item</th>
        <th className="px-4 py-2 text-xs border-none text-start text-white p-2 ">Item quantity</th>
        <th className="px-4 py-2 text-xs border-none text-start text-white p-2 ">Status</th>
        <th className="px-4 py-2 text-xs border-none text-start text-white p-2 "></th>
      </tr>
    </thead>
    <tbody>
      {orderData.map((item) => (
        <tr key={item.id}>
          <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8 text-grey">{item.name}</td>
          <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8 text-grey">{item.phoneNumber}</td>
          <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8 text-grey">{item.dateOrdered}</td>

          <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8  text-grey">{item.itemName}</td>
          <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8  text-grey">{item.itemsOrdered}</td>
          <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8  text-grey">{item.status}</td>
          <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8  text-green-500"><Link to={`${item.id}`} className=" text-xs  text-green-500">View</Link></td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
    </div>
    </div>
  )
}

export default OrdersPage