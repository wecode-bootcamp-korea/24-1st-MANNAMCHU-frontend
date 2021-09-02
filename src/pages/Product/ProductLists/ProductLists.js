import React, { Component } from "react";
import ProductList from "./ProductList/ProductList";

export default class ProductLists extends Component {
  render() {
    return (
      <>
        <ul>
          <ProductList />
        </ul>
      </>
    );
  }
}
