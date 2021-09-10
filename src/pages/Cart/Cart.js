import React, { Component } from "react";
import CartProduct from "./CartComponent/CartProduct/CartProduct";
import WishList from "./CartComponent/WishList/WishList";
import { CART_API } from "../../config";
import "./Cart.scss";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartDatas: {},
      postPrice: 90000,
      delCartData: [],
      postDatas: [],
    };
  }

  // mockdata 통신
  // componentDidMount = () => {
  //   fetch("/data/cartListData.json")
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         cartDatas: response,
  //       });
  //     });
  // };

  //서버와 통신
  componentDidMount = () => {
    fetch(`${CART_API}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          cartDatas: response,
        });
        this.addCartData(response);
      });
  };

  componentWillUnmount = () => {
    console.log(this.state.postDatas);
    fetch(`${CART_API}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(this.state.postDatas),
    });
    this.delServerCartData();
  };

  delServerCartData = () => {
    this.state.delCartData.map(option_id => {
      fetch(`${CART_API}?option_id=${option_id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
    });
  };

  delCartData = (idx, option_id) => {
    let cartDatas = this.state.cartDatas;
    cartDatas.message.splice(idx, 1);
    this.setState({
      cartDatas: cartDatas,
      delCartData: this.state.delCartData.concat(option_id),
    });
  };

  addCartData = response => {
    for (let i = 0; i < response.message.length; i++) {
      const postData = {
        user_id: 1,
        quantity: response.message[i].quantity,
        option_id: response.message[i].option_id,
      };
      this.setState({
        postDatas: this.state.postDatas.concat(postData),
      });
    }
  };

  addCartDatas = () => {
    this.addCartData(this.state.cartDatas);
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
      this.setState(({ postDatas }) => ({
        postDatas: [
          {
            ...postDatas[idx],
            quantity: postDatas[idx].quantity + 1,
          },
          ...postDatas.slice(idx + 1),
        ],
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
      this.setState(({ postDatas }) => ({
        postDatas: [
          ...postDatas.slice(0, idx),
          {
            ...postDatas[idx],
            quantity: postDatas[idx].quantity + 1,
          },
          ...postDatas.slice(idx + 1),
        ],
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
      this.setState(({ postDatas }) => ({
        postDatas: [
          ...postDatas.slice(0, idx),
          {
            ...postDatas[idx],
            quantity: postDatas[idx].quantity + 1,
          },
        ],
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
      this.setState(({ postDatas }) => ({
        postDatas: [
          {
            ...postDatas[idx],
            quantity: postDatas[idx].quantity - 1,
          },
          ...postDatas.slice(idx + 1),
        ],
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
      this.setState(({ postDatas }) => ({
        postDatas: [
          ...postDatas.slice(0, idx),
          {
            ...postDatas[idx],
            quantity: postDatas[idx].quantity - 1,
          },
          ...postDatas.slice(idx + 1),
        ],
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
      this.setState(({ postDatas }) => ({
        postDatas: [
          ...postDatas.slice(0, idx),
          {
            ...postDatas[idx],
            quantity: postDatas[idx].quantity - 1,
          },
        ],
      }));
    }
  };

  render() {
    console.log(this.state.postDatas);
    const { message } = this.state.cartDatas;
    return (
      <div className="cart">
        <div className="cartTop">
          <div className="cartHead letter">장바구니</div>
          <div className="cartCount purple">{message?.length}</div>
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
        {message &&
          message.map((cartData, idx) => {
            return (
              <CartProduct
                key={idx}
                id={idx}
                cartData={cartData}
                postPrice={this.state.postPrice}
                delCartData={this.delCartData}
                plusOptionCount={this.plusOptionCount}
                minusOptionCount={this.minusOptionCount}
                addCartDatas={this.addCartDatas}
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
              {message && this.addTotalPrice().toLocaleString()}원
            </span>
            <span className="letter">
              {message &&
                (this.addTotalPrice() > this.state.postPrice
                  ? "무료"
                  : "3,000원")}
            </span>
            <span className="letter">
              {message && this.addTotalPrice() / 100}
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
              {message &&
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
