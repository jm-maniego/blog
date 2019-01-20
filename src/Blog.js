import React, { Component } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProfilePicture from "./jmProfilePicture.jpg";

class Blog extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 blog-sidebar">
            <div className="blog-sidebar__content">
              <img
                className="profile-picture mb-2"
                src={ProfilePicture}
                alt="profile-picture"
              />
              <h6>JM Maniego</h6>
              <div className="mb-5">Ruby on Rails developer</div>
              <ul className="nav justify-content-end">
                <li className="nav-item ml-3 mb-2">
                  <NavLink exact className="btn btn-outline-secondary" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item ml-3 mb-2">
                  <NavLink className="btn btn-outline-secondary" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item ml-3 mb-2">
                  <NavLink
                    className="btn btn-outline-secondary"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 blog-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
