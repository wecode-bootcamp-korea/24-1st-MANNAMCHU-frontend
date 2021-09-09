import React, { Component } from "react";
import ProductList from "./ProductList/ProductList";
import { PRODUCT_LIST_API } from "../../../config";
import "./ProductLists.scss";

export default class ProductLists extends Component {
  state = {
    items: {},
    filter: "",
    page: 1,
  };

  handleClick = e => {
    const clickedName = e.target.className;
    this.setState({ filter: clickedName });
  };

  handleFetch = () => {
    fetch(`${PRODUCT_LIST_API}page=&tag=${this.state.filter}`)
      .then(res => res.json())
      .then(items => this.setState({ items }));
  };

  handlePageFetch = () => {
    if (this.state.page < 3) {
      fetch(
        `${PRODUCT_LIST_API}page=${this.state.page}&tag=${this.state.filter}`
      )
        .then(res => res.json())
        .then(items => {
          const fetchData = items;
          const mergeData = this.state.items.products.concat(
            ...fetchData.products
          );
          const newObj = { products: mergeData };
          this.setState({ items: newObj });
          console.log(this.state);
        });
    }
  };

  handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  componentDidMount() {
    this.handleFetch();
    window.addEventListener("scroll", this.handleScroll);
  }

  // fetch url 완성하면 아래 로직 통해서 filter uri 호출
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.page !== prevState.page) {
      this.handlePageFetch();
    }
    if (this.state.filter !== prevState.filter) {
      this.handleFetch();
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
