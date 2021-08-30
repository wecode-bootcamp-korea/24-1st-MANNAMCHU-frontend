import React, { Component } from "react";
import MainLink from "./ManiLink/MainLink";
import "./MainLinks.scss";

class MainLinks extends Component {
  state = {
    links: [
      {
        id: 1,
        name: "gift",
        desc: "세상에 없던\n 프리미엄 과일 부띠크",
        color: "#f7f7f7",
      },
      {
        id: 2,
        name: "market",
        desc: "실패없는,\n 맛있는 과일 구매",
        color: "#f4efe7",
      },
      {
        id: 3,
        name: "rise and fruit",
        desc: "아침의 시작을,\n과일 전문가와 함께!",
        color: "#f0f0f8",
      },
      {
        id: 4,
        name: "supporter",
        desc: "과일, 직접 손질해\n드시나요?",
        color: "#fff5ed",
      },
      {
        id: 5,
        name: "company",
        desc: "기업회원 전용",
        color: "#f4f4f4",
      },
    ],
  };
  render() {
    const { links } = this.state;
    return (
      <ul className="mainLinks letter">
        {links.map(link => (
          <MainLink key={link.id} link={link} />
        ))}
        <li className="mainLink mapLink">
          <a
            href="https://map.naver.com/v5/search/%EB%A7%88%EB%8B%B4%EC%A3%BC/place/1281132177?c=14142355.1559094,4512237.2989462,15,0,0,0,dh&placePath=%3Fentry%253Dbmp"
            className="listContent"
          >
            마담주 청담점
            <br />
            오시는 길→
          </a>
        </li>
      </ul>
    );
  }
}

export default MainLinks;
