import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {IndexRoute,  BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 


import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';

import Content from './components/layout/Content';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

//http://www.owenod.com/portfolio.html

function App() {


  return (
    <div className="wrapper container">
    
      <Router>
      <Sidebar />
      <Switch>
            <Route path="/" component={Home} exact  />
            <Route path="/about" component={About} exact  />
            <Route path="/skills" component={Skills} exact   />
            <Route path="/portfolio" component={Portfolio} exact  />
            <Route path="/contact" component={Contact} exact  />
            <Route path="/portfolio/:id" component={PortfolioItem} />   
            <Route path="*" component={NotFoundPage} />
            </Switch>
    </Router>
    





    </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = "test";

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;


