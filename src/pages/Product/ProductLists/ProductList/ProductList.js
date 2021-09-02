import React, { Component } from "react";
import "./ProductList.scss";

export default class ProductList extends Component {
  render() {
    const { item, discountRatio } = this.props;
    return (
      <li className="productList">
        <img
          src={item.thumbnails[0].first}
          alt="product_image"
          className="productImg"
        />
        <div className="letterWrapper">
          <strong className="title letter">{item.name}</strong>
          <div className="priceWrapper original">
            <span className="amount">{item.price}</span>
            <span className="currency">원</span>
          </div>
          <div className="priceWrapper discount">
            <span className="amount">
              {item.discounted === true
                ? (1 - discountRatio) * item.price
                : item.price}
            </span>
            <span className="currency">원</span>
          </div>
          <div className="likes">
            <i className="far fa-heart" />
            <span>{item.likeCount}</span>
          </div>
        </div>
      </li>
    );
  }
}
