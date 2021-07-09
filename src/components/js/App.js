import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./TopBar";
import Slider from "./Slider";
import Menu from "./Menu";
import FindOutMore from "./FindOutMore";
import RoomsForRent from "./RoomsForRent";
import Footer from "./Footer";
import FAQ from "./FAQ";
import HotelServices from "./HotelServices";
import "../css/App.css";
import "../css/Header.css";
import "../css/DataRangePicker.css";
import "../css/FindOutMore.css";
import "../css/RoomsForRent.css";
import "../css/RoomData.css";
import "../css/Footer.css";
import "../css/FAQ.css";
import "../css/HotelServices.css";
import hotel_room_img1 from "../img/hotel_room_img1.png";
import hotel_room_img2 from "../img/hotel_room_img2.png";
import hotel_room_img3 from "../img/hotel_room_img3.png";
import hotel_room_img1_desktop from "../img/fod_img1.png";
import hotel_room_img2_desktop from "../img/fod_img2.png";
import hotel_room_img3_desktop from "../img/fod_img3.png";

function App() {
  const [burger, setBurger] = useState(false);

  function handleClickBurger() {
    setBurger(!burger);
  }

  const room_data = [
    {
      id: 0,
      name: "37th Floor Luxury Apartment",
      image: hotel_room_img1,
      imageDesktop: hotel_room_img1_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$164",
      rating: "4,7",
      bedrooms: "2 bedrooms",
      bathroom: "1 bathroom",
      surface: "124m",
      persons: "4 persons",
    },
    {
      id: 1,
      name: "14th Floor Luxury Apartment",
      image: hotel_room_img2,
      imageDesktop: hotel_room_img2_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$154",
      rating: "3,4",
      bedrooms: "1 bedrooms",
      bathroom: "1 bathroom",
      surface: "74m",
      persons: "2 persons",
    },
    {
      id: 2,
      name: "26th Floor Luxury Apartment",
      image: hotel_room_img3,
      imageDesktop: hotel_room_img3_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$202",
      rating: "4,2",
      bedrooms: "2 bedrooms",
      bathroom: "1 bathroom",
      surface: "114m",
      persons: "4 persons",
    },
    {
      id: 3,
      name: "44th Floor Luxury Apartment",
      image: hotel_room_img1,
      imageDesktop: hotel_room_img1_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$199",
      rating: "5,0",
      bedrooms: "1 bedrooms",
      bathroom: "1 bathroom",
      surface: "62m",
      persons: "2 persons",
    },
    {
      id: 4,
      name: "57th Floor Luxury Apartment",
      image: hotel_room_img1,
      imageDesktop: hotel_room_img1_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$164",
      rating: "4,7",
      bedrooms: "2 bedrooms",
      bathroom: "1 bathroom",
      surface: "124m",
      persons: "4 persons",
    },
    {
      id: 5,
      name: "34th Floor Luxury Apartment",
      image: hotel_room_img2,
      imageDesktop: hotel_room_img2_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$154",
      rating: "3,4",
      bedrooms: "1 bedrooms",
      bathroom: "1 bathroom",
      surface: "74m",
      persons: "2 persons",
    },
    {
      id: 6,
      name: "11th Floor Luxury Apartment",
      image: hotel_room_img3,
      imageDesktop: hotel_room_img3_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$202",
      rating: "4,2",
      bedrooms: "2 bedrooms",
      bathroom: "1 bathroom",
      surface: "114m",
      persons: "4 persons",
    },
    {
      id: 7,
      name: "15th Floor Luxury Apartment",
      image: hotel_room_img1,
      imageDesktop: hotel_room_img1_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$199",
      rating: "5,0",
      bedrooms: "1 bedrooms",
      bathroom: "1 bathroom",
      surface: "62m",
      persons: "2 persons",
    },
    {
      id: 8,
      name: "96th Floor Luxury Apartment",
      image: hotel_room_img1,
      imageDesktop: hotel_room_img1_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$164",
      rating: "4,7",
      bedrooms: "2 bedrooms",
      bathroom: "1 bathroom",
      surface: "124m",
      persons: "4 persons",
    },
    {
      id: 9,
      name: "13th Floor Luxury Apartment",
      image: hotel_room_img2,
      imageDesktop: hotel_room_img2_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$154",
      rating: "3,4",
      bedrooms: "1 bedrooms",
      bathroom: "1 bathroom",
      surface: "74m",
      persons: "2 persons",
    },
    {
      id: 10,
      name: "39th Floor Luxury Apartment",
      image: hotel_room_img3,
      imageDesktop: hotel_room_img3_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$202",
      rating: "4,2",
      bedrooms: "2 bedrooms",
      bathroom: "1 bathroom",
      surface: "114m",
      persons: "4 persons",
    },
    {
      id: 11,
      name: "19th Floor Luxury Apartment",
      image: hotel_room_img1,
      imageDesktop: hotel_room_img1_desktop,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque rhoncus tristique habitasse pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$199",
      rating: "5,0",
      bedrooms: "1 bedrooms",
      bathroom: "1 bathroom",
      surface: "62m",
      persons: "2 persons",
    },
  ];

  function topRatedFilter() {
    let rating = room_data.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    let lastElement = rating.pop();
    return rating.unshift(lastElement);
  }

  function highestPriceFilter() {
    let highest_price = room_data.sort((a, b) => (a.price < b.price ? 1 : -1));
    let lastElement = highest_price.pop();
    return highest_price.unshift(lastElement);
  }

  function lowestPriceFilter() {
    let lowest_price = room_data.sort((a, b) => (a.price > b.price ? 1 : -1));
    let lastElement = lowest_price.pop();
    return lowest_price.unshift(lastElement);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <section className="header">
              <TopBar handleClickBurger={handleClickBurger} />
              <Route exact path="/">
                <Slider />
              </Route>
              <Menu burger={burger} />
            </section>
          </Route>
        </Switch>
        <Route exact path="/">
          <FindOutMore />
        </Route>
        <Route exact path="/">
          <RoomsForRent
            room_data={room_data}
            topRatedFilter={topRatedFilter}
            highestPriceFilter={highestPriceFilter}
            lowestPriceFilter={lowestPriceFilter}
          />
        </Route>
        <Route exact path="/FAQ">
          <FAQ />
        </Route>
        <Route exact path="/hotel_services">
          <HotelServices />
        </Route>
        <Route path="/">{/* <Footer /> */}</Route>
      </Router>
    </div>
  );
}

export default App;
