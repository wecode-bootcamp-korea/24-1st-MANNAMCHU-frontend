import React, { Component } from "react";
import ListHeader from "./ListHeader/ListHeader";
import ProductLists from "./ProductLists/ProductLists";
import "./Product.scss";

export default class Product extends Component {
  render() {
    return (
      <section className="productSection">
        <ListHeader />
        <ProductLists />
      </section>
    );
  }
}
