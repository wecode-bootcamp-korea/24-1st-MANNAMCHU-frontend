import React, { Component } from "react";
import "./TopCarousel.scss";

export default class TopCarousel extends Component {
  render() {
    const { carousel } = this.props;
    return (
      <div id={carousel.id} className="carouselWrapper">
        <img src={carousel.url} alt="carousel_image" className="carousel" />
      </div>
    );
  }
}
