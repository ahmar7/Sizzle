import React from "react";
import { Animate, Tech1, Tech2 } from "../../utils/allImg";
import "./tech.css";
const Tech = () => {
  return (
    <div className="tech-section">
      <div className="left-tech">
        <p className="heading-tech">WE MAKE IT EASY FOR YOU</p>
        <h1 className="tech-h">
          LET US MANAGE THE
          <br className="hide-it" /> DETAILS
        </h1>
        <p className="tech-para">
          DON'T LET THE STRESS OF SMALL DETAILS HOLD YOU BACK. LET US HELP YOU
          REALIZE YOUR FULL POTENTIAL BY MANAGING THE LITTLE THINGS. OUR
          TAILORED SOLUTIONS AND UNWAVERING COMMITMENT ENSURE THAT YOUR JOURNEY
          TO SUCCESS IS SMOOTH AND HASSLE-FREE.
        </p>
      </div>
      <div className="right-tech">
        <div className="left-inner no-mar">
          <h3>ORGANIC REACH</h3>
          <p>
            WE LEVERAGE CELEBRITIES AUDIENCES TO REACH MILLIONS OF FANS ACROSS
            THE GLOBE TO <span className="orange"> GROW OUR BRANDS </span>{" "}
            NATIONALLY, ALL IN THE MATTER OF CLICKS.
          </p>
        </div>
        <div className="left-inner">
          <h3>PROVEN MARKETING</h3>
          <p>
            WE ELEVATE ONLINE VISIBILITY WITH OUR MARKETING TEAM'S{" "}
            <span className="orange">EXPERTISE </span> IN NATIONAL MARKETING,
            SOCIAL MEDIA PLANNING, SALES PROMOTION TACTICS, PUBLIC RELATIONS,
            AND ADVERTISING CAMPAIGNS.
          </p>
        </div>
        <div className="left-inner ">
          <h3>MENU MANAGEMENT</h3>
          <p>
            WE HANDLE EVERYTHING MENU-RELATED, INCLUDING THE ADDITION OF NEW
            ITEMS TO <span className="orange">KEEP GUESTS RETURNING</span> FOR
            MORE.
          </p>
        </div>
        <div className="left-inner">
          <h3>KEEP GUESTS RETURNING</h3>
          <p>
            FROM LOCATING THE IDEAL VIRTUAL RESTAURANT FOR YOUR KITCHEN TO
            OFFERING SUPPORT THROUGHOUT THE PROCESS, OUR{" "}
            <span className="orange">TOP-NOTCH</span> CUSTOMER SERVICE IS HERE
            FOR YOU.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
