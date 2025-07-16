import React from 'react';

import Input from "../components/Forms/Input";
import Button from "../components/Forms/Button";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Welcome Back!</h1>
        <form className="space-y-6">
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;