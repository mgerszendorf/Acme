import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./TopBar";
import Slider from "./Slider";
import Menu from "./Menu";
import FindOutMore from "./FindOutMore";
import RoomsForRent from "./RoomsForRent";
import Footer from "./Footer";
import "../css/App.css";
import "../css/Header.css";
import "../css/DataRangePicker.css";
import "../css/FindOutMore.css";
import "../css/RoomsForRent.css";
import "../css/RoomData.css";
import "../css/Footer.css";
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
      id: 5,
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
      id: 6,
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
      id: 7,
      name: "0th Floor Luxury Apartment",
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
          <RoomsForRent room_data={room_data} />
        </Route>
        <Route path="/">{/* <Footer /> */}</Route>
      </Router>
    </div>
  );
}

export default App;
