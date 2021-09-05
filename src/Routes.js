import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Nav/Navbar";
import Login from "./pages/Sign/Login/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
