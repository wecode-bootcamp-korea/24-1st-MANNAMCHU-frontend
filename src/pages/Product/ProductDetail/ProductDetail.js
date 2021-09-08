import React, { Component } from "react";
import InfoName from "./ProductDetailComponent/InfoName/InfoName";
import InfoPrice from "./ProductDetailComponent/InfoPrice/InfoPrice";
import InfoBenefit from "./ProductDetailComponent/InfoBenefit/InfoBenefit";
import InfoSend from "./ProductDetailComponent/InfoSend/InfoSend";
import InfoConfig from "./ProductDetailComponent/InfoConfig/InfoConfig";
import InfoOrder from "./ProductDetailComponent/InfoOrder/InfoOrder";
import ImgList from "./ProductDetailComponent/ImgList/ImgList";
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

  // 서버와 통신
  // componentDidMount = () => {
  //   fetch("http://10.58.6.58:8000/products/detail?id=4", {
  //     method: "GET",
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log(response);
  //       this.setState({
  //         detailData: response,
  //       });
  //     });
  // };

  componentDidMount = () => {
    fetch("/data/detailPage.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          detailData: response,
        });
      });
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

  postCart = () => {
    fetch("http://10.58.5.3:8000/products/cart", {
      method: "POST",
      body: JSON.stringify(this.state.postData),
    }).then(res => console.log(res));
  };

  plusOptionCount = () => {
    this.setState(({ cartData }) => ({
      cartData: [
        ...cartData.slice(0, 1),
        {
          ...cartData[1],
          cartOptionCount: cartData[1].cartOptionCount + 1,
        },
        ...cartData.slice(2),
      ],
    }));
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
        parseInt(this.state.detailData.product_detail.price) *
          (1 - this.getSaleRate()) +
        parseInt(this.state.cartData[i].cartPrice);
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
    console.log(this.state.cartData);
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
          <button onClick={this.plusOptionCount}>테스트</button>
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
