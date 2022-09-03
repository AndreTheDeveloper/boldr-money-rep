import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <li>
              <span className="navBarTitle">
                <NavLink className="navLink" to="">
                  Bolder
                </NavLink>
              </span>
            </li>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navBarItems">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <li>
                      <NavLink className="navLink" to="/OurStory">
                        Our Story
                      </NavLink>
                    </li>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <li>
                      <NavLink className="navLink" to="/HowItWorks">
                        How It Works
                      </NavLink>
                    </li>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <li>
                      <NavLink className="navLink" to="/#NoFilter">
                        #NoFilter
                      </NavLink>
                    </li>
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
