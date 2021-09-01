import React, { Component } from "react";
import ImgSubList from "./ProductDetailComponent/ImgSubList";
import InfoName from "./ProductDetailComponent/InfoName";
import InfoPrice from "./ProductDetailComponent/InfoPrice";
import InfoImg from "./ProductDetailComponent/InfoImg";
import InfoBenefit from "./ProductDetailComponent/InfoBenefit";
import InfoSend from "./ProductDetailComponent/InfoSend";
import InfoConfig from "./ProductDetailComponent/InfoConfig";
import InfoOrder from "./ProductDetailComponent/InfoOrder";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: [],
    };
  }

  componentDidMount() {
    fetch("/data/detailPage.json")
      .then(response => response.json())
      .then(mockData => {
        this.setState({
          detailData: mockData,
        });
      });
  }

  render() {
    return (
      <div className="main">
        <div className="top">
          <div className="img">
            <img
              alt=""
              src="https://cdn.imweb.me/thumbnail/20210822/e5016ca280ca8.jpg"
              className="imgMain"
            />
            <ul className="imgSub">
              {this.state.detailData.mockImgSub &&
                this.state.detailData.mockImgSub.map(imgSub => {
                  return <ImgSubList imgUrl={imgSub} />;
                })}
            </ul>
          </div>
          <div className="info">
            <InfoName infoName={this.state.detailData} />
            <InfoPrice
              priceReal={this.state.detailData.mockInfoPriceReal}
              priceSale={this.state.detailData.mockInfoPriceSale}
            />
            <InfoImg />
            <InfoBenefit
              priceReal={this.state.detailData.mockInfoPriceReal}
              priceSale={this.state.detailData.mockInfoPriceSale}
            />
            <InfoSend />
            <InfoConfig optLists={this.state.detailData.mockInfoConfig} />
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
            alt=""
            src="./sources/images/test-detail.jpeg"
            className="detailInfoImg"
          />
        </div>
      </div>
    );
  }
}
