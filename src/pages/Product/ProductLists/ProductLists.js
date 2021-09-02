import React, { Component } from "react";
import ProductList from "./ProductList/ProductList";

export default class ProductLists extends Component {
  state = {};

  componentDidMount() {
    fetch("/data/listData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => this.setState(data));
  }

  render() {
    console.log(this.state);
    const { discountRatio, listData } = this.state;
    return (
      <>
        <ul>
          {listData &&
            listData.map(item => (
              <ProductList
                key={item.id}
                item={item}
                discountRatio={discountRatio}
              />
            ))}
        </ul>
      </>
    );
  }
}
