import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../../../config";
import "./Login.scss";
import logo from "../logo.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailVal: "",
      pwVal: "",
      isActive: true,
    };
  }

  handleEmailInput = e => {
    this.setState({
      emailVal: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  checkValid = () => {
    const { emailVal, pwVal } = this.state;
    return (
      emailVal.includes("@" && ".") && pwVal.length >= 8 && pwVal.length <= 20
    );
  };

  handleLogin = () => {
    fetch(`${SIGN_IN}`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.emailVal,
        password: this.state.pwVal,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          // this.props.history.push("/");
        } else {
          alert("이메일, 비밀번호를 다시 입력해 주세요.");
        }
      });
  };

  render() {
    const { emailVal, pwVal } = this.state;
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
            {emailVal && !emailVal.includes("@" && ".") && (
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
            {pwVal && pwVal.length < 8 && (
              <div className="warning">비밀번호는 8~20글자입니다.</div>
            )}
          </div>
          <button
            className={`loginBtn ${this.checkValid() ? "" : "disabled"}`}
            type="button"
            onClick={this.handleLogin}
          >
            로그인
          </button>
          <div className="toJoin">
            <Link to="/signup">회원 가입</Link>
          </div>
          <div className="copyRight">
            © mannamchu, Co., Ltd.. All Rights Free
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
