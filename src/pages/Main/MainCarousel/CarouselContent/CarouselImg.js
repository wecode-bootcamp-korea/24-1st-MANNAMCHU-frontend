import React, { Component } from "react";

export default class CarouselImg extends Component {
  render() {
    const { src } = this.props;
    return <image src={src} alt="instagram_image" />;
  }
}
