import React, { Component } from "react";
import "./ProductList.scss";

export default class ProductList extends Component {
  state = {
    isEntered: false,
  };

  handleMouse = () => {
    this.setState({ isEntered: !this.state.isEntered });
  };

  render() {
    const { item, discountRatio } = this.props;
    const { thumbnails } = item;
    const { isEntered } = this.state;
    return (
      <li className="productList">
        <div
          className="imgWrapper"
          onMouseEnter={() => this.handleMouse()}
          onMouseLeave={() => this.handleMouse()}
        >
          <img
            src={thumbnails[0].item}
            alt="product_image"
            className={`productImg ${isEntered === true ? "disappear" : ""}`}
          />
          <img
            src={thumbnails[1].item}
            alt="product_image"
            className={`productImg ${isEntered === true ? "" : "disappear"}`}
          />
        </div>
        <div className="letterWrapper">
          <strong className="title letter">{item.name}</strong>
          {item.discounted === true ? (
            <div className="priceWrapper original">
              <span className="amount">
                {item.discounted === true ? item.price.toLocaleString() : ""}
              </span>
              <span className="currency">원</span>
            </div>
          ) : (
            ""
          )}

          <div className="priceWrapper discount">
            <span className="amount">
              {item.discounted === true
                ? ((1 - discountRatio) * item.price).toLocaleString()
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
