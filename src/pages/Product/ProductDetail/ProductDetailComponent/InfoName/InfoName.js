import React, { Component } from "react";
import Tags from "../../../../../components/Tags/Tags";
import "./InfoName.scss";

export default class InfoName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNew: false,
      isBest: false,
      isSale: false,
    };
  }

  componentDidMount = () => {
    this.changeTagBoolean();
  };

  changeTagBoolean = () => {
    for (let i = 0; i < this.props.infoTag.length; i++) {
      if (this.props.infoTag[i].tag_id === "new") {
        this.setState({ isNew: true });
      } else if (this.props.infoTag[i].tag_id === "best") {
        this.setState({ isBest: true });
      } else if (this.props.infoTag[i].tag_id === "sale") {
        this.setState({ isSale: true });
      }
    }
  };

  render() {
    return (
      <div className="infoName">
        <div className="infoNameText">{this.props.infoName}</div>
        <Tags
          isNew={this.state.isNew}
          isSale={this.state.isBest}
          isBest={this.state.isSale}
        />
      </div>
    );
  }
}
