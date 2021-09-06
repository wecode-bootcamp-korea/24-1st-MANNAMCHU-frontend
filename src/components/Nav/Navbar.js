import React, { Component } from "react";
import "./Navbar.scss";
import Login from "../../pages/Sign/Login/Login";
import Signup from "../../pages/Sign/Signup/Signup";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isLogin: false,
    isSignup: false,
  };
  render() {
    return (
      <>
        <nav className="nav letter">
          <div className="brandName">
            <p>MANNAMCHU</p>
          </div>
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
              <li onClick={() => this.setState({ isLogin: true })}>Login</li>
              <li onClick={() => this.setState({ isSignup: true })}>Join</li>
              <li>
                <Link to="/">Cart</Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.state.isLogin && <Login />}
        {this.state.isSignup && <Signup />}
      </>
    );
  }
}

export default Navbar;
