import React from "react";
import { Arrow, Logo } from "../../utils/allImg";
import "./header.css";
const Header = () => {
  return (
    <div className="main-header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="logo-title">
        <h3>
          FORGED BY COMMUNITY.
          <br /> BUILT TO DELIVER.
        </h3>
        <br className="br" />
        <div className="arrow">
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
