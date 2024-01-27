import React, { useEffect, useState } from "react";
import product from "../assets/images/product.webp";

function CartCard(props) {
  const [cart, setCart] = useState([]);

  let initialCart = {
    amount: 0,
    items: [],
  };

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    if (existingCart) {
      setCart(JSON.parse(existingCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item if it doesn't exist
      setCart([...cart, product]);
      alert(`item added to cart ${product.name}`);
    }
  };

  console.log("cart", cart);
  function addToCart(product) {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`item added to cart ${product.name}`);
  }
  return (
    <div className="bg-dark rounded-2xl  basis-[70%] m-2 flex flex-row items-center justify-center space-y-4 p-2">
      <div className="bg-darkes p-[1px] w-[30%]  rounded-2xl">
        <img src={product} className="h-36 w-[100%] object-cover rounded-2xl" />
      </div>
      <div className="flex flex-col items-start justify-start space-y-2 p-3">
        <h3 className="font-semibold text-white ">{props.product.name}</h3>
        <p className="text-xs text-grey  ">{props.product.description}</p>
        <p className="text-xs text-grey  ">From:{props.product.company}</p>
        <p className="text-xs text-grey  ">Quantity:{props.quantity}</p>
      </div>
      <div className="flex flex-col justify-between items-center  h-24">
        <button
          className=" bg-red-500 rounded-xl text-xs px-2 py-1  text-white font-semibold"
          onClick={() => {
            addToCart(props.product);
          }}
        >
          Delete
        </button>
        <div className="flex  self-end">
          <button
            onClick={() => incrementQuantity(product.id)}
            className="p-2 bg-white rounded-lg m-1"
          >
            +
          </button>

          <button
            onClick={() => decrementQuantity(product.id)}
            className="p-2 bg-white rounded-lg m-1"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
