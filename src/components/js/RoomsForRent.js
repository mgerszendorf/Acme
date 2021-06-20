import React from "react";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import search_icon_desktop from "../img/search_icon_desktop.png";

function RoomsForRent(props) {
  return (
    <section className="rooms_for_rent">
      <div className="search_engine">
        <div className="se_title">
          <p>What are you looking for?</p>
        </div>
        <form className="se_form">
          <div>
            <DateRangePickerComponent
              className="date_range_picker"
              placeholder="Check in - Check out"
            ></DateRangePickerComponent>
          </div>
          <input
            className="se_persons"
            type="text"
            placeholder="How many people?"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "How many people?")}
          />
          <input
            className="se_rooms"
            type="text"
            placeholder="How many rooms?"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "How many rooms?")}
          />
          <button className="se_search_btn_mobile">Search</button>
          <button className="se_search_btn_desktop">
            <img src={search_icon_desktop} alt="Search button" />
          </button>
        </form>
      </div>
      <div className="filter_area">
        <div className="text_and_sort_by">
          <p>651 properties found</p>
          <div className="sort_by">
            <p>Sort by</p>
            <div></div>
          </div>
        </div>
        <div className="popular">
          <p>Popular</p>
        </div>
        <div className="top_rated">
          <p>Top rated</p>
        </div>
        <div className="sort_by_desktop">
          <p>Sort by</p>
          <div></div>
        </div>
        <div className="categories">
          <p>Categories</p>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default RoomsForRent;
