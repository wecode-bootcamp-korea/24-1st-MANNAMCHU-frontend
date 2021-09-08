import React, { Component } from "react";
import "./InfoConfigOptPrice.scss";

export default class InfoConfigOptPrice extends Component {
  plusHandleClick = () => {
    this.props.plusOptionCount(this.props.id);
  };

  minusHandleClick = () => {
    this.props.cartOption.cartOptionCount > 1
      ? this.props.minusOptionCount(this.props.id)
      : alert("1 이상의 숫자를 입력해 주세요");
  };

  delOptionHandleClick = () => {
    this.props.delOption(this.props.id);
  };

  render() {
    const { cartOption, cartOptionCount, cartPrice } = this.props.cartOption;

    return (
      <div className="infoConfigOptPrice">
        <div className="infoConfigOptName">
          <span>{cartOption}</span>
          <span>
            <i
              className="far fa-times-circle"
              onClick={this.delOptionHandleClick}
            />
          </span>
        </div>
        <div className="infoConfigOptCount">
          <div className="infoConfigOptCountBox">
            <button
              className="infoConfigOptCountDown"
              onClick={this.minusHandleClick}
            >
              -
            </button>
            <div className="infoConfigOptCountNum">
              {cartOptionCount && cartOptionCount}
            </div>

            <button
              className="infoConfigOptCountUp"
              onClick={this.plusHandleClick}
            >
              +
            </button>
          </div>
          <div className="infoConfigOptCountPrice">
            {(
              cartOptionCount *
              (parseInt(this.props.realPrice) + parseInt(cartPrice))
            ).toLocaleString()}
            원
          </div>
        </div>
      </div>
    );
  }
}
