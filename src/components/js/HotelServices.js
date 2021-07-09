import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import hotel_services_img from "../img/hotel_services_img.png";
import service_1_icon from "../img/service_1_icon.png";
import service_2_icon from "../img/service_2_icon.png";
import service_3_icon from "../img/service_3_icon.png";
import service_4_icon from "../img/service_4_icon.png";
import service_5_icon from "../img/service_5_icon.png";
import service_6_icon from "../img/service_6_icon.png";
import icon from "../img/hotel_services_icon.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function HotelServices() {
  const adventages_team = [
    {
      id: 0,
      text: "Our team consists of professionals",
    },
    {
      id: 1,
      text: "They will help you in any situation",
    },
    {
      id: 2,
      text: "Everyone is involved in their work",
    },
    {
      id: 3,
      text: "We finish what we do",
    },
  ];

  return (
    <Router>
      <section className="hotel_services">
        <div className="hs_heading">
          <h1>ABOUT US</h1>
          <h2>Hotel services</h2>
        </div>
        <div className="hs_top_area">
          <img
            className="photo_cleaner"
            src={hotel_services_img}
            alt="Woman arranging towels"
          />
          <div className="hs_right_side">
            <h2>Advantages of our team</h2>
            <div className="adventages_team">
              {adventages_team.map((data) => (
                <div>
                  <img src={icon} alt="Icon" />
                  <p>{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="our_services">
          <h2>Our services</h2>
          <div className="service_area">
            <MdKeyboardArrowLeft className="sa_left_arrow" />
            <div className="service_1">
              <img src={service_1_icon} alt="Service icon" />
              <h2>Cleaning services</h2>
              <p className="service_text">
                Lorem ipsum dolor sit amdset, consectetur adipiscing elit.
                Praesent blandit facilisis iaculis. Duis enim lectus.
              </p>
              <div className="service_bottom_area">
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Lorem ipsum dolor sit amdset</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Praesent blandit facilisis.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Facilisis iaculis. Duis enim lectus.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="service_2">
              <img src={service_2_icon} alt="Service icon" />
              <h2>Club and bar</h2>
              <p className="service_text">
                Lorem ipsum dolor sit amdset, consectetur adipiscing elit.
                Praesent blandit facilisis iaculis. Duis enim lectus.
              </p>
              <div className="service_bottom_area">
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Lorem ipsum dolor sit amdset</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Praesent blandit facilisis.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Facilisis iaculis. Duis enim lectus.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="service_3">
              <img src={service_3_icon} alt="Service icon" />
              <h2>Animators</h2>
              <p className="service_text">
                Lorem ipsum dolor sit amdset, consectetur adipiscing elit.
                Praesent blandit facilisis iaculis. Duis enim lectus.
              </p>
              <div className="service_bottom_area">
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Lorem ipsum dolor sit amdset</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Praesent blandit facilisis.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Facilisis iaculis. Duis enim lectus.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="service_4">
              <img src={service_4_icon} alt="Service icon" />
              <h2>Café</h2>
              <p className="service_text">
                Lorem ipsum dolor sit amdset, consectetur adipiscing elit.
                Praesent blandit facilisis iaculis. Duis enim lectus.
              </p>
              <div className="service_bottom_area">
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Lorem ipsum dolor sit amdset</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Praesent blandit facilisis.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Facilisis iaculis. Duis enim lectus.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="service_5">
              <img src={service_5_icon} alt="Service icon" />
              <h2>Room service</h2>
              <p className="service_text">
                Lorem ipsum dolor sit amdset, consectetur adipiscing elit.
                Praesent blandit facilisis iaculis. Duis enim lectus.
              </p>
              <div className="service_bottom_area">
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Lorem ipsum dolor sit amdset</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Praesent blandit facilisis.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Facilisis iaculis. Duis enim lectus.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="service_6">
              <img src={service_6_icon} alt="Service icon" />
              <h2>Personal trainer</h2>
              <p className="service_text">
                Lorem ipsum dolor sit amdset, consectetur adipiscing elit.
                Praesent blandit facilisis iaculis. Duis enim lectus.
              </p>
              <div className="service_bottom_area">
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Lorem ipsum dolor sit amdset</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Praesent blandit facilisis.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Facilisis iaculis. Duis enim lectus.</p>
                </div>
                <div>
                  <img src={icon} alt="Icon" />
                  <p>Consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <MdKeyboardArrowRight className="sa_right_arrow" />
          </div>
        </div>
      </section>
    </Router>
  );
}

export default HotelServices;
