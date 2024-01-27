import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import axios from 'axios';

function ProductPage() {
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

  return (
    <div className="flex flex-col h-full w-full ">
    <p className='text-white'>Products</p>


    <div className='my-5 w-full'> </div>
{!isLoading?     <table className="table-auto  border-none my-3 border-spacing-y-4 border-separate">
       <thead>
         <tr className='bg-dark'>
           <th className="px-4 py-2 text-xs border-none text-start text-white p-2">Name</th>
           <th className="px-4 py-2 text-xs border-none text-start text-white p-2">Company</th>
           <th className="px-4 py-2 text-xs border-none text-start text-white p-2">Inventory</th>
           <th className="px-4 py-2 text-xs border-none text-start text-white p-2 "></th>
           <th className="px-4 py-2 text-xs border-none text-start text-white p-2 "></th>
         </tr>
       </thead>
       <tbody>
         {products.map((product) => (
           <tr key={product.id}>
             <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8 text-grey">{product.name}</td>
             <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8 text-grey">{product.company}</td>
             <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8 text-grey">{product.inventory}</td>

             <td className=" px-4 py-2  border-b border-gray-700 p-8  text-indigo-500"><Link to={`${product._id}`} className='text-xs'>Edit</Link></td>
             <td className=" px-4 py-2 text-xs border-b border-gray-700 p-8  text-red-500">Delete</td>
           </tr>
         ))}
       </tbody>
     </table>: <div className=''><p className='text-white text-center text-xs'>Loading...</p></div>}
   
    </div>
  );
}

export default ProductPage