import React, { Component } from "react";
import "./InfoPrice.scss";

export default class InfoPrice extends Component {
  render() {
    const { priceSale, priceReal } = this.props;

    return (
      <div className="infoPrice">
        <span>
          <span className="infoPriceReal">
            {priceSale !== 0
              ? (priceReal * (1 - priceSale)).toLocaleString() + "원"
              : priceReal.toLocaleString() + "원"}
          </span>
          <span className={priceSale === 0 ? "disappear" : "infoPriceSale"}>
            {priceReal.toLocaleString() + "원"}
          </span>
        </span>
        <span className="infoPriceShare">
          <i className="fas fa-share-alt" />
        </span>
      </div>
    );
  }
}
