import React, { useState, useEffect } from "react";
import slider_img1 from "../img/slider_img1.png";

function Slider(props) {
  const [time, setTime] = useState(20);
  const [flag, setFlag] = useState(0);

  function changeSliderText() {
    if (time === 20) {
      setFlag(0);
    } else if (time === 10) {
      setFlag(1);
    }
  }

  function timer() {
    setTime(time - 1);
    changeSliderText();
  }

  useEffect(() => {
    let progressInterval = null;
    if (time <= 20) {
      progressInterval = setInterval(timer, 1000);
      return () => clearInterval(progressInterval);
    }
  });

  if (time === 0) {
    setTime(20);
  }

  return (
    <section className="slider_wrapper">
      <div className="slider_img">
        <img src={slider_img1} alt="slider images" />
      </div>
      <div className="slider_bar_txt">
        <div className="slider_txt">
          <p>
            {flag === 0 && "Conveniently find what's best for you!"}
            {flag === 1 && "Make yourself at home"}
          </p>
        </div>
        <div className="slider_bar">
          <p>01</p>
          <div className="bar">
            <div
              className={
                flag === 0 ? "progress_bar_beginning" : "progress_bar_end"
              }
            ></div>
          </div>
          <p>02</p>
        </div>
      </div>
    </section>
  );
}

export default Slider;
