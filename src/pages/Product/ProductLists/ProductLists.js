import React, { Component } from "react";
import ProductList from "./ProductList/ProductList";
import "./ProductLists.scss";

export default class ProductLists extends Component {
  state = {
    items: {},
    fliter: "",
  };

  handleFetch = () => {
    fetch("/data/listData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(items => this.setState({ items }));
  };

  handleClick = e => {
    const clickedName = e.target.className;
    const filter = { filter: clickedName };
    this.setState({ ...this.state, filter });
  };

  componentDidMount() {
    this.handleFetch();
  }

  render() {
    const { discountRatio, listData } = this.state.items;
    const { filter } = this.state;
    return (
      <>
        <div className="filterWrapper">
          <ul className="filters">
            <li className={`filter ${filter === "new" ? "active" : ""}`}>
              <button className="new" onClick={this.handleClick}>
                ▼ 신상품 순
              </button>
            </li>
            <li className={`filter ${filter === "hot" ? "active" : ""}`}>
              <button className="hot" onClick={this.handleClick}>
                ▼ 인기 상품 순
              </button>
            </li>
            <li className={`filter ${filter === "sale" ? "active" : ""}`}>
              <button className="sale" onClick={this.handleClick}>
                ▼ 할인 제품
              </button>
            </li>
          </ul>
        </div>
        <ul>
          {listData &&
            listData.map(item => (
              <ProductList
                key={item.id}
                item={item}
                discountRatio={discountRatio}
                filter={filter}
              />
            ))}
        </ul>
      </>
    );
  }
}
