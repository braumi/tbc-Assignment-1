import React from "react";
import "./Header.css";
import logo from "./imgs/logo.png";
import logo1 from "./imgs/logo1.svg";
import logo2 from "./imgs/logo2.svg";

export default function Header() {
  return (
    <header>
      <div className="left">
        <a href="#" className="logo">
        <img src={logo}></img>
        <div className="text_Logo">
          <img src={logo1}></img>
          <img src={logo2}></img>
        </div>
      </a>
      
      <div className="search">
        <input type="search" placeholder="Search Wikipedia"></input>
        <button type="submit">Search</button>
      </div>
      </div>
      <div className="right">
        <a href="#">Create account</a>
        <a href="#">Log in</a>
      </div>
    </header>
  );
}
