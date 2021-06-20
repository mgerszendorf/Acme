import React from "react";
import arrow from "../img/arrow.png";
import fom_img1 from "../img/fom_img1.png";
import fom_img2 from "../img/fom_img2.png";
import fom_img3 from "../img/fom_img3.png";
import fom_img4 from "../img/fom_img4.png";
import fom_img5 from "../img/fom_img5.png";
import fom_img6 from "../img/fom_img6.png";

function FindOutMore() {
  return (
    <div className="find_out_more_wrapper">
      <div className="left_area_fom">
        <h1>FIND OUT MORE</h1>
        <h2>Saas metrics dashboard</h2>
        <p className="left_text_fom">
          Lorem ipsum dolor sit amdset, consectetur adipiscing elit. Praesent
          blandit facilisis iaculis. Duis enim lectus, blandit non urna non,
          tempor pretium dui ipsum dolor sit amet.
        </p>
        <div className="statistics">
          <div className="apartments">
            <p className="statistics_number">160</p>
            <p className="statistics_txt">Apartments</p>
          </div>
          <div className="year">
            <p className="statistics_number">2002</p>
            <p className="statistics_txt">Year of creation</p>
          </div>
          <div className="guests">
            <p className="statistics_number">82K</p>
            <p className="statistics_txt">Guests served</p>
          </div>
        </div>
        <div className="more_information_btn">
          <p>More information</p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="right_area_fom">
        <div className="first_column">
          <img src={fom_img1} alt="Hotel photos" />
          <img src={fom_img4} alt="Hotel photos" />
        </div>
        <div className="second_column">
          <img src={fom_img2} alt="Hotel photos" />
          <img src={fom_img5} alt="Hotel photos" />
        </div>
        <div className="third_column">
          <img src={fom_img3} alt="Hotel photos" />
          <img src={fom_img6} alt="Hotel photos" />
        </div>
      </div>
    </div>
  );
}

export default FindOutMore;
