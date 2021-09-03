import React, { Component } from "react";
import Login from "../Sign/Login/Login";
import "./Main.scss";

class Main extends Component {
  state = {
    isLogin: false,
  };
  render() {
    return (
      <div className="main">
        crying...
        <button onClick={() => this.setState({ isLogin: true })}>로그인</button>
        {this.state.isLogin && <Login />}
      </div>
    );
  }
}

export default Main;
