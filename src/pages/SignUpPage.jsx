import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup"
import { Formik } from 'formik';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


// Replace with your actual Mongoose schema
// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   // ...other fields from your schema
// });

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern =/(0(7[2|3|8|9][0-9]))\d{5}/

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

function SignUpPage() {
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
    
   
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Already have an account?
            <a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
         
          <div>
          <input
          type="text"
          name="username"
          value={values.name}
          onChange={handleChange('name')}
          placeholder="Username"
          onBlur={handleBlur('name')}
          className="rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
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
          placeholder="Email"
          onBlur={handleBlur('email')}
          className="rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
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
          className="w-[90%] p-1 outline-none rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm"
        />
    
          {!showPassword?<FaRegEye onClick={()=>{setShowPassword(!showPassword)}}/>:<FaRegEyeSlash onClick={()=>{setShowPassword(!showPassword)}}/>}
          </div>
          
          <p className="text-xs text-red-600">{errors.password && touched.password ? `${errors.password}` : ""}</p>
          </div>

          <button
          type="submit"
          className="w-full flex justify-center rounded-md bg-indigo-600 py-2 text-white text-sm font-medium shadow-sm hover:bg-indigo-700" 
        >
         {isLoading?"Loading..." :'Sign Up'}
        </button>
        </form>
      </div>
    </div>
    )}
      </Formik>
  );
}

export default SignUpPage;