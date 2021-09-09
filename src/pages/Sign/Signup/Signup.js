import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      phone: "",
      address: "",
      passwordCheck: "",
      addressDetail: "",
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkValid = () => {
    const { email, password, name, phone, address } = this.state;
    return (
      email.includes("@" && ".") &&
      password.length >= 8 &&
      name.length >= 2 &&
      phone.length >= 10 &&
      address.length >= 4
    );
  };

  handleSignup = () => {
    fetch("http://10.58.5.141:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          this.props.history.push("/");
        } else {
          alert("회원 가입에 실패했습니다.");
        }
      });
  };

  render() {
    const { email, password, name, phone, address } = this.state;
    // const { passwordCheck, addressDetail } = this.state;
    return (
      <div className="signup">
        <div
          className="signupBackground"
          onClick={this.props.handleActive}
        ></div>
        <div className="signupContainer letter">
          <h1>회원 가입</h1>
          <h3>계정 정보</h3>
          <input
            type="text"
            placeholder="이메일"
            className="email"
            name="email"
            onChange={this.handleInput}
          />
          {email && !email.includes("@" && ".") && (
            <div className="warning">
              이메일 형식에 맞게 입력해 주세요. 예) aa@a.a
            </div>
          )}
          <input
            type="password"
            placeholder="비밀번호 ( 8글자 이상 입력해 주세요. )"
            className="password"
            name="password"
            onChange={this.handleInput}
          />
          {password && password.length < 8 && (
            <div className="warning">8글자 이상 입력해 주세요.</div>
          )}
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="passwordCheck"
            name="passwordCheck"
            onChange={this.handleInput}
          />
          {/* {!passwordCheck === password && (
          <div className="warning">(비밀번호 확인과 관련한 문구 필요)</div>
        )} */}
          <div className="toLogin">
            <Link to="/login">여기를 클릭하면 바로 로그인할 수 있어요 :)</Link>
          </div>
          <h3>가입 정보</h3>
          <input
            type="text"
            placeholder="이름"
            className="name"
            name="name"
            onChange={this.handleInput}
          />
          {name && name.length < 2 && (
            <div className="warning">이름을 입력해 주세요.</div>
          )}
          <input
            type="number"
            placeholder="휴대전화번호 ( '-' 없이 입력해 주세요. )"
            className="phone"
            name="phone"
            onChange={this.handleInput}
          />
          {phone && phone.length < 10 && (
            <div className="warning">
              알맞은 휴대전화 번호를 입력해 주세요. ex) 01022223333
            </div>
          )}
          <input
            type="text"
            placeholder="주소"
            className="address"
            name="address"
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="상세 주소"
            className="addressDetail"
            name="addressDetail"
            onChange={this.handleInput}
          />
          {address && address.length < 4 && (
            <div className="warning">주소를 입력해 주세요.</div>
          )}{" "}
          <button
            className={`signupBtn ${this.checkValid() ? "" : "disabled"}`}
            type="button"
            onClick={this.handleSignup}
          >
            가입
          </button>
          <div className="copyRight">
            © mannamchu, Co., Ltd.. All Rights Free
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
