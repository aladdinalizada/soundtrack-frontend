import React from "react";
import { useState } from "react";
import "./index.css";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState("false");
  const navOpen = () => {
    const nav = document.getElementsByClassName("mobileNav")[0];
    if (isNavOpen === "false") {
      setIsNavOpen("true");
      nav.classList.add("true");
    } else {
      setIsNavOpen("false");
      nav.classList.remove("true");
    }
  };
  return (
    <div className="headerContainer">
      <div className="left">
        <div className="logo">
          <p>s</p>
          <span>Soundtrack</span>
        </div>
        <div className="menu">
          <ul>
            <li className="active">How it works</li>
            <li>Library</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <button className="signUp">Sign Up</button>
        <button className="login">Login</button>
      </div>
      <button className="navBtn" onClick={(e) => navOpen(e)}>
        <i class="fa-solid fa-bars"></i>
      </button>

      <ul className="mobileNav">
        <li>How it works</li>
        <li>Library</li>
        <li>Pricing</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
