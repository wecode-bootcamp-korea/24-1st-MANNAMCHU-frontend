import React, { Component } from "react";
import CartProduct from "./CartComponent/CartProduct/CartProduct";
import WishList from "./CartComponent/WishList/WishList";
import "./Cart.scss";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartDatas: {},
      postPrice: 90000,
      delCartData: [],
    };
  }

  // mockdata 통신
  componentDidMount = () => {
    fetch("/data/cartListData.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          cartDatas: response,
        });
      });
  };

  //서버와 통신
  // componentDidMount = () => {
  //   fetch("http://10.58.4.175:8000/products/cart", {
  //     method: "GET",
  //     headers: {
  //       Authorization:
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.gkCFFEj525ntZJdHEqKnUD8X-v9oy75acVxJrqqtpZE",
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         cartDatas: response,
  //       });
  //     });
  // };

  delCartData = (idx, option_id) => {
    let cartDatas = this.state.cartDatas;
    cartDatas.message.splice(idx, 1);
    this.setState({
      cartDatas: cartDatas,
      delCartData: this.state.delCartData.concat(option_id),
    });
  };

  componentWillUnmount = () => {
    this.delServerCartData();
  };

  delServerCartData = () => {
    this.state.delCartData.map(option_id => {
      fetch(`http://10.58.5.3:8000/products/cart?option_id=${option_id}`, {
        method: "DELETE",
      });
    });
  };

  addTotalPrice = () => {
    let addTotalPrice = 0;
    for (let i = 0; i < this.state.cartDatas.message.length; i++) {
      addTotalPrice =
        addTotalPrice +
        (parseInt(this.state.cartDatas.message[i].price) +
          parseInt(this.state.cartDatas.message[i].addtional_price)) *
          this.state.cartDatas.message[i].quantity;
    }
    return addTotalPrice;
  };

  plusOptionCount = idx => {
    if (idx === 0) {
      this.setState(({ cartDatas }) => ({
        cartDatas: {
          message: [
            {
              ...cartDatas.message[idx],
              quantity: cartDatas.message[idx].quantity + 1,
            },
            ...cartDatas.message.slice(idx + 1),
          ],
        },
      }));
    } else if (idx < this.state.cartDatas.message.length - 1) {
      this.setState(({ cartDatas }) => ({
        cartDatas: {
          message: [
            ...cartDatas.message.slice(0, idx),
            {
              ...cartDatas.message[idx],
              quantity: cartDatas.message[idx].quantity + 1,
            },
            ...cartDatas.message.slice(idx + 1),
          ],
        },
      }));
    } else if (idx === this.state.cartDatas.message.length - 1) {
      this.setState(({ cartDatas }) => ({
        cartDatas: {
          message: [
            ...cartDatas.message.slice(0, idx),
            {
              ...cartDatas.message[idx],
              quantity: cartDatas.message[idx].quantity + 1,
            },
          ],
        },
      }));
    }
  };

  minusOptionCount = idx => {
    if (idx === 0) {
      this.setState(({ cartDatas }) => ({
        cartDatas: {
          message: [
            {
              ...cartDatas.message[idx],
              quantity: cartDatas.message[idx].quantity - 1,
            },
            ...cartDatas.message.slice(idx + 1),
          ],
        },
      }));
    } else if (idx < this.state.cartDatas.message.length - 1) {
      this.setState(({ cartDatas }) => ({
        cartDatas: {
          message: [
            ...cartDatas.message.slice(0, idx),
            {
              ...cartDatas.message[idx],
              quantity: cartDatas.message[idx].quantity - 1,
            },
            ...cartDatas.message.slice(idx + 1),
          ],
        },
      }));
    } else if (idx === this.state.cartDatas.message.length - 1) {
      this.setState(({ cartDatas }) => ({
        cartDatas: {
          message: [
            ...cartDatas.message.slice(0, idx),
            {
              ...cartDatas.message[idx],
              quantity: cartDatas.message[idx].quantity - 1,
            },
          ],
        },
      }));
    }
  };

  render() {
    return (
      <div className="cart">
        <div className="cartTop">
          <div className="cartHead letter">장바구니</div>
          <div className="cartCount purple">
            {this.state.cartDatas.message?.length}
          </div>
        </div>
        <div className="product">
          <ul className="productList productListHead">
            <li className="productCheck">
              <input type="checkbox" className="productCheckBtn" />
            </li>
            <li className="productItem letter">item</li>
            <li className="productWish letter">위시</li>
            <li className="productCount letter">수량</li>
            <li className="productShip letter">배송수단</li>
            <li className="productShipPrice letter">배송비</li>
            <li className="productPrice letter">가격</li>
            <li className="productBtn letter"></li>
          </ul>
        </div>
        {this.state.cartDatas.message &&
          this.state.cartDatas.message.map((cartData, idx) => {
            return (
              <CartProduct
                key={idx}
                id={idx}
                cartData={cartData}
                postPrice={this.state.postPrice}
                delCartData={this.delCartData}
                plusOptionCount={this.plusOptionCount}
                minusOptionCount={this.minusOptionCount}
              />
            );
          })}
        <div className="itemTotal">
          <div className="itemTotalTitle">
            <span className="letter">상품가격</span>
            <span className="letter">배송비</span>
            <span className="letter">적립예정포인트</span>
          </div>
          <div className="itemTotalContent">
            <span className="letter">
              {this.state.cartDatas.message &&
                this.addTotalPrice().toLocaleString()}
              원
            </span>
            <span className="letter">
              {this.state.cartDatas.message &&
                (this.addTotalPrice() > this.state.postPrice
                  ? "무료"
                  : "3,000원")}
            </span>
            <span className="letter">
              {this.state.cartDatas.message && this.addTotalPrice() / 100}
              포인트
            </span>
          </div>
        </div>
        <div className="cartSelect">
          <div className="cartSelectBtn">
            <button>선택상품 삭제</button>
            <button>위시리스트 담기</button>
          </div>
          <div className="cartSelectTotal">
            <span className="cartSelectTotalText letter">결제금액</span>
            <span className="cartSelectTotalPrice logo">
              {this.state.cartDatas.message &&
                (
                  (this.addTotalPrice() > this.state.postPrice ? 0 : 3000) +
                  this.addTotalPrice()
                ).toLocaleString()}
              원
            </span>
          </div>
        </div>
        <button className="cartOrder purple">주문하기</button>
        <div className="cartGoProduct">계속 쇼핑하기</div>
        <div className="cartWishListTop">
          <span className="cartWishListText">위시리스트</span>
          <button className="cartWishListMore">더보기</button>
        </div>
        <div className="cartWishList">
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
        </div>
      </div>
    );
  }
}
