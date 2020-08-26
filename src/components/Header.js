import React from "react";
import icon from "../Nittygames.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ backgroundColor: "#1b5583", height: "20vh" }}
    >
      <div className="item">
        <img
          src={icon}
          className="firstimg"
          alt="profile"
          style={{ height: "60px", width: "60px" }}
        />
      </div>
      <div className="center-menu">
        <a href="#">
          <h1>Nitty Games</h1>
        </a>
      </div>
      <div className="right menu">
        <div className="item">
          <a href="#">
            <h3>Sign Up</h3>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
