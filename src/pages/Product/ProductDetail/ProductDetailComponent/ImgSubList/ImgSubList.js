import React, { Component } from "react";
import "./ImgSubList.scss";

export default class ImgSubList extends Component {
  render() {
    return (
      <li className="imgSubList">
        <img
          alt="기타이미지"
          src={this.props.imgUrl}
          className="imgSubListImg"
        />
      </li>
    );
  }
}
