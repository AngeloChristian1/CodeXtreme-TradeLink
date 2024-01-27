import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import Footer from "../Sections/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from "../components/NavBar";
import { useZustandStore } from "../zustand_store/ZustandStore";

function LoginPage() {
  const notify = () => toast("Wow so easy!");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const authToken = useZustandStore((state) => state.authToken);
  const authProfile = useZustandStore((state) => state.authProfile);
  const setAuthProfile = useZustandStore((state) => state.setAuthProfile);
  const setAuthToken = useZustandStore((state) => state.setAuthToken);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const signUpSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email")
      .matches(emailPattern, "Please enter a valid email"),

    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password must contain at least 8 characters"),
  });

  const handleLogin = async (values) => {
    // console.log("values", values)
    axios({
      method: "POST",
      url: `https://trade-center.onrender.com/api/v1/auth/sign-in`,
      data: {
        email: values.email,
        password: values.password,
      },
    })
      .then((response) => {
        console.log("succesfull login");
        console.log(response.data.data.user);
        setAuthToken(response.data.token)
        setAuthProfile(response.data.data.user)
        localStorage.setItem('authToken',response.data.token)
        localStorage.setItem('authProfile',JSON.stringify(response.data.data.user))
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error occured");
        console.log("error", error);
        
        setIsLoading(false);
      });
  };


  const Token = localStorage.getItem('authToken') 
  const Profile = JSON.parse(localStorage.getItem("authProfile"))
  return (
    <div className="bg-darkest  p-5 h-full overflow-hidden">
      <Navbar />
      <Formik
        initialValues={{ email: "dav.ndungutse@gmail.com", password: "test12345" }}
        validateOnMount={true}
        // ?
        onSubmit={(values) => {
          setIsLoading(true);
          handleLogin(values);
        }}
        validationSchema={signUpSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <div className="min-h-[70vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 ">
              <div>
                <h2 className=" text-center text-3xl font-bold text-white">
                  Sign In
                </h2>
             
              </div>
              <form className=" space-y-4 " onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    placeholder="Email"
                    required
                    className="rounded-2xl shadow-sm px-4 bg-dark text-white py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
                  />
                  <p className="text-xs text-red-600">
                    {errors.email && touched.email ? `${errors.email}` : ""}
                  </p>
                </div>

                <div>
                  <div className="flex flex-row items-center justify-between ">
                    <input
                      type={!showPassword ? "password" : "text"}
                      name="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      placeholder="Password"
                      onBlur={handleBlur("password")}
                      className="rounded-2xl shadow-sm px-4 bg-dark text-white py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-xs text-red-600">
                      {errors.password && touched.password
                        ? `${errors.password}`
                        : ""}
                    </p>

                    <div>
                      {!showPassword ? (
                        <div
                          className="flex flex-row space-x-3 my-1 cursor-pointer"
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          <FaRegEye className="text-grey " />
                          <p className="text-grey text-xs">Show Password</p>
                        </div>
                      ) : (
                        <div
                          className="flex flex-row space-x-3 my-1 cursor-pointer"
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          <FaRegEyeSlash className="text-grey " />
                          <p className="text-grey text-xs">Hide Password</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="rounded-2xl font-bold shadow-sm px-4 bg-white text-darkest  py-3  focus:ring-darker focus:border-darkest block w-full sm:text-sm"
                >
                  {isLoading ? "Loading..." : "Sign In"}
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>

      <p className=" text-center text-sm text-grey">
        Or
        <Link
          to="/signup"
          className="font-medium text-white hover:text-grey ml-2"
        >
          Create new account
        </Link>
      </p>
      <Footer />
    </div>
  );
}

export default LoginPage;
