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
    const { id, option, additional_price } = this.props.option;

    return (
      <button
        className="infoConfigSelOptList"
        id={id}
        onClick={this.handleClick}
      >
        {option}
        {parseInt(additional_price) && (
          <div>+ {parseInt(additional_price).toLocaleString()}원</div>
        )}
      </button>
    );
  }
}
