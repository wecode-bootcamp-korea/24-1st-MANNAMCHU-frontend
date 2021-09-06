import React, { Component } from "react";
import "./MainLink.scss";

class MainLink extends Component {
  render() {
    const { link } = this.props;
    const contentArr = link.desc.split("\n");
    const firstContent = contentArr[0];
    const secondContent = contentArr[1];

    return (
      <li className="mainLink" style={{ backgroundColor: `${link.color}` }}>
        <a href="#">
          <p className="listTitle">{link.name}</p>
          <div className="listWrapper">
            <p className="listContent">
              {firstContent}
              <br />
              {secondContent}
            </p>
            <div className="listEmoji">👉</div>
          </div>
        </a>
      </li>
    );
  }
}

export default MainLink;
