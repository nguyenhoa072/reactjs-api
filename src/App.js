import React from 'react';
import { BrowserRouter } from "react-router-dom";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterURL from './compoments/Router';
import MenuTop from './compoments/Navbar/MenuTop';

window.jQuery = $;
window.$ = $;

function App() {
  return (
    <BrowserRouter>
      <MenuTop/>
      <RouterURL></RouterURL>
    </BrowserRouter>
  );
}

export default App;
