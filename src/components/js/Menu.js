import React, { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import mail_icon from "../img/mail_icon.png";
import phone_icon from "../img/phone_icon.png";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

function Menu(props) {
  const [menuBtn, setMenuBtn] = useState(false);

  function handleClick() {
    setMenuBtn(!menuBtn);
  }

  function handleMouseOver() {
    setMenuBtn(true);
  }

  function handleMouseOut() {
    setMenuBtn(false);
  }

  return (
    <div className="menu_wrapper">
      <div className="left_area_m">
        <div className="mail_m">
          <div className="mail_icon_m">
            <img src={mail_icon} alt="Mail icon" />
          </div>
          <div className="mail_txt_area_m">
            <p>marek.gerszendorf@wp.pl</p>
            <p>Email adress</p>
          </div>
        </div>
        <div className="phone_m">
          <div className="phone_icon_m">
            <img src={phone_icon} alt="Phone icon" />
          </div>
          <div className="phone_txt_area_m">
            <p>+48 724 234 101</p>
            <p>Phone number</p>
          </div>
        </div>
        <div />
      </div>
      <nav
        className={props.burger ? "right_area_m active_burger" : "right_area_m"}
        onClick={() => {
          props.setBurger(false);
          props.disableActiveMenu();
        }}
      >
        <div className="start_m">
          <Link to="/Acme">Start</Link>
        </div>
        <div
          className="about_us_m"
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <button className="about_us_btn_m">
            <p>About us</p>
            <RiArrowUpSLine
              className={menuBtn ? "RiArrowUpSLine_rotate" : "RiArrowUpSLine"}
            />
          </button>
          <ul
            className={
              menuBtn
                ? "header_about_us_btn_active"
                : "header_about_us_btn_nonactive"
            }
          >
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/hotel_services">Hotel services</Link>
            </li>
          </ul>
        </div>
        <div className="rooms_for_rent_m">
          <LinkScroll
            activeClass="active"
            to="rooms_for_rent"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Link to="/Acme">Rooms for rent</Link>
          </LinkScroll>
        </div>
        <div className="help_m">
          <Link to="/help">Help</Link>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
