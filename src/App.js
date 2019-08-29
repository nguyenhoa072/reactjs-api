import React from 'react';
import { BrowserRouter, HashRouter  } from "react-router-dom";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterURL from './compoments/RouterURL';
import MenuTop from './compoments/Navbar/MenuTop';

window.jQuery = $;
window.$ = $;

function App() {
  return (
    <HashRouter>
      <MenuTop/>
      <RouterURL></RouterURL>
    </HashRouter>
  );
}

export default App;
