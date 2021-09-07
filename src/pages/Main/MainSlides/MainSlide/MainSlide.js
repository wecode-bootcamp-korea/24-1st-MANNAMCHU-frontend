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
        ></div>
        <div className="comment letter">
          <p>특별한 분들께 드리는</p>
          <p>프리미엄 과일 선물</p>
          <strong className="logo">MANNAMCHU</strong>
        </div>
      </div>
    );
  }
}
