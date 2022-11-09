import React, { useState } from "react";
import { ArrowFaq } from "../../utils/allImg";
import "./faq.css";
const Faq = () => {
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);
  const [show5, setshow5] = useState(false);
  let showslide1 = () => {
    if (show1 === false) {
      setshow1(true);
    } else {
      setshow1(false);
    }
  };
  let showslide2 = () => {
    if (show2 === false) {
      setshow2(true);
    } else {
      setshow2(false);
    }
  };
  let showslide3 = () => {
    if (show3 === false) {
      setshow3(true);
    } else {
      setshow3(false);
    }
  };
  let showslide4 = () => {
    if (show4 === false) {
      setshow4(true);
    } else {
      setshow4(false);
    }
  };
  let showslide5 = () => {
    if (show5 === false) {
      setshow5(true);
    } else {
      setshow5(false);
    }
  };
  return (
    <div className="faq-section">
      <div className="inner-faq">
        <h1 className="faq-high">FAQS</h1>
        <br />
        <div className="faq-slide" onClick={showslide1}>
          <h1>Does it cost money to start?</h1>
          <img src={ArrowFaq} className={show1 ? "rotate" : ""} alt="" />
        </div>
        <div className={show1 ? " faq-detail" : "show-it "}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            atque ab quasi, debitis accusamus veniam sit magni excepturi id in.
            Amet quibusdam recusandae eum sequi rerum! Provident officiis
            obcaecati iure.
          </p>
        </div>
        <div className="faq-slide" onClick={showslide2}>
          <h1>Does it cost money to start?</h1>
          <img src={ArrowFaq} className={show1 ? "rotate" : ""} alt="" />
        </div>
        <div className={show2 ? " faq-detail" : "show-it "}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            atque ab quasi, debitis accusamus veniam sit magni excepturi id in.
            Amet quibusdam recusandae eum sequi rerum! Provident officiis
            obcaecati iure.
          </p>
        </div>
        <div className="faq-slide" onClick={showslide3}>
          <h1>Does it cost money to start?</h1>
          <img src={ArrowFaq} className={show1 ? "rotate" : ""} alt="" />
        </div>
        <div className={show3 ? " faq-detail" : "show-it "}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            atque ab quasi, debitis accusamus veniam sit magni excepturi id in.
            Amet quibusdam recusandae eum sequi rerum! Provident officiis
            obcaecati iure.
          </p>
        </div>
        <div className="faq-slide" onClick={showslide4}>
          <h1>Does it cost money to start?</h1>
          <img src={ArrowFaq} className={show1 ? "rotate" : ""} alt="" />
        </div>
        <div className={show4 ? " faq-detail" : "show-it "}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            atque ab quasi, debitis accusamus veniam sit magni excepturi id in.
            Amet quibusdam recusandae eum sequi rerum! Provident officiis
            obcaecati iure.
          </p>
        </div>
        <div className="faq-slide" onClick={showslide5}>
          <h1>Does it cost money to start?</h1>
          <img src={ArrowFaq} className={show1 ? "rotate" : ""} alt="" />
        </div>
        <div className={show5 ? " faq-detail" : "show-it "}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            atque ab quasi, debitis accusamus veniam sit magni excepturi id in.
            Amet quibusdam recusandae eum sequi rerum! Provident officiis
            obcaecati iure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
