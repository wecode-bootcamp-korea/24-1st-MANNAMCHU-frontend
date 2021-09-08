import React, { Component } from "react";
import "./ImgList.scss";

export default class ImgMainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
  }

  componentDidMount = () => {
    setInterval(this.handleCurrentSlide, 5000);
  };

  handleCurrentSlide = () => {
    const { selected } = this.state;
    this.setState({
      selected: selected === this.props.image.length ? 1 : selected + 1,
    });
  };

  render() {
    return (
      <>
        {this.props.image.map(
          img =>
            this.state.selected === img.id && (
              <img
                key={img.id}
                alt="상품이미지"
                src={img.url}
                className="imgMain"
              />
            )
        )}
        <ul className="imgSub">
          {this.props.image.map(img => (
            <li className="imgSubList">
              <img
                alt="상품이미지"
                src={img.url}
                className="imgSubListImg"
                onMouseOver={() => this.setState({ selected: img.id })}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

// render() {
//   return (
//     <>
//       {this.props.image.map(
//         img =>
//           this.state.selected === img.id && (
//             <img key={img.id} src={img.url} className="imgMain" />
//           )
//       )}
//     </>
//   );
// }
// }
