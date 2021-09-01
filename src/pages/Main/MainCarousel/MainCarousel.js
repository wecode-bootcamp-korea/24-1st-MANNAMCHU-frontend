import React, { Component } from "react";
import TopCarousel from "./TopCarousel/TopCarousel";
import "./MainCarousel.scss";

class MainCarousel extends Component {
  state = {
    topCarousel: [],
    rightIndex: 1,
    leftIndex: 0,
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

  // 우선 단방향 carousel 완성
  handleRight = () => {
    console.log(this.state.rightIndex);
    const slideWidth = 1920;

    if (this.state.rightIndex < 3) {
      const carousels = document.querySelector(".carousels");
      carousels.style.transform = `translateX(-${
        this.state.rightIndex * slideWidth
      }px)`;
      this.setState({ ...this.state, rightIndex: this.state.rightIndex + 1 });
    } else if (this.state.rightIndex === 3) {
      this.setState({ ...this.state, rightIndex: 0 });
    }
  };

  render() {
    const { topCarousel } = this.state;
    return (
      <div className="slideWrapper">
        <div className="carouselBox">
          <div className="carousels">
            {topCarousel.map((carousel, idx) => (
              <TopCarousel key={carousel.id} carousel={carousel} id={idx} />
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
