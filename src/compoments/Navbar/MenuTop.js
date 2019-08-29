import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

export default class MenuTop extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <MenuC label="Home" activeOn={true} to="/" />
              <MenuC label="Upload Image" to="/upload-image" />
              <MenuC label="Products" to="/products" />
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

function MenuC({ label, to, activeOn }) {
  return (
    <Route
      path={to}
      exact={activeOn}
      children={({ match }) => (
        <li className={match ? "nav-item active" : "nav-item"}>
          <Link className="nav-link" to={to}>{label}</Link>
        </li>
      )}
    />
  );
}
