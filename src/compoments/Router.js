import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../compoments/Home/Home";
import Error404 from "../compoments/Pages/404";
import ProductList from "../compoments/Products/ProductList";
import addProduct from "../compoments/Products/ProductForm";
import ProductView from "../compoments/Products/ProductView";

class Router extends Component {
  render() {
    return (
      <div className="container py-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/add" component={addProduct} />
          <Route path="/product/:id/edit" component={addProduct} />
          <Route path="/product/:slug.:id.html" component={ProductView} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default Router;
