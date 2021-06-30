import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
          <Route exact path="/" component={NotFound} />  
          <Route exact path ="/login" component={LogIn} />
          <Route exact path ="/register" component={Register} />
        </Switch>
        </Layout>
    </BrowserRouter>
  )
};

export default App;
