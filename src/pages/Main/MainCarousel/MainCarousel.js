import React, { Component } from "react";
import TopCarousel from "./TopCarousel/TopCarousel";
import "./MainCarousel.scss";

class MainCarousel extends Component {
  state = {
    topCarousel: [
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
    startNum: 0,
    currIndex: 0,
  };

  //! 무한 carousel 시도 중
  handleAdd = () => {
    const currIndex = this.state.currIndex % 3;
    const newCarousel = this.state.topCarousel[currIndex];
    const topCarousel = [...this.state.topCarousel, newCarousel];

    this.setState({ topCarousel, currIndex: currIndex + 1 });
  };

  moveCarousel = () => {
    const { currIndex } = this.state;
    const slideWidth = window.innerWidth; //찍어보기
    const carouselBox = document.querySelector(".carouselBox");
    const carousels = document.querySelector(".carousels");
    carouselBox.style.width = `${300 + currIndex * 100}vw`;
    carousels.style.transform = `translateX(-${currIndex * slideWidth}px)`;
  };

  //! 우선 단방향 carousel 완성
  handleRight = () => {
    // Add copied Slides
    this.handleAdd();

    // stlyling
    this.moveCarousel();

    //! 양방향 시도 흔적
    // handleLeft = () => {
    //   const { currIndex } = this.state;
    //   const slideWidth = window.innerWidth; //찍어보기
    //   const carousels = document.querySelector(".carousels");

    //   if (currIndex > -3) {
    //     carousels.style.transform = `translateX(${2 * slideWidth}px)`;
    //     this.setState({ currIndex: this.state.currIndex + 1 });
    //   } else if (this.state.currIndex === -3) {
    //     carousels.style.transform = `translateX(0px)`;
    //     this.setState({ currIndex: 0 });
    //   }
    // };
  };

  render() {
    const { topCarousel } = this.state;
    return (
      <div className="slideWrapper">
        <div className="carouselBox">
          <div className="carousels">
            {topCarousel.map((carousel, idx) => (
              <TopCarousel key={idx} carousel={carousel} id={carousel.id} />
            ))}
          </div>
        </div>
        <button className="goLeft" onClick={this.handleLeft}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="goRight" onClick={this.handleRight}>
          <i className="fas fa-arrow-right" />
        </button>
        <ul className="pagination"></ul>
      </div>
    );
  }
}

export default MainCarousel;
