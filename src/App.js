import React, { Component } from 'react';
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import { Route, Switch } from "react-router-dom";

import './App.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />

        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
