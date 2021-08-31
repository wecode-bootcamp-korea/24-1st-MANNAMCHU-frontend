import React, { Component } from "react";
import "./ScrollPage.scss";

export default class ScrollPage extends Component {
  //전체 페이지의 scroll이 움직이면 그거에 반비례해서 scrollBg의 translateY값이 바뀌도록 한다

  render() {
    return (
      <div className="scrollWrapper">
        <div className="scrollBg"></div>
      </div>
    );
  }
}
