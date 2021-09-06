import React, { Component } from "react";
import MainLink from "./MainLink/MainLink";
import MAIN_LISTS from "./mainLinkData";
import "./MainLinks.scss";

class MainLinks extends Component {
  render() {
    return (
      <ul className="mainLinks letter">
        {MAIN_LISTS.map(link => (
          <MainLink key={link.id} link={link} />
        ))}
        <li className="mainLink mapLink">
          <a href="https://map.naver.com/v5/search/%EB%A7%88%EB%8B%B4%EC%A3%BC/place/1281132177?c=14142355.1559094,4512237.2989462,15,0,0,0,dh&placePath=%3Fentry%253Dbmp">
            <p className="mapLinkBold">마담주 청담점</p>
            <p className="mapLinkLean">오시는 길 →</p>
          </a>
        </li>
      </ul>
    );
  }
}

export default MainLinks;
