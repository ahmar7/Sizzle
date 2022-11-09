import React from "react";
import { Inputarrow, Logo } from "../../utils/allImg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-block">
        <div className="left-block">
          <div className="footer-logo">
            <img src={Logo} alt="" />
            <ul className="footer-links">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Apply</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-block">
          <div className="footer-bold">
            <h1>
              FORGED BY COMMUNITY.
              <span className="bold-below">BUILT TO DELIVER.</span>
            </h1>
            <p>Subscribe for updates</p>
            <div className="footer-input">
              <input type="text" placeholder="ENTER YOUR EMAIL" />
              <img className="inputarrow" src={Inputarrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copy-left">
          <p> &#169; sizzle 2022</p>
        </div>
        <div className="copy-right">
          <a href="">TERMS OF SERVICES</a>
          <a href="">PRIVACY POLICY</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
