import React, { Component } from "react";
import "./InfoOrder.scss";

export default class InfoOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
    };
  }
  wishHandleClick = () => {
    this.state.isLike === false
      ? this.setState({ isLike: true })
      : this.setState({ isLike: false });
  };

  render() {
    return (
      <div className="infoOrder">
        <button className="infoOrderBuy">구매하기</button>
        <button className="infoOrderCart" onClick={this.props.postCart}>
          장바구니
        </button>
        <button className="infoOrderLike" onClick={this.wishHandleClick}>
          <i
            className={
              this.state.isLike
                ? "fas fa-heart infoOrderLikeOn"
                : "far fa-heart"
            }
          />{" "}
          {this.state.isLike ? this.props.likeCount + 1 : this.props.likeCount}
        </button>
      </div>
    );
  }
}
