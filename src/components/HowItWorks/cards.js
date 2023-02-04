import React from "react";
import { Card1, Card2, Card3, Card4, Card5, Card6 } from "../../utils/allImg";
import "./cards.css";
const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="cards-section">
          <h1 className="card-high">HOW IT WORKS</h1>
          <div className="indiv-card">
            <div className="individiual">
              <div className="number">1</div>
              <div className="icon">
                <img src={Card1} alt="" />
              </div>
              <div className="title">
                <h1>
                  CELEBRITY <span className="b-title">ENDORSEMENTS</span>
                </h1>
              </div>
              <div className="detail-card">
                <p>
                  PARTNER WITH CELEBRITIES WHO HAVE MILLIONS OF FANS TO
                  ACCELERATE YOUR RESTAURANT'S GROWTH.
                </p>
              </div>
            </div>
            <div className="individiual">
              <div className="number">2</div>
              <div className="icon">
                <img src={Card2} alt="" />
              </div>
              <div className="title">
                <h1>
                  SMALL, SIMPLE <span className="b-title">MENU</span>
                </h1>
              </div>
              <div className="detail-card">
                <p>
                  WE WORK WITH THE CELEBRITY TO CREATE A CUSTOM MENU WITH OUR
                  WORLD-CLASS CHEFS. WE KEEP THE MENUS SIMPLE, SO ITS EASIER ON
                  YOU.
                </p>
              </div>
            </div>
            <div className="individiual">
              <div className="number">3</div>
              <div className="icon">
                <img src={Card3} alt="" />
              </div>
              <div className="title">
                <h1>
                  STATE-OF-THE-
                  <span className="b-title">ART TRAINING</span>
                </h1>
              </div>
              <div className="detail-card">
                <p>
                  AN EASY TRAINING PROGRAM TO WALK YOU THROUGH HOW TO COOK OUR
                  FOOD, DIRECTED BY OUR CHEFS.
                </p>
              </div>
            </div>
            <div className="individiual mt">
              <div className="number">4</div>
              <div className="icon">
                <img src={Card4} alt="" />
              </div>
              <div className="title">
                <h1>
                  PERSONAL
                  <span className="b-title">ONBOARDING</span>
                </h1>
              </div>
              <div className="detail-card">
                <p>
                  WE WORK WITH YOU DIRECTLY THROUGHOUT THE ENTIRE PROCESS. YOU
                  WILL HAVE A PERSONAL ONBOARDING MANAGER TO HELP YOU GET
                  STARTED AND WALK YOU THROUGH STEP BY STEP.
                </p>
              </div>
            </div>
            <div className="individiual mt">
              <div className="number">5</div>
              <div className="icon">
                <img src={Card5} alt="" />
              </div>
              <div className="title">
                <h1>
                  NO UPFRONT
                  <span className="b-title">FEES</span>
                </h1>
              </div>
              <div className="detail-card">
                <p style={{ textTransform: "uppercase" }}>
                  Start with ease and peace of mind, as we cover all the initial
                  expenses, demonstrating our commitment to your success.
                </p>
              </div>
            </div>
            <div className="individiual mt">
              <div className="number">6</div>
              <div className="icon">
                <img src={Card6} alt="" />
              </div>
              <div className="title">
                <h1>
                  MAXIMIZE YOUR
                  <span className="b-title">EARNINGS</span>
                </h1>
              </div>
              <div className="detail-card">
                <p style={{ textTransform: "uppercase" }}>
                  Turn every dollar into a profit with a potential return of 30%
                  or more, all of which goes directly to you. It's that simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="apply-sec">
        <a href="https://forms.gle/i2zMvPnK8iAAR1A9A" target="_blank">
          <button>APPLY</button>
        </a>
        <p>See if you are qualified</p>
      </div>
    </>
  );
};

export default Cards;
