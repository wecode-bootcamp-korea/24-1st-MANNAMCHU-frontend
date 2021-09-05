import React, { Component } from "react";
import InfoConfigSelOpt from "./InfoConfigSelOpt/InfoConfigSelOpt";
import InfoConfigOptPrice from "./InfoConfigOptPrice/InfoConfigOptPrice";
import "./InfoConfig.scss";

export default class InfoConfig extends Component {
  render() {
    return (
      <div className="infoConfig">
        <div className="infoConfigText">상품 구성 선택 *</div>
        <div className="infoConfigSel">
          <button
            className="infoConfigSelBtn"
            onClick={this.props.activeOptionViewer}
          >
            <span>상품 구성 선택 (필수)</span>
            <span>펼치기</span>
          </button>
          <div className={this.props.activeOpt}>
            {this.props.options?.map((option, idx) => {
              return (
                <InfoConfigSelOpt
                  key={idx}
                  option={option}
                  addCartData={this.props.addCartData}
                />
              );
            })}
          </div>
        </div>
        {this.props.cartData.length > 0 && (
          <div className="infoConfigOpt">
            {this.props.cartData.map((selOption, idx) => {
              return (
                <InfoConfigOptPrice
                  key={idx}
                  cartOption={selOption}
                  realPrice={this.props.realPrice}
                />
              );
            })}
            <div className="infoConfigOptResult">
              <span className="infoConfigOptTotalCount">
                총 상품금액({this.props.addCartTotalCount()})
              </span>
              <span className="infoConfigOptTotalPrice">
                {this.props.addCartTotalPrice()}원
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
