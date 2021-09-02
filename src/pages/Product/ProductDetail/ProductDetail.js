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
      detailData: {},
      activeOpt: "disappear",
      activeCartData: "disappear",
      products: {
        id: "",
        name: "",
        price: "",
        image_id: [],
        tag_id: {
          new: "",
          sale: "",
          best: "",
        },
        like_count: 0,
        description: "",
      },
      options: {
        id: "",
        product_id: "",
        option: [],
        additional_price: [],
      },
    };
  }

  componentDidMount = () => {
    fetch("/data/detailPage.json")
      .then(response => response.json())
      .then(mockData => {
        this.setState({
          detailData: mockData,
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

  optionSelect = e => {
    const addCartData = {
      productOptID: e.target.id,
      productOptCount: e.target.count,
      productOptPrice: e.target.price,
    };
    this.setState({ cartData: this.state.cartData.concat(addCartData) });
    let totalPrice = 0;
    for (let i = 0; i < this.state.cartData.length; i++) {
      totalPrice = totalPrice + this.state.cartData[i].productOptPrice;
      this.setState({ cartTotalPrice: totalPrice });
    }

    for (let i = 0; i < this.state.cartData.length; i++) {
      let totalCount = this.state.cartData[i].productOptCount;
      this.setState({ cartTotalCount: totalCount });
    }
  };

  render() {
    const {
      mockImgSub,
      mockInfoName,
      mockInfoPriceReal,
      mockInfoPriceSale,
      mockInfoConfig,
      //좋아요 기능 구현 시 사용할 state
      // mockInfoOrderLike,
      // mockInfoOrderLikeCount,
      // mockDetailInfo,
    } = this.state.detailData;

    return (
      <div className="productDetail">
        <div className="top">
          <div className="img">
            <img
              alt="임시데이터"
              src="https://cdn.imweb.me/thumbnail/20210822/e5016ca280ca8.jpg"
              className="imgMain"
            />
            <ul className="imgSub">
              {mockImgSub?.map((imgSub, idx) => {
                return <ImgSubList key={idx} imgUrl={imgSub} />;
              })}
            </ul>
          </div>
          <div className="info">
            {mockInfoName && <InfoName infoName={mockInfoName} />}
            <InfoPrice
              priceReal={mockInfoPriceReal}
              priceSale={mockInfoPriceSale}
            />
            <InfoImg />
            <InfoBenefit
              priceReal={mockInfoPriceReal}
              priceSale={mockInfoPriceSale}
            />
            <InfoSend />
            <InfoConfig
              optLists={mockInfoConfig}
              activeOptionViewer={this.activeOptionViewer}
              activeOpt={this.state.activeOpt}
              activeCartDataViewer={this.activeCartDataViewer}
              activeCartData={this.state.activeCartData}
              totalCount={this.state.cartTotalCount}
              totalPrice={this.state.cartTotalPrice}
              addCartData={this.optionSelect}
            />
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
            src="./sources/images/test-detail.jpeg"
            className="detailInfoImg"
          />
        </div>
      </div>
    );
  }
}
