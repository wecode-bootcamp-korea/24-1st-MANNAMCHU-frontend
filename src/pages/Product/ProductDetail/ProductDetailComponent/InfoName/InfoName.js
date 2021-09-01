import React, { Component } from "react";
import "./InfoName.scss";

export default class InfoName extends Component {
  render() {
    return (
      <div className="infoName">
        <span className="infoNameText">
          {this.props.infoName.mockInfoNameText}
        </span>
        <span
          className={
            this.props.infoName.mockInfoNameNew ? "infoNameNew" : "disappear"
          }
        >
          NEW
        </span>
        <span
          className={
            this.props.infoName.mockInfoNameSale ? "infoNameSale" : "disappear"
          }
        >
          SALE
        </span>
        <span
          className={
            this.props.infoName.mockInfoNameBest ? "infoNameBest" : "disappear"
          }
        >
          BEST
        </span>
      </div>
    );
  }
}
