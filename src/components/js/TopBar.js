// https://ej2.syncfusion.com/react/documentation/daterangepicker/range-selection/

import React from "react";
import logo from "../img/logo.png";
import search_icon from "../img/search_icon.png";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

function TopBar() {
  return (
    <div className="top_bar_wrapper">
      <div className="logo_tb">
        <img src={logo} alt="Acme logo" />
      </div>
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
      <div className="burger_tb">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default TopBar;
