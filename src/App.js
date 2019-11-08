import React from "react";
import { BrowserRouter } from "react-router-dom";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./compoments/Router";
import Navigation from "./compoments/Navigation";

window.jQuery = $;
window.$ = $;

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
