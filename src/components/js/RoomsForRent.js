import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import search_icon_desktop from "../img/search_icon_desktop.png";
import RoomData from "./RoomData";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

function RoomsForRent(props) {
  const [activePage, setActivePage] = useState(1);
  const [sortByActive, setSortByActive] = useState(false);
  let page_number_array = [];

  function changePage() {
    let j = 0;
    for (let i = 1; i <= props.room_data.length - 1; i = i + 4) {
      page_number_array[j] = Math.round(i / 4 + 1);
      j++;
    }
  }
  changePage();

  function sortByActiveFunction() {
    setSortByActive(!sortByActive);
  }

  const datas = props.room_data.map((data) => (
    <RoomData
      id={data.id}
      name={data.name}
      image={data.image}
      imageDesktop={data.imageDesktop}
      text={data.text}
      price={data.price}
      rating={data.rating}
      bedrooms={data.bedrooms}
      bathroom={data.bathroom}
      surface={data.surface}
      persons={data.persons}
    />
  ));

  return (
    <Router>
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
            <p className="properties_found">{datas.length} properties found</p>
            <div
              className={sortByActive ? "sort_by_active" : "sort_by"}
              onClick={sortByActiveFunction}
            >
              <p>Sort by</p>
              <RiArrowUpSLine
                className={
                  sortByActive ? "sort_by_arrow_active" : "sort_by_arrow"
                }
              />
            </div>
          </div>
          <div className={sortByActive ? "top_rated_active" : "top_rated"}>
            <p onClick={console.log(props.topRatedFilter)}>Top rated</p>
          </div>
          <div
            className={sortByActive ? "highest_price_active" : "highest_price"}
            onClick={props.highestPriceFilter}
          >
            <p>Highest price</p>
          </div>
          <div
            className={sortByActive ? "lowest_price_active" : "lowest_price"}
            onClick={props.lowestPriceFilter}
          >
            <p>Lowest price</p>
            <div></div>
          </div>
        </div>
        <Switch>
          <Route path={[`/page_${activePage}`, "/"]}>
            <div>
              {datas[activePage * 4 - 4]}
              {datas[activePage * 4 - 3]}
              {datas[activePage * 4 - 2]}
              {datas[activePage * 4 - 1]}
            </div>
          </Route>
        </Switch>
        <div className="change_page">
          <div
            className="left_arrow"
            onClick={() => setActivePage(activePage > 1 ? activePage - 1 : 1)}
          >
            <MdKeyboardArrowLeft />
          </div>
          {page_number_array.map((number) => (
            <Link
              className={activePage === number ? "active_page" : "page_number"}
              onClick={() => {
                setActivePage(number);
              }}
              to={
                activePage === 1 ? [`/page_${number}`, "/"] : `/page_${number}`
              }
            >
              {number}
            </Link>
          ))}
          <div
            className="right_arrow"
            onClick={() =>
              setActivePage(
                activePage < page_number_array.length
                  ? activePage + 1
                  : page_number_array.length
              )
            }
          >
            <MdKeyboardArrowRight />
          </div>
          <div className="showing_pages">
            <p>
              Showing: {activePage}-{page_number_array.length}
            </p>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default RoomsForRent;
