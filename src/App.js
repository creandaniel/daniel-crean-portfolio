import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {IndexRoute, BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 


import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import Content from './components/layout/Content';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

//http://www.owenod.com/portfolio.html

function App() {
  return (
    <div className="wrapper">
    <Sidebar />
      <BrowserRouter>
      <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} exact />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;


