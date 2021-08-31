import React, { Component } from "react";
import TopCarousel from "./TopCarousel/TopCarousel";
import "./MainCarousel.scss";

class MainCarousel extends Component {
  state = {
    topCarousel: [],
    rightIndex: 0,
    scrollLeft: 0,
  };

  componentDidMount = () => {
    fetch("/data/main/carousel.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ topCarousel: data.topCarousel });
      });
  };

  // translateX(이동거리)로 움직이기
  // 전체 갯수 /3으로 무한 돌리기
  handleRight = e => {
    if (e.target.className && e.target.className === "fas fa-arrow-right") {
      this.setState({
        ...this.state,
        rightIndex: this.state.rightIndex + 1,
      });
    }
  };

  render() {
    const { topCarousel, rightIndex } = this.state;
    const slideWidth = 1920;
    return (
      <div className="slideWrapper">
        <div className="carouselBox">
          <div
            className="carousels"
            style={{
              transform: `translateX(-${rightIndex * slideWidth}px)`,
            }}
          >
            {topCarousel.map(carousel => (
              <TopCarousel
                key={carousel.id}
                carousel={carousel}
                id={carousel.id}
              />
            ))}
          </div>
        </div>
        <button className="goLeft"></button>
        <button className="goRight" onClick={this.handleRight}>
          <i className="fas fa-arrow-right"></i>
        </button>
        <ul className="pagination"></ul>
      </div>
    );
  }
}

export default MainCarousel;
