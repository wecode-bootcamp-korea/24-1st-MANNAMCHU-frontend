import React, { Component } from "react";

export default class LinktoYoutube extends Component {
  render() {
    return (
      <div className="linkToYoutube">
        <a href="https://www.youtube.com/watch?v=nLf6r5p8nqs">
          <div>
            마음을 담아 마음을 주는
            <br />
            프리미엄 과일(Fruits) 부티크
            <br />
            마담주 Madamjoo
          </div>
          <div>
            깐깐하게 고르고 품격 있게 담아
            <br />
            가장 신선한 행복을 전해드리는
            <br />
            당신의 퍼스널 프루츠 디렉터가 되겠습니다.
          </div>
          <button>YOUTUBE LINK &gt;</button>
        </a>
      </div>
    );
  }
}
