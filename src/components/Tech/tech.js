import React from "react";
import { Animate, Tech1, Tech2 } from "../../utils/allImg";
import "./tech.css";
const Tech = () => {
  return (
    <div className="tech-section">
      <video
        className="animation"
        loop={true}
        autoPlay={true}
        muted={true}
        src={Animate}
      ></video>
      <p className="heading-tech">ADVANCED - TECH </p>
      <h1 className="tech-h">
        OUR PLATFORM MADE <br /> SIMPLE & EASY FOR YOU
      </h1>
      <p className="tech-para">
        WE CREATED THE TECHNOLOGY TO ALLOW YOU TO CONCENTRATE ON WHAT YOU DO
        BEST: COOKING AMAZING FOOD & PROVIDING AMAZING SERVICE. OUR PLATFORM
        MAKES EVERYTHING EASY & EFFICIENT, SO YOU CAN CONTINUE TO RAISE YOUR
        MARGINS.
      </p>
      <div className="tech-card">
        <div className="indiv-tech">
          <img src={Tech1} alt="" />
          <h3 className="indiv-h">RESULT - ORIENTED</h3>
          <p className="indiv-p">
            KEEP TRACK OF YOUR RESTAURANT INCLUDING PROFIT, REVENUE & MORE. ALSO
            GET EASY ACCESS TO LAUNCH MORE
            <span className="orange"> SIZZLE</span> BRANDS
          </p>
        </div>
        <div className="indiv-tech">
          <img className="sec-img" src={Tech2} alt="" />
          <h3 className="indiv-h">EASY TO MANAGE</h3>
          <p className="indiv-p">
            OUR SOPHISTICATED YET SIMPLE INTERFACE GIVES YOU THE ABILITY TO
            MANAGE
            <span className="orange"> YOUR VIRTUAL BRAND </span> RIGHT FROM YOUR
            PHONE OR COMPUTER. EVERYTHING YOU NEED IN ONE PLACE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
