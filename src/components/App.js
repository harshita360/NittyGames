import React from "react";
import FirstPane from "./FirstPane";
import ThirdPane from "./ThirdPane";
import SecondPane from "./SecondPane";
import Header from "./Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default App;
