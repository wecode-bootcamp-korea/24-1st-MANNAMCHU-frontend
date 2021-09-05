import React, { Component } from "react";
import "./InfoImg.scss";

export default class InfoImg extends Component {
  render() {
    return <img alt="" src={this.props.origin} className="infoImg" />;
  }
}
