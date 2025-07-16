import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "url:../assets/kashaf_eats_logo.svg";
import React from "react";

const Header = React.memo(() => {
  const [btnName, setBtnName] = useState("Login");
  const navigate = useNavigate();
  return (
    <div
      id="header"
      className="flex items-center justify-between bg-blue-50 p-4 shadow-md"
    >
      <img
        className="w-60 cursor-pointer"
        alt="App Logo"
        src={logo}
        onClick={() => navigate("/")}
      ></img>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-200"
            onClick={() => {
              btnName === "Login" ? navigate("/login") : setBtnName("Login");
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </div>
  );
});

export default Header;
