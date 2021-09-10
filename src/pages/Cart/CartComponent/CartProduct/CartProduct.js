import React, { Component } from "react";

export default class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disappear: false,
      wishLike: false,
    };
  }

  delCartDataHendle = () => {
    this.props.delCartData(this.props.id, this.props.cartData.option_id);
  };

  handleClick = () => {
    this.props.addCartDatas();
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

  likeHandleClick = () => {
    this.state.wishLike === false
      ? this.setState({ wishLike: true })
      : this.setState({ wishLike: false });
  };

  render() {
    const { image, product, option, quantity, addtional_price, price } =
      this.props.cartData;
    return (
      <div className="product">
        <ul className="productList">
          <li className="productCheck">
            <input type="checkbox" className="productCheckBtn" />
          </li>
          <li className="productItem">
            <div>
              <img className="productItemImg" alt="상품이미지" src={image} />
            </div>
            <div>
              <div className="productItemName letter">{product}</div>
              <div className="productItemOpt letter">{option}</div>
            </div>
          </li>
          <li className="productWish">
            <i
              className={
                this.state.wishLike ? "fas fa-heart wishOn" : "far fa-heart"
              }
              onClick={this.likeHandleClick}
            />
          </li>
          <li className="productCount">
            <div className="productCountNum">{quantity}</div>
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
                        {quantity}
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
            {(parseInt(price) + parseInt(addtional_price)) * quantity >
            this.props.postPrice
              ? "무료"
              : "3,000원"}
          </li>
          <li className="productPrice letter">
            {(
              (parseInt(price) + parseInt(addtional_price)) *
              quantity
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
