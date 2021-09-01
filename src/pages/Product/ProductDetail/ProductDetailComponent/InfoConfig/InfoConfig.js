import React, { Component } from "react";
import InfoConfigChoiceOpt from "../InfoConfigChoiceOpt";
import "./InfoConfig.scss";

export default class InfoConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOpt: "disappear",
    };
    this.optionViewer = this.optionViewer.bind(this);
  }

  optionViewer = () => {
    if (this.state.activeOpt === "disappear") {
      this.setState({ activeOpt: "infoConfigChoiceOpt" });
    } else {
      this.setState({ activeOpt: "disappear" });
    }
  };

  render() {
    return (
      <div className="infoConfig">
        <div className="infoConfigText">상품 구성 선택 *</div>
        <div className="infoConfigChoice">
          <button className="infoConfigChoiceBtn" onClick={this.optionViewer}>
            <span>상품 구성 선택 (필수)</span>
            <span>펼치기</span>
          </button>
          <div className={this.state.activeOpt}>
            {this.props.optLists &&
              this.props.optLists.map(optList => {
                return <InfoConfigChoiceOpt optList={optList} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}
