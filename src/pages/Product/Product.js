import React, { Component } from "react";
import ListHeader from "./ListHeader/ListHeader";
import "./Product.scss";
import ProductLists from "./ProductLists/ProductLists";

export default class Product extends Component {
  render() {
    return (
      <section>
        <ListHeader />
        <ProductLists />
      </section>
    );
  }
}
