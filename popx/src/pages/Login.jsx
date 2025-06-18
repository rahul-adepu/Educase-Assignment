import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-6 flex justify-center">
      <div className="w-full max-w-sm bg-white border border-[#D9D9D9] rounded-md p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Signin to your <br />
          <span className="font-bold">PopX</span> account
        </h2>
        <p className="text-sm text-gray-500 mt-1 mb-6 leading-snug">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-purple-600 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="w-full border border-[#D9D9D9] text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium text-purple-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full border border-[#D9D9D9] text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-800 text-sm font-medium py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
