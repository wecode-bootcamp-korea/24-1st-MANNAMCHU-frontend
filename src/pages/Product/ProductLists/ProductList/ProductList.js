import React, { Component } from "react";
import Tags from "../../../../components/Tags/Tags";
import { withRouter } from "react-router-dom";
import "./ProductList.scss";

class ProductList extends Component {
  state = {
    isEntered: false,
    isLiked: false,
  };

  handleMouse = () => {
    this.setState({ isEntered: !this.state.isEntered });
  };

  handleClick = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  render() {
    const { product } = this.props;
    const { image, tag, id } = product;
    const { isEntered, isLiked } = this.state;
    const price = parseInt(product.price);

    return (
      <li
        className="productList"
        onClick={() => this.props.history.push(`/product-detail/${id}`)}
      >
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
          <Tags
            isNew={tag.includes("new")}
            isSale={tag.includes("sale")}
            isBest={tag.includes("best")}
          />
          <div className="likes" onClick={this.handleClick}>
            <i className={isLiked ? "fas fa-heart" : "far fa-heart"} />
            <span>{isLiked ? product.like_count + 1 : product.like_count}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ProductList);
