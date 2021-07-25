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
  const [personsValue, setPersonsValue] = useState(0);
  const [roomsValue, setRoomsValue] = useState(0);
  const [btn, setBtn] = useState(false);

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

  const datas = props.room_data
    .filter(
      (number) =>
        number.persons.includes(personsValue || " ") &&
        number.bedrooms.includes(roomsValue || " ")
    )
    .map((data) => (
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

  const data_before_filtering = props.room_data.map((data) => (
    <RoomData
      id={data.id}
      key={data.id}
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

  function btnFunction(e) {
    e.preventDefault();
    setBtn(true);
  }

  function changeBtn(e) {
    if (btn) setBtn(false);
  }

  function datasFunction(btn) {
    if (btn) {
      return datas;
    } else {
      return data_before_filtering;
    }
  }

  // function topRatedFilter() {
  //   let rating = props.room_data.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  //   let lastElement = rating.pop();
  //   return rating.unshift(lastElement);
  // }

  // function highestPriceFilter() {
  //   let highest_price = props.room_data.sort((a, b) =>
  //     a.price < b.price ? 1 : -1
  //   );
  //   let lastElement = highest_price.pop();
  //   return highest_price.unshift(lastElement);
  // }

  // function lowestPriceFilter() {
  //   let lowest_price = props.room_data.sort((a, b) =>
  //     a.price > b.price ? 1 : -1
  //   );
  //   let lastElement = lowest_price.pop();
  //   return lowest_price.unshift(lastElement);
  // }

  // console.log(topRatedFilter());
  // console.log(highestPriceFilter());
  // console.log(lowestPriceFilter());

  function topRatedFilter() {
    props.room_data
      .sort((a, b) => (a.rating - b.rating ? 1 : -1))
      .map((data) => (
        <RoomData
          id={data.id}
          key={data.id}
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
  }

  return (
    <Router>
      <section className="rooms_for_rent" id="rooms_for_rent">
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
              type="number"
              placeholder="How many people?"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "How many people?")}
              onChange={(e) => {
                setPersonsValue(e.target.value);
                changeBtn();
              }}
            />
            <input
              className="se_rooms"
              type="number"
              placeholder="How many bedroomscd?"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "How many rooms?")}
              onChange={(e) => {
                setRoomsValue(e.target.value);
                changeBtn();
              }}
            />
            <button className="se_search_btn_mobile" onClick={btnFunction}>
              Search
            </button>
            <button
              type="submit"
              className="se_search_btn_desktop"
              onClick={btnFunction}
            >
              <img src={search_icon_desktop} alt="Search button" />
            </button>
          </form>
        </div>
        <div className="filter_area">
          <div className="text_and_sort_by">
            <p className="properties_found">
              {datasFunction(btn).length} properties found
            </p>
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
          <div
            className={sortByActive ? "top_rated_active" : "top_rated"}
            onClick={topRatedFilter}
          >
            <p>Top rated</p>
          </div>
          <div
            className={sortByActive ? "highest_price_active" : "highest_price"}
            // onClick={highestPriceFilter}
          >
            <p>Highest price</p>
          </div>
          <div
            className={sortByActive ? "lowest_price_active" : "lowest_price"}
            // onClick={lowestPriceFilter}
          >
            <p>Lowest price</p>
            <div></div>
          </div>
        </div>
        <Switch>
          <Route path={[`/Acme/page_${activePage}`, "/"]}>
            <div>
              {datasFunction(btn)[activePage * 4 - 4]}
              {datasFunction(btn)[activePage * 4 - 3]}
              {datasFunction(btn)[activePage * 4 - 2]}
              {datasFunction(btn)[activePage * 4 - 1]}
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
              key={number.toString()}
              className={activePage === number ? "active_page" : "page_number"}
              onClick={() => {
                setActivePage(number);
              }}
              to={
                activePage === 1
                  ? [`/Acme/page_${number}`, "/"]
                  : `/Acme/page_${number}`
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
