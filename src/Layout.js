import React, { Component } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import ProfilePicture from "./jmProfilePicture.jpg";

class Layout extends Component {
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
              <h6><a href="https://jm-maniego.github.io">JM Maniego</a></h6>
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
              </ul>
            </div>
          </div>
          <div className="col-md-9 blog-content">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;