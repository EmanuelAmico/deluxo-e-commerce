import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../components/NotFound";
import LogIn from '../components/LogIn'
import "../assets/styles/App.scss"
import Carousel from "../components/Carousel";
import Card from "../components/Card";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component= {NotFound} />
          <Route exact path='/login' component= {LogIn} />
          <Route exact path='/products' component= {Carousel} />
          <Route path='/products/:id' render={ ({match}) => <Card  match={match} /> } />
        </Switch>
    </BrowserRouter>
  )
};

export default App;
