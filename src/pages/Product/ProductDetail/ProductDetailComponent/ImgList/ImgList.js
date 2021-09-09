import React, { Component } from "react";
import "./ImgList.scss";

export default class ImgList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  componentDidMount = () => {
    setInterval(this.handleCurrentSlide, 5000);
  };

  handleCurrentSlide = () => {
    const { selected } = this.state;
    this.setState({
      selected: selected === this.props.image.length - 1 ? 0 : selected + 1,
    });
  };

  render() {
    return (
      <>
        {this.props.image.map(
          (img, idx) =>
            this.state.selected === idx && (
              <img
                key={idx}
                alt="상품이미지"
                src={img.url}
                className="imgMain"
              />
            )
        )}
        <ul className="imgSub">
          {this.props.image.map((img, idx) => (
            <li key={idx} className="imgSubList">
              <img
                alt="상품이미지"
                src={img.url}
                className="imgSubListImg"
                onMouseOver={() => this.setState({ selected: idx })}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
