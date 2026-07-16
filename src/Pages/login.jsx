import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });


  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  try {
    const response = await axios.post(
      "http://localhost:5000/login",
      {
        email: loginData.email,
        password: loginData.password,
      }
    );

    // Save logged in user
    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    alert("Login Successful");

    navigate("/student-dashboard");

  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
    } else {
      setError("Server not responding");
    }
  }
};
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-3 gap-8 items-center">

        {/* Left Illustration */}
        <div className="hidden lg:flex justify-center">
          <img
            src="/datasec.png"
            alt="Login Illustration"
            className="w-full max-w-sm"
          />
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-lg border p-8">
          <h2 className="text-2xl font-bold text-yellow-800">
            Welcome Back
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Sign in to continue learning
          </p>

          {error && (
            <div className="mt-4 bg-red-100 text-red-600 p-3 rounded-lg">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-yellow-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t"></div>

            <span className="px-3 text-sm text-gray-400">
              or continue with
            </span>

            <div className="flex-1 border-t"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="border rounded-lg py-3 hover:bg-yellow-50">
              Google
            </button>

            <button className="border rounded-lg py-3 hover:bg-yellow-50">
              Apple
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-yellow-600 font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:flex justify-center">
          <img
            src="/signup.png"
            alt="Security Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;