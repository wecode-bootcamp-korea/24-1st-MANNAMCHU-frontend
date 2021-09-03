import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Signup from "./pages/Sign/Signup/Signup";
import Footer from "./components/Footer/Footer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
