import React, { Component } from "react";
import "./InfoSend.scss";

export default class InfoSend extends Component {
  render() {
    return (
      <div className="infoSend">
        <span className="infoSendTruck">
          <i className="fas fa-truck infoSendTruckIcon" />
        </span>
        <span className="infoSendText">
          <div>오늘출발 상품</div>
          <div>오늘출발 마감되었습니다.(평일 15:00까지)</div>
        </span>
      </div>
    );
  }
}
