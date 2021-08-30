import React, { Component } from "react";
import MarketIntro from "./MarketIntro/MarketIntro";
import LinktoYoutube from "./LinktoYoutube/LinktoYoutube";

export default class MainContents extends Component {
  render() {
    return (
      <>
        <div className="scrollContent"></div>
        <MarketIntro />
        <LinktoYoutube />
      </>
    );
  }
}
