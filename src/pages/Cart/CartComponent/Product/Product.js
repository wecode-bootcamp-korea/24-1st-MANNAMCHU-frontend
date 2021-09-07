import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="product">
        <ul className="productList">
          <li className="productCheck">
            <input type="checkbox" className="productCheckBtn" />
          </li>
          <li className="productItem">
            <div>
              <img
                className="productItemImg"
                alt="상품이미지"
                src={this.props.listData.image}
              />
            </div>
            <div>
              <div className="productItemName letter">
                {this.props.listData.product}
              </div>
              <div className="productItemOpt letter">
                {this.props.listData.option}
              </div>
            </div>
          </li>
          <li className="productWish">
            <i className="far fa-heart" />
          </li>
          <li className="productCount">
            <div className="productCountNum">
              {this.props.listData.quantity}
            </div>
            <button className="productCountChange">변경</button>
          </li>
          <li className="productShip letter">택배</li>
          <li className="productShipPrice letter">
            {(parseInt(this.props.listData.price) +
              parseInt(this.props.listData.addtional_price)) *
              this.props.listData.quantity >
            this.props.postPrice
              ? "무료"
              : "3,000원"}
          </li>
          <li className="productPrice letter">
            {(
              (parseInt(this.props.listData.price) +
                parseInt(this.props.listData.addtional_price)) *
              this.props.listData.quantity
            ).toLocaleString()}
            원
          </li>
          <li className="productBtn">
            <button className="productOrder">주문</button>
            <button
              className="productDelete"
              onClick={this.props.delCartData(
                this.props.listData.id,
                this.props.key
              )}
            >
              삭제
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
