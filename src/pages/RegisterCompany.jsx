import { useState } from "react";
import axios from "axios";
import * as yup from "yup"
import { Formik } from 'formik';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Footer from "../Sections/Footer";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";


// Replace with your actual Mongoose schema
// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   // ...other fields from your schema
// });

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const phonePattern =/(0(7[2|3|8|9][0-9]))\d{5}/

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email').matches(emailPattern,"Please enter a valid email"),
  
    name: yup
    .string()
    .required('Name is required'),
    
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must contain at least 8 characters'),
});

function RegisterCompany() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleRegister = async (values) => {
      
        axios({
          method: "POST",
          url: `https://trade-center.onrender.com/api/v1/auth/sign-up`,
          data: {
            email:values.email,
            name:values.name,
            password:values.password,
            role:"user"
          },
        })
          .then((response) => {
            console.log(response);
            setIsLoading(false)
          })
          .catch((error) => {
       console.log("error", error)
            console.log("error message: ", error.message);
          });
      };


  return (
    <div className="bg-darkest  p-5 h-full">
    <Navbar/>
    <Formik
    initialValues={{name:"", email:'', password:""}}
    validateOnMount={true}
    
    onSubmit={values =>{
        setIsLoading(true);
        handleRegister(values)
    }}

    validationSchema={signUpSchema}
  >
  {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
    
   
    <div className="min-h-[70vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">Register a company</h2>
        </div>
  
        <form className="pt-4 space-y-6" onSubmit={handleSubmit}>
         
          <div>
          <input
          type="text"
          name="username"
          value={values.name}
          onChange={handleChange('name')}
          placeholder="Company Name"
          onBlur={handleBlur('name')}
          className="rounded-2xl shadow-sm px-4 bg-dark text-white py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
        />
          <p className="text-xs text-red-600">{errors.name && touched.name ? `${errors.name}` : ""}</p>
          </div>
          <div>
          <div >
            <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange('email')}
          placeholder="Company Email"
          onBlur={handleBlur('email')}
          className="rounded-2xl shadow-sm px-4 bg-dark text-white py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
        />
          </div>
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
          className="rounded-2xl shadow-sm px-4 bg-dark text-white py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
        />
    
         
          </div>
          <div className="flex flex-row justify-between items-center" >
          <p className="text-xs text-red-600">{errors.password && touched.password ? `${errors.password}` : ""}</p>
          
          <div>{
            !showPassword?
            <div className="flex flex-row space-x-3 my-1 cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}}>
            <FaRegEye  className="text-grey "/>
            <p className="text-grey text-xs">Show Password</p></div>

            :
            <div className="flex flex-row space-x-3 my-1 cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}} >
            <FaRegEyeSlash className="text-grey "/>
            <p className="text-grey text-xs">Hide Password</p></div>
          }
            </div>
          </div>
          </div>

          <button
          type="submit"
          className="rounded-2xl font-bold shadow-sm px-4 bg-white text-darkest  py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
        >
         {isLoading?"Loading..." :'Register'}
        </button>
        </form>
      </div>
    </div>
    )}
    
      </Formik>
      <p className=" text-center text-sm text-grey my-3">
      Already registered?
      <a href="/signin" className="font-medium text-white hover:text-grey ml-2">
        Sign in
      </a>
    </p>
      <Footer/>
    </div>
  );
}

export default RegisterCompany;