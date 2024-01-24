import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup"
import { Formik } from 'formik';

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

    phone: yup
    .string()
    .required('Phone is required')
    .matches(phonePattern,"Please enter a valid phone number")
    .min(10, 'Phone to small')
    .max(10, 'Phone to long'),
    
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must contain at least 8 characters'),
});

function SignUpPage() {

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    console.log('submited', values.email)
    localStorage.setItem("name", values.email)

    try {

      const registeredUser = await axios.post("/api/users",

       );

      // Handle successful registration (e.g., redirect to sign-in)
      console.log("User registered successfully:", registeredUser.data);
    } catch (error) {
      // Handle registration errors
      console.error("Registration error:", error);
    }
  };

  return (
    <Formik
    initialValues={{name:"", email:'' ,phone:"", password:""}}
    validateOnMount={true}
    
    onSubmit={values =>{
        handleSubmit(values)
    }}

    validationSchema={signUpSchema}
  >
  {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
    
   
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Input fields based on your schema */}
          <div>
          <input
          type="text"
          name="username"
          value={values.name}
          onChange={handleChange('name')}
          placeholder="Username"
          required
          className="rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />

          <p>{errors.name && touched.name ? `${errors.name}` : ""}</p>
          </div>
          
          <div>
          <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange('email')}
          placeholder="Email"
          required
          className="rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />
          <p>{errors.email && touched.email ? `${errors.email}` : ""}</p>
          </div>


          <div>
          <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange('password')}
          placeholder="Password"
          required
          className="rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />
          <p>{errors.password && touched.password ? `${errors.password}` : ""}</p>
          </div>
         
          {/* Add more fields as needed */}
          <button
            type="submit"
            className="w-full flex justify-center rounded-md bg-indigo-600 py-2 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    )}
      </Formik>
  );
}

export default SignUpPage;