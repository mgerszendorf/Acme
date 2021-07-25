import React, { useState } from "react";
import send_img from "../img/send_img.png";

function Message() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState([]);

  function messageFunction(e) {
    e.preventDefault();
    setText(message);
  }

  return (
    <section className="message">
      <div className="message_top_txt">
        <h1>CONTACT US</h1>
        <h2>Messages</h2>
      </div>
      <div className="message_area">
        <div className="place_for_messages">
          <div className="hotel_message">
            <p>Hello!</p>
            <p>How can we help you?</p>
          </div>
          <div className={text.length > 0 ? "user_message" : null}>
            <p>{text}</p>
          </div>
        </div>
        <form className="message_form">
          <input
            className="message_text_area"
            type="text"
            placeholder="Enter your message..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter your message...")}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit" className="send_btn" onClick={messageFunction}>
            <img src={send_img} alt="Send message button" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Message;
