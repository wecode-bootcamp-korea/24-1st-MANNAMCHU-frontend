import React, { Component } from "react";
import InfoConfigSelOpt from "./InfoConfigSelOpt/InfoConfigSelOpt";
import InfoConfigOptPrice from "./InfoConfigOptPrice/InfoConfigOptPrice";
import "./InfoConfig.scss";

export default class InfoConfig extends Component {
  render() {
    const {
      activeOptionViewer,
      activeOpt,
      options,
      addCartData,
      cartData,
      realPrice,
      plusOptionCount,
      minusOptionCount,
      delOption,
      addCartTotalCount,
      addCartTotalPrice,
    } = this.props;

    return (
      <div className="infoConfig">
        <div className="infoConfigText">상품 구성 선택 *</div>
        <div className="infoConfigSel">
          <button className="infoConfigSelBtn" onClick={activeOptionViewer}>
            <span>상품 구성 선택 (필수)</span>
            <span>펼치기</span>
          </button>
          <div className={activeOpt}>
            {options?.map((option, idx) => {
              return (
                <InfoConfigSelOpt
                  key={idx}
                  option={option}
                  addCartData={addCartData}
                />
              );
            })}
          </div>
        </div>
        {cartData.length > 0 && (
          <div className="infoConfigOpt">
            {cartData.map((selOption, idx) => {
              return (
                <InfoConfigOptPrice
                  key={idx}
                  id={idx}
                  cartOption={selOption}
                  realPrice={realPrice}
                  plusOptionCount={plusOptionCount}
                  minusOptionCount={minusOptionCount}
                  delOption={delOption}
                />
              );
            })}
            <div className="infoConfigOptResult">
              <span className="infoConfigOptTotalCount">
                총 상품금액({addCartTotalCount()})
              </span>
              <span className="infoConfigOptTotalPrice">
                {addCartTotalPrice().toLocaleString()}원
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
