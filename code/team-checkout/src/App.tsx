import React from "react";
import ReactDOM from "react-dom";
import BlueBasket from "./BlueBasket";
import BlueBuy from './BlueBuy';

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: team-checkout</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <BlueBasket count={5} />
    <BlueBuy />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
