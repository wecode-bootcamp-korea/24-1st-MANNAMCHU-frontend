import React, { Component } from "react";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
  render() {
    return (
      <div className="detailPageMain">
        <div className="detailPageTop">
          <div className="detailPageImage">
            <img
              alt=""
              src="https://cdn.imweb.me/thumbnail/20210822/e5016ca280ca8.jpg"
              className="detailPageImageMain"
            />
            <div className="detailPageImageSub">이미지서브</div>
          </div>
          <div className="detailPageInpo">
            <div className="detailPageInpoName">
              <span className="detailPageInpoNameText">
                [반짝할인]제주 자연산 민어 사시미/지리/매운탕
              </span>
              <span className="detailPageInpoNameNew">NEW</span>
              <span className="detailPageInpoNameSale">SALE</span>
              <span className="detailPageInpoNameBest">BEST</span>
              <span className="detailPageInpoNameMD">MD</span>
            </div>
            <div className="detailPageInpoPrice">
              <span>
                <span className="detailPageInpoPriceReal">67,500원</span>
                <span className="detailPageInpoPriceSale">75,000원</span>
              </span>
              <span className="detailPageInpoPriceShare">
                <i class="fas fa-share-alt"></i>
              </span>
            </div>
            <img
              alt=""
              src="./sources/images/상세정보.png"
              className="detailPageInpoImage"
            />
            <div className="detailPageInpoBenefit">
              <span className="detailPageInpoBenefitText">구매혜택</span>
              <span className="detailPageInpoBenefitPoint">
                675 포인트 적립예정
              </span>
              <span>
                <i class="far fa-question-circle"></i>
              </span>
            </div>
            <div className="detailPageInpoSend">
              <span>
                <i className="fas fa-truck detailPageInpoSendTruck"></i>
              </span>
              <span className="detailPageInpoSendText">
                <div>오늘출발 상품</div>
                <div>오늘출발 마감되었습니다.(평일 15:00까지)</div>
              </span>
            </div>
            <div className="detailPageInpoConfig">
              <div className="detailPageInpoConfigText">상품 구성 선택 *</div>
              <button className="detailPageInpoConfigBtn">
                <span>상품 구성 선택 (필수)</span>
                <span>펼치기</span>
              </button>
              <div className="detailPageInpoConfigOrder">
                <button className="detailPageInpoConfigOrderBuy">
                  구매하기
                </button>
                <button className="detailPageInpoConfigOrderCart">
                  장바구니
                </button>
                <button className="detailPageInpoConfigOrderLike">
                  <i class="far fa-heart"></i> 2
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="detailPageTab">
          <span>상세정보</span>
          <span>/</span>
          <span>구매평</span>
        </div>
        <div className="detailPageDetailInpo">
          <img alt="detailpage" src="./sources/images/test-detail.jpeg" />
        </div>
      </div>
    );
  }
}
