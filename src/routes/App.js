import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../components/NotFound";
import "../assets/styles/App.scss"

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NotFound} />
        </Switch>
    </BrowserRouter>
  )
};

export default App;
