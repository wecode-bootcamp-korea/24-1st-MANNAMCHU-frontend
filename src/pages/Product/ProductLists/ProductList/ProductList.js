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
    const { item } = this.props;
    const { image, tags } = item;
    const { isEntered } = this.state;

    return (
      <li className="productList">
        <div
          className="imgWrapper"
          onMouseEnter={() => this.handleMouse()}
          onMouseLeave={() => this.handleMouse()}
        >
          <img
            src={image[0][0].item}
            alt="product_image"
            className={`productImg ${isEntered === true ? "disappear" : ""}`}
          />
          <img
            src={image[0][1].item}
            alt="product_image"
            className={`productImg ${isEntered === true ? "" : "disappear"}`}
          />
        </div>
        <div className="letterWrapper">
          <strong className="title letter">{item.name}</strong>
          {item.discount > 0 ? (
            <div className="priceWrapper original">
              <span className="amount">
                {item.discount > 0 ? item.price.toLocaleString() : ""}
              </span>
              <span className="currency">원</span>
            </div>
          ) : (
            ""
          )}

          <div className="priceWrapper discount">
            <span className="amount">
              {item.discount > 0
                ? ((1 - item.discount) * item.price).toLocaleString()
                : item.price}
            </span>
            <span className="currency">원</span>
          </div>
          <Tags
            isNew={tags[0].new}
            isSale={tags[0].sale}
            isBest={tags[0].best}
          />
          <div className="likes">
            <i className="far fa-heart" />
            <span>{item.like_count}</span>
          </div>
        </div>
      </li>
    );
  }
}
