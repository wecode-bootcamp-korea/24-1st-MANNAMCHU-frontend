import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer background beige letter">
        <div className="info">
          <div className="company">
            맛남츄 | 대표 : 위사장 | 사업자등록번호 : 307-24-05277 |
            호스팅제공자 : (주)드코위
          </div>
          <div className="contact">
            통신판매업신고번호 : 2021-서울강강남-02424
            <br />
            주소 : 서울 강남구 테헤란로 427
            <br />
            연락처 : 0000-0000
          </div>
          <div className="csTime">
            전화 가능 시간 10:00 AM - 7:00 PM
            <br />
            CS 가능 시간 10:00 AM - 5:00 PM
          </div>
          <br />
          <hr />
          <div className="copyright">
            Copyleft © 2021 맛남츄 ∷ 맛난과일쇼핑몰 All rights free.
          </div>
        </div>
        <div className="link">
          <Link to="/">Terms of Use</Link>
          <br />
          <Link to="/">Privacy</Link>
        </div>
      </footer>
    );
  }
}
