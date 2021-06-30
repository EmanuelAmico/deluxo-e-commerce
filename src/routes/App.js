import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
=======
import NotFound from "../components/NotFound";
import LogIn from '../components/LogIn'
import "../assets/styles/App.scss"
import Carousel from "../components/Carousel";
import Card from "../components/Card";
>>>>>>> pre-merge

import "../assets/styles/App.scss"
import NotFound from "../components/NotFound";
import Header from "../components/Header";
import Register from "../components/Register"
import LogIn from "../components/LogIn"
import Layout from "../components/Layout";
const App = () => {
  return (
    <BrowserRouter>
        
        <Layout>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={NotFound} />  
          <Route exact path ="/login" component={LogIn} />
          <Route exact path ="/register" component={Register} />
=======
          <Route exact path="/" component= {NotFound} />
          <Route exact path='/login' component= {LogIn} />
          <Route exact path='/products' component= {Carousel} />
          <Route path='/products/:id' render={ ({match}) => <Card  match={match} /> } />
>>>>>>> pre-merge
        </Switch>
        </Layout>
    </BrowserRouter>
  )
};

export default App;
