import React, { Component } from "react";
import "./Tags.scss";

export default class Tags extends Component {
  render() {
    const { isNew, isSale, isBest } = this.props;
    return (
      <div className="tags">
        {isNew && <span className="new">NEW</span>}
        {isSale && <span className="sale">SALE</span>}
        {isBest && <span className="best">BEST</span>}
      </div>
    );
  }
}
