import React, { Component } from "react";
import InfoName from "./ProductDetailComponent/InfoName/InfoName";
import InfoPrice from "./ProductDetailComponent/InfoPrice/InfoPrice";
import InfoBenefit from "./ProductDetailComponent/InfoBenefit/InfoBenefit";
import InfoSend from "./ProductDetailComponent/InfoSend/InfoSend";
import InfoConfig from "./ProductDetailComponent/InfoConfig/InfoConfig";
import InfoOrder from "./ProductDetailComponent/InfoOrder/InfoOrder";
import ImgList from "./ProductDetailComponent/ImgList/ImgList";
import { PRODUCT_DETAIL_API, CART_API } from "../../../config";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: { product_detail: {} },
      activeOpt: "disappear",
      activeCartData: "disappear",
      cartTotalCount: 0,
      cartTotalPrice: 0,
      cartData: [],
      postData: [],
    };
  }

  // 목 데이터 통신
  // componentDidMount = () => {
  //   fetch("/data/detailPage.json")
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         detailData: response,
  //       });
  //     });
  // };

  // 서버와 통신
  componentDidMount = () => {
    fetch(`${PRODUCT_DETAIL_API}${this.props.match.params.id}`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          detailData: response,
        });
      });
  };

  postCart = () => {
    if (this.state.postData.length === 0) {
      alert("항목을 선택해 주세요");
      return;
    }

    fetch(`${CART_API}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(this.state.postData),
    }).then(
      res =>
        this.setState({
          cartData: [],
          postData: [],
        }),
      alert("장바구니에 상품을 담았습니다")
    );
  };

  activeOptionViewer = () => {
    this.state.activeOpt === "disappear"
      ? this.setState({ activeOpt: "infoConfigSelOpt" })
      : this.setState({ activeOpt: "disappear" });
  };

  addCartData = (id, option, price) => {
    const addCartData = {
      option_id: id,
      cartOption: option,
      cartPrice: price,
      cartOptionCount: 1,
    };

    this.setState({
      cartData: this.state.cartData.concat(addCartData),
    });

    const postData = {
      user_id: 1,
      quantity: 1,
      option_id: id,
    };
    this.setState({
      postData: this.state.postData.concat(postData),
    });
    this.activeOptionViewer();
  };

  plusOptionCount = idx => {
    if (idx === 0) {
      this.setState(({ cartData }) => ({
        cartData: [
          {
            ...cartData[idx],
            cartOptionCount: cartData[idx].cartOptionCount + 1,
          },
          ...cartData.slice(idx + 1),
        ],
      }));
      this.setState(({ postData }) => ({
        postData: [
          {
            ...postData[idx],
            quantity: postData[idx].quantity + 1,
          },
          ...postData.slice(idx + 1),
        ],
      }));
    } else if (idx < this.state.cartData.length - 1) {
      this.setState(({ cartData }) => ({
        cartData: [
          ...cartData.slice(0, idx),
          {
            ...cartData[idx],
            cartOptionCount: cartData[idx].cartOptionCount + 1,
          },
          ...cartData.slice(idx + 1),
        ],
      }));
      this.setState(({ postData }) => ({
        postData: [
          ...postData.slice(0, idx),
          {
            ...postData[idx],
            quantity: postData[idx].quantity + 1,
          },
          ...postData.slice(idx + 1),
        ],
      }));
    } else if (idx === this.state.cartData.length - 1) {
      this.setState(({ cartData }) => ({
        cartData: [
          ...cartData.slice(0, idx),
          {
            ...cartData[idx],
            cartOptionCount: cartData[idx].cartOptionCount + 1,
          },
        ],
      }));
      this.setState(({ postData }) => ({
        postData: [
          ...postData.slice(0, idx),
          {
            ...postData[idx],
            quantity: postData[idx].quantity + 1,
          },
        ],
      }));
    }
  };

  minusOptionCount = idx => {
    if (idx === 0) {
      this.setState(({ cartData }) => ({
        cartData: [
          {
            ...cartData[idx],
            cartOptionCount: cartData[idx].cartOptionCount - 1,
          },
          ...cartData.slice(idx + 1),
        ],
      }));
      this.setState(({ postData }) => ({
        postData: [
          {
            ...postData[idx],
            quantity: postData[idx].quantity - 1,
          },
          ...postData.slice(idx + 1),
        ],
      }));
    } else if (idx < this.state.cartData.length - 1) {
      this.setState(({ cartData }) => ({
        cartData: [
          ...cartData.slice(0, idx),
          {
            ...cartData[idx],
            cartOptionCount: cartData[idx].cartOptionCount - 1,
          },
          ...cartData.slice(idx + 1),
        ],
      }));
      this.setState(({ postData }) => ({
        postData: [
          ...postData.slice(0, idx),
          {
            ...postData[idx],
            quantity: postData[idx].quantity - 1,
          },
          ...postData.slice(idx + 1),
        ],
      }));
    } else if (idx === this.state.cartData.length - 1) {
      this.setState(({ cartData }) => ({
        cartData: [
          ...cartData.slice(0, idx),
          {
            ...cartData[idx],
            cartOptionCount: cartData[idx].cartOptionCount - 1,
          },
        ],
      }));
      this.setState(({ postData }) => ({
        postData: [
          ...postData.slice(0, idx),
          {
            ...postData[idx],
            quantity: postData[idx].quantity - 1,
          },
        ],
      }));
    }
  };

  delOption = idx => {
    let delOption = this.state.cartData;
    delOption.splice(idx, 1);
    this.setState({
      cartData: delOption,
    });
  };

  addCartTotalCount = () => {
    let addCartTotalCount = 0;
    for (let i = 0; i < this.state.cartData.length; i++) {
      addCartTotalCount =
        addCartTotalCount + this.state.cartData[i].cartOptionCount;
    }
    return addCartTotalCount;
  };

  addCartTotalPrice = () => {
    let addCartTotalPrice = 0;
    for (let i = 0; i < this.state.cartData.length; i++) {
      addCartTotalPrice =
        addCartTotalPrice +
        (parseInt(this.state.detailData.product_detail.price) *
          (1 - this.getSaleRate()) +
          parseInt(this.state.cartData[i].cartPrice)) *
          this.state.cartData[i].cartOptionCount;
    }
    return addCartTotalPrice;
  };

  getSaleRate = () => {
    let result = 0;
    for (let i = 0; i < this.state.detailData.product_detail.tag.length; i++) {
      this.state.detailData.product_detail.tag[i].tag_id === "sale"
        ? (result = this.state.detailData.product_detail.tag[i].sale_rate)
        : (result = result);
    }
    return result / 100;
  };

  render() {
    const {
      name,
      price,
      like_count,
      description,
      options,
      origin,
      image,
      tag,
    } = this.state.detailData.product_detail;
    return (
      <>
        <div className="productDetail">
          <div className="top">
            <div className="img">{image && <ImgList image={image} />}</div>
            <div className="info">
              {name && <InfoName infoName={name} infoTag={tag} />}
              {this.state.detailData.product_detail.tag && (
                <InfoPrice
                  priceReal={parseInt(price)}
                  priceSale={this.getSaleRate()}
                />
              )}
              <img alt="상품 사이드 이미지" src={origin} className="infoImg" />
              {this.state.detailData.product_detail.tag && (
                <InfoBenefit priceReal={price} priceSale={this.getSaleRate()} />
              )}
              <InfoSend />
              {options && (
                <InfoConfig
                  options={options}
                  activeOptionViewer={this.activeOptionViewer}
                  activeOpt={this.state.activeOpt}
                  activeCartData={this.state.activeCartData}
                  totalCount={this.state.cartTotalCount}
                  totalPrice={this.state.cartTotalPrice}
                  addCartData={this.addCartData}
                  cartData={this.state.cartData}
                  addCartTotalCount={this.addCartTotalCount}
                  addCartTotalPrice={this.addCartTotalPrice}
                  realPrice={price * (1 - this.getSaleRate())}
                  plusOptionCount={this.plusOptionCount}
                  minusOptionCount={this.minusOptionCount}
                  delOption={this.delOption}
                />
              )}
              <InfoOrder likeCount={like_count} postCart={this.postCart} />
            </div>
          </div>
          <div className="tab">
            <span>상세정보</span>
            <span>/</span>
            <span>구매평</span>
          </div>
          <div className="detailInfo">
            <img alt="상세정보" src={description} className="detailInfoImg" />
          </div>
        </div>
      </>
    );
  }
}
