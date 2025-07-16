import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "url:../assets/kashaf_eats_logo.svg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rendered");
  const navigate = useNavigate();
  return (
    <div id="header" className="flex justify-between bg-blue-50">
      <img
        className="w-80 cursor-pointer"
        alt="App Logo"
        src={logo}
        onClick={() => navigate("/")}
      ></img>
      <nav>
        <ul className="flex p-10 gap-3">
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
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
