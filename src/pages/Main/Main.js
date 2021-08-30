import React, { Component } from "react";
import MainCarousel from "./MainCarousel/MainCarousel";
import MainLinks from "./MainLinks/MainLinks";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <MainCarousel />
        <MainLinks />
      </>
    );
  }
}

export default Main;
