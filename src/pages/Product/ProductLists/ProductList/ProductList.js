import React, { Component } from "react";
import Tags from "../../../../components/Tags/Tags";
import "./ProductList.scss";

export default class ProductList extends Component {
  state = {
    isEntered: false,
  };

  handleMouse = () => {
    this.setState({ isEntered: !this.state.isEntered });
  };

  render() {
    const { product } = this.props;
    const { image, tag } = product;
    const { isEntered } = this.state;
    const price = parseInt(product.price);

    return (
      <li className="productList">
        <div
          className="listImgWrapper"
          onMouseEnter={() => this.handleMouse()}
          onMouseLeave={() => this.handleMouse()}
        >
          <img
            src={image[0]}
            alt="product_image"
            className={`productImg ${isEntered === true ? "disappear" : ""}`}
          />
          <img
            src={image[1]}
            alt="product_image"
            className={`productImg ${isEntered === true ? "" : "disappear"}`}
          />
        </div>
        <div className="letterWrapper">
          <strong className="theme">{product.name}</strong>
          {product.discount.length > 0 ? (
            <div className="priceWrapper original">
              <span className="amount">{price.toLocaleString()}</span>
              <span className="currency">원</span>
            </div>
          ) : (
            ""
          )}

          <div className="priceWrapper discount">
            <span className="amount">
              {product.discount.length > 0
                ? ((1 - product.discount[0] / 100) * price).toLocaleString()
                : price.toLocaleString()}
            </span>
            <span className="currency">원</span>
          </div>
          <Tags isNew={tag[0].new} isSale={tag[0].sale} isBest={tag[0].best} />
          <div className="likes">
            <i className="far fa-heart" />
            <span>{product.like_count}</span>
          </div>
        </div>
      </li>
    );
  }
}
