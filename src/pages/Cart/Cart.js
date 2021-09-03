import React, { Component } from "react";
import "./Cart.scss";

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cartTop">
          <div className="cartHead">장바구니</div>
          <div className="cartCount">1</div>
        </div>
        <div className="product">
          <ul className="productList">
            <li className="productCheck">
              <input type="checkbox" className="productCheckBtn" />
            </li>
            <li className="productItem">item</li>
            <li className="productWish">위시</li>
            <li className="productCount">수량</li>
            <li className="productShip">배송수단</li>
            <li className="productShipPrice">배송비</li>
            <li className="productPrice">가격</li>
            <li className="productBtn"></li>
          </ul>
        </div>
        <Product />
        <div className="itemTotal">
          <div className="itemTotalTitle">
            <span>상품가격</span>
            <span>배송비</span>
            <span>적립예정포인트</span>
          </div>
          <div className="itemTotalContent">
            <span>259900원</span>
            <span>무료</span>
            <span>2599포인트</span>
          </div>
        </div>
        <div className="cartSelect">
          <div className="cartSelectBtn">
            <button>선택상품 삭제</button>
            <button>위시리스트 담기</button>
          </div>
          <div className="cartSelectTotal">
            <span className="cartSelectTotalText">결제금액</span>
            <span>259900원</span>
          </div>
        </div>
        <button className="cartOrder">주문하기</button>
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
            <span className="productItemImg">이미지</span>
            <span>
              <div className="proeductItemName">상품명</div>
              <div className="productItemOpt">상품옵션</div>
            </span>
          </li>
          <li className="productWish">
            <i className="far fa-heart" />
          </li>
          <li className="productCount">
            <div className="productCountNum">1개</div>
            <button className="productCountChange">변경</button>
          </li>
          <li className="productShip">택배</li>
          <li className="productShipPrice">3000원</li>
          <li className="productPrice">32,000원</li>
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
          <span className="wishListPriceReal">64000원</span>
          <span className="wishListPriceSale">31500원</span>
        </div>
        <div className="wishListTags">{/* <Tags /> */}</div>
        <div className="wishListWish">
          <span>
            <i className="far fa-heart" />
          </span>
          <span>2</span>
        </div>
      </div>
    );
  }
}
