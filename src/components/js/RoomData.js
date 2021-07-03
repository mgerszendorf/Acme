import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

const RoomData = (props) => {
  return (
    <section className="hotel_room">
      <div className="hr_img">
        <img
          className="hr_img_mobile"
          src={props.image}
          alt="Hotel room photography"
        />
        <img
          className="hr_img_desktop"
          src={props.imageDesktop}
          alt="Hotel room photography"
        />
        <div className="hr_icons">
          <div className="hr_rating">
            <AiFillStar className="hr_rating_icon" />
            <p>{props.rating}</p>
          </div>
          <div className="hr_heart">
            <AiFillHeart className="hr_heart_icon" />
          </div>
        </div>
      </div>
      <div className="hr_left_area">
        <div className="room_name">
          <p>{props.name}</p>
        </div>
        <div className="hr_text">
          <p>{props.text}</p>
        </div>
        <div className="hr_bottom_area">
          <p>{props.bedrooms}</p>
          <GoPrimitiveDot className="dot" />
          <p>{props.bathroom}</p>
          <GoPrimitiveDot className="dot" />
          <p>{props.surface}</p>
          <GoPrimitiveDot className="dot" />
          <p>{props.persons}</p>
        </div>
      </div>
      <div className="hr_right_area">
        <div className="hr_price">
          <p>
            {props.price} <span>/ per night</span>
          </p>
        </div>
        <div className="book_now_btn">
          <p>Book now</p>
        </div>
      </div>
    </section>
  );
};

export default RoomData;
