import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/Product/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Sign/Signup/Signup";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
