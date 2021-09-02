import React, { Component } from "react";
import "./InfoConfigOptPrice.scss";

export default class InfoConfigOptPrice extends Component {
  render() {
    return (
      <div className="infoConfigOptPrice">
        <div className="infoConfigOptName">
          <span>`1) 민어사시미(필렛500g)`</span>
          <span>
            <i className="far fa-times-circle"></i>
          </span>
        </div>
        <div className="infoConfigOptCount">
          <div className="infoConfigOptCountBox">
            <button className="infoConfigOptCountDown">-</button>
            <div className="infoConfigOptCountNum">1</div>
            <button className="infoConfigOptCountUp">+</button>
          </div>
          <div className="infoConfigOptCountPrice">85000원</div>
        </div>
      </div>
    );
  }
}
