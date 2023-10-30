import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="navbar">
        <a class="logo" href="#">
          <img src="/logo-ilab.png" alt="Logo iLab" />
        </a>
        <ul>
          <li>
            <a href="" onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li>
            <a href="" onClick={() => navigate("/contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href="" onClick={() => navigate("/about")}>
              About Us
            </a>
          </li>
        </ul>
        <div class="buttons">
          <button id="signup">Sign Up</button>
          <button id="login">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
