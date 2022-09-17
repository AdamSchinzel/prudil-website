import React, { Fragment, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import PracticePage from "../Pages/PracticePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <ToastContainer autoClose={2500} position="top-center" />
          <Switch>
            <Route exact path="/" component={HomePageOne} />
            <Route exact path="/test" component={HomePageOne} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
