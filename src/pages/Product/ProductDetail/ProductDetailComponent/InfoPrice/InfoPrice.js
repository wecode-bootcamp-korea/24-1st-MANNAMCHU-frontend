import React, { Component } from "react";
import "./InfoPrice.scss";

export default class InfoPrice extends Component {
  render() {
    return (
      <div className="infoPrice">
        <span>
          <span className="infoPriceReal">
            {this.props.priceSale !== 0
              ? this.props.priceReal * (1 - this.props.priceSale) + "원"
              : this.props.priceReal + "원"}
          </span>
          <span
            className={
              this.props.priceSale === 0 ? "disappear" : "infoPriceSale"
            }
          >
            {this.props.priceReal + "원"}
          </span>
        </span>
        <span className="infoPriceShare">
          <i className="fas fa-share-alt" />
        </span>
      </div>
    );
  }
}
