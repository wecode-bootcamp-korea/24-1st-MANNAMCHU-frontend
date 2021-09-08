import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import logo from "../logo.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailVal: "",
      pwVal: "",
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

    return emailVal.includes("@") && pwVal.length >= 8;
  };

  handleLogin = () => {
    fetch("http://10.58.5.141:8000/users/signin", {
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
          this.props.history.push("/");
        } else {
          alert("이메일, 비밀번호를 다시 입력해 주세요.");
        }
      });
  };

  render() {
    const { emailVal, pwVal } = this.state;
    const { isLogin } = this.props;

    return (
      <div
        className={`login ${isLogin ? "" : "disappear"}`}
        onClick={() => this.props.handleActive()}
      >
        <div className="loginContainer letter">
          <img alt="logo" src={logo} />
          <h1>로그인</h1>
          <input
            type="text"
            placeholder="이메일"
            className="inputEmail"
            onChange={this.handleEmailInput}
          />
          {emailVal && !emailVal.includes("@") && (
            <div className="warning">
              이메일 형식에 맞게 입력해 주세요. ex '@' 포함
            </div>
          )}
          <input
            type="password"
            placeholder="비밀번호"
            className="inputPw"
            onChange={this.handlePwInput}
          />
          {pwVal && pwVal.length < 8 && (
            <div className="warning">8글자 이상 입력해 주세요.</div>
          )}
          <button
            className={`loginBtn ${this.checkValid() ? "" : "disabled"}`}
            type="button"
            onClick={this.handleLogin}
          >
            로그인하기
          </button>
          <div className="toJoin">
            <Link to="/">회원가입</Link>
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
