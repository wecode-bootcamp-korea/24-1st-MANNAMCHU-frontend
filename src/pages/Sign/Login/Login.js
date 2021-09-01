import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

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

    return emailVal.includes("@") && pwVal.length >= 6;
  };

  handleLogin = () => {
    this.checkValid() && this.props.history.push("/login");
  };

  render() {
    const { emailVal, pwVal } = this.state;
    return (
      // 모달창 만들고 그 안에 아래 코드는 컴포넌트로 만들어서 삽입
      <div className="loginContainer">
        <h1>로그인</h1>
        {/* h1 자리에 맛남츄 로고를 넣고 싶어요 */}
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
        <button
          className={this.checkValid() ? "loginBtn" : "loginBtn disabled"}
          type="button"
          onClick={this.handleLogin}
        >
          로그인하기
        </button>
        <div className="toJoin">
          <Link to="/">회원가입</Link>
        </div>
        <div className="copyRight">© mannamchu, Co., Ltd.. All Rights Free</div>
      </div>
      // 오른쪽 상단에 x 버튼 추가해야 함
    );
  }
}
export default Login;
