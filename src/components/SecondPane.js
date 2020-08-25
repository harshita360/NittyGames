import React from "react";
import "./SecondPane.css";

const SecondPane = () => {
  return (
    <div className="container-second">
      <div className="ui relaxed divided list">
        <div
          className="item"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <div className="content">
            <label style={{ color: "white", fontSize: "15px" }}>
              Room Number
            </label>

            <label
              style={{ color: "white", marginLeft: "150px", fontSize: "15px" }}
            >
              PQR
            </label>
          </div>
        </div>

        <div
          className="item"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <div className="content">
            <label style={{ color: "white", fontSize: "15px" }}>
              Host Name
            </label>

            <label
              style={{ color: "white", marginLeft: "150px", fontSize: "15px" }}
            >
              Shubh123
            </label>
          </div>
        </div>
        <div
          className="item"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <div className="content">
            <label style={{ color: "white", fontSize: "15px" }}>
              Number of Players
            </label>

            <label
              style={{ color: "white", marginLeft: "150px", fontSize: "15px" }}
            >
              4
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="ui relaxed divided list">
        <div className="item">
          <div className="content">
            <div class="ui checkbox">
              <label>
                <h4>Timer</h4>
              </label>
              <input type="checkbox" name="example" />
            </div>
          </div>
        </div>

        <div className="item">
          <div className="content">
            <div class="ui checked checkbox">
              <label>
                <h4>Hollywood</h4>
              </label>
              <input type="checkbox" name="example" checked="" />
            </div>
          </div>
        </div>

        <div className="item">
          <div className="content">
            <div class="ui checkbox">
              <label>
                <h4>Bollywood</h4>
              </label>
              <input type="checkbox" name="example" />
            </div>
          </div>
        </div>
      </div>

      <div class="ui form">
        <div class="grouped fields">
          <label>Choose team</label>

          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Red</label>
            </div>
          </div>

          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Yellow</label>
            </div>
          </div>
        </div>
      </div>
      <br />
      <button class="ui button">Start Game?</button>
    </div>
  );
};

export default SecondPane;
