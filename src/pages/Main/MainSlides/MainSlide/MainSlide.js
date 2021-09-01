import React, { Component } from "react";
import "./MainSlide.scss";

export default class MainSlide extends Component {
  render() {
    const { slide, selected } = this.props;
    return (
      <div
        className={`slideWrapper ${
          selected === slide.id ? "active" : "disappear"
        }`}
      >
        <div
          className="slideImg"
          style={{ backgroundImage: `url(${slide.url})` }}
        />
      </div>
    );
  }
}
