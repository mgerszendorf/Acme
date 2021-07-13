import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import hotel_services_img from "../img/hotel_services_img.png";
import employee from "../img/employee.png";
import icon from "../img/hotel_services_icon.png";
import service_1 from "../img/service_1_icon.png";
import service_1_desktop from "../img/service_1_icon_desktop.png";
import service_2 from "../img/service_2_icon.png";
import service_3 from "../img/service_3_icon.png";
import service_4 from "../img/service_4_icon.png";
import service_5 from "../img/service_5_icon.png";
import service_6 from "../img/service_6_icon.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function HotelServices() {
  const [arrowBtn, setArrowBtn] = useState(0);
  const [ourTeamBtn, setOurTeamBtn] = useState(0);

  function leftOurTeamBtn() {
    if (ourTeamBtn > 0) {
      setOurTeamBtn(ourTeamBtn - 1);
    }
  }

  function rightOurTeamBtn() {
    if (ourTeamBtn < our_service_data.length - 1) {
      setOurTeamBtn(ourTeamBtn + 1);
    }
  }

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

  const our_service_data = [
    {
      id: 0,
      img: service_1_desktop,
      img_mobile: service_1,
      title: "Cleaning services",
      txt: "Lorem ipsum dolor sit amdset, consectetur adipiscing elit. Praesent blandit facilisis iaculis. Duis enim lectus.",
      point_txt_1: "Lorem ipsum dolor sit amdset",
      point_txt_2: "Praesent blandit facilisis.",
      point_txt_3: "Facilisis iaculis. Duis enim lectus.",
      point_txt_4: "Consectetur adipiscing elit.",
    },
    {
      id: 1,
      img: service_2,
      title: "Club and bar",
      txt: "Lorem ipsum dolor sit amdset, consectetur adipiscing elit. Praesent blandit facilisis iaculis. Duis enim lectus.",
      point_txt_1: "Lorem ipsum dolor sit amdset",
      point_txt_2: "Praesent blandit facilisis.",
      point_txt_3: "Facilisis iaculis. Duis enim lectus.",
      point_txt_4: "Consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: service_3,
      title: "Animators",
      txt: "Lorem ipsum dolor sit amdset, consectetur adipiscing elit. Praesent blandit facilisis iaculis. Duis enim lectus.",
      point_txt_1: "Lorem ipsum dolor sit amdset",
      point_txt_2: "Praesent blandit facilisis.",
      point_txt_3: "Facilisis iaculis. Duis enim lectus.",
      point_txt_4: "Consectetur adipiscing elit.",
    },
    {
      id: 3,
      img: service_4,
      title: "Café",
      txt: "Lorem ipsum dolor sit amdset, consectetur adipiscing elit. Praesent blandit facilisis iaculis. Duis enim lectus.",
      point_txt_1: "Lorem ipsum dolor sit amdset",
      point_txt_2: "Praesent blandit facilisis.",
      point_txt_3: "Facilisis iaculis. Duis enim lectus.",
      point_txt_4: "Consectetur adipiscing elit.",
    },
    {
      id: 4,
      img: service_5,
      title: "Café",
      txt: "Lorem ipsum dolor sit amdset, consectetur adipiscing elit. Praesent blandit facilisis iaculis. Duis enim lectus.",
      point_txt_1: "Lorem ipsum dolor sit amdset",
      point_txt_2: "Praesent blandit facilisis.",
      point_txt_3: "Facilisis iaculis. Duis enim lectus.",
      point_txt_4: "Consectetur adipiscing elit.",
    },
    {
      id: 5,
      img: service_6,
      title: "Personal trainer",
      txt: "Lorem ipsum dolor sit amdset, consectetur adipiscing elit. Praesent blandit facilisis iaculis. Duis enim lectus.",
      point_txt_1: "Lorem ipsum dolor sit amdset",
      point_txt_2: "Praesent blandit facilisis.",
      point_txt_3: "Facilisis iaculis. Duis enim lectus.",
      point_txt_4: "Consectetur adipiscing elit.",
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

        <div className="our_services">
          <h2>Our services</h2>
          {/* Mobile */}
          <div className="service_mobile">
            <div
              className={
                ourTeamBtn === 0
                  ? "os_left_arrow os_left_arrow_active"
                  : "os_left_arrow"
              }
              onClick={leftOurTeamBtn}
            >
              <MdKeyboardArrowLeft />
            </div>
            <div>
              <img
                className="os_icon"
                src={
                  ourTeamBtn === 0
                    ? our_service_data[ourTeamBtn].img_mobile
                    : our_service_data[ourTeamBtn].img
                }
                alt="Service icon"
              />
              <div className="os_top_section">
                <p className="os_title">{our_service_data[ourTeamBtn].title}</p>
                <p className="os_text_1">{our_service_data[ourTeamBtn].txt}</p>
              </div>
              <div className="points">
                <div className="one_point">
                  <img className="os_icon" src={icon} alt="Point icon" />
                  <p>{our_service_data[ourTeamBtn].point_txt_1}</p>
                </div>
                <div className="one_point">
                  <img className="os_icon" src={icon} alt="Point icon" />
                  <p>{our_service_data[ourTeamBtn].point_txt_2}</p>
                </div>
                <div className="one_point">
                  <img className="os_icon" src={icon} alt="Point icon" />
                  <p>{our_service_data[ourTeamBtn].point_txt_3}</p>
                </div>
                <div className="one_point">
                  <img className="os_icon" src={icon} alt="Point icon" />
                  <p>{our_service_data[ourTeamBtn].point_txt_4}</p>
                </div>
              </div>
            </div>
            <div
              className={
                ourTeamBtn === our_service_data.length - 1
                  ? "os_right_arrow os_right_arrow_active"
                  : "os_right_arrow"
              }
              onClick={rightOurTeamBtn}
            >
              <MdKeyboardArrowRight />
            </div>
          </div>
          {/* Desktop */}
          <div className="our_services_wrapper">
            {our_service_data.map((data) => (
              <div className="service_desktop">
                <div>
                  <img className="os_icon" src={data.img} alt="Service icon" />
                  <div className="os_top_section">
                    <p className="os_title">{data.title}</p>
                    <p className="os_text_1">{data.txt}</p>
                  </div>
                  <div className="points">
                    <div className="one_point">
                      <img className="os_icon" src={icon} alt="Point icon" />
                      <p>{data.point_txt_1}</p>
                    </div>
                    <div className="one_point">
                      <img className="os_icon" src={icon} alt="Point icon" />
                      <p>{data.point_txt_2}</p>
                    </div>
                    <div className="one_point">
                      <img className="os_icon" src={icon} alt="Point icon" />
                      <p>{data.point_txt_3}</p>
                    </div>
                    <div className="one_point">
                      <img className="os_icon" src={icon} alt="Point icon" />
                      <p>{data.point_txt_4}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
