import React, { Component } from "react";
import Tags from "../../../../../components/Tags/Tags";
import "./InfoName.scss";

export default class InfoName extends Component {
  render() {
    return (
      <div className="infoName">
        <div className="infoNameText">{this.props.infoName}</div>
        <Tags
          isNew={this.props.infoTag[0].new}
          isSale={this.props.infoTag[0].sale}
          isBest={this.props.infoTag[0].best}
        />
      </div>
    );
  }
}
