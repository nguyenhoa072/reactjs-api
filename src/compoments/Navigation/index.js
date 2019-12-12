import React from "react";
import { Route, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <span className="navbar-brand">React</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Menu label="Home" activeOn={true} to={ROUTES.HOME} />
          <Menu label="Products" to={ROUTES.PRODUCTS} />
        </ul>
      </div>
    </div>
  </nav>
);

const Menu = ({ label, to, activeOn }) => {
  return (
    <Route
      path={to}
      exact={activeOn}
      children={({ match }) => (
        <li className={match ? "nav-item active" : "nav-item"}>
          <Link className="nav-link" to={to}>
            {label}
          </Link>
        </li>
      )}
    />
  );
}

export default Navigation;
