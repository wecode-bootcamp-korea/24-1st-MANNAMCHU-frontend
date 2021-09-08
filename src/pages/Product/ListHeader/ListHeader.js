import React, { Component } from "react";
import "./ListHeader.scss";

export default class ListHeader extends Component {
  render() {
    return (
      <header className="listHeader letter">
        <h1 className="logo theme">Market</h1>
        <h2 className="titleDetail">실패 없이 맛있는 과일 구매</h2>
        <div className="explanation">
          <div className="explanationIntro">
            <span>마담주가 직접 수매한 맛있는 과일을 </span>
            <strong>새벽배송/전국택배</strong>
            <span>로 만나보는</span>
          </div>
          <div className="explanationCore">
            <span>합리적 플랫폼, </span>
            <strong>마담주 마켓</strong>
          </div>
        </div>
      </header>
    );
  }
}
