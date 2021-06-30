import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../components/NotFound";
import LogIn from '../components/LogIn'
import "../assets/styles/App.scss"

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NotFound} />
          <Route exact path='/login' component={LogIn} />
        </Switch>
    </BrowserRouter>
  )
};

export default App;
