import React, { Component } from "react";
import "./InfoConfigChoiceOpt.scss";

export default class InfoConfigChoiceOpt extends Component {
  render() {
    return (
      <button className="infoConfigChoiceOptList">{this.props.optList}</button>
    );
  }
}
