import React from "react";
import { Logo } from "../../utils/allImg";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      {" "}
      <div className="navbar">
        <div className="left-bar">
          <img src={Logo} alt="" />
          <a href="" className="about">
            About us
          </a>
          <a href="">Contact us</a>
        </div>
        <div className="right-bar">
          <button>Apply</button>
        </div>
      </div>
      <div className="detail">
        <h1>
          THE ALL IN ONE PLATFORM TO GROW{" "}
          <span className="below-detail">YOUR RESTAURANT BUSINESS</span>{" "}
        </h1>
      </div>
      <div className="bx"></div>
    </>
  );
};

export default Navbar;
