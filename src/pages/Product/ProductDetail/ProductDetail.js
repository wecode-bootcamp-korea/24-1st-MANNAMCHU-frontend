import React, { Component } from "react";
import ImgSubList from "./ProductDetailComponent/ImgSubList/ImgSubList";
import InfoName from "./ProductDetailComponent/InfoName/InfoName";
import InfoPrice from "./ProductDetailComponent/InfoPrice/InfoPrice";
import InfoImg from "./ProductDetailComponent/InfoImg/InfoImg";
import InfoBenefit from "./ProductDetailComponent/InfoBenefit/InfoBenefit";
import InfoSend from "./ProductDetailComponent/InfoSend/InfoSend";
import InfoConfig from "./ProductDetailComponent/InfoConfig/InfoConfig";
import InfoOrder from "./ProductDetailComponent/InfoOrder/InfoOrder";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: { product_detail: {} },
      activeOpt: "disappear",
      activeCartData: "disappear",
      // cartTotalCount: 0,
      // cartTotalPrice: 0,
      cartData: { cartTotalCount: 0, cartTotalPrice: 0, cartTotalOption: [] },
    };
  }

  //서버와 통신
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

  activeCartDataViewer = () => {
    this.state.cartTotalCount === 0
      ? this.setState({ activeCartData: "disappear" })
      : this.setState({ activeCartData: "infoConfigOpt" });
  };

  addCartData = (id, option, price) => {
    //선택 옵션 추가
    const addCartData = {
      cartId: id,
      cartOptionCount: 1,
      cartOption: option,
      cartPrice: price,
    };
    this.setState({
      cartData: this.state.cartData.cartTotalOption.concat(addCartData),
    });
    // this.addTotalPrice();
    // this.addTotalCount();
    this.activeCartDataViewer();
  };

  // addTotalCount = () => {
  //   let totalCount = 0;
  //   for (let i = 0; i < this.state.cartData.cartTotalOption.length; i++) {
  //     totalCount =
  //       totalCount + this.state.cartData.cartTotalOption[i].cartOptionCount;
  //   }

  //   console.log(this.state.cartData.cartTotalCount);
  // };

  // addTotalPrice = () => {
  //   let totalPrice = 0;
  //   for (let i = 0; i < this.state.cartData.length; i++) {
  //     totalPrice += parseInt(this.state.cartData[i].cartPrice);
  //   }
  //   this.setState({ cartTotalPrice: totalPrice });
  // };

  render() {
    const {
      name,
      price,
      like_count,
      discount,
      description,
      options,
      origin,
      image,
      tag,
    } = this.state.detailData.product_detail;

    return (
      <>
        {this.state.detailData.product_detail && (
          <div className="productDetail">
            <div className="top">
              <div className="img">
                <img
                  alt="임시데이터"
                  src="https://cdn.imweb.me/thumbnail/20210822/e5016ca280ca8.jpg"
                  className="imgMain"
                />
                <ul className="imgSub">
                  {image &&
                    image[0].map((imgSub, idx) => {
                      return <ImgSubList key={idx} imgUrl={imgSub.url} />;
                    })}
                </ul>
              </div>
              <div className="info">
                {name && <InfoName infoName={name} infoTag={tag} />}
                <InfoPrice priceReal={parseInt(price)} priceSale={discount} />
                <InfoImg />
                <InfoBenefit priceReal={price} priceSale={discount} />
                <InfoSend />
                {options && (
                  <InfoConfig
                    options={options[0]}
                    activeOptionViewer={this.activeOptionViewer}
                    activeOpt={this.state.activeOpt}
                    activeCartDataViewer={this.activeCartDataViewer}
                    activeCartData={this.state.activeCartData}
                    totalCount={this.state.cartTotalCount}
                    totalPrice={this.state.cartTotalPrice}
                    addCartData={this.addCartData}
                  />
                )}
                <InfoOrder />
              </div>
            </div>
            <div className="tab">
              <span>상세정보</span>
              <span>/</span>
              <span>구매평</span>
            </div>
            <div className="detailInfo">
              <img
                alt="임시데이터"
                src={description}
                className="detailInfoImg"
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
