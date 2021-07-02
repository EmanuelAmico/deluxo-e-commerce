import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Carousel from "../components/Carousel";
import NotFound from "../components/NotFound";
import Header from "../components/Header";
import Register from "../components/Register";
import LogIn from "../components/LogIn";
import Layout from "../components/Layout";
import SingleCard from "../components/SingleCard";
import "../assets/styles/App.scss";
import Card from "../components/Card";
import ShoppingCart from "../components/ShopingCart"



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/products" component={Carousel} />
          <Route
            path="/products/:productId"
            component={SingleCard}
          />
          <Route exact path="/cart" component={ShoppingCart} />
          <Redirect to={"/products"} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
