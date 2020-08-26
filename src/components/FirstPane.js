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
            <i className="large middle aligned icon pencil alterante" />
          </div>
        </div>
        <div className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div class="ui checkbox">
              <label style={{ color: "cyan" }}>Jaiya2101</label>
              <input type="checkbox" name="example" />
            </div>
            <i className="large middle aligned icon arrow alternate circle up outline" />
          </div>
        </div>
        <div className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div class="ui checkbox">
              <label style={{ color: "white" }}>Himan123</label>
              <input type="checkbox" name="example" />
            </div>
            <i className="large middle aligned icon arrow alternate circle up outline" />
          </div>
        </div>
        <div className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div class="ui checkbox">
              <label style={{ color: "white" }}>Neeer123 </label>
              <input type="checkbox" name="example" />
            </div>
            <i className="large middle aligned icon arrow alternate circle up outline" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPane;
