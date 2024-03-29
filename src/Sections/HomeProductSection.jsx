import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import people from '../assets/images/people.webp'
import people3 from '../assets/images/people3.webp'
import ProcessCard from '../components/ProcessCard'
import { CiCoinInsert } from 'react-icons/ci'
import axios from 'axios'
import ProductCard from '../components/ProductCard '

function HomeProductSection() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
      const [activeTab, setActiveTab] = useState('dashboard');
    
      const fetchProducts = async () => {
    
        axios({
          method: "GET",
          url: `https://trade-center.onrender.com/api/v1/products`,
        })
          .then((response) => {
            console.log("products", response?.data?.data?.products)
            setProducts(response?.data?.data.products);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log("error fetching products homepage:",error);
    });
    };
    
    console.log("products hook", products)
    useEffect(()=>{
        fetchProducts()
    },[])

    let cart = JSON.parse(localStorage.getItem('cart'))

    console.log("Cart in main", cart)
    return (
        <div className='w-full bg-darkest h-auto p-5 my-2'>
        
        <div className='w-full   rounded-2xl flex flex-row h-[30%]  mb-3'>
        <div className='w-full flex flex-col items-center justify-center '>
            <div className='rounded-full py-[5px] px-4 bg-dark w-auto rounded-bl-none my-2'><p className='text-white text-xs'> Products</p></div>   
            <div className='my-2 w-[50%]'><h3 className='text-4xl text-white text-center font-bold'>Amazing products from our partners</h3></div>
    
        </div>
        </div>
    
       {isLoading && 
        <div className='w-full flex flex-row items-center justify-start relative flex-wrap'>
        <div className='bg-grey h-48 rounded-2xl  basis-[350px] m-2 flex flex-col items-center justify-center space-y-4 p-2'><p className='text-xs text-dark'>Loading...</p></div>
        <div className='bg-grey h-48 rounded-2xl  basis-[350px] m-2 flex flex-col items-center justify-center space-y-4 p-2'><p className='text-xs text-dark'>Loading...</p></div>
        <div className='bg-grey h-48 rounded-2xl  basis-[350px] m-2 flex flex-col items-center justify-center space-y-4 p-2'><p className='text-xs text-dark'>Loading...</p></div>
        </div>
        }
     
        <div className='w-full flex flex-row items-center justify-start relative flex-wrap'>

        {
            products.map((product,index)=>(
                <ProductCard key={index} product={product}/>
            ))
        }

        </div>
    
        </div>
    
       
      )
}

export default HomeProductSection