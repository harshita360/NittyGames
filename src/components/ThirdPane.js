import React from "react";
import "./ThirdPane.css";

const ThirdPane = () => {
  return (
    <div className="container-third">
      <h3 style={{ textAlign: "center" }}>Chats</h3>
      <div className="container-child">
        <br />
        <div class="ui yellow message" style={{ width: "10vw", margin: "5px" }}>
          Yellow
        </div>
        <div
          class="ui green  message"
          style={{ width: "10vw", marginLeft: "55px" }}
        >
          Yellow
        </div>
        <div class="ui yellow message" style={{ width: "10vw", margin: "5px" }}>
          Yellow
        </div>
      </div>

      <button class="ui button" style={{ margin: "4px" }}>
        Type Here...
      </button>
    </div>
  );
};

export default ThirdPane;
