import { useState, useEffect } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingCart = localStorage.getItem('cart');
    if(existingCart) {
      setCart(JSON.parse(existingCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if(existingItem) {
      // Increment quantity if item exists
      setCart(
        cart.map(item => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + 1}
            : item  
        )  
      );
    } else {
      // Add new item if it doesn't exist
      setCart([...cart, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      }]); 
    }
  }

  function removeFromCart(productId) {
    // filter item out of cart
  }

// Increment item quantity
function incrementQuantity(productId) {
    setCart(
      cart.map(item => {
        if(item.id === productId) {
          return {...item, quantity: item.quantity + 1};  
        }
        return item;
      })
    );
  }
  
  // Decrement item quantity
  function decrementQuantity(productId) {
    setCart(
      cart.map(item => {
        if(item.id === productId) {
          return {...item, quantity: 
            item.quantity > 1 ? item.quantity - 1 : 1};
        } 
        return item;  
      })
    );
  }

  return (
    <div className="flex">
      {/* Display cart items */}

      <div className="mt-8 flex flex-col gap-4">  
        {cart.map(item => (
          <div key={item} className="flex">
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            
            <span>{item.quantity}</span>
            
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}

        <button 
          className="bg-indigo-500 text-white p-2 rounded"
          onClick={() => checkout()}
        >
          Checkout
        </button>

        <button onClick={() => incrementQuantity(product.id)}>+</button> 

<button onClick={() => decrementQuantity(product.id)}>-</button>
      </div>
    </div>
  );
}