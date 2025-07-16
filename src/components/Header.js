import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import logo from "url:../assets/kashaf_eats_logo.svg";
import React from "react";

const Header = React.memo(() => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
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
            <Link to="/profile">Profile</Link>
          </li>
          <li className="px-4">
            {isAuthenticated ? (
              <button onClick={logout}>Logout ({user.username})</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default Header;
