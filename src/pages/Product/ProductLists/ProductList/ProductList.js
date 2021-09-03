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

    return (
      <li className="productList">
        <div
          className="imgWrapper"
          onMouseEnter={() => this.handleMouse()}
          onMouseLeave={() => this.handleMouse()}
        >
          <img
            src={image[0].url}
            alt="product_image"
            className={`productImg ${isEntered === true ? "disappear" : ""}`}
          />
          <img
            src={image[1].url}
            alt="product_image"
            className={`productImg ${isEntered === true ? "" : "disappear"}`}
          />
        </div>
        <div className="letterWrapper">
          <strong className="title letter">{product.name}</strong>
          {product.discount > 0 ? (
            <div className="priceWrapper original">
              <span className="amount">
                {product.discount > 0 ? product.price.toLocaleString() : ""}
              </span>
              <span className="currency">원</span>
            </div>
          ) : (
            ""
          )}

          <div className="priceWrapper discount">
            <span className="amount">
              {product.discount > 0
                ? ((1 - product.discount) * product.price).toLocaleString()
                : product.price}
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
