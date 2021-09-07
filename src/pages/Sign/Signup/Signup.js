import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      accountInfo: {
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
      },
      addressDetail: "",
      passwordCheck: "",
    };
  }

  handleInput = e => {
    const newInput = {
      ...this.state.accountInfo,
      [e.target.className]: e.target.value,
    };
    this.setState({ accountInfo: newInput });
  };

  checkValid = () => {
    const { email, password, name, phone, address } = this.state.accountInfo;
    return (
      email.includes("@") &&
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
        ...this.state.accountInfo,
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
    const { email, password, name, phone, address } = this.state.accountInfo;
    // const { passwordCheck, addressDetail } = this.state;
    return (
      <div className="signup letter">
        <div className="signupContainer">
          <h1>회원 가입</h1>
          <h3>계정 정보</h3>
          <input
            type="text"
            placeholder="이메일"
            className="email"
            onChange={this.handleInput}
          />
          {email && !email.includes("@") && (
            <div className="warning">
              이메일 형식에 맞게 입력해 주세요. ex '@' 포함
            </div>
          )}
          <input
            type="password"
            placeholder="비밀번호"
            className="password"
            onChange={this.handleInput}
          />
          {password && password.length < 8 && (
            <div className="warning">8글자 이상 입력해 주세요.</div>
          )}
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="passwordCheck"
            onChange={this.handleInput}
          />
          {/* {!passwordCheck === password && (
          <div className="warning">(비밀번호 확인과 관련한 문구 필요)</div>
        )} */}
          <h3>가입 정보</h3>
          <input
            type="text"
            placeholder="이름"
            className="name"
            onChange={this.handleInput}
          />
          {name && name.length < 2 && (
            <div className="warning">이름을 입력해 주세요.</div>
          )}
          <input
            type="number"
            placeholder="휴대전화번호"
            className="phone"
            onChange={this.handleInput}
          />
          {phone && phone.length < 10 && (
            <div className="warning">
              휴대전화 번호를 입력해 주세요. ex 01033334444
            </div>
          )}
          <input
            type="text"
            placeholder="주소"
            className="address"
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="상세 주소"
            className="addressDetail"
            onChange={this.handleInput}
          />
          {address && address.length < 4 && (
            <div className="warning">주소를 입력해 주세요.</div>
          )}{" "}
          <button
            className={this.checkValid() ? "signupBtn" : "signupBtn disabled"}
            type="button"
            onClick={this.handleSignup}
          >
            가입하기
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
