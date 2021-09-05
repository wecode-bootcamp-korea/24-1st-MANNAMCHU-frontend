import React, { Component } from "react";
import "./InfoConfigOptPrice.scss";

export default class InfoConfigOptPrice extends Component {
  render() {
    return (
      <div className="infoConfigOptPrice">
        <div className="infoConfigOptName">
          <span>{this.props.cartOption.cartOption}</span>
          <span>
            <i className="far fa-times-circle"></i>
          </span>
        </div>
        <div className="infoConfigOptCount">
          <div className="infoConfigOptCountBox">
            <button className="infoConfigOptCountDown">-</button>
            <div className="infoConfigOptCountNum">
              {this.props.cartOption.cartOptionCount &&
                this.props.cartOption.cartOptionCount}
            </div>
            <button className="infoConfigOptCountUp">+</button>
          </div>
          <div className="infoConfigOptCountPrice">
            {parseInt(this.props.cartOption.cartPrice) +
              parseInt(this.props.realPrice)}
            원
          </div>
        </div>
      </div>
    );
  }
}
