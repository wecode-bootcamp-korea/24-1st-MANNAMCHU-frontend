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

  handleActive = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  render() {
    console.log(this.state.isLogin);
    return (
      <>
        <nav className="nav letter">
          <div className="mainMenu">
            <ul>
              <li className="brandName">MANNAMCHU</li>
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
        {this.state.isLogin && (
          <Login
            isLogin={this.state.isLogin}
            handleActive={this.handleActive}
          />
        )}
        {this.state.isSignup && <Signup />}
      </>
    );
  }
}

export default Navbar;
