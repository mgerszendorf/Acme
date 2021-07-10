import React from "react";
import { Link } from "react-router-dom";
import facebook_icon from "./../img/facebook.png";
import deviantart_icon from "./../img/deviantart.png";
import youtube_icon from "./../img/youtube.png";
import twitter_icon from "./../img/twitter.png";

const Footer = () => {
  return (
    <section className="footer_wrapper">
      <div className="footer_top_area">
        <div className="fta_text">
          <p>FIND OUT MORE</p>
          <p>Try something fresh and new right now.</p>
        </div>
        <div className="fta_email_area">
          <form>
            <input
              className="email"
              type="text"
              placeholder="Your e-mail address"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Your e-mail address")}
            />
            <button className="subscribe_btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer_bottom_area">
        <div className="bottom_menu_and_social_media">
          <div className="social_media">
            <a href="https://www.facebook.com/">
              <img src={facebook_icon} alt="Facebook icon" />
            </a>
            <a href="https://www.deviantart.com/">
              <img src={deviantart_icon} alt="Deviantart icon" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtube_icon} alt="Youtube icon" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter_icon} alt="Twitter icon" />
            </a>
          </div>
          <nav className="bottom_menu">
            <ul class="menu_links">
              <li>
                <Link to="/Acme">Start</Link>
              </li>
              <li>
                <Link to="/hotel_services">About us</Link>
              </li>
              <li>
                <Link to="/rooms_for_rent">Rooms for Rent</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer_text">
          <p>Copyright © 2010-2020</p>
          <p>Terms & Conditions</p>
          <p>Privacy & Cookies</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
