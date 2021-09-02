import React, { Component } from "react";
import "./InfoConfigSelOpt.scss";

export default class InfoConfigSelOpt extends Component {
  render() {
    return (
      <button className="infoConfigSelOptList" onClick={this.props.addCartData}>
        {this.props.optList}
      </button>
    );
  }
}
