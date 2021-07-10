import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import hotel_services_img from "../img/hotel_services_img.png";
import employee from "../img/employee.png";
import icon from "../img/hotel_services_icon.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function HotelServices() {
  const [arrowBtn, setArrowBtn] = useState(0);

  function leftArrowBtnFunction() {
    if (arrowBtn > 0) {
      setArrowBtn(arrowBtn - 1);
    }
  }

  function rightArrowBtnFunction() {
    if (arrowBtn < our_team_data.length - 1) {
      setArrowBtn(arrowBtn + 1);
    }
  }

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

  const our_team_data = [
    {
      id: 0,
      name: "Kevin Brinst",
      proffesion: "BARISTA",
      text_1:
        "When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website.",
      text_2:
        "When applied to building block a website or similar work product, a Visual Guide.",
      experience: "12 yrs",
      year_of_creation: "2002",
      guests_served: "82K",
    },
    {
      id: 1,
      name: "Tamia Mayo",
      proffesion: "WAITRESS",
      text_1:
        "When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website.",
      text_2:
        "When applied to building block a website or similar work product, a Visual Guide.",
      experience: "12 yrs",
      year_of_creation: "2002",
      guests_served: "82K",
    },
    {
      id: 2,
      name: "Joely Hernandez",
      proffesion: "COOK",
      text_1:
        "When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website.",
      text_2:
        "When applied to building block a website or similar work product, a Visual Guide.",
      experience: "12 yrs",
      year_of_creation: "2002",
      guests_served: "82K",
    },
    {
      id: 3,
      name: "Anabella Huffman",
      proffesion: "RECEPTIONIST",
      text_1:
        "When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website.",
      text_2:
        "When applied to building block a website or similar work product, a Visual Guide.",
      experience: "12 yrs",
      year_of_creation: "2002",
      guests_served: "82K",
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
        <div className="our_team">
          <div className="our_team_wrapper">
            <div className="ot_top_section">
              <h2>Powerful features for working smarter</h2>
            </div>
            <div className="ot_main_content">
              <div
                className={
                  arrowBtn === 0
                    ? "ot_left_arrow_style ot_left_arrow"
                    : "ot_left_arrow"
                }
                onClick={leftArrowBtnFunction}
              >
                <MdKeyboardArrowLeft />
              </div>

              <div className="ot_left_area">
                <p className="ot_name">{our_team_data[arrowBtn].name}</p>
                <p className="profession">
                  {our_team_data[arrowBtn].proffesion}
                </p>
                <p className="ot_left_area_txt_1">
                  {our_team_data[arrowBtn].text_1}
                </p>
                <p className="ot_left_area_txt_2">
                  {our_team_data[arrowBtn].text_2}
                </p>
                <div className="ot_information">
                  <div className="experience">
                    <p>
                      <span>{our_team_data[arrowBtn].experience}</span>
                      experience
                    </p>
                  </div>
                  <div className="year_of_creation">
                    <p>
                      <span>{our_team_data[arrowBtn].year_of_creation}</span>
                      year of creation
                    </p>
                  </div>
                  <div className="guest_served">
                    <p>
                      <span>{our_team_data[arrowBtn].guests_served}</span>guests
                      served
                    </p>
                  </div>
                </div>
              </div>

              <div className="ot_right_area">
                <img
                  className="employee_img"
                  src={employee}
                  alt="Our employee"
                />
              </div>
              <div
                className={
                  arrowBtn === our_team_data.length - 1
                    ? "ot_right_arrow_style ot_right_arrow"
                    : "ot_right_arrow"
                }
                onClick={rightArrowBtnFunction}
              >
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default HotelServices;
