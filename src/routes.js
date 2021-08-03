import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {IndexRoute, BrowserRouter,Router, Route, Switch} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';



export default (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            </Switch>
    </BrowserRouter>
      {/* <Footer data={this.state.resumeData.main}/> */}
      </header>
    </div>
  );


