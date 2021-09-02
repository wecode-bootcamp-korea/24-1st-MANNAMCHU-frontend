import React, { Component } from "react";
import "./InfoConfigSelOpt.scss";

export default class InfoConfigSelOpt extends Component {
  handleClick = e => {
    this.props.addCartData(e);
  };
  render() {
    return (
      <button className="infoConfigSelOptList" onClick={this.handleClick}>
        {this.props.optList}
      </button>
    );
  }
}
