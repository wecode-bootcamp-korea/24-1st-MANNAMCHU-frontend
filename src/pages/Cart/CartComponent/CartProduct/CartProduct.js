import React, { Component } from "react";

export default class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disappear: false,
    };
  }

  delCartDataHendle = () => {
    this.props.delCartData(this.props.id, this.props.cartData.option_id);
  };

  handleClick = () => {
    this.state.disappear === false
      ? this.setState({ disappear: true })
      : this.setState({ disappear: false });
  };

  plusHandleClick = () => {
    this.props.plusOptionCount(this.props.id);
  };

  minusHandleClick = () => {
    this.props.minusOptionCount(this.props.id);
  };

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
                src={this.props.cartData.image}
              />
            </div>
            <div>
              <div className="productItemName letter">
                {this.props.cartData.product}
              </div>
              <div className="productItemOpt letter">
                {this.props.cartData.option}
              </div>
            </div>
          </li>
          <li className="productWish">
            <i className="far fa-heart" />
          </li>
          <li className="productCount">
            <div className="productCountNum">
              {this.props.cartData.quantity}
            </div>
            <div className="productCountChange">
              <button
                className="productCountChangeBtn"
                onClick={this.handleClick}
              >
                변경
              </button>
              {this.state.disappear && (
                <>
                  <div className="productCountChangeBox">
                    <div className="productCountChangeBoxText">주문 수량</div>
                    <div className="productCountChangeBoxPop">
                      <button
                        className="productCountChangeBoxPopMinus"
                        onClick={this.minusHandleClick}
                      >
                        -
                      </button>
                      <div className="productCountChangeBoxPopNum">
                        {this.props.cartData.quantity}
                      </div>
                      <button
                        className="productCountChangeBoxPopPlus"
                        onClick={this.plusHandleClick}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="screen" onClick={this.handleClick}></div>
                </>
              )}
            </div>
          </li>
          <li className="productShip letter">택배</li>
          <li className="productShipPrice letter">
            {(parseInt(this.props.cartData.price) +
              parseInt(this.props.cartData.addtional_price)) *
              this.props.cartData.quantity >
            this.props.postPrice
              ? "무료"
              : "3,000원"}
          </li>
          <li className="productPrice letter">
            {(
              (parseInt(this.props.cartData.price) +
                parseInt(this.props.cartData.addtional_price)) *
              this.props.cartData.quantity
            ).toLocaleString()}
            원
          </li>
          <li className="productBtn">
            <button className="productOrder">주문</button>
            <button className="productDelete" onClick={this.delCartDataHendle}>
              삭제
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
