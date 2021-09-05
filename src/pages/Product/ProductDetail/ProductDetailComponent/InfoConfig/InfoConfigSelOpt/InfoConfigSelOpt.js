import React, { Component } from "react";
import "./InfoConfigSelOpt.scss";

export default class InfoConfigSelOpt extends Component {
  handleClick = e => {
    this.props.addCartData(
      this.props.option.id,
      this.props.option.option,
      this.props.option.additional_price
    );
  };

  render() {
    return (
      <button
        className="infoConfigSelOptList"
        id={this.props.option.id}
        onClick={this.handleClick}
      >
        {this.props.option.option}
        {this.props.option.additional_price !== "0.00" ? (
          <div>
            + {parseInt(this.props.option.additional_price).toLocaleString()}원
          </div>
        ) : (
          ""
        )}
      </button>
    );
  }
}
