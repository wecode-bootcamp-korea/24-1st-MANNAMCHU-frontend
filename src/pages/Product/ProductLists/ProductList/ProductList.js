import React, { Component } from "react";
import "./ProductList.scss";

export default class ProductList extends Component {
  render() {
    return (
      <li className="productList">
        <img
          src="https://cdn.imweb.me/thumbnail/20210703/234bfb01c89a5.jpg"
          alt="product_image"
        />
        <div className="letterWrapper">
          <strong className="title letter">
            [반짝할인] 제주 자연산 민어 사시미/지리/매운탕
          </strong>
          <span className="priceWrapper">
            <span className="listPrice">75,000</span>
            <span className="currency">원</span>
          </span>
          <span className="priceWrapper">
            <span className="discounted">67,500</span>
            <span className="currency">원</span>
          </span>
        </div>
      </li>
    );
  }
}
