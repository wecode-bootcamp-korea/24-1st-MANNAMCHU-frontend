import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      emailVal: "",
      pwVal: "",
      pwCheckVal: "",
      nameVal: "",
      phoneVal: "",
      addressVal: "",
      addressDetailVal: "",
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

  handlePwCheckInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  handleNameInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  handlePhoneInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  handleAddressInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  handleAddressDetailInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  checkValid = () => {
    const {
      emailVal,
      pwVal,
      pwCheckVal,
      nameVal,
      phoneVal,
      addressVal,
      addressCheckVal,
    } = this.state;
    return emailVal.includes("@") && pwVal.length >= 6;
  };

  handleSignup = () => {
    fetch("주소를 주세요.", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.emailVal,
        password: this.state.pwVal,
        checkPassword: this.state.pwCheckVal,
        name: this.state.nameVal,
        phone: this.state.phoneVal,
        address: this.state.addressVal,
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
    const {
      emailVal,
      pwVal,
      pwCheckVal,
      nameVal,
      phoneVal,
      addressVal,
      addressCheckVal,
    } = this.state;
    return (
      <div className="signupContainer">
        <h1>회원 가입</h1>
        <h3>계정 정보</h3>
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
        {pwVal && pwVal.length < 6 && (
          <div className="warning">6글자 이상 입력해 주세요.</div>
        )}
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="inputPwCheck"
          onChange={this.handlePwCheckInput}
        />
        {!pwCheckVal === pwVal && (
          <div className="warning">(비밀번호 확인과 관련한 문구 필요)</div>
        )}
        <h3>가입 정보</h3>
        <input
          type="text"
          placeholder="이름"
          className="inputName"
          onChange={this.handleNameInput}
        />
        {!nameVal && nameVal.length < 1 && (
          <div className="warning">이름을 입력해 주세요.</div>
        )}
        <input
          type="text"
          placeholder="휴대전화번호"
          className="inputPhone"
          onChange={this.handlePhoneInput}
        />
        {!phoneVal && phoneVal.length < 11 && (
          <div className="warning">
            휴대전화 번호를 입력해 주세요. ex 01033334444
          </div>
        )}
        <input
          type="text"
          placeholder="주소"
          className="inputAddress"
          onChange={this.handleAddressInput}
        />
        <input
          type="text"
          placeholder="상세 주소"
          className="inputAddressDetail"
          onChange={this.handleAddressDetailInput}
        />
        <div className="warning">주소를 입력해 주세요.</div>
        <button
          className={this.checkValid() ? "signupBtn" : "signupBtn disabled"}
          type="button"
          onClick={this.handleSignup}
        >
          가입하기
        </button>
        <div className="copyRight">© mannamchu, Co., Ltd.. All Rights Free</div>
      </div>
      // 오른쪽 상단에 x 버튼 추가해야 함
    );
  }
}
export default Signup;
