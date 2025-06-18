import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-end px-6 pb-12 bg-white">
      <div className="max-w-md w-full text-center mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to PopX
        </h1>
        <p className="text-gray-600 text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col gap-4">
          <button
            className="bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            className="bg-purple-100 text-purple-700 py-3 rounded-md font-medium hover:bg-purple-200 transition"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
