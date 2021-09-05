import React, { Component } from "react";
import CarouselContent from "./CarouselContent/CarouselContent";
import "./MainCarousel.scss";

class MainCarousel extends Component {
  state = {
    carousels: [
      {
        id: 1,
        name: "firstCarousel",
        image: [
          { id: 1, url: "/sources/images/instagram/apples.jpg" },
          { id: 2, url: "/sources/images/instagram/book.jpg" },
          { id: 3, url: "/sources/images/instagram/boxes.jpg" },
          { id: 4, url: "/sources/images/instagram/car.jpg" },
        ],
      },
      {
        id: 2,
        name: "secondCarousel",
        image: [
          { id: 1, url: "/sources/images/instagram/drinks.jpg" },
          { id: 2, url: "/sources/images/instagram/gifts.jpg" },
          { id: 3, url: "/sources/images/instagram/haircut.jpg" },
          { id: 4, url: "/sources/images/instagram/heart.jpg" },
        ],
      },
      {
        id: 3,
        name: "thirdCarousel",
        image: [
          { id: 1, url: "/sources/images/instagram/giftsagain.jpg" },
          { id: 2, url: "/sources/images/instagram/news.jpg" },
          { id: 3, url: "/sources/images/instagram/ottuki.jpg" },
          { id: 4, url: "/sources/images/instagram/peach.jpg" },
        ],
      },
      {
        id: 4,
        name: "forthCarousel",
        image: [
          { id: 1, url: "/sources/images/instagram/peachdisplay.jpg" },
          { id: 2, url: "/sources/images/instagram/peachmodel.jpg" },
          { id: 3, url: "/sources/images/instagram/play.jpg" },
          { id: 4, url: "/sources/images/instagram/pork.jpg" },
        ],
      },
      {
        id: 5,
        name: "thirdCarousel",
        image: [
          { id: 1, url: "/sources/images/instagram/pot.jpg" },
          { id: 2, url: "/sources/images/instagram/potato.jpg" },
          { id: 3, url: "/sources/images/instagram/pumpkins.jpg" },
          { id: 4, url: "/sources/images/instagram/redapple.jpg" },
        ],
      },
    ],
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
    const { carousels, selected } = this.state;
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
            {carousels.map(carousel => (
              <CarouselContent key={carousel.id} carousel={carousel} />
            ))}
          </div>
        </div>
        <ul className="pagination"></ul>
      </div>
    );
  }
}

export default MainCarousel;
