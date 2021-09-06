import React, { Component } from "react";
import MainSlide from "./MainSlide/MainSlide";
import SLIDES from "./MainslidesData";
import "./MainSlides.scss";

export default class MainSlides extends Component {
  state = {
    selected: 1,
  };

  componentDidMount = () => {
    setInterval(this.handleCurrentSlide, 5000);
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
    const { selected } = this.state;
    return (
      <div className="mainSlides">
        <div className="container">
          {SLIDES.map(slide => (
            <MainSlide key={slide.id} slide={slide} selected={selected} />
          ))}
        </div>

        <button className="goLeft" onClick={this.handleLeft}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="goRight" onClick={this.handleRight}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }
}
