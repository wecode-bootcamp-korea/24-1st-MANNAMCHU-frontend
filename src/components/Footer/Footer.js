import React, { Component } from "react";
import "./Footer.scss";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footerInfo">
          <div>
            마담주 | 대표 : 위맛츄 | 사업자등록번호 : 307-24-05277 호스팅제공자
            : (주)드코위
          </div>
          <div>
            통신판매업신고번호 : 2021-서울강강남-02424
            <br />
            주소 : 서울 강남구 테헤란로 427
            <br />
            연락처 : 0000-0000
          </div>
          <div>
            전화 가능 시간 10:00am - 7:00pm
            <br />
            cs 가능 시간 10:00am - 5:00pm
          </div>
        </div>
        <div>CopyleftⒸ 2021 맛남츄 ∷ All rights free.</div>
        <div>
          <Link to="주소를 넣어">Terms of Use</Link>
          <Link to="주소를 넣어">Privacy</Link>
        </div>
      </>
    );
  }
}
