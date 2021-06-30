import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import NotFound from "../components/NotFound";
import Header from "../components/Header";
import Register from "../components/Register";
import LogIn from "../components/LogIn";
import Layout from "../components/Layout";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={NotFound} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/products" component={Carousel} />
          <Route
            path="/products/:id"
            render={({ match }) => <Card match={match} />}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
