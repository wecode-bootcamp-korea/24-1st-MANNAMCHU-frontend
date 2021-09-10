import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SIGN_IN } from "../../../config";
import "./Login.scss";
import logo from "../logo.png";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isActive: true,
    };
  }

  handleEmailInput = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      password: e.target.value,
    });
  };

  checkValid = () => {
    const { email, password } = this.state;
    return (
      email.includes("@") &&
      email.includes(".") &&
      password.length >= 8 &&
      password.length <= 20
    );
  };

  handleLogin = () => {
    fetch(`${SIGN_IN}`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          this.props.history.push("/");
        } else {
          alert("이메일, 비밀번호를 다시 입력해 주세요.");
        }
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login">
        <div
          className="loginBackground"
          onClick={this.props.handleActive}
        ></div>
        <div className="loginContainer letter">
          <img alt="logo" src={logo} />
          <h1>방문해 주셔서 감사합니다</h1>
          <div className="loginInputContainer">
            <input
              type="text"
              placeholder="이메일"
              className="inputEmail"
              onChange={this.handleEmailInput}
            />
            {email && !(email.includes("@") && email.includes(".")) && (
              <div className="warning">
                이메일 형식에 맞게 입력해 주세요. 예) aa@a.a
              </div>
            )}
          </div>
          <div className="loginInputContainer">
            <input
              type="password"
              placeholder="비밀번호"
              className="inputPw"
              onChange={this.handlePwInput}
            />
            {password && (password.length < 8 || password.length > 20) && (
              <div className="warning">비밀번호는 8~20글자입니다.</div>
            )}
          </div>
          <button
            className={`loginBtn ${this.checkValid() ? "" : "disabled"}`}
            type="button"
            onClick={this.handleLogin}
            disabled={!this.checkValid}
          >
            로그인
          </button>
          <div className="toJoin">
            <span onClick={this.props.handleChangeModal}>회원 가입</span>
          </div>
          <div className="copyRight">
            © mannamchu, Co., Ltd.. All Rights Free
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
