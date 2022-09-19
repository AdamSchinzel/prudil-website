import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import Services from "../Pages/ServicesPage";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/zamereni" component={Services} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
