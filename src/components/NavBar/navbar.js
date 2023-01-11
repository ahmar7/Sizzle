import React from "react";
import { Logo, newLogo } from "../../utils/allImg";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      {" "}
      <div className="navbar">
        <div className="left-bar">{/* <img src={Logo} alt="" /> */}</div>
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
      <div>
        {" "}
        <img className="new-img" src={newLogo} alt="" />
      </div>
    </>
  );
};

export default Navbar;
