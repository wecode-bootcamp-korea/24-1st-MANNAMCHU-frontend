import React, { Component } from "react";
import ProductList from "./ProductList/ProductList";
import "./ProductLists.scss";

export default class ProductLists extends Component {
  state = {
    items: {},
    filter: "",
    view: 8,
  };

  handleClick = e => {
    const clickedName = e.target.className;
    this.setState({ filter: clickedName });
  };

  componentDidMount() {
    fetch("/data/listData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(items => this.setState({ items }));
  }

  // fetch url 완성하면 아래 로직 통해서 filter uri 호출
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.filter !== prevState.filter) {
      fetch(
        `http://10.58.4.175:8000/products/list?page=1&tag=${this.state.filter}`
      )
        .then(res => res.json())
        .then(items => this.setState({ items }));
    }
  };

  render() {
    const { products } = this.state.items;
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
            <li className={`filter ${filter === "best" ? "active" : ""}`}>
              <button className="best" onClick={this.handleClick}>
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
          {products &&
            products.map((product, idx) => (
              <ProductList key={idx} product={product} filter={filter} />
            ))}
        </ul>
      </section>
    );
  }
}
