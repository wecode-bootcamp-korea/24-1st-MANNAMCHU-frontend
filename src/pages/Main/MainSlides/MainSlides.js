import React, { Component } from "react";
import MainSlide from "./MainSlide/MainSlide";
import "./MainSlides.scss";

export default class MainSlides extends Component {
  state = {
    slides: [
      {
        id: 1,
        name: "firstSlide",
        url: "https://cdn.imweb.me/thumbnail/20200118/ee11fcc596837.jpg",
      },
      {
        id: 2,
        name: "secondSlide",
        url: "https://cdn.imweb.me/thumbnail/20190820/1304ccbbcbcf9.jpg",
      },
      {
        id: 3,
        name: "thirdSlide",
        url: "https://cdn.imweb.me/thumbnail/20190820/c970d753d4c5a.jpg",
      },
    ],
    selected: 1,
  };

  handleCurrentSlide = () => {
    const { selected } = this.state;
    this.setState({ selected: selected === 3 ? 1 : selected + 1 });
  };

  handleReverse = () => {
    const { selected } = this.state;
    this.setState({ selected: selected === 1 ? 3 : selected - 1 });
  };

  handleRight = () => {
    this.handleCurrentSlide();
  };

  handleLeft = () => {
    this.handleReverse();
  };

  render() {
    const { slides, selected } = this.state;
    return (
      <div className="mainSlides">
        <div className="container">
          {slides.map(slide => (
            <MainSlide key={slide.id} slide={slide} selected={selected} />
          ))}
        </div>
        <div className="comment">
          <p>특별한 분들께 드리는</p>
          <strong>프리미엄 과일 선물</strong>
        </div>
        <button className="goLeft" onClick={this.handleLeft}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="goRight" onClick={slides && this.handleRight}>
          <i className="fas fa-arrow-right" />
        </button>
        <ul className="pagination"></ul>
      </div>
    );
  }
}
