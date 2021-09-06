import React, { Component } from "react";
import MarketIntro from "./MarketIntro/MarketIntro";
import LinktoYoutube from "./LinktoYoutube/LinktoYoutube";
import ScrollPage from "./MarketIntro/ScrollPage/ScrollPage";
import "./MainContents.scss";

export default class MainContents extends Component {
  render() {
    return (
      <>
        <ScrollPage />
        <MarketIntro />
        <LinktoYoutube />
      </>
    );
  }
}
