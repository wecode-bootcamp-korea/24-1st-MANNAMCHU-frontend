import React, { Component } from "react";
import "./InfoBenefit.scss";

export default class InfoBenefit extends Component {
  render() {
    return (
      <div className="infoBenefit">
        <span className="infoBenefitText">구매혜택</span>
        <span className="infoBenefitPoint">
          {(this.props.priceReal * (1 - this.props.priceSale)) / 100} 포인트
          적립예정
        </span>
        <span>
          <i className="far fa-question-circle" />
        </span>
      </div>
    );
  }
}
