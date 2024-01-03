import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Recommendations from "./Recommendations";

const App = () => (
  <div className="container">
    <div>Name: team-inspire</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>

    <Recommendations recos={['1','2','3']}></Recommendations>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
