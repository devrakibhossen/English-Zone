import React, { useState } from "react";
import { Link } from "react-router";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");
    console.log("Registered:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 py-5 px-4">
      <img
        src="/englishzone.png"
        className="lg:w-60 w-48 mb-10"
        alt="englishzone"
      />
      <div className="w-full max-w-[470px] lg:py-8 lg:px-16 p-6 bg-white rounded-md  ">
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm  text-gray-700">ইমেইল আইডি</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল লিখুন"
              required
              className="w-full mt-1 px-4 placeholder:text-sm placeholder:text-gray-400 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm  text-gray-700">পাসওয়ার্ড</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              required
              className="w-full mt-1 px-4 py-2 placeholder:text-sm placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          {/* <div className="flex justify-between items-center text-sm mb-4">
            <label className="flex items-center text-black">
              <input type="checkbox" className="mr-2 " />
              মনে রাখুন
            </label>
            <a href="#" className="text-violet-600 hover:underline">
              পাসওয়ার্ড ভুলে গেছেন?
            </a>
          </div> */}

          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-1.5 px-4 rounded-full transition"
            >
              লগইন করুন
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center my-4">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">অথবা</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Google */}
        <SocialLogin />

        <p className="text-sm text-center text-gray-600 mt-6">
          আপনার অ্যাকাউন্ট নেই?
          <Link
            to="/register"
            className="text-black hover:underline font-medium"
          >
            রেজিস্টার করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
