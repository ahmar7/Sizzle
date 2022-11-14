import React from "react";
import { Animate, Tech1, Tech2 } from "../../utils/allImg";
import "./tech.css";
const Tech = () => {
  return (
    <div className="tech-section">
      <div className="left-tech">
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
      </div>
      <div className="right-tech">
        <div className="left-inner no-mar">
          <h3>RESULT - ORIENTED</h3>
          <p>
            KEEP TRACK OF <span className="orange">YOUR RESTAURANT </span>{" "}
            INCLUDING PROFIT, REVENUE & MORE. ALSO GET EASY ACCESS TO LAUNCH
            MORE SIZZLE BRANDS
          </p>
        </div>
        <div className="left-inner">
          <h3>TRAINING PROGRAM</h3>
          <p>
            OUR STATE-OF-THE-ART TRAINING PROGRAM WILL PROVIDE YOU &
            <span className="orange">YOUR STAFF</span>A SEAMLESS EXPERIENCE WHEN
            LEARNING HOW TO COOK OUR RECIPES
          </p>
        </div>
        <div className="left-inner ">
          <h3>PAYOUT SYSTEM</h3>
          <p>
            AN AUTOMATED SYSTEM THAT ALLOWS YOU TO NOT WORRY ABOUT
            <span className="orange">YOUR CASH FLOW</span>. WE ARE JUST HERE TO
            INCREASE YOUR TOP LINE
          </p>
        </div>
        <div className="left-inner">
          <h3>EASY TO MANAGE</h3>
          <p>
            OUR SOPHISTICATED YET SIMPLE INTERFACE GIVES YOU THE ABILITY TO
            MANAGE <span className="orange">YOUR VIRTUAL BRAND</span> RIGHT FROM
            YOUR TABLET THAT WE PROVIDE TO YOU. EVERYTHING YOU NEED IN ONE PLACE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
