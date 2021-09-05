import React, { Component } from "react";
import Login from "../../pages/Sign/Login/Login";
import "./Navbar.scss";

class Navbar extends Component {
  state = {
    isLogin: false,
  };
  render() {
    return (
      <div className="navbarMenu">
        crying...
        <button onClick={() => this.setState({ isLogin: true })}>Login</button>
        {this.state.isLogin && <Login />}
      </div>
    );
  }
}

export default Navbar;
