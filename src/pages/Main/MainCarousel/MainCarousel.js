import React, { Component } from "react";
import CarouselContent from "./CarouselContent/CarouselContent";
import CAROUSELS from "./MainCarouselData";
import "./MainCarousel.scss";

class MainCarousel extends Component {
  state = {
    selected: 0,
  };

  componentDidMount = () => {
    setInterval(this.handleCurrentSlide, 5000);
  };

  handleCurrentSlide = () => {
    const { selected } = this.state;
    this.setState({ selected: selected === 3 ? 0 : selected + 1 });
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
      <div className="mainCarousel">
        <div className="instagram">
          <i className="fab fa-instagram" />
          <div className="quotes">Follow us on Instagram</div>
        </div>
        <div className="container">
          <div
            className="carouselWrapper"
            style={{ marginLeft: `-${selected * 1240}px` }}
          >
            {CAROUSELS.map(carousel => (
              <CarouselContent key={carousel.id} carousel={carousel} />
            ))}
          </div>
        </div>
        <button className="goLeft" onClick={this.handleLeft}>
          <i className="fas fa-chevron-left" />
        </button>
        <button className="goRight" onClick={this.handleRight}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    );
  }
}

export default MainCarousel;
