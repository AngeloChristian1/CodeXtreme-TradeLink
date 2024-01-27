import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import people from "../assets/images/people.webp";
import people3 from "../assets/images/people3.webp";
import ProcessCard from "../components/ProcessCard";
import { CiCoinInsert } from "react-icons/ci";
import axios from "axios";
import ProductCard from "../components/ProductCard ";
import CartCard from "../components/CartCard";

function CartMainSection() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    axios({
      method: "GET",
      url: `https://trade-center.onrender.com/api/v1/products`,
    })
      .then((response) => {
        console.log("products", response?.data?.data?.products);
        setProducts(response?.data?.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error fetching products homepage:", error);
      });
  };

  console.log("products hook", products);
  useEffect(() => {
    fetchProducts();
  }, []);

  let cart = JSON.parse(localStorage.getItem("cart"));

  console.log("Cart in main", cart);
  return (
    <div className="w-full bg-darkest h-auto p-5 my-2">
      <div className="w-full   rounded-2xl flex flex-row h-[30%]  mb-3">
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="my-2 w-[50%]">
            <h3 className="text-4xl text-white text-center font-bold">
              Products in cart
            </h3>{" "}
          </div>

          <div className="bg-white p-5 rounded-2xl flex items-center justify-between w-[70%] mt-3">
            <h3 className="text-grey font-extrabold">Total Amount</h3>
            <h3 className="text-dark font-extrabold">50000</h3>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="w-full flex flex-col items-center justify-start relative flex-wrap">
          <div className="bg-grey rounded-2xl h-32 w-[70%] m-2 flex flex-row items-center justify-center space-y-4 p-2">
            <p className="text-xs text-dark">Loading...</p>
          </div>
          <div className="bg-grey rounded-2xl  h-32 w-[70%] m-2 flex flex-row items-center justify-center space-y-4 p-2">
            <p className="text-xs text-dark">Loading...</p>
          </div>
        </div>
      )}

      <div className="w-full flex flex-row items-center justify-center relative flex-wrap">
        {products.map((product, index) => (
          <CartCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CartMainSection;
