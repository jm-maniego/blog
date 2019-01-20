import React, { Component } from 'react';
import Login from "./Login";
import Blog from "./Blog";
import { Route, Switch } from "react-router-dom";

import './App.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Blog} />
      </Switch>
    );
  }
}

export default App;
