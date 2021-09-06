import React, { Component } from "react";
import MainSlides from "./MainSlides/MainSlides";
import MainLinks from "./MainLinks/MainLinks";
import MainContents from "./MainContents/MainContents";
import MainCarousel from "./MainCarousel/MainCarousel";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <MainSlides />
        <MainLinks />
        <MainContents />
        <MainCarousel />
      </>
    );
  }
}

export default Main;
