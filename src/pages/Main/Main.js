import React, { Component } from "react";
import MainCarousel from "./MainCarousel/MainCarousel";
import MainLinks from "./MainLinks/MainLinks";
import MainContents from "./MainContents/MainContents";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <MainCarousel />
        <MainLinks />
        <MainContents />
      </>
    );
  }
}

export default Main;
