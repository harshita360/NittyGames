import React from "react";
import "./FirstPane.css";

const FirstPane = () => {
  return (
    <div className="container-first">
      <h3 style={{ textAlign: "center" }}>Players</h3>
      <br />
      <div className="ui relaxed divided list">
        <div className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div class="ui checkbox">
              <label style={{ color: "yellow" }}>Shubh123 </label>
              <input type="checkbox" name="example" />
            </div>
          </div>
        </div>
        <div className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div class="ui checkbox">
              <label style={{ color: "cyan" }}>Jai0101 </label>
              <input type="checkbox" name="example" />
            </div>
          </div>
        </div>
        <div className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div class="ui checkbox">
              <label>Himan123</label>
              <input type="checkbox" name="example" />
            </div>
          </div>
        </div>
        <div className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div class="ui checkbox">
              <label>Neer123 </label>
              <input type="checkbox" name="example" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPane;
