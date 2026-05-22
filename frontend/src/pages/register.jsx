import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { GoogleLogin } from "@react-oauth/google";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
 
};

const handleSuccess = (credentialResponse) => {
    console.log("Google Token:", credentialResponse.credential);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">

 
     <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40 top-10 left-10"></div>
         <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 bottom-10 right-10"></div>
             <div className="absolute w-72 h-72 bg-rose-300 rounded-full blur-3xl opacity-40 top-1/2 left-1/2"></div>
      <div className="relative bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
   
 

        <div className="flex justify-center mb-6">
          <img src={logo} alt="TrackHer Logo" className="h-16" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
         
          <input
            type="number"
            name="birthdate"
            placeholder="Birthday (YYYY/MM/DD)"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300"
          >
            Register
          </button>
        </form>
       
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-medium">
            Login
          </Link>
        </p>
        <div className="flex flex-col items-center">
          <div className="mt-6 w-full">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
