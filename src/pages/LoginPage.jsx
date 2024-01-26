import { useState } from "react";
import * as yup from "yup"
import { Formik } from 'formik';
import axios from "axios";
import Footer from "../Sections/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from "../components/NavBar";

function LoginPage() {

    const notify = () => toast("Wow so easy!");
const [isLoading, setIsLoading] = useState(false)
const [showPassword, setShowPassword] = useState(false)

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email').matches(emailPattern,"Please enter a valid email"),
    
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must contain at least 8 characters'),
});

const handleLogin = async (values) => {
    // console.log("values", values)
    axios({
      method: "POST",
      url: `https://trade-center.onrender.com/api/v1/auth/sign-in`,
      data: {
        email:values.email,
        password:values.password,
      },
    })
      .then((response) => {
        console.log("succesfull login");
        console.log(response);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('error occured')
   console.log("error", error)
   setIsLoading(false);
      });
  };


  return (
    <div className="bg-darkest  p-5 h-full">
    <Navbar/>
    <Formik
    initialValues={{ email: '', password:""}}
    validateOnMount={true}
    // ?
    onSubmit={values =>{
        setIsLoading(true);
        handleLogin(values)
      
    }}
    validationSchema={signUpSchema}
  >
  {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
    <div className="min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">Sign In</h2>
    
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
        <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange('email')}
            placeholder="Email"
            required
            className="rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
          <p className="text-xs text-red-600">{errors.email && touched.email ? `${errors.email}` : ""}</p>
        </div>  
       
        <div>
        <div 
        className="flex flex-row items-center justify-between "
        >
        <input
        type={!showPassword? "password":"text"}
        name="password"
        value={values.password}
        onChange={handleChange('password')}
        placeholder="Password"
        onBlur={handleBlur('password')}
        className="w-full p-1 outline-none rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm"
      />
  
       
        </div>
        <div className="flex flex-row justify-between items-center" >
        <p className="text-xs text-red-600">{errors.password && touched.password ? `${errors.password}` : ""}</p>
        
        <div>{
          !showPassword?
          <div className="flex flex-row space-x-3 my-1">
          <FaRegEye onClick={()=>{setShowPassword(!showPassword)}} className="text-grey "/>
          <p className="text-grey text-xs">Show Password</p></div>

          :
          <div className="flex flex-row space-x-3 my-1">
          <FaRegEyeSlash onClick={()=>{setShowPassword(!showPassword)}} className="text-grey "/>
          <p className="text-grey text-xs">Hide Password</p></div>
        }
          </div>
        </div>
        </div>
         
          <button
            type="submit"
            className="w-full flex justify-center rounded-md bg-indigo-600 py-2 text-white text-sm font-medium shadow-sm hover:bg-indigo-700" 
          >
           {isLoading?"Loading..." :'Sign In'}
          </button>
        </form>

      </div>
    </div>
    )}
      </Formik>
   
    <p className=" text-center text-sm text-grey">
    Or 
    <Link to="/signup" className="font-medium text-white hover:text-grey ml-2">
        Create new account
    </Link>
  </p>
      <Footer/>
    </div>
  );
}

export default LoginPage;