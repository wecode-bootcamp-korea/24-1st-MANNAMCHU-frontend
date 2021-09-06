import React, { Component } from "react";
import "./MarketIntro.scss";

export default class MarketIntro extends Component {
  render() {
    return (
      <div className="marketIntro letter">
        <div className="introTitle">
          <strong>마음을 담아, 마음을 주는</strong>
          <p>프리미엄 과일부띠크</p>
        </div>
        <div className="lineWrapper">
          <div className="lineLeft" />
          <i className="fas fa-times"></i>
          <div className="lineRight" />
        </div>
        <div className="introContent">
          <p className="normal">
            과일로 가장 트렌디한 라이프스타일을 설계해온 경험과 노하우를 담아
          </p>
          <p className="strong">
            세상에 없던 프리미엄 프루츠 매니지먼트를 시작합니다.
          </p>
        </div>
      </div>
    );
  }
}
