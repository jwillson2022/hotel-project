import React from "react";
import logo from "./images/icon.png";
function header() {
  return (
    <div className="main-div">
      <img src={logo} alt="hotel-icon" className="app-logo" />
      <header className="App-header">CYF Hotel</header>
      <nav className="nav-bar">
        <ul className="list">
          <li className="list-items">Opt-1</li>
          <li className="list-items">Opt-2</li>
          <li className="list-items">Opt-3</li>
        </ul>
      </nav>
    </div>
  );
}

export default header;
