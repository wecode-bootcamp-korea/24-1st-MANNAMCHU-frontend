import React, { Component } from "react";
import "./Cart.scss";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: {},
      postPrice: 90000,
    };
  }

  // componentDidMount = () => {
  //   fetch("/data/listData.json")
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         cartData: response,
  //       });
  //     });
  // };

  componentDidMount = () => {
    fetch("http://10.58.4.175:8000/products/cart", {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.gkCFFEj525ntZJdHEqKnUD8X-v9oy75acVxJrqqtpZE",
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          cartData: response,
        });

        console.log(this.state.cartData);
      });
  };

  addTotalPrice = () => {
    let addTotalPrice = 0;
    for (let i = 0; i < this.state.cartData.listData.length; i++) {
      addTotalPrice = addTotalPrice + this.state.cartData.listData[i].price;
    }
    return addTotalPrice;
  };

  render() {
    return (
      <div className="cart">
        <div className="cartTop">
          <div className="cartHead letter">장바구니</div>
          <div className="cartCount purple">
            {this.state.cartData.listData?.length}
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
        {this.state.cartData.listData &&
          this.state.cartData.listData.map((listData, idx) => {
            return <Product key={idx} listData={listData} />;
          })}
        <div className="itemTotal">
          <div className="itemTotalTitle">
            <span className="letter">상품가격</span>
            <span className="letter">배송비</span>
            <span className="letter">적립예정포인트</span>
          </div>
          <div className="itemTotalContent">
            <span className="letter">
              {this.state.cartData.listData &&
                this.addTotalPrice().toLocaleString()}
              원
            </span>
            <span className="letter">
              {this.state.cartData.listData &&
                (this.addTotalPrice() > this.state.postPrice
                  ? "무료"
                  : "3,000원")}
            </span>
            <span className="letter">
              {this.state.cartData.listData && this.addTotalPrice() / 100}
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
              {this.state.cartData.listData &&
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

class Product extends Component {
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
                src={this.props.listData.thumbnails[0].item}
              />
            </div>
            <div>
              <div className="productItemName letter">
                {this.props.listData.name}
              </div>
              <div className="productItemOpt letter">상품옵션</div>
            </div>
          </li>
          <li className="productWish">
            <i className="far fa-heart" />
          </li>
          <li className="productCount">
            <div className="productCountNum">1개</div>
            <button className="productCountChange">변경</button>
          </li>
          <li className="productShip letter">택배</li>
          <li className="productShipPrice letter">3000원</li>
          <li className="productPrice letter">
            {parseInt(this.props.listData.price).toLocaleString()}원
          </li>
          <li className="productBtn">
            <button className="productOrder">주문</button>
            <button className="productDelete">삭제</button>
          </li>
        </ul>
      </div>
    );
  }
}

class WishList extends Component {
  render() {
    return (
      <div className="wishList">
        <div className="wishListImg">
          <img
            alt="과일"
            src="	https://cdn.imweb.me/thumbnail/20210328/a279ae183ff9e.jpg"
          />
        </div>
        <div className="wishListName">[새벽배송] 메론스럽게,메론</div>
        <div className="wishListPrice">
          <span className="wishListPriceReal letter">64000원</span>
          <span className="wishListPriceSale letter">31500원</span>
        </div>
        <div className="wishListTags">{/* <Tags /> */}</div>
        <div className="wishListWish">
          <span>
            <i className="far fa-heart" />
          </span>
          <span className="wishListWishCount">2</span>
        </div>
      </div>
    );
  }
}
