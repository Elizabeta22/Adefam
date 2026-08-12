import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://adefam.onrender.com/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      const user = {
        name: formData.name,
        email: formData.email,
        profileImage: "",
      };

      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup Successful!");

      navigate("/student-dashboard");
    } catch (err) {
      console.error(err);
      setError("Signup Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-600 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Account
        </h2>

        {error && (
          <div className="mb-4 bg-red-100 text-red-700 p-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-600 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;