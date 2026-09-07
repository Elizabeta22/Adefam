import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://adefam-1.onrender.com/login",
        {
          email: loginData.email,
          password: loginData.password,
        }
      );

      // Save logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      alert("Login Successful");

      navigate("/student-dashboard");
    } catch (err) {
      console.error("Login error:", err);

      if (err.response) {
        setError(
          err.response.data.message ||
            "Invalid email or password."
        );
      } else {
        setError(
          "Server not responding. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-7xl bg-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* ========================= */}
        {/* LEFT IMAGE SECTION */}
        {/* ========================= */}

        <div className="relative min-h-[700px] overflow-hidden">

          {/* Background Image */}
          <img
            src="/studentsignup.jpg"
            alt="Students learning technology"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Decorative Orange Shape */}
          <div className="absolute top-20 left-[-450px] w-[600px] h-[300px] border-[35px] border-yellow-600 rounded-full rotate-[-8deg] opacity-80"></div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[300px] border-[35px] border-yellow-600 rounded-full rotate-[-30deg] opacity-70"></div>

          {/* Text */}
          <div className="absolute bottom-14 left-10 right-10 z-10">

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Welcome Back
            </h1>

            <p className="text-lg md:text-xl text-white leading-8 max-w-xl">
              Sign in to your Adefam account and
              continue learning valuable technology
              skills.
            </p>

          </div>
        </div>


        {/* ========================= */}
        {/* RIGHT LOGIN SECTION */}
        {/* ========================= */}

        <div className="px-8 py-10 md:px-12 lg:px-14">

          <div className="w-full max-w-xl mx-auto">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome Back
            </h2>

            <p className="text-xl text-gray-500 mt-3 mb-10">
              Sign in to continue learning.
            </p>


            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}


            {/* ========================= */}
            {/* LOGIN FORM */}
            {/* ========================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Email */}
              <div>

                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100"
                />

              </div>


              {/* Password */}
              <div>

                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-2xl px-6 py-5 pr-16 text-lg outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff size={25} />
                    ) : (
                      <Eye size={25} />
                    )}
                  </button>

                </div>

              </div>


              {/* Remember Me + Forgot Password */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <label className="flex items-center gap-3 text-gray-600">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                    className="w-5 h-5 accent-yellow-600"
                  />

                  <span>
                    Remember me
                  </span>

                </label>


                <Link
                  to="/forgot-password"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Forgot Password?
                </Link>

              </div>


              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white font-semibold text-lg py-5 rounded-2xl shadow-md transition"
              >
                {loading
                  ? "Logging in..."
                  : "Login"}
              </button>

            </form>


            {/* ========================= */}
            {/* DIVIDER */}
            {/* ========================= */}

            <div className="flex items-center gap-4 my-8">

              <div className="flex-1 h-px bg-gray-200"></div>

              <span className="text-gray-400 text-lg">
                OR
              </span>

              <div className="flex-1 h-px bg-gray-200"></div>

            </div>
            
            <p className="text-center mt-8 text-gray-500 text-lg">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="text-yellow-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;