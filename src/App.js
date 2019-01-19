import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Link, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 blog-sidebar">
            <div className="blog-sidebar__content">
              <h6>JM Maniego</h6>
              <div className="mb-5">Ruby on Rails developer</div>
              <ul className="nav justify-content-end">
                <li className="nav-item ml-3 mb-2">
                  <Link className="btn btn-outline-secondary" to="blog">Home</Link>
                </li>
                <li className="nav-item ml-3 mb-2">
                  <Link className="btn btn-outline-secondary" to="about">About</Link>
                </li>
                <li className="nav-item ml-3 mb-2">
                  <Link className="btn btn-outline-secondary" to="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 blog-content">
            <Switch>
              <Route path="/blog" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/" exact render={() => <Redirect to="/blog" />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
