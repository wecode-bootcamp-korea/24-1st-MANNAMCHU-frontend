import React, { Component } from "react";
import ProductList from "./ProductList/ProductList";
import "./ProductLists.scss";

export default class ProductLists extends Component {
  state = {
    items: {},
    fliter: "new",
    view: 8,
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
    this.setState({ ...this.state, filter: clickedName });
  };

  componentDidMount() {
    this.handleFetch();
  }

  //  fetch url 완성하면 아래 로직 통해서 filter uri 호출
  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.state.filter !== prevState.state.filter) {
  //     this.handleFetch();
  //   }
  // };

  render() {
    const { listData } = this.state.items;
    const { filter } = this.state;
    return (
      <section className="productLists">
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
        <ul className="listWrapper">
          {listData &&
            listData.map(item => (
              <ProductList key={item.id} item={item} filter={filter} />
            ))}
        </ul>
      </section>
    );
  }
}
