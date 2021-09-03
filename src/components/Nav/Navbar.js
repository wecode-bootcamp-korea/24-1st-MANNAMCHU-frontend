import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav letter">
        <div className="mainMenu">
          <ul>
            <li>
              <Link to="/">market</Link>
            </li>
            <li>
              <Link to="/">menu 1</Link>
            </li>{" "}
            <li>menu 2</li>
            <li>menu 3</li>
          </ul>
        </div>
        <div className="asideMenu">
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Join</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
