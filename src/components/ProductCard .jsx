import React, { useEffect, useState } from 'react'
import product from '../assets/images/product.webp'

function ProductCard(props) {

    const [cart, setCart] = useState([]);

    let initialCart = {
        amount:0,
        items:[],
    }

    useEffect(() => {
      const existingCart = localStorage.getItem('cart');
      if(existingCart) {
        setCart(JSON.parse(existingCart));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (product)=>{
        const existingItem = cart.find(item => item._id === product._id);
        if(existingItem) {
           
            setCart(
              cart.map(item => 
                item._id === product._id 
                  ? {...item, quantity: item.quantity + 1}
                  : item  
              )  
            );
          } else {
            // Add new item if it doesn't exist
            setCart([...cart, product
            ]); 
            alert(`item added to cart ${product.name}`)
          }

    }

    console.log('cart', cart)
    function addToCart(product) {

          setCart([...cart, product
          ]); 
          localStorage.setItem('cart', JSON.stringify(cart))
          alert(`item added to cart ${product.name}`)  
      }
  return (
    <div className='bg-dark rounded-2xl  basis-[350px] m-2 flex flex-col items-center justify-center space-y-4 p-2'>
    <div className='bg-darkes p-[1px]   w-full rounded-2xl'>
    <img src={product}  className='h-48 object-cover w-full rounded-2xl'/>
    </div>
    <div className='flex flex-col items-start justify-center space-y-2 p-3' >
    <h3 className='font-semibold text-white '>{props.product.name}</h3>
    <p className='text-xs text-grey  '>{props.product.description}</p>
    <p className='text-xs text-grey  '>From:{props.product.company}</p>
    </div>
    <button className='w-full bg-grey rounded-xl p-2' onClick={()=>{addToCart(props.product)}}>
    Buy Product
    </button>
    </div>
  )
}

export default ProductCard