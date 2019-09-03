import React from 'react';
import { BrowserRouter } from "react-router-dom";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterURL from './compoments/RouterURL';
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
