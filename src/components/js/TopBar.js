// https://ej2.syncfusion.com/react/documentation/daterangepicker/range-selection/

import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import search_icon from "../img/search_icon.png";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Link as LinkScroll } from "react-scroll";

function TopBar(props) {
  return (
    <div className="top_bar_wrapper">
      <Link className="logo_tb" to="/Acme">
        <img src={logo} alt="Acme logo" />
      </Link>
      <LinkScroll
        activeClass="active"
        to="rooms_for_rent"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <form className="top_form_tb">
          <div>
            <DateRangePickerComponent
              className="date_range_picker"
              placeholder="Check in - Check out"
            ></DateRangePickerComponent>
          </div>
          <input
            className="persons_tb"
            type="text"
            placeholder="How many people?"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "How many people?")}
          />
          <input
            className="rooms_tb"
            type="text"
            placeholder="How many rooms?"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "How many rooms?")}
          />
          <button className="search_btn_tb">
            <img src={search_icon} alt="Search button" />
          </button>
        </form>
      </LinkScroll>
      <div
        className="burger_tb"
        onClick={() => {
          props.handleClickBurger();
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default TopBar;
