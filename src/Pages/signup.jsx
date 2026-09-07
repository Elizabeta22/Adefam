import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://adefam-1.onrender.com/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      const user = {
        name: formData.name,
        email: formData.email,
        profileImage: "",
      };

      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup Successful!");

      navigate("/student-dashboard");
    } catch (err) {
      console.error("Signup error:", err);

      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Signup Failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-7xl bg-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative min-h-[650px] lg:min-h-[750px] overflow-hidden">

          {/* Background Image */}
          <img
            src="/studentsignup.jpg"
            alt="Student learning"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Orange Decorative Shape */}
          <div className="absolute top-16 left-[-450px] w-[600px] h-[300px] border-[40px] border-yellow-600 rounded-full opacity-80 rotate-[-5deg]"></div>

          <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[300px] border-[35px] border-yellow-600 rounded-full opacity-70 rotate-[-35deg]"></div>

          {/* Left Text */}
          <div className="absolute bottom-14 left-10 right-10 z-10">

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Join Us Today
            </h1>

            <p className="text-lg md:text-xl text-white leading-8 max-w-xl">
              Create your account and start learning valuable tech
              skills with Adefam Computer Infotech.
            </p>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="px-8 py-12 md:px-12 lg:px-14 flex items-center">

          <div className="w-full">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="text-xl text-gray-500 mt-3 mb-10">
              Get started in just a few minutes.
            </p>

            {/* Error */}
            {error && (
              <div className="mb-6 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* FULL NAME */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100 transition"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-2xl px-6 py-5 pr-16 text-lg outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100 transition"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                  >
                    {showPassword ? (
                      <EyeOff size={25} />
                    ) : (
                      <Eye size={25} />
                    )}
                  </button>

                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-2xl px-6 py-5 pr-16 text-lg outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100 transition"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={25} />
                    ) : (
                      <Eye size={25} />
                    )}
                  </button>

                </div>
              </div>

              {/* TERMS */}
              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) =>
                    setAgreeTerms(e.target.checked)
                  }
                  className="w-5 h-5 accent-yellow-600 cursor-pointer"
                />

                <p className="text-gray-600 text-base md:text-lg">
                  I agree to the{" "}
                  <span className="text-yellow-600 font-medium">
                    Terms & Conditions
                  </span>
                </p>

              </div>

              {/* CREATE ACCOUNT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white font-semibold text-lg py-5 rounded-2xl shadow-md transition duration-300"
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

            </form>

            {/* LOGIN */}
            <p className="text-center mt-7 text-gray-600">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-yellow-600 font-semibold hover:underline"
              >
                Login
              </Link>

            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;