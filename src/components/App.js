import React from "react";
import FirstPane from "./FirstPane";
import ThirdPane from "./ThirdPane";
import SecondPane from "./SecondPane";
import Header from "./Header";
import "./App.css";
import bg from "../background.jpeg";
import Footer from "./Footer";

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <div className="container-title">
        <h2 style={{ textAlign: "center", padding: "5px" }}>Dumb Charades</h2>
      </div>
      <div className="flexbox-container">
        <div className="container-individual">
          <FirstPane />
        </div>
        <div className="container-individual">
          <SecondPane />
        </div>
        <div className="container-individual">
          <ThirdPane />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
