import React, { Component } from "react";
import "./CarouselContent.scss";

export default class CarouselContent extends Component {
  render() {
    const { carousel, selected } = this.props;
    const { image } = carousel;
    return (
      <>
        <div
          className={`carouselWrapper ${
            selected === carousel.id ? "active" : "disappear"
          }`}
        >
          {image.map(img => (
            <div className="imgWrapper">
              <img
                key={img.id}
                src={img.url}
                alt="instagram_image"
                className="carouselImg"
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
