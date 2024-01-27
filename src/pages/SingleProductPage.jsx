import React, { useEffect, useState } from 'react'
import { orderData } from '../data/OrderData'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function SingleProductPage() {
    const { id } = useParams();

    console.log('id',id)


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
    
    
    useEffect(()=>{
        fetchProducts()
    },[])


    let product = products.filter((item)=> item._id == id)
    
    product = product[0]

    console.log("single products", product)
  return (
    <div>

    <div className='flex flex-col items-center justify-center'>
    <h3 className="px-4 py-2 text-center  border-none  text-white p-2  rounded-full self-center max-w-36">Single product</h3>
    <p className="text-xs text-white my-2">Last Updated: 26/Jan/2024</p>
    </div>
   
    <div>

    <div className='p-5 rounded-2xl bg-darkest w-[70%] my-3'>
    
    <div className="flex flex-col items-start my-4">
    <p className="text-xs text-grey">Product Id:</p>
    <p className="text-xs text-white ml-2">{product?._id}</p>
  </div>
    <div className="flex flex-col items-start my-4">
    <p className="text-xs text-grey">Name:</p>
    <p className="text-xs text-white ml-2">{product?.name}</p>
  </div>
    <div className="flex flex-col items-start my-4">
    <p className="text-xs text-grey">Desrciption:</p>
    <p className="text-xs text-white ml-2">{product?.description}</p>
  </div>
    <div className="flex flex-col items-start my-4">
    <p className="text-xs text-grey">Inventory:</p>
    <p className="text-xs text-white ml-2">{product?.inventory}</p>
  </div>
    <div className="flex flex-col items-start my-4">
    <p className="text-xs text-grey">Company:</p>
    <p className="text-xs text-white ml-2">{product?.companyt}</p>
  </div>

    </div>


    </div>
    </div>
  )
}

export default SingleProductPage