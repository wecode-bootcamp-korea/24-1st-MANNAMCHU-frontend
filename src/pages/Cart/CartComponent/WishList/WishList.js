import React, { Component } from "react";
import Tags from "./../../../../components/Tags/Tags";
import "./WishList.scss";

export default class WishList extends Component {
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
        <div className="wishListTags">
          <Tags isNew={true} isBest={true} isSale={true} />
        </div>
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
