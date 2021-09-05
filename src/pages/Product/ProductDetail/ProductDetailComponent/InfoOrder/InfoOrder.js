import React, { Component } from "react";
import "./InfoOrder.scss";

export default class InfoOrder extends Component {
  render() {
    return (
      <div className="infoOrder">
        <button className="infoOrderBuy">구매하기</button>
        <button className="infoOrderCart">장바구니</button>
        <button className="infoOrderLike">
          <i className="far fa-heart" /> {this.props.likeCount}
        </button>
      </div>
    );
  }
}
